# Smart Contract Guide

`BountyForgeContract` — a Soroban contract in Rust (`contracts/bountyforge/src/lib.rs`), built with soroban-sdk 28.

> **Not audited. Do not hold real value against this contract.**

## Contract architecture

The contract uses instance storage with two symbol keys:

| Key | Type | Written by |
| --- | --- | --- |
| `ADMIN` | `Address` | `initialize` |
| `VALUE` | `i128` | `record` |

## Functions

### `initialize(env, admin)`

Stores the admin address. Requires authorization from `admin`.

- Auth: `admin.require_auth()`
- Storage: sets `ADMIN = admin`
- Re-initialization is **not** guarded in the current baseline — calling it again overwrites `ADMIN`.

### `record(env, actor, value)`

Stores an `i128` value. Requires authorization from `actor`.

- Auth: `actor.require_auth()`
- Storage: sets `VALUE = value`

### `read(env) -> i128`

Reads the stored value. Returns `0` if nothing was recorded. No auth required.

## Events

The contract emits **no events** in the current baseline.

## Authorization model

Every state-changing call requires the caller's auth via `require_auth()`. Tests mock all auth (`env.mock_all_auths()`); on testnet, auth is provided by the signing account via the Soroban authorization framework.

## Testing

```bash
cargo test
```

The test (`records_value`) registers the contract, mocks auth, initializes with a generated address, records `42`, and asserts `read() == 42`.

## Building

```bash
make build        # stellar contract build → .wasm
cargo fmt --all -- --check   # formatting check
```

The workspace release profile optimizes for small on-chain footprint: `opt-level = "z"`, `lto = true`, `panic = "abort"`, stripped symbols.

## Deployment

A deployment script is **not included yet** (roadmap item). A typical testnet deployment uses the Stellar CLI:

```bash
stellar contract deploy \
  --source-account <your-account> \
  --network testnet \
  --wasm target/wasm32v1-none/release/bountyforge.wasm
```

After deploying, record the returned contract ID in the app/backend `CONTRACT_ID` env var (see [Configuration](configuration.md)).

## Known limitations

- No admin-gated access control beyond `initialize`/`record` auth.
- `initialize` can be called repeatedly.
- No upgrade path, no event emission, no structured errors.
