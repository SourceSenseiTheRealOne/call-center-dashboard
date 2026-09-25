# Source architecture

This is a frontend experiment. The [diagram](architecture.svg) describes inspected source, not a verified authenticated session or a deployed service topology.

## Composition

- [`index.html`](../index.html) loads [`src/main.tsx`](../src/main.tsx), which mounts React, BrowserRouter and AuthProvider.
- [`App.tsx`](../src/App.tsx) defines the signed-out page and client-guarded routes inside [`DashboardLayout`](../src/components/layouts/DashboardLayout.tsx). The layout shares navigation, user-menu state and the simulation notice.
- [`Dashboard`](../src/pages/Dashboard.tsx) composes StatsCard, ActivityChart, RecentCallsTable and QuickActions. [`Analytics`](../src/pages/Analytics.tsx) uses Recharts with fixed datasets; changing the time selector does not load operational metrics.
- [`PhoneList`](../src/pages/PhoneList.tsx), [`Messages`](../src/pages/Messages.tsx), [`Workflows`](../src/pages/Workflows.tsx) and [`UserManagement`](../src/pages/UserManagement.tsx) filter module-level sample arrays. Messages and workflows expose expandable details.
- [`Settings`](../src/pages/Settings.tsx) keeps editable fields in component state. Provider cards, API-key display, storage usage and retention copy are mockups; Save Changes has no persistence handler.

## Boundaries

| Boundary | Actual authority |
| --- | --- |
| Demo identity | Public browser-side comparisons and a localStorage user object; no server session or protected data service |
| Roles | Client-side navigation/route checks only; not authorization for real resources |
| Business data | Inline sample arrays and transient component state; no database |
| Calls and AI | No telephony, provider SDK, LLM backend or workflow runner |
| Privacy controls | No recording, transcription, retention, backup, consent or erasure implementation |
| Network resources | Google Fonts and external avatar URLs exist; frontend-only does not mean network-free |

The permissions table is illustrative and does not match all route restrictions; its Manager role is not a supported demo-auth role. The UI's action buttons do not establish backend capabilities.

## Presentation boundary

The refresh changes documentation and visible copy only. Routes, handlers, role comparisons, mock credentials, sample values, storage keys, providers, package metadata and styles are unchanged. Existing names in package metadata are legacy technical identifiers, not claims of an operational AI service.
