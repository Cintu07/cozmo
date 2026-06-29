/** @type {import('next').NextConfig} */

// Which site this deployment is. Set the SITE env var per Vercel project:
//   SITE=contractors | carriers | homeowners  -> that audience site at "/"
//   SITE unset (or "unified")                 -> the unified flagship at "/"
// The whole app ships from one repo so the design system stays identical.
const SITE = process.env.SITE;
const AUDIENCE_SITES = ["contractors", "carriers", "homeowners"];

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    if (SITE && AUDIENCE_SITES.includes(SITE)) {
      // Serve the audience page at the domain root so it reads as its own site.
      return [{ source: "/", destination: `/${SITE}` }];
    }
    return [];
  },
};

export default nextConfig;
