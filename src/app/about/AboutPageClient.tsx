"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { brandData } from "@/data/brand";
import { ShieldCheck, Scissors, Sparkles, Award, MapPin, Phone, Mail } from "lucide-react";
import ServicesBar from "@/components/luxury/ServicesBar";
import NewsletterSection from "@/components/luxury/NewsletterSection";

const pillarIcons: Record<string, React.ReactNode> = {
  shieldCheck: <ShieldCheck className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
  scissors: <Scissors className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
  sparkles: <Sparkles className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
  award: <Award className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
};

export default function AboutPageClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── 1. Hero Campaign Banner ── */}
      <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden bg-noir-950 flex items-end justify-center pb-16 sm:pb-20">
        <img
          src="/images/luxury/craftsmanship.jpg"
          alt="The House of ACEMEN — Savoir-Faire"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

        <div className="relative z-10 container-page text-center text-white space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400 block">
            MAISON DE CUIR • LONDON
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
            THE HOUSE OF ACEMEN
          </h1>
          <p className="font-body text-xs sm:text-sm text-neutral-200/90 font-light max-w-xl mx-auto leading-relaxed">
            Devoted to the preservation of generational British leather craftsmanship, sculpturing pieces of enduring longevity from the world&apos;s most exceptional hides.
          </p>
        </div>
      </section>

      {/* ── 2. The Maison Philosophy (Editorial Split) ── */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac block">
                ORIGINS & MANIFESTO
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-medium text-noir-950 leading-tight">
                An Uncompromising Standard in a World of Transient Fashion
              </h2>
              <div className="text-neutral-600 text-sm sm:text-base space-y-4 font-light leading-relaxed">
                <p>
                  ACEMEN was established in the United Kingdom with a singular ambition: to build an enduring luxury house anchored in uncompromising material honesty, timeless British architectural lines, and master continental leathercraft.
                </p>
                <p>
                  In an era dominated by synthetic coatings and ephemeral trends, our workshop adheres strictly to generational principles. Every leather hide is selected by touch for density and grain purity, cut by hand, and assembled with traditional two-needle saddle stitching designed never to unravel.
                </p>
                <p>
                  Our creations are not designed to be replaced every season — they are engineered to accompany their owners for decades, gaining depth and character with every voyage.
                </p>
              </div>
            </div>

            {/* Right: Atelier Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] bg-ivory-100 overflow-hidden border border-neutral-200 shadow-sm">
                <img
                  src="/images/luxury/hero-campaign.jpg"
                  alt="ACEMEN London Leather Atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Savoir-Faire & Craftsmanship Pillars ── */}
      <section id="craftsmanship" className="py-20 sm:py-32 bg-ivory-50 border-y border-neutral-200">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
            <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac block">
              THE PILLARS OF OUR ART
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-medium text-noir-950">
              SAVOIR-FAIRE & PROVENANCE
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              Every detail of an ACEMEN piece reflects hours of devoted hand assembly by master artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {brandData.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white p-8 sm:p-10 border border-neutral-200 space-y-3 relative group hover:border-noir-950 transition-colors"
              >
                <div className="w-12 h-12 bg-ivory-100 flex items-center justify-center mb-2">
                  {pillarIcons[pillar.iconName]}
                </div>
                <span className="text-[10px] font-heading font-bold tracking-[0.25em] uppercase text-neutral-400 block">
                  {pillar.subtitle}
                </span>
                <h3 className="font-display text-2xl font-semibold text-noir-950">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pt-1">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. London Headquarters & Private Client Salon ── */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: London Building / Skyline Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[16/11] bg-ivory-100 overflow-hidden border border-neutral-200">
                <img
                  src="/images/contact-london.png"
                  alt="London Headquarters location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac block">
                THE LONDON SALON
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-medium text-noir-950 leading-tight">
                Private Consultations & Bespoke Commissions
              </h2>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                Our London office is located at {brandData.address.full}. We welcome private clients by appointment for bespoke leather commissions, personalized monogramming consultations, and collection previews.
              </p>
              <div className="space-y-3 pt-2 text-xs text-neutral-700 font-light">
                <p className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-leather-cognac shrink-0" />
                  <span>{brandData.address.full}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-leather-cognac shrink-0" />
                  <a href={`tel:${brandData.contact.phone}`} className="hover:underline font-medium">
                    {brandData.contact.phoneFormatted}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-leather-cognac shrink-0" />
                  <a href={`mailto:${brandData.contact.email}`} className="hover:underline font-medium">
                    {brandData.contact.email}
                  </a>
                </p>
              </div>

              <div className="pt-4">
                <Link href="/contact" className="btn-luxury-primary">
                  Schedule a Private Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Newsletter */}
      <ServicesBar />
      <NewsletterSection />
    </div>
  );
}
