import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Surface the header sits on. Drives text colour only. */
  tone?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
}

/**
 * The eyebrow / heading / subheading trio used at the top of most sections.
 * Centralised so the type scale and rhythm stay identical everywhere —
 * the sizes are fluid, so there are no breakpoint jumps to keep in sync.
 */
export default function SectionHeader({
  label,
  title,
  subtitle,
  tone = "dark",
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <ScrollReveal>
      <div
        className={`${centered ? "text-center" : "text-left"} mb-12 sm:mb-16 ${className}`}
      >
        {label && <span className="section-label">{label}</span>}

        <h2 className={tone === "dark" ? "section-heading-light" : "section-heading"}>
          {title}
        </h2>

        {subtitle && (
          <p
            className={`mt-4 ${
              tone === "dark" ? "section-subheading-light" : "section-subheading"
            } ${centered ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
