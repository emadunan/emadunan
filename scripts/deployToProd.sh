#!/bin/bash
set -euo pipefail

echo "🚀 Starting Portfolio Deployment..."

# Load user profile
source ~/.bashrc || source ~/.profile

# Ensure Node.js tools are in the PATH
export PATH=$HOME/.nvm/versions/node/v22.14.0/bin:$PATH

# Configuration
PROJECT_ROOT="/home/emad/projects/emadunan"
DIST_DIR="$PROJECT_ROOT/dist"
TARGET_DIR="/var/www/emadunan.com"

# Step 1: Navigate to project root
echo "📁 Moving to project directory..."
cd "$PROJECT_ROOT" || { echo "❌ Project directory not found"; exit 1; }

# Step 2: Clean previous build (optional if vite handles it internally)
# echo "🧹 Cleaning old build..."
# rm -rf "$DIST_DIR"

# Step 3: Build the app
echo "🛠️ Building portfolio with Vite..."
npm ci
npm run build

# Step 4: Verify dist exists
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ Build failed: directory '$DIST_DIR' not found"
  exit 1
fi

# Step 5: Deploy to server root
echo "📦 Deploying to $TARGET_DIR..."
sudo rm -rf "${TARGET_DIR:?}/"*
sudo cp -r "$DIST_DIR/"* "$TARGET_DIR/"

# Step 6: Fix permissions
echo "🔐 Setting permissions for $TARGET_DIR..."
sudo chown -R www-data:www-data "$TARGET_DIR"
sudo chmod -R 755 "$TARGET_DIR"

# Step 7: Reload NGINX
echo "🔄 Reloading NGINX..."
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Portfolio Deployment Completed Successfully!"
