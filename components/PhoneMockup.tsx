"use client";

import { useRef, useState } from "react";
import { MaskImage } from "./BrandMark";

/**
 * iPhone-17–style interactive demo, modeled on the Cortex "Call me" mockup
 * (CEO requirement). Cozmo logo + "INTERACTIVE DEMO" + a call-me form with a
 * phone number, email, and an accent CALL ME button.
 *
 * Frontend-only: validates and shows a success state. // CEO connects backend later
 */
export function PhoneMockup({
  title = "Call Cozmo",
  highlight = "AI",
}: {
  title?: string;
  highlight?: string;
}) {
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const okRef = useRef<HTMLDivElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = ((data.get("phone") as string) || "").trim();
    const email = ((data.get("email") as string) || "").trim();
    const next: { phone?: string; email?: string } = {};
    if (!phone) next.phone = "Enter a phone number";
    else if (phone.replace(/[^\d]/g, "").length < 7)
      next.phone = "Enter a valid phone number";
    if (!email) next.email = "Enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email";
    setErrors(next);
    if (Object.keys(next).length) {
      form
        .querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)
        ?.focus();
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      requestAnimationFrame(() => okRef.current?.focus());
    }, 700);
  }

  return (
    <div className="mx-auto w-full max-w-[290px]">
      {/* Titanium frame (dark bezel, no bright outline) */}
      <div className="relative rounded-[2.6rem] bg-gradient-to-b from-[#272521] to-[#0d0c0a] p-[3px] shadow-phone">
        <div className="rounded-[2.45rem] bg-[#141310] p-1.5">
        {/* Side buttons: raised metallic crowns for realism */}
        <span
          aria-hidden="true"
          className="absolute -left-[2px] top-[96px] h-7 w-[4px] rounded-l-[3px] bg-[linear-gradient(to_right,#4c483f,#2a2722,#100f0c)] shadow-[0_1px_1.5px_rgba(0,0,0,0.6)]"
        />
        <span
          aria-hidden="true"
          className="absolute -left-[2px] top-[136px] h-12 w-[4px] rounded-l-[3px] bg-[linear-gradient(to_right,#4c483f,#2a2722,#100f0c)] shadow-[0_1px_1.5px_rgba(0,0,0,0.6)]"
        />
        <span
          aria-hidden="true"
          className="absolute -left-[2px] top-[194px] h-12 w-[4px] rounded-l-[3px] bg-[linear-gradient(to_right,#4c483f,#2a2722,#100f0c)] shadow-[0_1px_1.5px_rgba(0,0,0,0.6)]"
        />
        <span
          aria-hidden="true"
          className="absolute -right-[2px] top-[160px] h-16 w-[4px] rounded-r-[3px] bg-[linear-gradient(to_left,#4c483f,#2a2722,#100f0c)] shadow-[0_1px_1.5px_rgba(0,0,0,0.6)]"
        />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.1rem] bg-ink">
          {/* Ambient glow, neutral cream, on-brand (no orange inside). */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(120% 60% at 50% 0%, rgba(245,241,234,0.10), transparent 60%)",
            }}
          />
          {/* Status bar with dynamic island: time left, island center, icons right */}
          <div className="relative flex items-center justify-between px-6 pt-3 text-[13px] font-semibold tracking-tight text-cream_text-primary">
            <span className="tabular-nums w-14">9:41</span>
            {/* Dynamic Island */}
            <div className="flex h-7 w-24 items-center justify-end gap-2 rounded-pill bg-black pr-3">
              <span className="h-2 w-2 rounded-full bg-[#2a2a2a]" />
            </div>
            <span className="flex w-14 items-center justify-end gap-1.5" aria-hidden="true">
              {/* Cellular signal */}
              <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
                <rect x="0" y="7.5" width="3" height="3.5" rx="1" />
                <rect x="4.7" y="5.2" width="3" height="5.8" rx="1" />
                <rect x="9.4" y="2.7" width="3" height="8.3" rx="1" />
                <rect x="14.1" y="0" width="3" height="11" rx="1" />
              </svg>
              {/* Wi-Fi */}
              <svg width="16" height="11" viewBox="0 0 16 12" fill="currentColor">
                <path d="M8 1.2C5 1.2 2.2 2.3 0 4.3l1.5 1.55A9.4 9.4 0 0 1 8 3.1a9.4 9.4 0 0 1 6.5 2.75L16 4.3C13.8 2.3 11 1.2 8 1.2Z" />
                <path d="M8 5.4c-1.85 0-3.6.7-4.9 2l1.55 1.55A5.1 5.1 0 0 1 8 7.25c1.3 0 2.5.5 3.35 1.7L12.9 7.4A7 7 0 0 0 8 5.4Z" />
                <path d="M8 9.1 6.3 10.8a2.4 2.4 0 0 0 3.4 0L8 9.1Z" />
              </svg>
              {/* Battery */}
              <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                <rect x="0.6" y="0.6" width="21" height="10.8" rx="3" stroke="currentColor" opacity="0.4" />
                <rect x="2.1" y="2.1" width="16" height="7.8" rx="1.6" fill="currentColor" />
                <rect x="23" y="4" width="1.6" height="4" rx="0.8" fill="currentColor" opacity="0.5" />
              </svg>
            </span>
          </div>

          {/* Content */}
          <div className="relative px-7 pb-8 pt-10">
            <div className="flex justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line-cream bg-ink-raised">
                <MaskImage
                  src="/assets/cozmo-mark-clear.png"
                  width={34}
                  height={34}
                  color="bg-cream_text-primary"
                />
              </span>
            </div>

            {done ? (
              <div
                ref={okRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="mt-8 rounded-lg border border-line-cream-strong bg-ink-raised p-6 text-center outline-none"
              >
                <p className="font-display text-h4 text-cream_text-primary">
                  You&apos;re all set.
                </p>
                <p className="mt-2 text-sm text-cream_text-body">
                  Cozmo will call you in a few moments.
                </p>
              </div>
            ) : (
              <>
                <p className="mt-6 text-center text-eyebrow uppercase text-cream_text-muted">
                  Interactive demo
                </p>
                <h3 className="mt-2 text-center font-display text-[1.7rem] font-normal leading-tight text-cream_text-primary">
                  {title}
                  {highlight && (
                    <span className="text-cream_text-primary"> {highlight}</span>
                  )}
                </h3>

                <form onSubmit={onSubmit} noValidate className="mt-6 flex flex-col gap-3">
                  <div>
                    <label htmlFor="pm-phone" className="sr-only">
                      Phone number
                    </label>
                    <div className="flex items-center gap-2 rounded-lg border border-line-cream bg-ink-raised px-3 focus-within:border-cream_text-primary">
                      <span className="text-sm text-cream_text-muted">+1</span>
                      <input
                        id="pm-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        placeholder="Phone number"
                        aria-invalid={errors.phone ? true : undefined}
                        aria-describedby={errors.phone ? "pm-phone-err" : undefined}
                        className="w-full bg-transparent py-3 text-sm text-cream_text-primary placeholder:text-cream_text-muted focus:outline-none"
                      />
                    </div>
                    {errors.phone && (
                      <p id="pm-phone-err" className="mt-1.5 text-xs text-[#E8917F]">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="pm-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="pm-email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? "pm-email-err" : undefined}
                      className="w-full rounded-lg border border-line-cream bg-ink-raised px-3 py-3 text-sm text-cream_text-primary placeholder:text-cream_text-muted focus:border-cream_text-primary focus:outline-none"
                    />
                    {errors.email && (
                      <p id="pm-email-err" className="mt-1.5 text-xs text-[#E8917F]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    aria-busy={loading || undefined}
                    disabled={loading}
                    className="mt-1 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-cream px-6 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-base hover:bg-cream/90 focus-visible:shadow-focus disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                    {loading ? "Calling" : "Call me"}
                  </button>
                </form>

                <p className="mt-4 text-center text-[11px] leading-relaxed text-cream_text-muted">
                  * By clicking &lsquo;Call me&rsquo; you agree to receive calls
                  and texts at the number provided. Standard rates apply.
                </p>
              </>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
