# Getting Started

This guide covers all three BountyForge repositories. Commands are verified against the current `main` branches.

## Prerequisites

| Tool | Version | Needed for |
| --- | --- | --- |
| Node.js | ≥ 20 | bountyforge-app, bountyforge-backend |
| npm | ≥ 10 | bountyforge-app, bountyforge-backend |
| Rust (stable) | recent stable | bountyforge-contracts |
| `wasm32v1-none` target | — | building the contract to `.wasm` |
| Stellar CLI | latest | `stellar contract build` (contract repo `make build`) |

Install the WASM target for contract work:

```bash
rustup target add wasm32v1-none
```

## Clone the repositories

```bash
git clone https://github.com/stellar-bountyforge/bountyforge-app.git
git clone https://github.com/stellar-bountyforge/bountyforge-backend.git
git clone https://github.com/stellar-bountyforge/bountyforge-contracts.git
```

## Install and run each component

=== "bountyforge-app"

    ```bash
    cd bountyforge-app
    npm install
    npm run dev
    ```

    The app runs at <http://localhost:3000>.

=== "bountyforge-backend"

    ```bash
    cd bountyforge-backend
    npm install
    npm run dev
    ```

    The service runs on port `8787`. Verify with:

    ```bash
    curl http://localhost:8787/health
    # {"ok":true,"service":"bountyforge-backend"}
    ```

=== "bountyforge-contracts"

    ```bash
    cd bountyforge-contracts
    make test    # cargo test
    make build   # stellar contract build (produces .wasm)
    ```

## Configuration

Each repo ships a `.env.example`. Copy it before running:

- **bountyforge-app** → `.env.local` (see [Configuration](configuration.md))
- **bountyforge-backend** → `.env` (see [Configuration](configuration.md))

The contract crate needs no environment variables.

## Run the tests

| Repo | Command |
| --- | --- |
| bountyforge-app | `npm test` |
| bountyforge-backend | `npm test` |
| bountyforge-contracts | `cargo test` |

## First-run sanity checks

1. `bountyforge-app` loads at `http://localhost:3000` and shows the testnet network summary.
2. `curl http://localhost:8787/health` returns `{"ok":true,...}`.
3. `cargo test` in the contracts repo prints `test result: ok`.
