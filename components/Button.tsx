import Link from "next/link";
import { forwardRef } from "react";

type Variant = "primary" | "accent" | "dark" | "light" | "secondary" | "ghost";
type Tone = "light" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold text-sm min-h-[44px] px-6 transition-all duration-base ease-brand focus-visible:shadow-focus active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none";

function variantClasses(variant: Variant, tone: Tone) {
  switch (variant) {
    case "accent":
    case "primary":
      // Primary action = terracotta accent with light text (design system).
      return "bg-accent text-cream hover:bg-accent-hover";
    case "dark":
      // Solid ink button (navbar CTA, matches the live site).
      return "bg-ink text-cream hover:bg-ink/90";
    case "light":
      // Solid cream button for dark bands.
      return "bg-cream text-ink hover:bg-cream/90";
    case "secondary":
      return tone === "dark"
        ? "border border-line-cream-strong text-cream_text-primary hover:border-cream_text-primary"
        : "border border-line-ink-strong text-ink_text-primary hover:border-ink_text-primary";
    case "ghost":
      return tone === "dark"
        ? "text-cream_text-primary hover:text-cream_text-body"
        : "text-ink_text-primary hover:text-ink_text-body";
  }
}

export function buttonClasses(
  variant: Variant = "primary",
  tone: Tone = "light",
  extra = ""
) {
  return `${base} ${variantClasses(variant, tone)} ${extra}`;
}

type CommonProps = {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

export function LinkButton({
  href,
  external,
  variant = "primary",
  tone = "light",
  className = "",
  children,
}: LinkButtonProps) {
  const cls = buttonClasses(variant, tone, className);
  const isExternal = external || href.startsWith("http");
  if (isExternal || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      tone = "light",
      className = "",
      loading,
      children,
      disabled,
      ...rest
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={buttonClasses(variant, tone, className)}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && (
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current"
          />
        )}
        {children}
      </button>
    );
  }
);
