# Emadunan

Personal website, React UI components, and shared TypeScript packages in one pnpm/Turborepo monorepo.

## Apps

- `apps/website`: public website for emadunan.com.
- `apps/playground`: local playground for testing React UI components.

## Packages

- `@emadunan/react-ui`: reusable React component library.
- `@emadunan/auth-core`: shared auth helpers.
- `@emadunan/shared-utils`: shared utility functions.
- `@emadunan/web-utils`: browser/web utilities.
- `@emadunan/eslint-config`: shared ESLint configs.
- `@emadunan/typescript-config`: shared TypeScript configs.

## Commands

```bash
pnpm install
pnpm build
pnpm dev
pnpm check-types
pnpm lint
```

Run a specific workspace with a filter:

```bash
pnpm --filter website dev
pnpm --filter @emadunan/react-ui build
pnpm --filter playground dev
```
