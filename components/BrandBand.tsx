import Image from "next/image";
import { Section } from "./Section";
import { LinkButton } from "./Button";

/**
 * "The problem we set out to fix", dark band pairing the branded sunset visual
 * with the story. Image is decorative (wordmark baked in) and blends into the
 * dark band via its own tiled border.
 */
export function BrandBand() {
  return (
    <Section tone="ink" aria-labelledby="why-cozmo">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <h2 id="why-cozmo" className="text-display [text-wrap:balance] text-cream_text-primary">
            The problem we set out to fix.
          </h2>
          <p className="mt-6 text-body text-cream_text-body">
            We kept seeing the same pattern across enterprises. Customer
            conversations were happening in one place. Documents were stored
            somewhere else. Decisions lived in spreadsheets. Actions were taken
            manually inside core systems. Every step depended on someone carrying
            context from one tool to another. The technology and the systems
            existed, but the intelligence between them didn&apos;t.
          </p>
          <p className="mt-4 text-body text-cream_text-body">
            We built Cozmo because enterprises don&apos;t need another chatbot.
            They need AI employees that operate inside real workflows. AI that can
            handle a live voice call, understand the documents being discussed,
            apply company rules to the situation and update the system of record,
            all within the same structured state. Cozmo exists to replace these
            fragmented handoffs with AI employees that see, speak, decide and act,
            owning the outcome from start to finish.
          </p>
          <div className="mt-8">
            <LinkButton href="/#company" variant="light">
              Our story
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
        <div className="relative">
          <Image
            src="/assets/cozmo-brand-visual.png"
            alt=""
            width={3000}
            height={3223}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
