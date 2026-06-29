import Image from "next/image";
import { Section } from "./Section";

export function Testimonial() {
  return (
    <Section tone="cream" aria-labelledby="enterprises">
      <h2
        id="enterprises"
        className="max-w-3xl text-h2 text-ink_text-primary"
      >
        How leading enterprises operate with Cozmo AI.
      </h2>
      <hr className="mt-8 border-line-ink" />

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
        <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-2xl border border-line-ink bg-bg2">
          <Image
            src="/assets/founder-photo.jpg"
            alt="Cozmo customer"
            fill
            className="object-cover"
            sizes="340px"
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <div className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-ink_text-primary">
                1M+
              </div>
              <div className="mt-3 text-mono-sm uppercase text-ink_text-muted">
                Live voice calls handled
              </div>
            </div>
            <div>
              <div className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-ink_text-primary">
                10M+
              </div>
              <div className="mt-3 text-mono-sm uppercase text-ink_text-muted">
                Customer interactions processed
              </div>
            </div>
          </div>

          <blockquote className="mt-8 max-w-2xl text-body-lg text-accent-hover">
            “I was driving down Sheikh Zayed Road and this taxi ad about AI agents
            got my attention. I got curious, pulled up their website, and found
            fully operational AI agents. I even tested it out. They let you book a
            free live call with their agents right on the homepage (go try it,
            it&apos;s crazy). I&apos;m hiring AI agents. Yes, you read that right.
            We&apos;ve already deployed the AI agents.”
          </blockquote>
          <p className="mt-6 font-semibold text-ink_text-primary">Founder</p>
          <p className="text-mono-sm uppercase text-ink_text-muted">
            Regional fintech
          </p>
        </div>
      </div>
    </Section>
  );
}
