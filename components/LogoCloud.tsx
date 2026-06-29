import Image from "next/image";

/**
 * Client logo cloud (PRD §3.6). Real brand logos, grayscale/low-opacity →
 * full on hover. Each has an alt of "<Brand> logo".
 */
const CLIENTS = [
  { src: "/assets/client-nestle.png", alt: "Nestlé logo", w: 570, h: 531 },
  {
    src: "/assets/client-discovery-bank.png",
    alt: "Discovery Bank logo",
    w: 965,
    h: 309,
  },
  { src: "/assets/client-u-capital.png", alt: "U Capital logo", w: 579, h: 584 },
  { src: "/assets/client-sdc.avif", alt: "SDC logo", w: 600, h: 160 },
];

export function LogoCloud({
  caption = "Trusted by global enterprises and Fortune 100s",
  tone = "light",
}: {
  caption?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="text-center">
      <p
        className={`text-eyebrow uppercase ${dark ? "text-cream_text-muted" : "text-ink_text-muted"}`}
      >
        {caption}
      </p>
      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
        {CLIENTS.map((c) => (
          <li key={c.src}>
            <Image
              src={c.src}
              alt={c.alt}
              width={c.w}
              height={c.h}
              className={`h-7 w-auto opacity-60 grayscale transition-all duration-base ease-brand hover:opacity-100 sm:h-9 ${
                dark ? "invert" : ""
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
