import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Compliance } from "@/components/Compliance";
import { CtaSection } from "@/components/CtaSection";
import { ChatShowcase } from "@/components/ChatShowcase";
import { LogoStrip } from "@/components/LogoStrip";
import type { ChatMessage } from "@/components/ChatDemo";

export const metadata: Metadata = {
  title: "For policyholders",
  description:
    "File a claim by just talking. Get real help in seconds, any language, any time, and watch your claim tracked all the way to payment.",
};

const HOMEOWNER_CHAT: ChatMessage[] = [
  { from: "customer", text: "My basement just flooded" },
  { from: "agent", text: "I am so sorry. Tech is on the way" },
  { from: "customer", text: "How long?" },
  { from: "agent", text: "45 minutes. Sending auth to your phone" },
  { from: "customer", text: "Just signed it" },
  { from: "agent", text: "Filing your claim with the carrier now" },
  { from: "customer", text: "You handle insurance too?" },
  { from: "agent", text: "Yes. I'll track it to payment" },
];

const STEPS = [
  {
    n: "1",
    title: "Call or text",
    desc: "Reach Cozmo any time, in any language. No menus, no hold music, just say what happened.",
  },
  {
    n: "2",
    title: "Cozmo handles it",
    desc: "Cozmo opens your claim, arranges help, sends what you need to sign, and files everything with your carrier.",
  },
  {
    n: "3",
    title: "Tracked to payment",
    desc: "Cozmo follows your claim the whole way and keeps you updated until you're paid.",
  },
];

export default function HomeownersPage() {
  return (
    <>
      <Hero
        title="Insurance that actually answers."
        sub="File a claim by just talking. Get real help in seconds, any language, any time, and watch your claim tracked all the way to payment."
        phoneTitle="Call Cozmo"
        phoneHighlight="AI"
        bgImage="/assets/hero-page3.png"
        textTone="dark"
        tall
      />

      <LogoStrip />

      <ChatShowcase
        title="Real help, in seconds."
        body="No phone trees. No waiting on hold. Just tell Cozmo what happened and it takes care of the rest, start to finish."
        script={HOMEOWNER_CHAT}
        label="Example policyholder conversation"
      />

      <Section aria-labelledby="how-it-works">
        <SectionHeading
          id="how-it-works"
          eyebrow="How it works"
          eyebrowTone="accent"
          title="Help in three simple steps."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-md border border-line-ink bg-paper p-6 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-accent-soft font-display text-h4 font-bold text-accent">
                {s.n}
              </span>
              <h3 className="mt-5 text-h4 text-ink_text-primary">{s.title}</h3>
              <p className="mt-3 text-body text-ink_text-body">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="ink" aria-labelledby="homeowner-trust">
        <SectionHeading
          id="homeowner-trust"
          dark
          eyebrow="Trust & privacy"
          eyebrowTone="accent"
          title="Your claim, handled responsibly."
          intro="Cozmo follows strict privacy and calling rules, and keeps a record of every interaction so nothing falls through the cracks."
        />
        <div className="mt-12">
          <Compliance tone="dark" />
        </div>
      </Section>

      <CtaSection
        title="Talk to Cozmo about your claim."
        body="Call or book a quick walkthrough and see how filing a claim can take minutes, not weeks."
      />
    </>
  );
}
