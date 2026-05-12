/**
 * Neon serverless client. Used by the share/challenge API routes.
 *
 * Provisioned automatically when the Vercel + Neon Marketplace integration
 * is connected — `DATABASE_URL` is injected into all environments.
 *
 * NOTE: This file currently has no runtime imports because the Phase 3 API
 * routes that consume it haven't been built yet. When you wire those up:
 *
 *   pnpm add @neondatabase/serverless
 *
 *   import { neon } from "@neondatabase/serverless";
 *   export const sql = neon(process.env.DATABASE_URL!);
 */

export const DATABASE_URL = process.env.DATABASE_URL;

export function assertDatabaseUrl() {
  if (!DATABASE_URL) {
    throw new Error(
      "DATABASE_URL is not set. Provision Neon via Vercel Marketplace or copy a connection string into .env.local.",
    );
  }
  return DATABASE_URL;
}
