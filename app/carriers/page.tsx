import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Card } from "@/components/Card";
import { ApeSection } from "@/components/ApeSection";
import { Compliance } from "@/components/Compliance";
import { Coverage } from "@/components/Coverage";
import { CtaSection } from "@/components/CtaSection";
import { LogoStrip } from "@/components/LogoStrip";
import { WORKFLOWS } from "@/content/copy";

export const metadata: Metadata = {
  title: "For insurance carriers",
  description:
    "Cozmo handles FNOL intake, triages the claim, reads the documents, applies your policy rules, and tracks each case to payment, with a full audit trail and outcome-based pricing.",
};

export default function CarriersPage() {
  return (
    <>
      <Hero
        title="Every claim. Every language. End to end."
        sub="Cozmo handles FNOL intake, triages the claim, reads the documents, applies your policy rules, and tracks each case to payment, with a full audit trail and outcome-based pricing."
        phoneTitle="Call Cozmo"
        phoneHighlight="AI"
        bgImage="/assets/hero-page2.png"
        textTone="dark"
        tall
      />

      <LogoStrip />

      <Section tone="ink" id="workflows" aria-labelledby="carrier-wf">
        <SectionHeading
          id="carrier-wf"
          dark
          eyebrow="Claims workflows"
          eyebrowTone="accent"
          title="From first notice to final payment."
          intro="Cozmo owns the full lifecycle of a claim, handing off to your adjusters only when a human is genuinely needed."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOWS.map((w) => (
            <Card key={w.title} title={w.title} tone="dark">
              {w.desc}
            </Card>
          ))}
        </div>
        <div className="mt-16">
          <Coverage />
        </div>
      </Section>

      <Section aria-labelledby="carrier-ape">
        <SectionHeading
          id="carrier-ape"
          eyebrow="Governance"
          eyebrowTone="accent"
          title="Auditable by design, because you'll be asked."
          intro="Carriers buy on governance. APE makes Cozmo's knowledge, logic, and guardrails explainable and reviewable on every decision."
        />
        <div className="mt-12">
          <ApeSection />
        </div>
      </Section>

      <Section tone="ink" aria-labelledby="carrier-compliance">
        <SectionHeading
          id="carrier-compliance"
          dark
          eyebrow="Compliance"
          eyebrowTone="accent"
          title="Certified for the regions you operate in."
          intro="Cozmo aligns to the standards your auditors and regulators expect, region by region."
        />
        <div className="mt-12">
          <Compliance tone="dark" />
        </div>
      </Section>

      <CtaSection
        title="Run the whole claim through Cozmo."
        body="Book a 15-minute demo and see FNOL, triage, document reading, and payment tracking on one audited timeline."
      />
    </>
  );
}
