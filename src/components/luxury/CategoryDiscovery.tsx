"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Footwear Atelier",
    count: "Oxfords, Monks & Boots",
    image: "/images/luxury/prod-oxford-1.webp",
    href: "/collections/shoes",
  },
  {
    name: "The Pilot Collection",
    count: "Aviation Professional",
    image: "/images/luxury/prod-pilot-1.webp",
    href: "/collections/pilot",
  },
  {
    name: "Leather Jackets",
    count: "Classic & Bombers",
    image: "/images/luxury/prod-jacket-classic-1.webp",
    href: "/collections/jackets",
  },
  {
    name: "Holdalls & Bags",
    count: "Weekenders & Totes",
    image: "/images/luxury/prod-weekender-1.webp",
    href: "/collections/bags",
  },
  {
    name: "Wallets & Pocket Goods",
    count: "Bifolds & Cardholders",
    image: "/images/luxury/prod-wallet-1.webp",
    href: "/collections/wallets",
  },
  {
    name: "Trunks & Travel",
    count: "Cabin Trolleys & Luggage",
    image: "/images/luxury/travel-campaign.webp",
    href: "/collections/travel",
  },
];

export default function CategoryDiscovery() {
  return (
    <section className="py-16 sm:py-24 bg-ivory-50 border-y border-neutral-200/80">
      <div className="container-fluid">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac block mb-2">
              DISCOVER BY SILHOUETTE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-noir-950 font-medium tracking-tight">
              EXPLORE ACEMEN
            </h2>
          </div>
          <Link
            href="/products"
            className="editorial-link text-xs tracking-[0.2em] self-start sm:self-auto"
          >
            VIEW ALL CREATIONS
          </Link>
        </div>

        {/* 6-Column Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href={cat.href}
                className="group block text-center space-y-3"
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative aspect-[4/5] bg-white overflow-hidden border border-neutral-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Typography */}
                <div className="pt-1">
                  <h3 className="font-display text-sm sm:text-base font-semibold text-noir-950 group-hover:text-leather-cognac transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] font-heading tracking-widest text-neutral-500 uppercase block mt-0.5">
                    {cat.count}
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
