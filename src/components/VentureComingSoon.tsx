import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import GradientOrb from "./GradientOrb";

/**
 * Holding screen for ventures that are not yet publicly detailed.
 * Set `comingSoon: false` on a venture in `src/data/ventures.ts` to
 * publish its full detail page instead.
 */
export default function VentureComingSoon() {
  return (
    <div className="relative min-h-[75vh] flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-navy-950">
      <div className="absolute inset-0 dot-pattern opacity-25" aria-hidden="true" />
      <GradientOrb color="gold" size="lg" className="-top-32 -right-32 opacity-40" />
      <GradientOrb color="navy" size="md" className="-bottom-20 -left-20 animate-pulse" />

      <div className="relative z-10 text-center max-w-md mx-auto">
        <ScrollReveal>
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
              src="/images/logo.png"
              alt="Acemen Ventures"
              className="h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(201,168,76,0.4)]"
            />
            <div className="flex flex-col text-left">
              <span className="font-heading font-black text-2xl tracking-[0.2em] text-white leading-none">
                ACEMEN
              </span>
              <span className="font-heading font-bold text-xs tracking-[0.3em] text-gold-400 mt-1.5 leading-none">
                VENTURES
              </span>
            </div>
          </div>

          <h1 className="display-heading text-4xl sm:text-5xl text-white mb-4 tracking-wide uppercase">
            Coming Soon
          </h1>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />

          <Link
            href="/ventures"
            className="btn-outline border-white/20 hover:border-white/40 text-xs tracking-widest font-black uppercase"
          >
            Return to Portfolio
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
