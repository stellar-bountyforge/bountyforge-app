# Security

> **BountyForge is unaudited and not production-ready (v0.1.0 baseline).**

## Responsible disclosure

Report vulnerabilities privately to the maintainer — do **not** open a public issue containing an exploitable vulnerability.

- Maintainer: **Hikmaholadele** — [@Hikmaholadele](https://github.com/Hikmaholadele)
- Process details: [SECURITY.md](https://github.com/stellar-bountyforge/bountyforge-app/blob/main/SECURITY.md)

## Security assumptions

- **On-chain state is the source of truth.** Off-chain services (app/backend) are kept out of consensus-critical logic.
- The contract gates state changes behind `require_auth()` on the acting address; tests mock auth (`mock_all_auths`) and do not validate real signature flows.
- The backend exposes only unauthenticated read-only JSON endpoints and holds no secrets.

## Known limitations

- `initialize` is not guarded against re-initialization (admin can be overwritten).
- No event emission — off-chain indexing has no event feed yet.
- No structured error taxonomy in the contract or backend.
- The backend has no rate limiting, TLS termination, or auth; do not expose it publicly.
- No independent audit has been performed on any of the three repos.

## Secret handling

- `.env` and `.env.local` are gitignored in both TS repos.
- Never commit deployment source keys or mnemonics. Pass them at deploy time via CLI or a secrets manager.
- CI workflows use only the built-in `GITHUB_TOKEN` via OIDC (`id-token: write`) — no stored secrets are required.

## Reporting checklist

When reporting, include: repo and commit hash, reproduction steps, impact assessment, and whether the issue affects the contract, app, or backend.
