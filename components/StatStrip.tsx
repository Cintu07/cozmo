"use client";

import { useEffect, useState } from "react";
import { useInView, usePrefersReducedMotion } from "./useInView";

type Stat = {
  value: number | null;
  prefix?: string;
  suffix?: string;
  display: string;
  label: string;
};

// PRD §3.5
const DEFAULT_STATS: Stat[] = [
  { value: 1, suffix: "M+", display: "1M+", label: "AI calls handled" },
  { value: 10, suffix: "M+", display: "10M+", label: "Customer interactions" },
  { value: null, display: "Fortune 100s", label: "Trusted by" },
];

function CountUp({ stat, run }: { stat: Stat; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run || stat.value === null) return;
    const target = stat.value;
    const duration = 450;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.value]);

  if (stat.value === null) return <>{stat.display}</>;
  return (
    <>
      {stat.prefix ?? ""}
      {n}
      {stat.suffix ?? ""}
    </>
  );
}

export function StatStrip({
  stats = DEFAULT_STATS,
  tone = "light",
}: {
  stats?: Stat[];
  tone?: "light" | "dark";
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const run = inView && !reduced;
  const dark = tone === "dark";

  return (
    <div ref={ref} className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
      {stats.map((s) => (
        <div key={s.label} className="text-center sm:text-left">
          <div
            className={`font-display font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-none ${
              dark ? "text-cream_text-primary" : "text-ink_text-primary"
            }`}
          >
            {reduced ? s.display : <CountUp stat={s} run={run} />}
          </div>
          <div
            className={`mt-3 text-eyebrow uppercase ${
              dark ? "text-cream_text-muted" : "text-ink_text-muted"
            }`}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
