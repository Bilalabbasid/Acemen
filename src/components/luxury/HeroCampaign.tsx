"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import InquiryQuoteModal from "./InquiryQuoteModal";

export default function HeroCampaign() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative h-[92vh] sm:h-screen w-full overflow-hidden bg-noir-950 flex items-end justify-center pb-16 sm:pb-24">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/luxury/hero-campaign.webp"
            alt="ACEMEN Premium Leather Footwear & Wholesale Manufacturing"
            className="w-full h-full object-cover object-center scale-105 animate-fade-in"
            fetchPriority="high"
            decoding="async"
          />
          {/* Subtle Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/35" />
        </div>

        {/* Editorial Content Overlay */}
        <div className="relative z-10 container-page text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {/* Eyebrow */}
            <span className="inline-block text-[11px] sm:text-xs font-heading font-bold tracking-[0.35em] uppercase text-champagne-400">
              BRITISH LUXURY FOOTWEAR & LEATHER ATELIER • LONDON
            </span>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] text-balance">
              CRAFTED BY HAND. SCULPTED FOR DISTINCTION.
            </h1>

            {/* Positioning Statement */}
            <p className="font-body text-sm sm:text-base text-neutral-200/90 font-light tracking-wide max-w-xl mx-auto leading-relaxed pt-1">
              Handcrafted in limited atelier batches. Available for Pre-Order, private allocation waitlist, and bespoke commissions.
            </p>

            {/* CTAs */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/products"
                className="editorial-link-white text-xs sm:text-sm tracking-[0.25em]"
              >
                EXPLORE COLLECTION
              </Link>
              <span className="text-white/40 font-light hidden sm:inline">|</span>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="text-xs sm:text-sm font-heading font-semibold tracking-[0.25em] uppercase text-neutral-300 hover:text-white transition-colors"
              >
                PRE-ORDER / JOIN WAITLIST
              </button>
            </div>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[9px] font-heading font-semibold tracking-[0.3em] uppercase text-white/80">
            Scroll to explore
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Inquiry Quote Modal */}
      <InquiryQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultSubject="Partnership & Manufacturing Inquiry"
      />
    </>
  );
}
