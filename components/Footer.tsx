import Link from "next/link";
import { Logo } from "./Logo";
import { LinkButton } from "./Button";
import { SUPPORT_EMAIL, NAV_LINKS, SITES, CAL_LINK } from "@/lib/site";

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-mono-sm uppercase text-cream_text-muted">{children}</p>
  );
}

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5v13H.25V8zM8 8h4.3v1.78h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V21h-4.5v-5.78c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.22 1.5-2.22 3.06V21H8V8z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M18.24 2H21.5l-7.27 8.31L22.5 22h-6.59l-5.16-6.74L4.84 22H1.58l7.77-8.88L1.5 2h6.75l4.66 6.16L18.24 2zm-1.16 18h1.83L7.01 3.88H5.05L17.08 20z",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* Top: brand + columns */}
      <div className="container-content pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-6 text-body text-cream_text-body">
              The AI workforce for insurance. Cozmo answers every call, text, and
              email, then handles the case end to end.
            </p>
            <div className="mt-6">
              <LinkButton href={CAL_LINK} external variant="light">
                Book a demo
              </LinkButton>
            </div>
          </div>

          <nav aria-label="Solutions" className="flex flex-col gap-3.5">
            <ColHeading>Solutions</ColHeading>
            {SITES.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="text-sm text-cream_text-body transition-colors hover:text-cream_text-primary"
              >
                {s.title}
              </Link>
            ))}
          </nav>

          <nav aria-label="Company" className="flex flex-col gap-3.5">
            <ColHeading>Company</ColHeading>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-cream_text-body transition-colors hover:text-cream_text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3.5">
            <ColHeading>Get in touch</ColHeading>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm text-cream_text-body transition-colors hover:text-cream_text-primary"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="text-sm text-cream_text-muted">Global HQ, San Francisco</p>
            <p className="text-sm text-cream_text-muted">EMEA HQ, Dubai</p>
            <div className="mt-2 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-pill border border-line-cream text-cream_text-body transition-colors hover:border-line-cream-strong hover:text-cream_text-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line-cream pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-mono-sm uppercase text-cream_text-muted">
            © 2026 Cozmo AI · Made with{" "}
            <span className="text-accent">♥</span> in San Francisco
          </p>
          <div className="flex gap-6">
            <Link href="/#" className="text-mono-sm uppercase text-cream_text-muted hover:text-cream_text-primary">
              Privacy
            </Link>
            <Link href="/#" className="text-mono-sm uppercase text-cream_text-muted hover:text-cream_text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Oversized terracotta wordmark */}
      <div aria-hidden="true" className="select-none overflow-hidden">
        <p className="-mb-[0.16em] bg-gradient-to-b from-accent to-accent-hover bg-clip-text text-center font-display font-medium leading-[0.74] tracking-[-0.03em] text-transparent [font-size:clamp(5rem,27vw,24rem)]">
          Cozmo AI
        </p>
      </div>
    </footer>
  );
}
