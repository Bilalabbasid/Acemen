"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Code2,
  Footprints,
  Ticket,
  ArrowRight,
  Sparkles,
  Shield,
  TrendingUp,
  Heart,
  Globe,
  Zap,
  Award,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import VentureCard from "@/components/VentureCard";
import ScrollReveal from "@/components/ScrollReveal";
import StatsStrip from "@/components/StatsStrip";
import CTASection from "@/components/CTASection";
import PartnersLogos from "@/components/PartnersLogos";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import IndustryGrid from "@/components/IndustryGrid";
import GradientOrb from "@/components/GradientOrb";
import SectionHeader from "@/components/SectionHeader";

const ventures = [
  {
    title: "Curated Digital Commerce",
    description:
      "Acemen Emporium — our direct-to-consumer commerce house, pairing an impeccably curated marketplace with white-glove fulfilment for a discerning global clientele.",
    href: "/ventures/e-commerce",
    accentColor: "#b08d57",
    icon: <ShoppingBag className="w-6 h-6" />,
    image: "/images/ecommerce.png",
  },
  {
    title: "Enterprise Architecture & AI",
    description:
      "Acemen Digital — we engineer proprietary AI, cloud frameworks, and enterprise-grade software ecosystems that keep industry leaders permanently ahead of the market.",
    href: "/ventures/it-solutions",
    accentColor: "#7d8ca3",
    icon: <Code2 className="w-6 h-6" />,
    image: "/images/it-solutions.jpg",
  },
  {
    title: "Sartorial Leather & Footwear",
    description:
      "Acre & Hide — a maison of fine leather goods. Handcrafted footwear, shoes and leather, jackets, wallets, and belts, sculpted from the world's most exceptional hides.",
    href: "/ventures/shoes",
    accentColor: "#9c6b45",
    icon: <Footprints className="w-6 h-6" />,
    image: "/images/leather.png",
  },
  {
    title: "Global Concierge & Mobility",
    description:
      "Ascend — a private concierge for the world's most coveted events and bespoke travel, delivering first-tier access and seamless mobility logistics.",
    href: "/ventures/ticketing-travel",
    accentColor: "#6f8778",
    icon: <Ticket className="w-6 h-6" />,
    image: "/images/travel.png",
  },
];

const whyChooseUs = [
  {
    icon: <Award className="w-6 h-6 text-gold-400" />,
    title: "Generational Track Record",
    desc: "Sustained, compounding growth across every vertical — governed by seasoned leadership and disciplined, data-informed judgement.",
  },
  {
    icon: <Shield className="w-6 h-6 text-gold-400" />,
    title: "Sovereign Reliability",
    desc: "We operate with absolute institutional integrity, cultivating enduring alliances with partners, principals, and stakeholders.",
  },
  {
    icon: <Zap className="w-6 h-6 text-gold-400" />,
    title: "Vanguard Innovation",
    desc: "Proprietary AI, cloud, and automation frameworks ensure our assets permanently outpace market shifts.",
  },
  {
    icon: <Globe className="w-6 h-6 text-gold-400" />,
    title: "Global Reach",
    desc: "We operate across international markets with native fluency, serving principals and clients in 15+ countries.",
  },
  {
    icon: <Heart className="w-6 h-6 text-gold-400" />,
    title: "Uncompromising Craft",
    desc: "Every product and service is engineered around the client — exceeding expectation at every considered touchpoint.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-gold-400" />,
    title: "Generational Scalability",
    desc: "Our ventures are architected to scale — from local exclusivity to dominant global operations, sustainably.",
  },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroBgY = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-navy-950 text-white min-h-screen">
      {/* ==================== HERO ==================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div
          style={{ y: heroBgY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <GradientOrb color="gold" size="xl" className="-top-40 -right-40 opacity-70" />
          <GradientOrb color="navy" size="lg" className="-bottom-32 -left-32 opacity-80" />
          <GradientOrb color="emerald" size="md" className="top-1/3 -left-20 opacity-30" />
          <GradientOrb color="blue" size="md" className="bottom-1/4 right-10 opacity-30" />
        </motion.div>

        {/* Floating Wireframe Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-page relative z-10 py-32 flex flex-col items-center">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 shadow-glow-gold/10"
            >
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-300 font-bold text-xs tracking-[0.25em] uppercase">
                A Private UK Holding House — Est. London
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-heading mb-8"
            >
              Architecting the Future of<br className="hidden sm:block" />{" "}
              Commerce, <span className="gradient-gold-text">Luxury</span>, and Technology
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300/80 text-base sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
            >
              Acemen Ventures is a premier sovereign holding group. We acquire, build, and
              scale world-class enterprises across high-growth digital ecosystems, artisanal
              luxury retail, and elite global infrastructure.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link href="/ventures" className="btn-gold text-xs sm:text-sm !py-4 !px-9 tracking-wider uppercase font-black group">
                Explore the Portfolio
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 inline" />
              </Link>
              <Link href="/about" className="btn-outline text-xs sm:text-sm !py-4 !px-9 tracking-wider uppercase font-bold border-white/20 hover:border-white/40">
                The Institution
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-gold-400" />
          </motion.div>
        </div>
      </section>

      {/* ==================== PARTNERS LOGOS ==================== */}
      <section className="py-16 sm:py-20 bg-navy-950 border-y border-white/5 relative">
        <div className="container-page">
          <ScrollReveal>
            <p className="text-center text-xs text-gray-400/80 font-black tracking-[0.3em] uppercase mb-10">
              Trusted by Industry Leaders Worldwide
            </p>
          </ScrollReveal>
          <PartnersLogos />
        </div>
      </section>

      {/* ==================== COMPANY INTRODUCTION ==================== */}
      <section className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
        <GradientOrb color="gold" size="lg" className="-top-40 -right-40 opacity-15" />
        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="scale">
                <div className="relative rounded-3xl overflow-hidden shadow-premium-xl border border-white/10 group">
                  <img
                    src="/images/corporate-hq.png"
                    alt="Corporate Headquarters"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* Extra visual design details */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-3xl bg-gold-500/10 -z-10 blur-xl" aria-hidden="true" />
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl border border-gold-500/20 -z-10" aria-hidden="true" />

                {/* Floating metrics badge */}
                <div className="absolute bottom-6 left-6 glass rounded-2xl p-5 shadow-2xl border border-white/10">
                  <p className="text-3xl font-display font-semibold text-white leading-none">London</p>
                  <p className="text-[10px] font-bold tracking-widest text-gold-400 uppercase mt-2">Global Headquarters</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Text side */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right">
                <span className="section-label">The Manifesto</span>
                <h2 className="section-heading-light mb-8">
                  The Pursuit of<br />
                  <span className="gradient-gold-text">Absolute</span> Standard
                </h2>
                <div className="space-y-6 text-gray-300/80 text-[15px] sm:text-base leading-relaxed font-medium">
                  <p>
                    We believe true value is created at the intersection of heritage
                    craftsmanship and modern digital intelligence. Whether engineering
                    enterprise software platforms or sculpting fine leather goods, our
                    businesses operate under a singular ethos: uncompromising execution
                    and generational scalability.
                  </p>
                  <p>
                    By blending centralised capital, sophisticated technical infrastructure,
                    and elite operational leadership, we transition emerging concepts into
                    dominant global operations — each anchored to a heritage of trust.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-5 items-center">
                  <Link href="/about" className="btn-primary group !py-4 !px-8">
                    The Institution
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link href="/ventures" className="text-gold-400 hover:text-gold-300 font-bold text-sm tracking-wider uppercase flex items-center gap-1.5 transition-colors duration-300">
                    Explore the Portfolio <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VENTURES ==================== */}
      <section className="py-24 sm:py-32 bg-navy-950/50 relative overflow-hidden">
        <GradientOrb color="blue" size="xl" className="-bottom-40 -left-40 opacity-15" />
        <div className="container-page relative z-10">
          <SectionHeader
            label="The Portfolio"
            title="Four Houses, One Standard"
            subtitle="Four category-defining enterprises, each governed by a single, uncompromising pursuit of the absolute standard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {ventures.map((venture, i) => (
              <ScrollReveal key={venture.href} delay={i * 120} direction="scale">
                <VentureCard {...venture} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-16">
              <Link href="/ventures" className="btn-outline border-white/15 text-white hover:bg-white hover:text-navy-950 group">
                Explore Full Portfolio
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STATS STRIP ==================== */}
      <StatsStrip />

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" aria-hidden="true" />
        <div className="container-page relative z-10">
          <SectionHeader
            label="The Acemen Advantage"
            title="Engineered for Prestige"
            subtitle="Why principals, institutions, and enterprise partners choose to build alongside Acemen Ventures."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={Math.min(i, 3) * 70}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="relative h-full overflow-hidden rounded-3xl p-7 sm:p-8 glass border border-white/10 hover:border-gold-500/30 transition-colors duration-500 group"
                >
                  {/* Index watermark */}
                  <span
                    className="absolute top-5 right-6 font-display text-5xl font-semibold text-white/[0.05] leading-none select-none transition-colors duration-500 group-hover:text-gold-500/10"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.06] flex items-center justify-center mb-6 border border-white/[0.07] transition-all duration-500 group-hover:bg-gold-500/10 group-hover:border-gold-500/25 group-hover:scale-105">
                      {item.icon}
                    </div>

                    <h3 className="font-heading font-bold text-white mb-3 tracking-wide text-lg sm:text-xl text-balance">
                      {item.title}
                    </h3>

                    <p className="text-gray-300/70 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Base glow on hover */}
                  <span
                    className="absolute inset-x-8 -bottom-px h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="py-24 sm:py-32 bg-navy-950/40 relative">
        <div className="container-page">
          <SectionHeader
            label="Spheres of Influence"
            title="The Markets We Shape"
            subtitle="Deepening our authority across high-value sectors, bringing craftsmanship and intelligence wherever we build."
          />
          <IndustryGrid />
        </div>
      </section>

      {/* ==================== PROCESS TIMELINE ==================== */}
      <section className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
        <GradientOrb color="gold" size="lg" className="-top-40 -left-40 opacity-10" />
        <div className="container-page relative z-10">
          <SectionHeader
            label="The Blueprint"
            title="From Vision to Market Authority"
            subtitle="Our disciplined methodology for identifying, incubating, and scaling enterprises into global standard-bearers."
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 sm:py-32 bg-navy-950/60 relative overflow-hidden">
        <GradientOrb color="emerald" size="md" className="-bottom-20 -right-20 opacity-15" />
        <div className="container-page relative z-10">
          <SectionHeader
            label="In Confidence"
            title="Trusted by the Discerning"
            subtitle="Reflections from co-investors, enterprise principals, and private clients."
          />
          <TestimonialCard />
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="container-page pb-24 sm:pb-32">
        <CTASection
          title="Initiate an Alliance"
          description="Whether you seek to co-invest, scale a venture, or access our houses, our London office is ready to facilitate your inquiry with absolute discretion."
          primaryHref="/contact"
          primaryLabel="Transmit Secure Inquiry"
          secondaryHref="/ventures"
          secondaryLabel="Explore the Portfolio"
        />
      </section>
    </div>
  );
}
