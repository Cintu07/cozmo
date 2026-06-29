import Image from "next/image";

// APE: the control layer behind every AI employee. Text first, image below.
// Descriptions are kept to ~3 lines each for an even row.
const PILLARS = [
  {
    img: "/assets/ape-knowledge.png",
    title: "Company-level knowledge",
    desc: "Cozmo reads your documents, policies, and systems so every answer reflects how your business actually operates.",
  },
  {
    img: "/assets/ape-industry.png",
    title: "Industry-specific logic",
    desc: "Insurance workflows are built in: FNOL, triage, coverage rules, and escalation paths your regulators expect.",
  },
  {
    img: "/assets/ape-guardrails.png",
    title: "Deterministic guardrails",
    desc: "Hard rules constrain what Cozmo can say and do, with a full audit trail, so every outcome stays reviewable.",
  },
];

export function ApeSection() {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {PILLARS.map((p) => (
        <div key={p.title} className="flex flex-col">
          <h3 className="text-h4 font-semibold text-ink_text-primary">
            {p.title}
          </h3>
          <p className="mt-3 text-body text-ink_text-body">{p.desc}</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line-ink bg-paper">
            <Image
              src={p.img}
              alt=""
              width={858}
              height={724}
              className="h-auto w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
