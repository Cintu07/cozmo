"use client";

import { useEffect, useState } from "react";
import { useInView, usePrefersReducedMotion } from "./useInView";
import { MaskImage } from "./BrandMark";

export type ChatMessage = { from: "customer" | "agent"; text: string };

// PRD §3.4, the FNOL scene (it's literally insurance).
export const FNOL_SCRIPT: ChatMessage[] = [
  { from: "customer", text: "My basement just flooded" },
  { from: "agent", text: "I am so sorry. Tech is on the way" },
  { from: "customer", text: "How long?" },
  { from: "agent", text: "45 minutes. Sending auth to your phone" },
  { from: "customer", text: "Just signed it" },
  { from: "agent", text: "Filing your claim with the carrier now" },
  { from: "customer", text: "You handle insurance too?" },
  { from: "agent", text: "Yes. I'll track it to payment" },
];

function Avatar() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center self-end rounded-full bg-accent">
      <MaskImage
        src="/assets/cozmo-mark-clear.png"
        width={16}
        height={16}
        color="bg-white"
      />
    </span>
  );
}

function Bubble({ msg }: { msg: ChatMessage }) {
  const isAgent = msg.from === "agent";
  return (
    <div
      className={`flex items-end gap-2 ${isAgent ? "justify-start" : "justify-end"}`}
    >
      {isAgent && <Avatar />}
      <div
        className={`max-w-[78%] rounded-bubble px-4 py-3 text-sm leading-relaxed shadow-bubble ${
          isAgent
            ? "bg-ink-raised text-cream_text-body"
            : "bg-cream text-ink_text-primary"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <Avatar />
      <div className="flex items-center gap-1 rounded-lg bg-ink px-4 py-4">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-cream_text-muted"
            style={{ animationDelay: `${i * 160}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ChatDemo({
  script = FNOL_SCRIPT,
  label = "Example conversation",
}: {
  script?: ChatMessage[];
  label?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(script.length);
      return;
    }
    if (!inView || visible >= script.length) return;

    const next = script[visible];
    let typingTimer: ReturnType<typeof setTimeout>;

    if (next.from === "agent") {
      setTyping(true);
      typingTimer = setTimeout(() => setTyping(false), 700);
    }

    const revealTimer = setTimeout(
      () => setVisible((v) => v + 1),
      next.from === "agent" ? 1100 : 700
    );

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(typingTimer);
    };
  }, [inView, visible, script, reduced]);

  const shown = script.slice(0, visible);

  return (
    <div
      ref={ref}
      role="log"
      aria-label={label}
      className="w-full rounded-lg border border-line-cream bg-ink p-5 shadow-soft sm:p-6"
    >
      <div className="mb-4 flex items-center gap-2 border-b border-line-cream pb-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent">
          <MaskImage
            src="/assets/cozmo-mark-clear.png"
            width={16}
            height={16}
            color="bg-white"
          />
        </span>
        <span className="text-sm font-medium text-cream_text-primary">
          Cozmo agent
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-eyebrow uppercase text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Live
        </span>
      </div>

      {/* Fixed height: messages animate in without resizing the card, so the
          section never grows or jumps the page. */}
      <div className="flex h-[440px] flex-col justify-end gap-3 overflow-hidden">
        {shown.map((msg, i) => (
          <Bubble key={i} msg={msg} />
        ))}
        {typing && !reduced && <TypingIndicator />}
      </div>
    </div>
  );
}
