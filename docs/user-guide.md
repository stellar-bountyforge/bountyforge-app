# User Guide

This page documents what the BountyForge application actually does today. Planned features are explicitly marked.

## Current state of the app

The web application (`bountyforge-app`) is a Next.js App Router application with a single landing view:

- **Project header** — BountyForge branding with a `STELLAR / SOROBAN` tag.
- **Network card** — shows the configured Stellar network summary (currently reports the Soroban **testnet**).

The network summary is produced by `lib/stellar.ts` via the Stellar SDK's `Networks.TESTNET` constant. No wallet connection, transaction signing, or bounty-browsing UI exists yet.

## Running the app

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The page is prerendered as static content.

## What you can do today

1. Confirm the app is configured for the Stellar **testnet** via the Network card.
2. Point it at a running backend (see [Configuration](configuration.md)) — the connection target is set by `BACKEND_URL`.

!!! note "Planned, not yet implemented"

    The following are roadmap items, not current features:

    - Wallet connection and transaction signing.
    - Bounty/escrow views backed by the contract.
    - Payout/review status views fed by the backend.

## Testing

```bash
npm test   # node --test
```

The current test suite is a minimal baseline (`node --test` runner) and asserts no app behavior yet.
