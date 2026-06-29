import Image from "next/image";

/**
 * Full-bleed trust strip on a dark band: a leading stat cell followed by client
 * logos, separated by hairline dividers. Logos are inverted to read light on
 * dark, sized prominently. Each has alt="<Brand> logo".
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

export function LogoStrip({
  stat = "1,000,000+",
  statLabel = "AI calls handled",
}: {
  stat?: string;
  statLabel?: string;
}) {
  return (
    <section aria-label="Trusted by" className="border-y border-line-ink bg-paper">
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line-ink [&>*]:border-line-ink">
          <div className="flex flex-col justify-center border-b border-r px-2 py-7 lg:border-b-0 lg:border-r-0 lg:px-6 lg:py-8">
            <span className="font-display text-[2rem] leading-none text-ink_text-primary">
              {stat}
            </span>
            <span className="mt-2 text-mono-sm uppercase text-ink_text-muted">
              {statLabel}
            </span>
          </div>
          {CLIENTS.map((c, i) => (
            <div
              key={c.src}
              className={`flex items-center justify-center px-4 py-7 lg:py-8 ${
                i < CLIENTS.length - 1 ? "border-r" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={c.w}
                height={c.h}
                className="h-10 w-auto max-w-[160px] object-contain opacity-70 grayscale transition-all duration-base ease-brand hover:opacity-100 hover:grayscale-0 sm:h-11"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
