import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  if (variant === "navy") {
    return (
      <section className="relative rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* Floating orbs */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-500/[0.06] blur-3xl animate-float" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-500/[0.04] blur-3xl animate-float-reverse" aria-hidden="true" />

        {/* Gold border glow */}
        <div className="absolute inset-0 rounded-3xl border border-gold-500/10" />

        <div className="relative z-10 py-16 sm:py-24 text-center max-w-3xl mx-auto px-6">
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-5 text-balance">
            {title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryHref} className="btn-gold group">
              {primaryLabel}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="text-gray-400 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-1 group"
              >
                {secondaryLabel}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  // White & gold variants
  const bgClass =
    variant === "gold"
      ? "bg-gradient-to-br from-gold-500 to-gold-600"
      : "bg-white border border-gray-100 shadow-premium";

  const titleColor = variant === "gold" ? "text-navy-900" : "text-navy-800";
  const descColor = variant === "gold" ? "text-navy-700" : "text-gray-500";

  return (
    <section className={`py-16 sm:py-20 rounded-3xl ${bgClass}`}>
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className={`section-heading mb-4 ${titleColor}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 ${descColor}`}>{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className={variant === "gold" ? "btn-primary" : "btn-gold"}>
            {primaryLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className={`font-medium text-sm transition-colors ${
                variant === "gold"
                  ? "text-navy-700 hover:text-navy-900"
                  : "text-gray-500 hover:text-navy-700"
              } flex items-center gap-1`}
            >
              {secondaryLabel}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
