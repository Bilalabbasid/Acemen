"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroCampaign() {
  return (
    <section className="relative h-[92vh] sm:h-screen w-full overflow-hidden bg-noir-950 flex items-end justify-center pb-16 sm:pb-24">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/luxury/hero-campaign.webp"
          alt="ACEMEN Autumn-Winter Campaign — The Sovereign Atelier"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          fetchPriority="high"
          decoding="async"
        />
        {/* Subtle Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />
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
            AUTUMN — WINTER 2026 CAMPAIGN
          </span>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] text-balance">
            THE SOVEREIGN ATELIER
          </h1>

          {/* Short Luxury Editorial Statement */}
          <p className="font-body text-sm sm:text-base text-neutral-200/90 font-light tracking-wide max-w-xl mx-auto leading-relaxed pt-1">
            Sculpted from premier full-grain French calfskin, uniting master-artisan saddle stitching with timeless British architectural lines.
          </p>

          {/* Subtle Understated Editorial CTA */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/products"
              className="editorial-link-white text-xs sm:text-sm tracking-[0.25em]"
            >
              DISCOVER THE COLLECTION
            </Link>
            <span className="text-white/40 font-light hidden sm:inline">|</span>
            <Link
              href="/about"
              className="text-xs sm:text-sm font-heading font-semibold tracking-[0.25em] uppercase text-neutral-300 hover:text-white transition-colors"
            >
              THE SAVOIR-FAIRE
            </Link>
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
  );
}
