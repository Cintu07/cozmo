import Image from "next/image";

/**
 * Coverage / map (PRD §3.10). Lives on a dark band. Decorative map (alt=""),
 * real stat in text.
 */
export function Coverage({
  title = "Local numbers in 80+ countries.",
  body = "Fluent in 80+ languages, with code-switching mid-call, so every customer is met in their own language, on their own channel.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="max-w-xl">
        <h2 className="text-h2 [text-wrap:balance] text-cream_text-primary">{title}</h2>
        <p className="mt-5 text-body-lg text-cream_text-body">{body}</p>
        <p className="mt-8 text-sm font-medium text-cream_text-primary">
          Live coverage · 6 continents · 80+ countries
        </p>
      </div>
      <div className="relative">
        <Image
          src="/assets/world-map.svg"
          alt=""
          width={1400}
          height={720}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
