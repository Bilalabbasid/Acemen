import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CTASection from "./CTASection";
import GradientOrb from "./GradientOrb";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Category {
  name: string;
  desc: string;
  icon?: React.ReactNode;
}

interface VentureDetailProps {
  ventureNumber: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  accentColor: string;
  heroIcon: React.ReactNode;
  heroImage: string;
  categories: Category[];
  categoriesTitle: string;
  categoriesSubtitle: string;
  categoriesLabel: string;
  features: Feature[];
  featuresTitle: string;
  featuresLabel: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
}

export default function VentureDetailLayout({
  ventureNumber,
  title,
  subtitle,
  heroDescription,
  accentColor,
  heroIcon,
  heroImage,
  categories,
  categoriesTitle,
  categoriesSubtitle,
  categoriesLabel,
  features,
  featuresTitle,
  featuresLabel,
  testimonialQuote,
  testimonialAuthor,
  ctaTitle,
  ctaDescription,
  ctaPrimaryLabel,
}: VentureDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden gradient-hero">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <GradientOrb color="gold" size="md" className="-top-32 -right-32 opacity-40" />

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] mb-6">
                <span className="font-medium text-sm tracking-wide" style={{ color: accentColor }}>
                  Venture {ventureNumber} — {title}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-balance">
                {subtitle}
              </h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8 max-w-lg">
                {heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-gold group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/ventures" className="btn-outline">
                  All Ventures
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-premium-xl">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}20 0%, transparent 60%)`,
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-28 gradient-section-light relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-light opacity-30" aria-hidden="true" />
        <div className="container-page relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">{categoriesLabel}</span>
              <h2 className="section-heading mb-4">{categoriesTitle}</h2>
              <p className="section-subheading mx-auto">{categoriesSubtitle}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 100}>
                <div className="card-premium p-6 text-center h-full group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${accentColor}10`,
                      color: accentColor,
                    }}
                  >
                    {cat.icon || heroIcon}
                  </div>
                  <h3 className="font-bold text-navy-800 mb-2">{cat.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">{featuresLabel}</span>
              <h2 className="section-heading mb-4">{featuresTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="text-center group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${accentColor}10`,
                      color: accentColor,
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-navy-800 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
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
              <blockquote className="text-xl sm:text-2xl font-medium text-navy-800 mb-6 leading-relaxed">
                &ldquo;{testimonialQuote}&rdquo;
              </blockquote>
              <div className="gold-line-wide mx-auto mb-4" />
              <p className="text-gray-400 text-sm">
                — {testimonialAuthor}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20 sm:pb-28">
        <CTASection
          title={ctaTitle}
          description={ctaDescription}
          primaryHref="/contact"
          primaryLabel={ctaPrimaryLabel}
          variant="navy"
        />
      </section>
    </>
  );
}
