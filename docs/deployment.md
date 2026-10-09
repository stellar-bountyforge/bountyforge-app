# Deployment

## Building

=== "bountyforge-app"

    ```bash
    npm run build
    ```

    Produces a static-prerendered Next.js build (`.next/`).

=== "bountyforge-backend"

    ```bash
    npm run build
    ```

    Compiles TypeScript with `tsc`.

=== "bountyforge-contracts"

    ```bash
    make build
    ```

    Produces `bountyforge.wasm` via `stellar contract build`.

## Documentation site (GitHub Pages)

The docs deploy from this repository via GitHub Actions:

1. **Workflow**: `.github/workflows/docs.yml` builds the MkDocs site with `--strict` and deploys with `actions/deploy-pages`.
2. **Permissions**: the workflow requests `contents: read` and `pages: write`, with `id-token: write` for OIDC.
3. **Manual step (required once)**: in the repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

Expected URL: `https://anchor-flow-s.github.io/bountyforge-app/`

The `site_url` in `mkdocs.yml` is already set to this path, so `mkdocs build` generates correct base-path asset URLs.

## Hosting the application

No deployment target is configured for the app or backend. Options that fit the current builds:

- **App**: any static/Node host that supports Next.js 15 (Vercel, Fly.io, a container). Set the env vars from [Configuration](configuration.md).
- **Backend**: any Node 20 host. It listens on `PORT` (default 8787) and has no persistent state.

## Contract deployment (testnet)

See [Smart Contract Guide → Deployment](contract.md#deployment). After deployment:

1. Note the returned contract ID.
2. Set `CONTRACT_ID` in the app and backend env files.

## Release procedures

The repos follow Conventional Commits; releases are currently manual. Before tagging a release:

1. All CI checks green (install, build, test; docs build with `--strict`).
2. Version bump in `package.json` (app/backend) or `Cargo.toml` (contract) and `CHANGELOG.md` entry.
3. Tag `vX.Y.Z` on `main`.
