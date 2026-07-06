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
    title: "Acemen Emporium",
    tagline: "Curated Digital Commerce",
    description:
      "Our direct-to-consumer commerce house, pairing an impeccably curated marketplace with the technology and logistics to serve a discerning global clientele — where premium goods meet a purchase experience engineered to the same standard as the products themselves.",
    href: "/ventures/e-commerce",
    accentColor: "#b08d57",
    icon: <ShoppingBag className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: [
      "Editorially Curated Marketplace",
      "White-Glove Global Fulfilment",
      "Frictionless, Secure Checkout",
      "Dedicated Client Concierge",
    ],
  },
  {
    title: "Acemen Digital",
    tagline: "Enterprise Architecture & AI Intelligence",
    description:
      "We engineer bespoke digital infrastructure and enterprise-grade software ecosystems for industry leaders. From proprietary artificial intelligence to high-scalability application development, we transform complex technological challenges into fluid competitive advantages.",
    href: "/ventures/it-solutions",
    accentColor: "#7d8ca3",
    icon: <Code2 className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    features: [
      "Elite Full-Stack & Architecture Engineering",
      "Next-Generation AI & Hyper-Automation Systems",
      "Tailored Digital Ecosystems & Mobile Masterpieces",
      "High-Level Visionary Technology Consulting",
    ],
  },
  {
    title: "Acre & Hide",
    tagline: "Sartorial Leather & Footwear",
    description:
      "A maison devoted to the art of fine leatherwork — hand-lasted footwear, structured bags, sculpted jackets, wallets, and belts, each crafted from the world's most exceptional full-grain hides for those who refuse to compromise between presence and comfort.",
    href: "/ventures/shoes",
    accentColor: "#9c6b45",
    icon: <Footprints className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    features: [
      "Master-Artisan Handcraftsmanship",
      "Full-Grain, Heritage-Grade Hides",
      "Footwear, Bags, Outerwear & Small Goods",
      "Lifetime Restoration Guarantee",
    ],
  },
  {
    title: "Ascend",
    tagline: "Global Concierge & Mobility Logistics",
    description:
      "An ultra-premium ecosystem granting unfettered access to global events and bespoke travel. We curate highly sought-after, sold-out access alongside elite, tailormade itinerary design for high-net-worth individuals and corporate institutions.",
    href: "/ventures/ticketing-travel",
    accentColor: "#6f8778",
    icon: <Ticket className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109bb05?w=800&q=80",
    features: [
      "First-Tier Access to Global Events & Arenas",
      "Bespoke Luxury Itinerary & Expedition Curation",
      "Seamless, High-Security Booking Interface",
      "Dedicated 24/7 Elite Lifestyle Management",
    ],
  },
];

const advantages = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Prestige Diversification",
    desc: "Four independent pillars insulated across high-value sectors, guaranteeing absolute financial resilience and cross-industry synergy.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Elite Centralized Infrastructure",
    desc: "Every venture is backed by proprietary technologies and institutional resources, driving unprecedented operational efficiency.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Visionary Directorship",
    desc: "Managed exclusively by elite domain specialists who bring deep-sector authority, precision execution, and market leadership.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Global Scalability Asset",
    desc: "Designed with a limitless operational blueprint, seamlessly expanding from local exclusivity to dominant global enterprises.",
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
              <span className="text-gold-400 font-medium text-sm tracking-wide">The Portfolio</span>
            </div>
            <h1 className="display-heading text-[2.6rem] sm:text-6xl lg:text-7xl text-white mb-6 text-balance leading-[1.05]">
              Four Houses, One Standard
            </h1>
            <p className="text-lg sm:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              A private collective of category-defining houses — each a leader in its
              domain, bound by a single, uncompromising pursuit of the absolute standard
              in craftsmanship, technology, and access.
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
                      <h2 className="display-heading text-3xl sm:text-4xl text-navy-800 mb-4">
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
              <h2 className="section-heading mb-4">The Prestige Ecosystem</h2>
              <p className="section-subheading mx-auto">
                While each enterprise operates at the pinnacle of its respective industry,
                they converge to form an elite, self-sustaining ecosystem of innovation,
                security, and prestige.
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
          title="Engage with Acemen Ventures"
          description="Discover how our portfolio can elevate your lifestyle or enterprise. We welcome inquiries regarding private acquisitions, strategic partnerships, and elite client placement."
          primaryHref="/contact"
          primaryLabel="Initiate Private Consultation"
        />
      </section>
    </>
  );
}
