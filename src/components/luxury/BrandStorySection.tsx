"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { brandData } from "@/data/brand";

export default function BrandStorySection() {
  return (
    <section className="py-20 sm:py-32 bg-ivory-50 border-b border-neutral-200">
      <div className="container-page">
        {/* Story Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-24">
          <span className="text-[11px] font-heading font-bold tracking-[0.35em] uppercase text-leather-cognac block">
            MAISON DE CUIR • LONDON
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-noir-950 leading-tight">
            THE HOUSE OF ACEMEN
          </h2>
          <p className="font-body text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
            Headquartered in London, ACEMEN is dedicated to the timeless art of fine luxury leather manufacturing. Operating at the intersection of uncompromising British design and master continental artisanship, our maison crafts pieces built to transcend transient seasonal trends.
          </p>
        </div>

        {/* Alternating Asymmetric Editorial Split Layout 1 (TEXT | IMAGE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 sm:mb-32">
          {/* Text Left */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-neutral-400 block">
              01 / PURITY OF MATERIAL
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-medium text-noir-950 leading-tight">
              Only Full-Grain Hides, Without Compromise
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              We select exclusively the uncorrected top layer of the hide, where the fiber structure is densest and most resilient. Natural grain markings, subtle variations, and organic character are celebrated as marks of genuine provenance.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              Tanned slowly using natural chestnut and mimosa tannins, our leathers breathe, mature, and develop a rich, lustrous patina unique to each owner.
            </p>
            <div className="pt-2">
              <Link href="/about" className="editorial-link text-xs">
                Read About Our Tannery Standards
              </Link>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[16/11] bg-white overflow-hidden border border-neutral-200 shadow-sm">
              <img
                src="/images/luxury/hero-campaign.jpg"
                alt="ACEMEN leather craftsmanship and design purity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Alternating Asymmetric Editorial Split Layout 2 (IMAGE | TEXT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image Left */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] bg-white overflow-hidden border border-neutral-200 shadow-sm">
              <img
                src="/images/luxury/men-campaign.jpg"
                alt="ACEMEN London headquarters and atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-neutral-400 block">
              02 / THE LONDON ATELIER
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-medium text-noir-950 leading-tight">
              A Private Salon for Discerning Patrons
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              Located at {brandData.address.street} in London, our private client salon facilitates bespoke commissions, custom initials hot-stamping, and lifetime restoration appointments.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              Every client inquiry is received directly by our dedicated leather concierge, ensuring a tailored purchase experience engineered to the same standard as our physical creations.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="editorial-link text-xs">
                Initiate a Private Commission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
