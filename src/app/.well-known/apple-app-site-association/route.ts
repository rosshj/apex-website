import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Apple App Site Association (AASA) — required for Universal Links.
 *
 * MUST be served at /.well-known/apple-app-site-association with
 * Content-Type: application/json. Apple's CDN fetches and caches this file
 * after Associated Domains is enabled on the iOS app.
 *
 * Paths declared:
 *   /v/* — vert share landing pages, opens app to the share view
 *   /c/* — challenge landing pages, opens app to the challenge view
 *
 * Apple validates against `appIDs` of the form `<TeamID>.<BundleID>`.
 */
export async function GET() {
  return Response.json(
    {
      applinks: {
        details: [
          {
            appIDs: [siteConfig.appId],
            components: [
              { "/": "/v/*", comment: "Vert share links" },
              { "/": "/c/*", comment: "Challenge links" },
            ],
          },
        ],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
  );
}
