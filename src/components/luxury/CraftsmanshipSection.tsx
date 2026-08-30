"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { brandData } from "@/data/brand";
import { ShieldCheck, Scissors, Sparkles, Award } from "lucide-react";

const pillarIcons: Record<string, React.ReactNode> = {
  shieldCheck: <ShieldCheck className="w-5 h-5 text-champagne-400" />,
  scissors: <Scissors className="w-5 h-5 text-champagne-400" />,
  sparkles: <Sparkles className="w-5 h-5 text-champagne-400" />,
  award: <Award className="w-5 h-5 text-champagne-400" />,
};

export default function CraftsmanshipSection() {
  return (
    <section className="bg-noir-950 text-white py-20 sm:py-32 overflow-hidden relative">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-noir-950 to-noir-950 opacity-60" />

      <div className="container-fluid relative z-10">
        {/* Split Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Cinematic Artisan Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-white/10">
              <img
                src="/images/luxury/craftsmanship.jpg"
                alt="ACEMEN master artisan hand-saddle-stitching fine leather"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Floating Editorial Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-noir-900 border border-white/15 p-5 max-w-xs shadow-2xl">
              <span className="text-[9px] font-heading tracking-[0.3em] uppercase text-champagne-400 font-bold block mb-1">
                SAVOIR-FAIRE
              </span>
              <p className="font-display text-sm italic text-neutral-300">
                &ldquo;Every stitch is placed by generational hands — built to acquire a richer soul with each passing decade.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Editorial Typography & Craftsmanship Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-[11px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400 block mb-3">
                THE ARTISAN PLEDGE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight text-balance">
                CRAFTED TO ENDURE
              </h2>
              <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed mt-4 font-light">
                At ACEMEN, we refuse the shortcuts of modern mass manufacturing. Every holdall, briefcase, and wallet begins with premier full-grain hides sourced from ethical tanneries in Tuscany and France, brought to life through traditional saddle-stitching and multi-stage edge burnishing.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {brandData.pillars.map((pillar) => (
                <div key={pillar.title} className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    {pillarIcons[pillar.iconName]}
                    <h3 className="font-display text-lg font-semibold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="editorial-link-white text-xs tracking-[0.25em]"
              >
                EXPLORE THE LONDON ATELIER
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
