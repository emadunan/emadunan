#!/bin/bash
set -e

echo "🚀 Starting Portfolio Deployment..."

# Define paths
DIST_DIR="/home/emad/projects/emadunan/apps/admin/dist"
TARGET_DIR="/var/www/emadunan.com"

# Ensure dist directory exists
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ Build directory does not exist: $DIST_DIR"
  exit 1
fi

# Deploy static site to web root
echo "📦 Copying files to $TARGET_DIR..."
sudo rm -rf "${TARGET_DIR:?}/"*
sudo cp -ru "$DIST_DIR/"* "$TARGET_DIR/"

# Set proper permissions
echo "🔐 Setting ownership and permissions..."
sudo chown -R www-data:www-data "$TARGET_DIR"
sudo chmod -R 755 "$TARGET_DIR"

# Test and restart NGINX
echo "🔄 Restarting NGINX..."
sudo nginx -t && sudo systemctl restart nginx.service

echo "✅ Portfolio Deployment Completed Successfully!"