import Link from "next/link";
import { MaskImage } from "./BrandMark";

/**
 * Brand lockup, official "Cozmo AI" wordmark. Source art is black-on-transparent
 * (485×84). Rendered via mask so it takes the right token per surface:
 * ink on light, cream on dark. Identical across all four sites.
 */
export function Logo({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      aria-label="Cozmo AI home"
      className={`inline-flex items-center rounded-pill ${className}`}
    >
      <MaskImage
        src="/assets/cozmo-logo-clear.png"
        width={150}
        height={26}
        color={tone === "dark" ? "bg-cream_text-primary" : "bg-ink_text-primary"}
        ariaLabel="Cozmo AI"
      />
    </Link>
  );
}
