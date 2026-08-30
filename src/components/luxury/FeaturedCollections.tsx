"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface CollectionCard {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  ctaText: string;
}

const collections: CollectionCard[] = [
  {
    title: "WOMEN'S LEATHER",
    subtitle: "SCULPTURAL TOTES & ACCESSORIES",
    image: "/images/luxury/women-campaign.webp",
    href: "/collections/women",
    ctaText: "EXPLORE WOMEN",
  },
  {
    title: "MEN'S SARTORIAL",
    subtitle: "BRIEFCASES, SHOES & JACKETS",
    image: "/images/luxury/men-campaign.webp",
    href: "/collections/men",
    ctaText: "EXPLORE MEN",
  },
  {
    title: "TRUNKS & TRAVEL",
    subtitle: "CABIN CASES & WEEKENDERS",
    image: "/images/luxury/travel-campaign.webp",
    href: "/collections/travel",
    ctaText: "EXPLORE TRAVEL",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-fluid">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac block mb-2">
            MAISON DEPARTMENTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-noir-950 font-medium tracking-tight">
            CURATED UNIVERSES
          </h2>
        </div>

        {/* 3-Column Luxury Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative flex flex-col"
            >
              <Link href={col.href} className="block overflow-hidden relative aspect-[4/5] bg-ivory-100">
                {/* Image */}
                <img
                  src={col.image}
                  alt={col.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient & Hover Dim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Overlaid Bottom Typography */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <span className="text-[9px] sm:text-[10px] font-heading font-semibold tracking-[0.25em] uppercase text-champagne-400 block mb-1">
                    {col.subtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4">
                    {col.title}
                  </h3>
                  <span className="editorial-link-white text-xs tracking-[0.2em] inline-flex items-center">
                    {col.ctaText}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
