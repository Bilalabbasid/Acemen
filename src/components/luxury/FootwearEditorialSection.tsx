"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FootwearEditorialSection() {
  return (
    <section className="relative py-24 sm:py-36 bg-noir-950 text-white overflow-hidden flex items-center justify-center">
      {/* Editorial Background Image */}
      <img
        src="/images/luxury/footwear-campaign.webp"
        alt="The ACEMEN Hand-Lasted Footwear Atelier"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-55 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/50 to-noir-950/70" />

      {/* Editorial Content */}
      <div className="container-page relative z-10 text-center max-w-3xl mx-auto space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400 block">
            THE FOOTWEAR ATELIER
          </span>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
            THE ACEMEN SHOE COLLECTION
          </h2>

          <p className="font-body text-neutral-200/90 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
            &ldquo;Precision-crafted leather footwear designed for the moments that demand distinction.&rdquo;
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/collections/shoes"
              className="editorial-link-white text-xs sm:text-sm tracking-[0.25em]"
            >
              EXPLORE FOOTWEAR
            </Link>
            <span className="text-white/40 font-light hidden sm:inline">|</span>
            <Link
              href="/collections/pilot"
              className="text-xs sm:text-sm font-heading font-semibold tracking-[0.25em] uppercase text-neutral-300 hover:text-white transition-colors"
            >
              THE PILOT COLLECTION
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
