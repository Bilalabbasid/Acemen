import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "navy" | "white" | "gold";
}

export default function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = "navy",
}: CTASectionProps) {
  const isDark = variant === "navy";

  return (
    <section
      className={`rounded-3xl border p-8 text-center shadow-premium sm:p-12 ${
        isDark
          ? "border-white/10 bg-navy-950 text-white"
          : "border-black/5 bg-white text-navy-950"
      }`}
    >
      <h2 className="display-heading mx-auto max-w-3xl text-4xl sm:text-5xl">{title}</h2>
      <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={primaryHref} variant={isDark ? "gold" : "dark"}>
          {primaryLabel}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
        {secondaryHref && secondaryLabel && (
          <Button href={secondaryHref} variant={isDark ? "outline" : "primary"}>
            {secondaryLabel}
          </Button>
        )}
      </div>
    </section>
  );
}
