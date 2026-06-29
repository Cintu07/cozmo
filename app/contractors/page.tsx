import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { LogoStrip } from "@/components/LogoStrip";
import { Card } from "@/components/Card";
import { Compliance } from "@/components/Compliance";
import { CtaSection } from "@/components/CtaSection";
import { ChatShowcase } from "@/components/ChatShowcase";
import type { ChatMessage } from "@/components/ChatDemo";

export const metadata: Metadata = {
  title: "For restoration & roofing",
  description:
    "When a storm hits, Cozmo answers every call 24/7, qualifies the lead, books the inspection, and follows up on every estimate.",
};

const CONTRACTOR_CHAT: ChatMessage[] = [
  { from: "customer", text: "Storm took half my roof off last night" },
  { from: "agent", text: "Sorry to hear that, let's get you booked." },
  { from: "customer", text: "Can someone come look today?" },
  { from: "agent", text: "Yes. Earliest inspection is 2pm today." },
  { from: "customer", text: "Perfect, book it" },
  { from: "agent", text: "Booked. I'll text the crew details and follow up on the estimate." },
];

const VALUE = [
  {
    title: "24/7 storm intake",
    desc: "Every call answered the moment it comes in, nights, weekends, and the chaos right after a storm. No voicemail, no lost jobs.",
  },
  {
    title: "Instant lead qualification",
    desc: "Cozmo asks the right questions, captures address, damage, and insurance details, and flags the jobs worth your crew's time.",
  },
  {
    title: "Auto inspection booking",
    desc: "Qualified leads get an inspection on the calendar on the first call, synced to your team, no back-and-forth.",
  },
  {
    title: "Estimate follow-up",
    desc: "Cozmo chases every open estimate so deals don't go cold while you're up on a roof.",
  },
];

export default function ContractorsPage() {
  return (
    <>
      <Hero
        title="Never miss a storm lead again."
        sub="When a storm hits, hundreds of calls land at once and half go to voicemail, that's jobs lost to whoever picked up. Cozmo answers every call 24/7, qualifies the lead, books the inspection, and follows up on every estimate."
        phoneTitle="Call Cozmo"
        phoneHighlight="AI"
        bgImage="/assets/hero-page1.png"
        textTone="dark"
        tall
      />

      <LogoStrip />

      <Section aria-labelledby="contractor-value">
        <SectionHeading
          id="contractor-value"
          eyebrow="Built for contractors"
          eyebrowTone="accent"
          title="Turn every storm into booked jobs."
          intro="Cozmo works like your best front-office rep, except it never sleeps and never misses a call."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-6">
          {VALUE.map((v, i) => (
            <Card
              key={v.title}
              title={v.title}
              className={
                ["lg:col-span-4", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"][i]
              }
            >
              {v.desc}
            </Card>
          ))}
        </div>
      </Section>

      <ChatShowcase
        title="Every storm call, answered and booked."
        body="Cozmo picks up on the first ring, qualifies the damage, and gets an inspection on the calendar, before your competitor calls back."
        script={CONTRACTOR_CHAT}
        label="Example contractor call"
      />

      <Section tone="ink" aria-labelledby="contractor-compliance">
        <SectionHeading
          id="contractor-compliance"
          dark
          eyebrow="Compliance"
          eyebrowTone="accent"
          title="Calls handled by the book."
          intro="Cozmo stays inside calling rules and keeps a record of every conversation."
        />
        <div className="mt-12">
          <Compliance tone="dark" />
        </div>
      </Section>

      <CtaSection
        title="Stop losing jobs to voicemail."
        body="Book a 15-minute demo and hear Cozmo answer a storm call, qualify the lead, and book the inspection, live."
      />
    </>
  );
}
