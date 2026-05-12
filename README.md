# apexvert.com

Marketing site and share-link backend for **Apex** — the iPhone vertical jump app from [Thea Apps Inc.](https://thea.app)

Lives at [apexvert.com](https://apexvert.com).

## Stack

- **Next.js 16** (App Router) on Vercel
- **Tailwind CSS v4**
- **Motion (Framer Motion)** for animations
- **Neon Postgres** for share/challenge link storage (provisioned via the Vercel + Neon Marketplace integration — see [Phase 3](#roadmap))

## Local development

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Purpose |
|---|---|
| `/` | Landing page |
| `/.well-known/apple-app-site-association` | AASA file for iOS Universal Links — see [`route.ts`](./src/app/.well-known/apple-app-site-association/route.ts) |
| `/v/[token]` | _(Phase 3)_ Vert share landing — opens Apex via universal link if installed |
| `/c/[token]` | _(Phase 3)_ Challenge link landing |
| `/api/share` | _(Phase 3)_ POST to create a share token |
| `/api/share/[token]` | _(Phase 3)_ GET a share payload |
| `/api/og/[token]` | _(Phase 3)_ Dynamic Open Graph image for rich link previews |

## Database

Schema lives in [`src/lib/schema.sql`](./src/lib/schema.sql). To apply against a fresh Neon database:

```bash
psql "$DATABASE_URL" -f src/lib/schema.sql
```

Or run inside the Neon SQL editor.

## iOS Universal Links setup

The iOS app at [`rosshj/apex`](https://github.com/rosshj/apex) needs the `Associated Domains` capability enabled with `applinks:apexvert.com`. After deployment Apple's CDN will fetch the AASA file from this site automatically.

Verify with:

```bash
curl -I https://apexvert.com/.well-known/apple-app-site-association
```

(should return `Content-Type: application/json`).

## Deployment

Connected to Vercel via GitHub. Pushes to `main` deploy to production. Preview deploys on every PR.

Required environment variables (set in Vercel):

- `DATABASE_URL` — auto-provisioned by the Neon Marketplace integration

## Roadmap

| Phase | Status | Scope |
|---|---|---|
| 0 | shipped | Landing, AASA, schema, DB skeleton |
| 3 | pending | Share/challenge API + token landings + OG images |

See `~/.cursor/plans/apex_sharing_and_challenge_*.plan.md` for the full plan.
