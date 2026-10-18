import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Extra hostnames allowed to load dev-only assets (HMR etc.). Hostname only —
  // no scheme or port. localhost is always allowed.
  allowedDevOrigins: ["uday.local"],
  // Workspace packages ship raw TS/TSX source; Next compiles them.
  transpilePackages: ["@jal-matsya/ui"],
  output: "standalone",
  // YouTube video thumbnails in the Videos section.
  images: { remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }] },
}

export default nextConfig
