import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Lock Turbopack's workspace root to this directory. Without this, Next.js
  // walks up looking for a lockfile and warns when it finds one outside the
  // repo (e.g. ~/package-lock.json).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
