import type { NextConfig } from "next"

const basePath = process.env.PAGES_BASE_PATH ?? ""

const nextConfig: NextConfig = {
  // Extra hostnames allowed to load dev-only assets (HMR etc.). Hostname only —
  // no scheme or port. localhost is always allowed.
  allowedDevOrigins: ["uday.local"],
  // Workspace packages ship raw TS/TSX source; Next compiles them.
  transpilePackages: ["@jal-matsya/ui"],
  // Static HTML export for GitHub Pages (no Node server): `next build` writes apps/web/out.
  output: "export",
  // Project sites are served from /<repo> (e.g. udaypawar.github.io/jal-matsya). CI sets
  // PAGES_BASE_PATH from actions/configure-pages; it is empty for a custom domain or locally.
  basePath: basePath || undefined,
  // next/image doesn't prefix basePath onto plain /public paths; components read this.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Emit /component/index.html etc. so static hosts resolve folder URLs.
  trailingSlash: true,
  // No image-optimisation server on static hosting; images are served as-is.
  images: { unoptimized: true },
}

export default nextConfig
