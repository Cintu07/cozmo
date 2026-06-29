import { Section } from "./Section";

/**
 * "Why we are building Cozmo AI", large brand photo (SF skyline) with a
 * graceful gradient fallback if the image isn't present yet.
 */
export function WhyCozmo() {
  return (
    <Section tone="cream" aria-labelledby="building-cozmo">
      <div className="max-w-3xl">
        <h2 id="building-cozmo" className="text-h2 [text-wrap:balance]">
          Why we are building Cozmo AI.
        </h2>
        <p className="mt-5 text-body-lg text-ink_text-body">
          From our HQs in San Francisco and Dubai, we&apos;re building an AI
          workforce regulated enterprises can actually trust, one that does the
          work, end to end, without cutting corners on compliance.
        </p>
      </div>

      <div className="mt-12 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-line-ink bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover motion-reduce:hidden"
          aria-label="Cozmo AI"
        >
          <source src="/assets/why-cozmo.mp4" type="video/mp4" />
        </video>
      </div>
    </Section>
  );
}
