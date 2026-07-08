#!/bin/bash
set -e

# Ensure Node.js tools are in the PATH
export PATH=$HOME/.nvm/versions/node/v22.21.1/bin:$PATH

pm2 delete emadunan-work || true

cd "$(dirname "$0")/../../.."
pnpm --filter website clean
pnpm install
pnpm --filter website build

pm2 start apps/website/ecosystem.config.js