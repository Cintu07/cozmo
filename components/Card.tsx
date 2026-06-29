import Link from "next/link";

type Tone = "light" | "dark";

function shell(tone: Tone) {
  return tone === "dark"
    ? "rounded-2xl border border-line-cream bg-ink-raised hover:border-line-cream-strong"
    : "rounded-2xl border border-line-ink bg-paper shadow-card hover:border-line-ink-strong";
}

const lift =
  "transition-all duration-base ease-brand hover:-translate-y-0.5";

/** Differentiator / workflow card (PRD §3.7, §3.8). */
export function Card({
  eyebrow,
  title,
  children,
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={`${shell(tone)} ${lift} flex flex-col p-7 sm:p-8 ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-eyebrow uppercase text-accent">{eyebrow}</p>
      )}
      <h3
        className={`font-display text-[1.45rem] font-normal leading-[1.2] tracking-[-0.01em] ${dark ? "text-cream_text-primary" : "text-ink_text-primary"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-4 text-body ${dark ? "text-cream_text-body" : "text-ink_text-body"}`}
      >
        {children}
      </p>
    </div>
  );
}

/** Whole-card link → sub-site (PRD §3.12). */
export function AudienceCard({
  href,
  title,
  hook,
  tone = "light",
}: {
  href: string;
  title: string;
  hook: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";
  return (
    <Link
      href={href}
      className={`group flex flex-col justify-between gap-8 ${shell(tone)} ${lift} p-6 focus-visible:shadow-focus`}
    >
      <div>
        <h3
          className={`text-h3 ${dark ? "text-cream_text-primary" : "text-ink_text-primary"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 text-body ${dark ? "text-cream_text-body" : "text-ink_text-body"}`}
        >
          {hook}
        </p>
      </div>
      <span
        className={`inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-cream_text-primary" : "text-ink_text-primary"}`}
      >
        Explore
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-base ease-brand group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
