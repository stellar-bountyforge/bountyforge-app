# Backend API Reference

The `bountyforge-backend` service is a plain Node.js HTTP server (`src/server.ts`). It returns `application/json` for every response.

Base URL (local): `http://localhost:8787`

## Endpoints

### `GET /health`

Liveness probe.

**Response `200`:**

```json
{ "ok": true, "service": "bountyforge-backend" }
```

### `GET /network`

Reports the configured Stellar network.

**Response `200`:**

```json
{ "network": "Test SDF Network ; September 2015" }
```

!!! note
    The literal value comes from `Networks.TESTNET` of `@stellar/stellar-sdk`.

### Any other path

**Response `404`:**

```json
{ "error": "not_found" }
```

## Examples

```bash
curl http://localhost:8787/health
curl http://localhost:8787/network
```

## Authentication

None. The current baseline exposes no authenticated endpoints and holds no user data. Do not expose a deployment of this service to the public internet — it is unaudited.

## Error model

The only error today is the `404` JSON shown above. There is no structured error taxonomy yet.

## Planned (not implemented)

- Bounty/escrow API endpoints consumed by `bountyforge-app`.
- Authenticated write paths.
- Persistence behind `DATABASE_URL`.
