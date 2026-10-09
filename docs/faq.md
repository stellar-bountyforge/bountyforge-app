# FAQ

## General

**What is BountyForge?**
Open bounties with escrow, review, and payout workflows for Stellar anchors, split into an app, a backend, and a Soroban contract. See [Home](index.md).

**Is it production-ready?**
No. It is a v0.1.0 development baseline and unaudited. See [Security](security.md).

**Who maintains it?**
Hikmaholadele ([@Hikmaholadele](https://github.com/Hikmaholadele)).

## Setup

**Do I need the Stellar CLI?**
Only for building/deploying the contract (`make build` in bountyforge-contracts). The app and backend need only Node.js ≥ 20.

**Which network does it use?**
Stellar **testnet** only. See [Configuration](configuration.md).

**Why does `npm run lint` ask me to configure ESLint?**
No ESLint config/dependency is committed. Configure it yourself or skip lint — CI doesn't run it. See [Troubleshooting](troubleshooting.md).

## Backend

**What endpoints exist?**
`GET /health` and `GET /network`, plus a 404 JSON for everything else. See [API Reference](api.md).

**Does the backend store data?**
No. `DATABASE_URL` exists in `.env.example` but persistence is not implemented.

## Contract

**What can the contract do?**
`initialize`, `record`, `read` against instance storage. See [Smart Contract Guide](contract.md).

**Can `initialize` be called twice?**
Yes — there is no re-initialization guard yet. Treat that as a known limitation.

**Does it emit events?**
No, not in the current baseline.

## Documentation site

**Where is the docs source?**
`docs/` in `bountyforge-app`, built with MkDocs Material (`mkdocs build --strict` in CI).

**How do I preview it locally?**

```bash
pip install mkdocs-material
mkdocs serve
```
