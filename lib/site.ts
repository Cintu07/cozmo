/**
 * Global site constants shared by all four sites.
 * FLAGGED FOR CEO: replace PHONE_DISPLAY / PHONE_HREF with the real number(s).
 */
export const CAL_LINK =
  "https://cal.com/hamoodey-alaboudi-tpnvn0/15min";

// FLAGGED FOR CEO — placeholder click-to-call number (PRD §3.13).
export const PHONE_DISPLAY = "+1 (000) 000-0000";
export const PHONE_HREF = "tel:+10000000000";

export const SUPPORT_EMAIL = "carehub@hellocozmo.ai";

/**
 * Where each audience site lives. When the three sites are deployed as their own
 * standalone websites, set these env vars per deployment to the live URLs:
 *   NEXT_PUBLIC_URL_CONTRACTORS, NEXT_PUBLIC_URL_CARRIERS, NEXT_PUBLIC_URL_HOMEOWNERS
 * Until then they fall back to the in-app /paths, so nothing breaks locally.
 */
export const SITE_URLS = {
  contractors: process.env.NEXT_PUBLIC_URL_CONTRACTORS || "/contractors",
  carriers: process.env.NEXT_PUBLIC_URL_CARRIERS || "/carriers",
  homeowners: process.env.NEXT_PUBLIC_URL_HOMEOWNERS || "/homeowners",
} as const;

export const NAV_LINKS = [
  {
    label: "Solutions",
    href: "/#company",
    children: [
      { label: "For contractors", href: SITE_URLS.contractors },
      { label: "For carriers", href: SITE_URLS.carriers },
      { label: "For homeowners", href: SITE_URLS.homeowners },
    ],
  },
  {
    label: "Product",
    href: "/#product",
    children: [
      { label: "Customer experience", href: "/#product" },
      { label: "Operating system", href: "/#case-studies" },
      { label: "APE control layer", href: "/#ape-heading" },
    ],
  },
  {
    label: "Case studies",
    href: "/#enterprises",
    children: [
      { label: "Enterprise results", href: "/#enterprises" },
      { label: "Coverage & languages", href: "/#case-studies" },
    ],
  },
  {
    label: "Company",
    href: "/#company",
    children: [
      { label: "Who it's for", href: "/#company" },
      { label: "Get in touch", href: "/#contact" },
    ],
  },
] as const;

export const SITES = [
  {
    slug: "/contractors",
    href: SITE_URLS.contractors,
    title: "Contractors",
    hook: "Never miss a storm lead. Every call answered, qualified, booked.",
  },
  {
    slug: "/carriers",
    href: SITE_URLS.carriers,
    title: "Carriers",
    hook: "Every claim handled end to end, with a full audit trail.",
  },
  {
    slug: "/homeowners",
    href: SITE_URLS.homeowners,
    title: "Homeowners",
    hook: "File a claim by just talking, tracked all the way to payment.",
  },
] as const;
