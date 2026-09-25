# Evidence and known risks

## Verification scope

Presentation candidate verified on **2026-09-25**, based on `main` at `87e450bf11021af43de7ee63d9737b33c9633ced`. This was a copy/documentation refresh, not a feature repair or deployment.

| Check | Result |
| --- | --- |
| `node --test scripts/test-presentation.mjs` | RED: 5 expected failures before copy changes; GREEN: 5 passing source-copy tests afterward |
| `npm ci --ignore-scripts --no-audit --no-fund` | Pass with unchanged package manifest and lockfile |
| `npm run build` | Pass; 2,285 modules; existing large-chunk and outdated Browserslist warnings remain |
| `npm run lint` | **Fail:** 4 errors and 1 warning, same findings as baseline |
| `./node_modules/.bin/tsc --noEmit -p tsconfig.app.json` | **Fail:** 2 TS6133 unused-import errors, same as baseline |
| `./node_modules/.bin/tsc --noEmit -p tsconfig.node.json` | Pass |
| Signed-out production-artifact browser | Desktop 1440×1000 and mobile 390×844 render; full title and warning visible; no horizontal overflow or JS page exceptions |
| Source diagram | Rendered and visually inspected; text fits within the SVG viewBox |

Build/lint/type checks ran in an isolated Node 22.23.3 / npm 10.9.9 container with 2 CPUs and 3 GB memory. Locked Vite 5.4.8 and TypeScript 5.6.3 were retained. The build command is `vite build`, not a TypeScript check.

The browser used fresh, signed-out Edge 153.0.4234.48 contexts and the actual candidate build on loopback. HTML, JavaScript and CSS responses matched the local artifact bytes. Keyboard traversal reached the form inputs, checkbox, reset placeholder and demo button without activation. The mobile context requested reduced motion; this is not an audit of animated protected views. The existing missing favicon caused a resource 404. Screenshots masked only the unchanged credential-hint paragraph; they were inspected as verification evidence, not published as dashboard-operation proof.

**No login, localStorage injection, call, message, account, microphone/camera permission or provider operation was attempted.** Protected-page labels are source-checked only. No behavioral test suite, package test script or CI workflow exists; this refresh adds only the dependency-free presentation-copy check.

## Accepted existing failures

- Lint: unused `_` in AuthContext, `X` in Analytics, `err` in Login and `Users` in UserManagement; the mixed component/hook export warning in AuthContext remains.
- App typecheck: unused `X` and `Users` imports. These failures were not suppressed or repaired.
- Public hosting inspection on 2026-09-24: root `/` rendered and client-routed to `/login`, but direct `/login`, `/dashboard`, `/analytics` and `/vite.svg` requests returned 404. Local preview behavior does not repair or validate Vercel route fallback.
- The inspected public HTML/JS/CSS were byte-identical to the pinned base build. That establishes only observed static asset equivalence. The candidate presentation was verified locally; no claim is made that it is deployed.
- Prior lockfile audit on 2026-09-24 reported 24 affected package entries (16 high, 5 moderate, 3 low), spanning 60 distinct advisory URLs. This is a dated dependency finding, not a fresh audit or proof of reachable exploitation. Dependencies were not upgraded.

## Product and privacy boundaries

No telephony, AI/provider backend, workflow runner or persistent business-data service exists. Mock provider badges are not connection evidence. Settings and retention text do not provide recording, transcription, storage, backup, deletion or privacy-policy enforcement. The browser-stored mock user object is not a trusted session.

The illustrative permission table disagrees with some route restrictions and includes a Manager role absent from demo authentication. Some expanders use clickable divs; some icon actions lack accessible labels. Protected-view mobile behavior and full accessibility compliance were not verified.

Google Fonts requests and external avatar URLs are part of the existing frontend; frontend-only does not imply zero third-party traffic. Never enter real credentials or customer data.

## Publication boundary

The approved future GitHub slug is `call-center-dashboard`; the coordinator must verify its canonical URL, repository identity and rendered README links after renaming. The legacy package name and `https://ai-call-center-tau.vercel.app/` homepage remain unchanged. No hosting configuration, dependency, license or security boundary was changed.
