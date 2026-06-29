type Tone = "cream" | "paper" | "bg2" | "bg3" | "ink";

type SectionProps = {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

const toneBg: Record<Tone, string> = {
  cream: "bg-cream",
  paper: "bg-paper",
  bg2: "bg-bg2",
  bg3: "bg-bg3",
  ink: "bg-ink",
};

export function Section({
  id,
  tone = "cream",
  className = "",
  children,
  ...aria
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneBg[tone]} py-16 sm:py-24 ${className}`}
      {...aria}
    >
      <div className="container-content">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "muted",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "muted" | "accent";
  className?: string;
}) {
  return (
    <p
      className={`text-eyebrow uppercase ${
        tone === "accent" ? "text-accent" : "text-ink_text-muted"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * Section heading block. `dark` flips text colors for ink bands.
 * Eyebrows are intentionally not rendered (brand decision: no tiny labels).
 * Headings are wide + balanced so they hold to two lines.
 */
export function SectionHeading({
  title,
  intro,
  id,
  dark = false,
}: {
  eyebrow?: string;
  eyebrowTone?: "muted" | "accent";
  title: string;
  intro?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <h2
        id={id}
        className={`text-h2 [text-wrap:balance] ${dark ? "text-cream_text-primary" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 max-w-2xl text-body-lg ${
            dark ? "text-cream_text-body" : "text-ink_text-body"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
