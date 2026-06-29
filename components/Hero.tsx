import { PhoneMockup } from "./PhoneMockup";
import { CAL_LINK } from "@/lib/site";

/**
 * Hero over a brand photo/video. `textTone` controls legibility against the
 * image: "light" (default) = cream text + dark scrim + white button (dark
 * imagery); "dark" = ink text + light scrim + ink button (light imagery).
 * Single CTA: a sharp-edged "Book a demo" rectangle.
 */
export function Hero({
  title,
  sub,
  phoneTitle = "Call Cozmo",
  phoneHighlight = "AI",
  bgImage = "/assets/hero-customer.jpg",
  bgVideo,
  textTone = "light",
  tall = false,
}: {
  title: string;
  sub: string;
  phoneTitle?: string;
  phoneHighlight?: string;
  bgImage?: string;
  bgVideo?: string;
  textTone?: "light" | "dark";
  /** Taller hero so the following trust strip lands at the viewport bottom. */
  tall?: boolean;
}) {
  const dark = textTone === "dark";
  const scrim = dark
    ? "linear-gradient(90deg, rgba(245,241,234,0.94) 0%, rgba(245,241,234,0.7) 48%, rgba(245,241,234,0.32) 100%)"
    : "linear-gradient(90deg, rgba(14,13,11,0.85) 0%, rgba(14,13,11,0.6) 45%, rgba(14,13,11,0.3) 100%)";

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {bgVideo ? (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          poster={bgImage}
          className="absolute inset-0 -z-10 h-full w-full object-cover motion-reduce:hidden"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: dark ? "#e8e2d6" : "#0e0d0b",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: scrim }}
      />

      <div
        className={`container-content grid items-center gap-12 py-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 ${
          tall ? "lg:min-h-[calc(100svh-72px-118px)]" : ""
        }`}
      >
        <div className="stagger max-w-2xl">
          <h1
            className={`font-display font-normal leading-[1.06] tracking-[-0.02em] [font-size:clamp(2.1rem,3.2vw,2.9rem)] [text-wrap:balance] ${
              dark ? "text-ink_text-primary" : "text-cream_text-primary"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 max-w-[52ch] text-body-lg ${
              dark ? "text-ink_text-body" : "text-cream_text-body"
            }`}
          >
            {sub}
          </p>

          <div className="mt-9">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[52px] items-center gap-2 px-8 text-sm font-semibold transition-colors duration-base focus-visible:shadow-focus ${
                dark
                  ? "bg-ink text-cream hover:bg-ink/90"
                  : "bg-cream text-ink hover:bg-paper"
              }`}
            >
              Book a demo
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:pl-4">
          <PhoneMockup title={phoneTitle} highlight={phoneHighlight} />
        </div>
      </div>
    </section>
  );
}
