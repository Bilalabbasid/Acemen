import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Surface the header sits on. Drives text colour only. */
  tone?: "dark" | "light";
  align?: "center" | "left";
  /** Editorial index, e.g. "02". Rendered as a hairline-ruled marker. */
  index?: string;
  className?: string;
}

/**
 * The eyebrow / heading / subheading trio used at the top of most sections.
 * Centralised so the type scale and rhythm stay identical everywhere —
 * the sizes are fluid, so there are no breakpoint jumps to keep in sync.
 *
 * Alternate between `center` and `left` down a page: five identical centred
 * blocks in a row is what makes a layout read as generated rather than set.
 */
export default function SectionHeader({
  label,
  title,
  subtitle,
  tone = "dark",
  align = "center",
  index,
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <ScrollReveal>
      <div
        className={`${centered ? "text-center" : "text-left"} mb-12 sm:mb-16 ${className}`}
      >
        {/* Editorial marker — index over a hairline, left-aligned only */}
        {index && !centered && (
          <div
            className={`flex items-center gap-4 mb-6 ${
              dark ? "text-white/30" : "text-navy-800/25"
            }`}
          >
            <span className="font-display text-sm tabular-nums">{index}</span>
            <span
              className={`h-px flex-1 max-w-[7rem] ${
                dark ? "bg-white/10" : "bg-navy-900/10"
              }`}
              aria-hidden="true"
            />
          </div>
        )}

        {label && <span className="section-label">{label}</span>}

        <h2 className={dark ? "section-heading-light" : "section-heading"}>{title}</h2>

        {subtitle && (
          <p
            className={`mt-4 ${
              dark ? "section-subheading-light" : "section-subheading"
            } ${centered ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
