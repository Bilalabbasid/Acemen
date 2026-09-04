"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BrandStorySection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200/80">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-leather-cognac block">
              YOUR BRAND. OUR CRAFT.
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-noir-950 leading-tight">
              A LEGACY OF FOOTWEAR & LEATHER MANUFACTURING
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              <p>
                Founded in London, ACEMEN bridges British architectural Last design with rigorous industrial manufacturing capability.
              </p>
              <p>
                From hand-lasted Goodyear-welted oxfords and double monk straps to sartorial leather jackets and holdalls, we partner with discerning brands, boutique retailers, and international distributors to turn footwear concepts into commercial reality.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6">
              <Link href="/about" className="editorial-link text-xs tracking-[0.2em]">
                DISCOVER OUR SAVOIR-FAIRE
              </Link>
              <Link href="/contact" className="editorial-link text-xs tracking-[0.2em]">
                BECOME A PARTNER
              </Link>
            </div>
          </motion.div>

          {/* Dual Offset Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative aspect-[3/4] bg-ivory-100 overflow-hidden shadow-lg border border-neutral-200"
            >
              <img
                src="/images/luxury/prod-oxford-1.webp"
                alt="ACEMEN Footwear Craft & Manufacturing"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[3/4] bg-ivory-100 overflow-hidden shadow-lg border border-neutral-200 translate-y-6"
            >
              <img
                src="/images/luxury/prod-briefcase-1.webp"
                alt="ACEMEN Leather Briefcase & Goods"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
