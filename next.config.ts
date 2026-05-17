import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Lock Turbopack's workspace root to this directory. Without this, Next.js
  // walks up looking for a lockfile and warns when it finds one outside the
  // repo (e.g. ~/package-lock.json).
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        // The Apple App Site Association file must be served as
        // `application/json` with no extension at the exact path Apple expects
        // — see https://developer.apple.com/documentation/xcode/supporting-associated-domains.
        // Without an explicit Content-Type, Next.js / Vercel default to
        // `text/plain` for extensionless files, which Apple rejects.
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
