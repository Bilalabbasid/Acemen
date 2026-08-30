"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
  {
    title: "WOMEN'S LEATHER",
    subtitle: "Sculptural Silhouettes",
    image: "/images/luxury/women-campaign.jpg",
    href: "/collections/women",
    cta: "EXPLORE THE COLLECTION",
  },
  {
    title: "MEN'S SARTORIAL",
    subtitle: "Executive Holdalls & Briefcases",
    image: "/images/luxury/men-campaign.jpg",
    href: "/collections/men",
    cta: "DISCOVER THE RANGE",
  },
  {
    title: "TRUNKS & TRAVEL",
    subtitle: "Crafted for the Grand Voyage",
    image: "/images/luxury/travel-campaign.jpg",
    href: "/collections/travel",
    cta: "DISCOVER TRAVEL",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-fluid">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac block mb-2">
            CURATED EDITIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-noir-950 font-medium tracking-tight">
            FEATURED HOUSES
          </h2>
        </div>

        {/* 3-Column Large Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-ivory-100 flex flex-col justify-end p-8 sm:p-10"
            >
              {/* Dominant Background Image with subtle scale hover */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300" />

              {/* Editorial Minimal Text */}
              <div className="relative z-10 text-white space-y-2">
                <span className="text-[11px] font-heading font-bold tracking-[0.3em] uppercase text-champagne-400 block">
                  {item.subtitle}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <div className="pt-3">
                  <Link
                    href={item.href}
                    className="editorial-link-white text-xs tracking-[0.25em]"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
