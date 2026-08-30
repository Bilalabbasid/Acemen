"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CraftsmanshipSection() {
  return (
    <section className="py-20 sm:py-32 bg-ivory-100/60 overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Atelier Studio Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-white overflow-hidden shadow-2xl border border-neutral-200/80">
              <img
                src="/images/luxury/craftsmanship.webp"
                alt="Master Artisan Hand Saddle-Stitching in ACEMEN London Atelier"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Architectural Floating Inset Accent */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-noir-950 text-white p-6 max-w-xs shadow-xl border border-gold-accent/20">
              <span className="text-[9px] font-heading tracking-[0.25em] text-champagne-400 uppercase font-bold block mb-1">
                SAVOIR-FAIRE
              </span>
              <p className="font-display text-sm italic text-neutral-200">
                &ldquo;Forty-two individual hand operations behind every single creation.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-leather-cognac block">
              THE ART OF SADDLE STITCHING
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-noir-950 leading-[1.15]">
              TIMELESS LEATHER ARCHITECTURE
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              <p>
                In an era dominated by automated manufacturing, ACEMEN remains staunchly committed to the traditions of pure bench artisanry. Each hide is hand-selected from heritage European tanneries, ensuring unyielding strength, natural grain depth, and an evolving patina.
              </p>
              <p>
                Our master leatherworkers utilize two-needle saddle stitching coated in organic beeswax, hand-beveled edges sealed with multiple coats of natural ink, and milled solid brass hardware.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/about" className="editorial-link text-xs tracking-[0.2em]">
                DISCOVER OUR SAVOIR-FAIRE
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
