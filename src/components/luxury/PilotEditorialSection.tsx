"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Compass, Plane, Sparkles, FileText } from "lucide-react";
import InquiryQuoteModal from "./InquiryQuoteModal";

export default function PilotEditorialSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-noir-950 text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/luxury/pilot-campaign.webp"
          alt="The Pilot Collection — ACEMEN Aviation Line"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950 via-noir-950/80 to-transparent" />

        <div className="container-page relative z-10">
          <div className="max-w-2xl space-y-6">
            <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400 block">
              AVIATION GRADE • FLIGHT DECK SARTORIAL
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              THE PILOT COLLECTION
            </h2>

            <p className="font-body text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              &ldquo;Aviation footwear engineered for global airlines, commercial flight decks, and uniform programs.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Sculpted from mirror-shine full-grain black calfskin. Engineered with non-metallic composite shanks for seamless airport security clearance, anti-static flight deck outsoles, and orthotic arch support designed for multi-hour cockpit endurance. Available for corporate airline supply contracts and wholesale distribution.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-neutral-300 font-light">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-champagne-400 shrink-0" />
                <span>Airport Scanner Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-champagne-400 shrink-0" />
                <span>Ergonomic Arch Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-champagne-400 shrink-0" />
                <span>Anti-Static Flight Deck Sole</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-champagne-400 shrink-0" />
                <span>High-Gloss Mirror Finish</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/collections/pilot" className="btn-luxury-white text-xs">
                Explore Pilot Catalog
              </Link>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="btn-luxury-outline text-white border-white/30 hover:border-white text-xs font-bold"
              >
                Pre-Order Pilot Shoe / Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <InquiryQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultSubject="The Aviator Pilot Shoe Pre-Order & Waitlist"
      />
    </>
  );
}
