import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CTASection from "./CTASection";
import GradientOrb from "./GradientOrb";
import VentureIcon from "./VentureIcon";
import type { VentureDetail } from "@/data/ventures";

interface VentureDetailProps {
  venture: VentureDetail;
}

export default function VentureDetailLayout({ venture }: VentureDetailProps) {
  // Prevent unused variable warning while preserving the original code in comments
  const _unused = venture;

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

          {/* Coming Soon Text */}
          <h1 className="display-heading text-4xl sm:text-5xl text-white mb-4 tracking-wide uppercase">
            Coming Soon
          </h1>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />

          <Link href="/ventures" className="btn-outline border-white/20 hover:border-white/40 text-xs tracking-widest font-black uppercase">
            Return to Portfolio
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );

  /* Original Layout Commented Out
  return (
    <>
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden gradient-hero">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <GradientOrb color="gold" size="md" className="-top-32 -right-32 opacity-40" />

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] mb-6">
                <span className="font-medium text-sm tracking-wide" style={{ color: venture.accentColor }}>
                  Venture {venture.ventureNumber} - {venture.title}
                </span>
              </div>
              <h1 className="display-heading text-[2.6rem] sm:text-6xl lg:text-7xl text-white mb-6 text-balance leading-[1.05]">
                {venture.subtitle}
              </h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8 max-w-lg">
                {venture.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-gold group">
                  Request Private Access
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/ventures" className="btn-outline">
                  The Portfolio
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-premium-xl">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${venture.accentColor}20 0%, transparent 60%)`,
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 gradient-section-light relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-light opacity-30" aria-hidden="true" />
        <div className="container-page relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">{venture.categoriesLabel}</span>
              <h2 className="section-heading mb-4">{venture.categoriesTitle}</h2>
              <p className="section-subheading mx-auto">{venture.categoriesSubtitle}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {venture.categories.map((category, i) => (
              <ScrollReveal key={category.name} delay={i * 100}>
                <div className="card-premium p-6 text-center h-full group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${venture.accentColor}10`,
                      color: venture.accentColor,
                    }}
                  >
                    <VentureIcon name={category.icon} />
                  </div>
                  <h3 className="font-bold text-navy-800 mb-2">{category.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{category.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">{venture.differentiatorsLabel}</span>
              <h2 className="section-heading mb-4">{venture.differentiatorsTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {venture.differentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="text-center group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${venture.accentColor}10`,
                      color: venture.accentColor,
                    }}
                  >
                    <VentureIcon name={item.icon} />
                  </div>
                  <h3 className="font-bold text-navy-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 gradient-section-light relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-light opacity-30" aria-hidden="true" />
        <div className="container-page max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="card-premium p-10 sm:p-14">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <blockquote className="font-display text-2xl sm:text-3xl italic font-medium text-navy-800 mb-6 leading-snug">
                &ldquo;{venture.testimonialQuote}&rdquo;
              </blockquote>
              <div className="gold-line-wide mx-auto mb-4" />
              <p className="text-gray-400 text-sm">- {venture.testimonialAuthor}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <CTASection
          title={venture.ctaTitle}
          description={venture.ctaDescription}
          primaryHref="/contact"
          primaryLabel={venture.ctaPrimaryLabel}
          variant="navy"
        />
      </section>
    </>
  );
  */
}
