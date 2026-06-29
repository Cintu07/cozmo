import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { LogoStrip } from "@/components/LogoStrip";
import { Card, AudienceCard } from "@/components/Card";
import { ApeSection } from "@/components/ApeSection";
import { Coverage } from "@/components/Coverage";
import { Compliance } from "@/components/Compliance";
import { CtaSection } from "@/components/CtaSection";
import { BrandBand } from "@/components/BrandBand";
import { WhyCozmo } from "@/components/WhyCozmo";
import { Testimonial } from "@/components/Testimonial";
import { ChatShowcase } from "@/components/ChatShowcase";
import { DIFFERENTIATORS, WORKFLOWS } from "@/content/copy";
import { SITES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero
        title="Better customer experience, delivered by an AI workforce."
        sub="AI agents that never miss a phone call, answer text across any channel, and update your CRM, so your team can focus on the work they signed up for."
        phoneTitle="Call Cozmo"
        phoneHighlight="AI"
        bgImage="/assets/cozmo-vbg.png"
        bgVideo="/assets/hero.mp4"
        tall
      />

      {/* Company trust strip */}
      <LogoStrip />

      {/* Differentiators */}
      <Section id="product" aria-labelledby="diff-heading">
        <SectionHeading
          id="diff-heading"
          eyebrow="What you get"
          eyebrowTone="accent"
          title="Customer experience, actually delivered."
          intro="Five things that make Cozmo different from a chatbot or a call center."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-6">
          {DIFFERENTIATORS.map((d, i) => (
            <Card
              key={d.title}
              title={d.title}
              className={
                ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"][i]
              }
            >
              {d.desc}
            </Card>
          ))}
        </div>
      </Section>

      {/* Multimodal OS, dark band */}
      <Section tone="ink" id="case-studies" aria-labelledby="os-heading">
        <SectionHeading
          id="os-heading"
          dark
          eyebrow="The platform"
          eyebrowTone="accent"
          title="A multimodal AI operating system for regulated enterprises."
          intro="Voice, chat, and email, one agent, one operating system, governed end to end."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-4">
          {WORKFLOWS.map((w) => (
            <Card key={w.title} title={w.title} tone="dark">
              {w.desc}
            </Card>
          ))}
        </div>
        <div className="mt-20 border-t border-line-cream pt-16">
          <Coverage />
        </div>
      </Section>

      {/* APE, light band */}
      <Section tone="bg2" aria-labelledby="ape-heading">
        <SectionHeading
          id="ape-heading"
          eyebrow="APE"
          eyebrowTone="accent"
          title="The control layer behind every AI employee."
          intro="APE, the Agent Protocol Engine, coordinates the agents, enforces policy, and keeps every action governed, explainable, and auditable."
        />
        <div className="mt-12">
          <ApeSection />
        </div>
      </Section>

      {/* Live conversation, framed on nature */}
      <ChatShowcase
        title="Watch Cozmo handle a real claim."
        body="From first notice of loss to payment, Cozmo answers, dispatches help, sends the authorization, and files with the carrier, all in one conversation."
      />

      {/* Why Cozmo (SF) */}
      <WhyCozmo />

      {/* Problem / brand visual, dark band */}
      <BrandBand />

      {/* Testimonial + stats */}
      <Testimonial />

      {/* Audience cards, framed by a lush nature background */}
      <section
        id="company"
        aria-labelledby="audience-heading"
        className="bg-cover bg-center py-16 sm:py-28"
        style={{ backgroundImage: "url(/assets/lifesaver2.png)" }}
      >
        <div className="container-content">
          <div className="rounded-3xl border border-line-ink bg-cream/95 p-10 shadow-soft backdrop-blur-sm sm:p-16 lg:p-20">
            <h2
              id="audience-heading"
              className="max-w-3xl text-h2 [text-wrap:balance] text-ink_text-primary"
            >
              One platform, tuned to your side of the claim.
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {SITES.map((s) => (
                <AudienceCard
                  key={s.slug}
                  href={s.href}
                  title={s.title}
                  hook={s.hook}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certified, dark band */}
      <Section tone="ink" aria-labelledby="compliance-heading">
        <SectionHeading
          id="compliance-heading"
          dark
          eyebrow="Compliance"
          eyebrowTone="accent"
          title="Certified for the regions you operate in."
          intro="Cozmo aligns to the standards carriers and enterprises are held to, region by region."
        />
        <div className="mt-12">
          <Compliance tone="dark" />
        </div>
      </Section>

      {/* Final CTA, continues the dark zone */}
      <CtaSection />
    </>
  );
}
