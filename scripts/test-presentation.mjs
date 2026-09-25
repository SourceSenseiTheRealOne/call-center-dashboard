import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Source-copy contracts only: these do not prove authentication or integrations.
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8').replace(/^\uFEFF/, '');
const has = (source, copy, label) => assert.ok(source.includes(copy), label);
const lacks = (source, copy, label) => assert.ok(!source.includes(copy), label);

test('signed-out identity and warning identify a frontend prototype', () => {
  const title = 'Call Center Dashboard — Frontend Prototype';
  has(read('index.html'), `<title>${title}</title>`, 'browser title identifies prototype');
  const login = read('src/pages/Login.tsx');
  assert.equal(login.split(title).length - 1, 2, 'desktop and mobile headings identify prototype');
  has(login, 'Simulated dashboard. No real calls, AI backend or secure accounts. Do not enter real credentials or contacts.', 'warning is beside the signed-out form');
  lacks(login, 'AI-powered calling', 'no operational AI marketing claim');
  lacks(login, 'Automate routine calls', 'no call automation claim');
});

test('shared shell and sample views disclose their limits', () => {
  has(read('src/components/layouts/DashboardLayout.tsx'), 'Frontend prototype: all metrics, contacts and statuses are simulated. Demo roles are client-side only; no real calls or business-data persistence.', 'shared visible simulation notice');
  const copies = [
    ['Dashboard', 'Sample call activity'],
    ['Analytics', 'Simulated analytics; sample metrics, not operational results.'],
    ['PhoneList', 'Sample directory; no calling, import or contact persistence.'],
    ['Messages', 'Sample scripts; no message delivery or template persistence.'],
    ['Workflows', 'Sample workflows and statuses; no execution or scheduling.'],
    ['UserManagement', 'Sample users and illustrative permissions; not server-enforced access.'],
  ];
  for (const [page, copy] of copies) has(read(`src/pages/${page}.tsx`), copy, `${page} explains simulation`);
  has(read('src/pages/UserManagement.tsx'), 'Illustrative permissions (not enforced)', 'permissions table qualified at point of claim');
  has(read('src/pages/Messages.tsx'), 'Placeholders are illustrative; automatic substitution is not implemented:', 'no unimplemented substitution promise');
});

test('provider badges and API controls do not claim connectivity', () => {
  const settings = read('src/pages/Settings.tsx');
  const integrations = settings.split("case 'integrations':")[1].split("case 'data':")[0];
  assert.equal(integrations.split('Simulated — not connected').length - 1, 2, 'both hardcoded connection badges are qualified');
  lacks(integrations, '>Connected<', 'no live connected badges');
  has(integrations, 'Provider cards are mockups; no services are connected and no API keys are generated.', 'integration boundary explained');
  lacks(integrations, '>Production Key<', 'no production credential claim');
});

test('recording, transcription and retention claims are explicitly unimplemented', () => {
  const settings = read('src/pages/Settings.tsx');
  has(settings, 'Simulated toggle; speech recognition is not implemented', 'speech toggle disclaimer');
  has(settings, 'Simulated toggle; no recordings or transcripts are created', 'transcription toggle disclaimer');
  has(settings, 'The 90-day retention setting is illustrative only. Recording, transcription, storage and retention enforcement are not implemented.', 'retention notice explains missing enforcement');
  has(settings, 'Sample usage: 350 MB used of 1 GB', 'unchanged storage value is labeled sample');
  lacks(settings, 'Call recordings and transcripts are retained for 90 days by default.', 'no retention guarantee');
});

test('quick actions describe inert controls rather than available services', () => {
  const actions = read('src/components/dashboard/QuickActions.tsx');
  for (const copy of ['Demo only; calling is not implemented', 'Demo only; scheduling is not implemented', 'Demo only; AI training is not implemented']) has(actions, copy, copy);
  lacks(actions, 'Schedule a call with an AI agent', 'no active AI call claim');
});
