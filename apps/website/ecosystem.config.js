const path = require("path");

const rootDir = path.resolve(__dirname, "../..");

module.exports = {
  apps: [
    {
      name: "website",
      cwd: rootDir,
      script: "sh",
      args: "-c 'pnpm --filter website start'",
      env: {
        NODE_ENV: "production",
        PORT: 3030,
      },
    },
    {
      name: "emadunan-work",
      cwd: rootDir,
      script: "sh",
      args: "-c 'pnpm --filter website start'",
      env: {
        NODE_ENV: "production",
        PORT: 3033,
      },
    },
  ],
};
