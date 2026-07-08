#!/bin/bash
set -euo pipefail

echo "🚀 Starting Deployment..."

# =========================
# Environment setup
# =========================

export PATH="$HOME/.nvm/versions/node/v22.21.1/bin:$PATH"

PROJECT_DIR="$(cd "$(dirname "$0")/../../.." && pwd)"
cd "$PROJECT_DIR" || {
  echo "❌ Failed to enter project directory"
  exit 1
}

echo "📁 Project: $PROJECT_DIR"

# =========================
# PM2 cleanup
# =========================

echo "🧹 Cleaning PM2 process..."
pm2 delete website || true

# =========================
# Build steps
# =========================

echo "📦 Cleaning project..."
pnpm --filter website clean

echo "📥 Installing dependencies..."
pnpm install

echo "🏗️ Building project..."
pnpm --filter website build

# =========================
# Start application
# =========================

echo "🚀 Starting app via PM2..."
pm2 start apps/website/ecosystem.config.js --only website

sleep 3

# =========================
# Verify process started
# =========================

echo "📊 PM2 status:"
pm2 list

# =========================
# CRITICAL FIX: persist state
# =========================

echo "💾 Saving PM2 state..."
pm2 save

# =========================
# Ensure startup script exists (safe to re-run)
# =========================

pm2 startup systemd || true

echo "✅ Deployment completed successfully"