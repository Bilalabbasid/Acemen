"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Code2,
  Footprints,
  Ticket,
  ArrowRight,
  Globe,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import GradientOrb from "@/components/GradientOrb";

const ventures = [
  {
    title: "E-Commerce",
    tagline: "Online Retail & D2C Products",
    description:
      "Our direct-to-consumer online retail business offers curated products across multiple categories with seamless shopping experiences, fast fulfilment, and global delivery capabilities.",
    href: "/ventures/e-commerce",
    accentColor: "#3b82f6",
    icon: <ShoppingBag className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: [
      "Curated product selection",
      "Seamless checkout experience",
      "Global shipping & logistics",
      "Customer-first returns policy",
    ],
  },
  {
    title: "IT Solutions",
    tagline: "Software, AI & Consulting",
    description:
      "Full-stack software development, web and mobile app creation, AI & automation solutions, and strategic IT consulting — empowering businesses with technology that drives results.",
    href: "/ventures/it-solutions",
    accentColor: "#06b6d4",
    icon: <Code2 className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    features: [
      "Custom software development",
      "AI & automation solutions",
      "Web & mobile app development",
      "Strategic IT consulting",
    ],
  },
  {
    title: "Shoes Business",
    tagline: "Modern Footwear Brand",
    description:
      "A contemporary footwear brand that blends style, comfort, and craftsmanship. Designed for everyday excellence — from casual wear to performance-driven designs.",
    href: "/ventures/shoes",
    accentColor: "#a855f7",
    icon: <Footprints className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    features: [
      "Premium craftsmanship",
      "Comfort-first design",
      "Sustainable materials",
      "Versatile collections",
    ],
  },
  {
    title: "Ticketing & Travel",
    tagline: "Events & Travel Services",
    description:
      "A comprehensive platform for event ticketing and travel booking — from concerts and sports to flights, hotels, and curated travel experiences worldwide.",
    href: "/ventures/ticketing-travel",
    accentColor: "#f59e0b",
    icon: <Ticket className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    features: [
      "Event ticketing platform",
      "Travel booking & planning",
      "Curated experiences",
      "24/7 customer support",
    ],
  },
];

const advantages = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Diversified Portfolio",
    desc: "Four independent ventures across high-growth sectors provide stability and cross-pollination of ideas.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Shared Infrastructure",
    desc: "Centralised resources, technology, and expertise benefit every venture under our umbrella.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Expert Leadership",
    desc: "Each venture is led by specialists who bring deep domain knowledge and operational excellence.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Scalable Model",
    desc: "Our ventures are built to scale — from local markets to global operations with sustainable growth.",
  },
];

export default function VenturesPageClient() {
  return (
    <>
      {/* Page Header */}
      <section className="relative gradient-hero pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <GradientOrb color="gold" size="lg" className="-top-32 -right-32 opacity-50" />
        <GradientOrb color="navy" size="md" className="-bottom-20 -left-20" />

        <div className="container-page text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] mb-6">
              <span className="text-gold-400 font-medium text-sm tracking-wide">Our Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-balance">
              Our Ventures
            </h1>
            <p className="text-lg sm:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Four distinct businesses, each built to lead in its market — united under
              one vision of quality, innovation, and growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Venture Cards */}
      <section className="py-20 sm:py-28 gradient-section-light relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-light opacity-30" aria-hidden="true" />
        <div className="container-page relative z-10">
          <div className="space-y-8 lg:space-y-10">
            {ventures.map((venture, i) => (
              <ScrollReveal key={venture.href} delay={i * 80}>
                <div className="card-premium overflow-hidden group">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Image side */}
                    <div className="lg:col-span-2 relative overflow-hidden">
                      <img
                        src={venture.image}
                        alt={venture.title}
                        className="w-full h-full min-h-[250px] lg:min-h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${venture.accentColor}30 0%, ${venture.accentColor}10 100%)`,
                        }}
                      />
                      {/* Icon overlay */}
                      <div className="absolute top-6 left-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                          style={{
                            backgroundColor: `${venture.accentColor}25`,
                            color: "#fff",
                            border: `1px solid ${venture.accentColor}30`,
                          }}
                        >
                          {venture.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                      <div className="mb-2">
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: venture.accentColor }}
                        >
                          {venture.tagline}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-4">
                        {venture.title}
                      </h2>
                      <p className="text-gray-500 leading-relaxed mb-6 text-[15px]">
                        {venture.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {venture.features.map((f) => (
                          <div key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                            <div
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: venture.accentColor }}
                            />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link
                        href={venture.href}
                        className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3 group/link"
                        style={{ color: venture.accentColor }}
                      >
                        Learn more about {venture.title}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Group Advantages */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">The Acemen Advantage</span>
              <h2 className="section-heading mb-4">Stronger Together</h2>
              <p className="section-subheading mx-auto">
                Each venture stands strong on its own — together, they form an ecosystem
                that drives innovation and growth.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 100}>
                <div className="card-premium p-7 text-center group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-500/20 group-hover:from-gold-500/20 group-hover:to-gold-500/30 flex items-center justify-center mx-auto mb-5 text-gold-600 transition-all duration-500 group-hover:shadow-glow-gold">
                    {a.icon}
                  </div>
                  <h3 className="font-bold text-navy-800 mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20 sm:pb-28">
        <CTASection
          title="Interested in Our Ventures?"
          description="Learn more about how each venture can serve you — or explore partnership opportunities."
          primaryHref="/contact"
          primaryLabel="Get In Touch"
        />
      </section>
    </>
  );
}
