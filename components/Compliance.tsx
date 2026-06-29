// Region groups with serif headings + mono compliance tags (matches live site).
const REGIONS = [
  { region: "USA", tags: ["SOC 2 Type I", "HIPAA", "TCPA", "FDCPA"] },
  { region: "EU & UK", tags: ["GDPR", "UK DPA", "ICO-registered"] },
  { region: "GCC", tags: ["NESA", "SAMA-aligned", "DIFC DPL"] },
  { region: "India", tags: ["RBI-aligned", "DPDPA", "TRAI DLT"] },
  { region: "South Africa", tags: ["POPIA", "FSCA-aligned"] },
];

export function Compliance({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {REGIONS.map((r) => (
        <div
          key={r.region}
          className={`rounded-2xl border p-6 ${
            dark ? "border-line-cream bg-ink-raised" : "border-line-ink bg-paper"
          }`}
        >
          <p
            className={`font-display text-[1.35rem] leading-none ${
              dark ? "text-cream_text-primary" : "text-ink_text-primary"
            }`}
          >
            {r.region}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {r.tags.map((t) => (
              <li
                key={t}
                className={`rounded-md border px-2.5 py-1 text-mono-sm uppercase ${
                  dark
                    ? "border-line-cream-strong text-cream_text-body"
                    : "border-line-ink-strong text-ink_text-body"
                }`}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
