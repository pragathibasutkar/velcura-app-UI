# Velcura by Vastram

Velcura is a responsive Next.js frontend for premium clinical apparel, clinician accounts, hospital procurement, and internal operations.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful commands:

```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e
npm run test:a11y
```

The app uses seeded mock data and localStorage-backed state. No backend or external database is required. Cart, orders, wishlist, fit measurements, addresses, admin session state, and institutional workspace actions are simulated locally.

## Demo flows

- Clinician sign-in: any identifier with a password of six or more characters; OTP `246810`.
- Admin sign-in: `mira@velcura.in` / `admin123`; admin OTP `246810`.
- Hospital procurement: `/hospital`.
- Admin console: `/admin`.

## Architecture

- `src/app`: App Router pages and route states.
- `src/components/ui`: shared accessible primitives.
- `src/components/storefront.tsx`: storefront header, mega-nav, search, cart entry, and footer.
- `src/components/portal-shell.tsx`: institutional procurement shell.
- `src/components/admin-shell.tsx`: responsive admin shell.
- `src/lib/api`: typed mock API contracts and local persistence.
- `src/lib/mock-data`: seeded products, orders, customers, quotes, and admin entities.
- `tests/smoke.spec.ts`: Playwright flow and axe smoke coverage.
- `docs/SCREEN_MAP.md`: source-of-truth route map and phase status.
- `docs/FINAL_COVERAGE.md`: Phase 7 coverage and audit report.

## Phase 7 audit status

The Playwright suite covers browse → PDP → cart → checkout, clinician sign-in + 2FA, institutional RFQ creation, return request submission, admin order status updates, representative axe checks, and a 375px storefront smoke check. `npm run typecheck`, `npm run lint`, and `npm run build` are green. Lint retains two pre-existing warnings: an account-orders memo dependency and a legacy checkout `<img>` recommendation.

The design export uses Google font families through `next/font`; offline environments may fall back to system fonts during development if Google Fonts cannot be fetched. Production builds still complete successfully.
