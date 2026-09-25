# Local development

Use a disposable browser profile and sample data only. Do not supply provider keys, real credentials or contact lists. There is no backend to configure.

## Install and run

Node.js 22 and npm are the verified toolchain family. Install from the committed lockfile without lifecycle scripts:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run dev -- --host 127.0.0.1
```

Open the loopback URL Vite prints. For a production build preview, use a free loopback port:

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4367 --strictPort
```

Stop the preview when finished. Vite's local SPA fallback is not proof that the existing public host supports direct route requests.

## Checks

```sh
node --test scripts/test-presentation.mjs
npm run build
npm run lint
npx --no-install tsc --noEmit -p tsconfig.app.json
npx --no-install tsc --noEmit -p tsconfig.node.json
```

The first command uses only Node built-ins and checks targeted source copy, tolerating a leading UTF-8 BOM only. It does not execute login, routes, provider integrations or business workflows. There is no package test script, behavioral suite or CI workflow.

Build succeeds independently of TypeScript checking. Existing lint and app-typecheck failures are documented in [evidence](evidence.md); they are not installation failures and were not repaired in this presentation-only scope.

## Identity and local state

The package is still named `ai-call-center-dashboard`. Renaming the GitHub repository does not migrate storage or rename the Vercel project. Demo identity is stored in localStorage; editable business data and settings are not durably saved. A fresh browser context starts signed out and is sufficient to inspect the disclaimer without authentication.
