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
      // beforeFiles: runs BEFORE filesystem routes, so "/" is rewritten to the
      // audience page even though app/page.tsx exists. (A plain array would be
      // afterFiles and never fire for "/".)
      return {
        beforeFiles: [{ source: "/", destination: `/${SITE}` }],
      };
    }
    return [];
  },
};

export default nextConfig;
