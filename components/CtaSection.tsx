import { Section } from "./Section";
import { LinkButton } from "./Button";
import { CAL_LINK } from "@/lib/site";

/**
 * Final CTA, dark band, no form. A single primary action: Book a demo, which
 * opens the Cal booking link. Sits directly under the Certified section so the
 * two read as one continuous dark zone.
 */
export function CtaSection({
  title = "Ready to see Cozmo AI handle real operations?",
  body = "We'll open up a real workflow and show you exactly what happens with voice, documents, decisions and system updates.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section id="contact" tone="ink" aria-labelledby="cta-heading" className="!pt-0">
      <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <h2 id="cta-heading" className="max-w-2xl text-display text-cream_text-primary">
          {title}
        </h2>
        <div>
          <p className="text-body-lg text-cream_text-body">{body}</p>
          <div className="mt-8">
            <LinkButton href={CAL_LINK} external variant="light">
              Book a demo
              <svg
                width="14"
                height="14"
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
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
