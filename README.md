<p align="center">
  <img src="assets/social-preview.svg" alt="BountyForge banner" width="640" />
</p>

# BountyForge App

> Open bounties with escrow, review, and payout workflows — user-facing web application.

![Status: v0.1.0](https://img.shields.io/badge/version-v0.1.0-blue)
![Status: not audited](https://img.shields.io/badge/audit-not%20audited-orange)
![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-green)
![Stack: Next.js + Soroban](https://img.shields.io/badge/stack-Next.js%20%2B%20Soroban-purple)

> **Status note:** v0.1.0 development baseline — **not audited and not production-ready.**

📚 **Documentation site:** [https://stellar-bountyforge.github.io/bountyforge-app/](https://stellar-bountyforge.github.io/bountyforge-app/) — user guide, backend API reference, smart contract guide, configuration and deployment docs. The source lives in [`docs/`](docs/) (MkDocs Material, built with `mkdocs build --strict` in CI).

## Why this exists

BountyForge implements open bounties with escrow, review, and payout workflows on Stellar. On-chain state is the source of truth; off-chain services stay out of consensus-critical logic. This repository is the **user-facing web application** of the three-repo BountyForge system:

| Repo | Role |
| --- | --- |
| [bountyforge-contracts](https://github.com/stellar-bountyforge/bountyforge-contracts) | On-chain Soroban escrow and bounty state |
| **bountyforge-app** (this repo) | User-facing web application |
| [bountyforge-backend](https://github.com/stellar-bountyforge/bountyforge-backend) | Off-chain indexing/API and operational services |

## Features

- Next.js (App Router) frontend with a minimal network-summary landing page.
- Stellar integration via `@stellar/stellar-sdk` (configured for **testnet**).
- TypeScript throughout, with `node --test` test runner.

## Architecture

```mermaid
flowchart LR
    U[User browser] --> A[bountyforge-app<br/>Next.js]
    A -- reads public chain state --> R[Stellar RPC<br/>Soroban testnet]
    A -- authenticated writes --> W[Wallet / signing layer]
    R --> C[bountyforge-contracts<br/>escrow / bounty state]
    B[bountyforge-backend<br/>indexing / API] --> R
    A -- BACKEND_URL --> B
```

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 15, React 19 |
| Language | TypeScript 5.8 |
| Blockchain | Stellar / Soroban, `@stellar/stellar-sdk` 17 |
| Testing | `node --test` |
| Linting | ESLint (`next lint`) |

## Project structure

```text
bountyforge-app/
├── app/            # Next.js App Router pages
├── lib/            # Stellar helpers
├── assets/         # Banner and logo
├── docs/           # Architecture notes
└── .github/        # CI workflow, CODEOWNERS
```

## Prerequisites

- Node.js ≥ 20
- npm

## Installation

```bash
npm install
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Description |
| --- | --- |
| `STELLAR_NETWORK` | Target Stellar network (`testnet`). |
| `STELLAR_RPC_URL` | Soroban RPC endpoint, e.g. `https://soroban-testnet.stellar.org`. |
| `CONTRACT_ID` | Deployed BountyForge contract ID (leave empty until you deploy). |
| `BACKEND_URL` | URL of the bountyforge-backend service (default `http://localhost:8787`). |

## Running locally

```bash
npm run dev
```

## Testing

```bash
npm test
```

## Linting

```bash
npm run lint
```

## Building

```bash
npm run build
```

## Roadmap

Taken from the CHANGELOG and current baseline:

- [ ] Expand the landing page with real bounty/escrow views backed by the contract.
- [ ] Wire the app to the deployed contract via `CONTRACT_ID`.
- [ ] Add backend-backed bounty indexing views.
- [ ] Independent security review of the contract + app stack.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

See [SECURITY.md](SECURITY.md). **This project is unaudited** — do not use in production.

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Maintainer

**Hikmaholadele** — [@Hikmaholadele](https://github.com/Hikmaholadele)

## License

[Apache-2.0](LICENSE)
