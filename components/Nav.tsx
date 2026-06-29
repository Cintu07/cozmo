"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { LinkButton } from "./Button";
import { CAL_LINK, NAV_LINKS } from "@/lib/site";

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-0.5 opacity-60 transition-transform duration-base ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function DesktopItem({
  item,
}: {
  item: (typeof NAV_LINKS)[number];
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const openMenu = () => {
    cancelClose();
    setOpen(true);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => cancelClose(), []);

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        className="inline-flex items-center gap-1.5 py-2 text-sm font-medium text-ink_text-primary transition-colors duration-instant hover:text-accent"
      >
        {item.label}
        <Caret open={open} />
      </Link>
      {/* Dropdown */}
      <div
        className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 transition-all duration-base ease-brand ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="rounded-lg border border-line-ink bg-paper p-2 shadow-soft">
          {item.children.map((c) => (
            <Link
              key={c.href + c.label}
              href={c.href}
              className="block rounded-sm px-3 py-2 text-sm text-ink_text-body transition-colors duration-instant hover:bg-cream hover:text-ink_text-primary"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const overlay = overlayRef.current;
    const focusables = overlay?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusables?.[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && focusables && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-cream transition-shadow duration-base ${
        scrolled ? "border-line-ink shadow-soft" : "border-line-ink/60"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-content relative flex h-[72px] items-center justify-between gap-4"
      >
        <Logo />

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {NAV_LINKS.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </div>

        <div className="hidden lg:block">
          <LinkButton href={CAL_LINK} external variant="dark">
            Book a demo
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </LinkButton>
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink_text-primary lg:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          ref={overlayRef}
          id="mobile-menu"
          className="fixed inset-0 top-[72px] z-40 flex flex-col gap-1 overflow-y-auto bg-cream px-6 py-8 lg:hidden"
        >
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="border-b border-line-ink py-2">
              <Link
                href={item.href}
                className="block py-2 text-h4 text-ink_text-primary"
              >
                {item.label}
              </Link>
              <div className="flex flex-col">
                {item.children.map((c) => (
                  <Link
                    key={c.href + c.label}
                    href={c.href}
                    className="py-2 pl-1 text-sm text-ink_text-body"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-6">
            <LinkButton href={CAL_LINK} external variant="dark" className="w-full">
              Book a demo
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
