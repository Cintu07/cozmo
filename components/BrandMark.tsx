/**
 * The brand logo + mark ship as black artwork on transparent PNGs. On our dark
 * surfaces we render them via CSS mask filled with a brand token, so they take
 * the exact cream color and stay crisp at any size (no invert hacks, no halos).
 */
export function MaskImage({
  src,
  width,
  height,
  className = "",
  color = "bg-ink_text-primary",
  ariaLabel,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
  color?: string;
  ariaLabel?: string;
}) {
  return (
    <span
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={`${color} ${className} inline-block shrink-0 transition-colors duration-base`}
      style={{
        width,
        height,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
