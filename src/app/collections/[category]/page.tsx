"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { luxuryProducts, ProductCategory, GenderCategory } from "@/data/products";
import ProductCard from "@/components/luxury/ProductCard";

interface CollectionMeta {
  title: string;
  eyebrow: string;
  heroImage: string;
  description: string;
  categoryFilter?: ProductCategory;
  genderFilter?: GenderCategory;
}

const collectionConfigs: Record<string, CollectionMeta> = {
  shoes: {
    title: "THE FOOTWEAR ATELIER",
    eyebrow: "HAND-LASTED BRITISH DISTINCTION",
    heroImage: "/images/luxury/footwear-campaign.webp",
    description:
      "Goodyear-welted Oxford shoes, double monk straps, Chelsea boots, and blucher derbies sculpted from French box calf and Bavarian hides.",
    categoryFilter: "Shoes",
  },
  pilot: {
    title: "THE PILOT COLLECTION",
    eyebrow: "AVIATION GRADE • FLIGHT DECK SARTORIAL",
    heroImage: "/images/luxury/pilot-campaign.webp",
    description:
      "Precision-crafted leather footwear engineered specifically for pilots and flight deck professionals. Airport scanner compliant and built for multi-hour cockpit endurance.",
    categoryFilter: "Pilot Collection",
  },
  jackets: {
    title: "SARTORIAL LEATHER JACKETS",
    eyebrow: "OUTERWEAR ATELIER",
    heroImage: "/images/luxury/prod-jacket-classic-1.webp",
    description:
      "Minimalist classic leather jackets and bombers cut from full-grain French box calfskin and supple Bavarian hides.",
    categoryFilter: "Jackets",
  },
  bags: {
    title: "FINE LEATHER BAGS",
    eyebrow: "ICONIC SILHOUETTES",
    heroImage: "/images/luxury/hero-campaign.webp",
    description:
      "From spacious travel holdalls to structured executive briefcases and everyday totes, hand saddle-stitched in London.",
    categoryFilter: "Bags",
  },
  wallets: {
    title: "WALLETS & SMALL LEATHER GOODS",
    eyebrow: "POCKET ARTISANRY",
    heroImage: "/images/luxury/prod-wallet-1.webp",
    description:
      "Precision-crafted bifold wallets, ultra-slim cardholders, and passport cases finished with hand-burnished edges.",
    categoryFilter: "Wallets",
  },
  travel: {
    title: "TRUNKS & TRAVEL ATELIER",
    eyebrow: "GRAND VOYAGE",
    heroImage: "/images/luxury/travel-campaign.webp",
    description:
      "Wheeled cabin suitcases, weekender duffles, and garment luggage designed for effortless international movement.",
    categoryFilter: "Travel",
  },
  women: {
    title: "WOMEN'S LEATHER GOODS",
    eyebrow: "THE ATELIER COLLECTION",
    heroImage: "/images/luxury/women-campaign.webp",
    description:
      "Sculptural totes, compact crossbodies, and pocket accessories engineered from French box calfskin and Tuscan grain hides.",
    genderFilter: "women",
  },
  men: {
    title: "MEN'S SARTORIAL LEATHER",
    eyebrow: "THE EXECUTIVE LINE",
    heroImage: "/images/luxury/men-campaign.webp",
    description:
      "Executive briefcases, weekend holdalls, hand-lasted shoes, and tailored leather jackets cut from dense full-grain hides.",
    genderFilter: "men",
  },
};

export default function CollectionPage({
  params,
}: {
  params: { category: string };
}) {
  const paramKey = params.category.toLowerCase();
  const config = collectionConfigs[paramKey];

  if (!config) {
    notFound();
  }

  // Filter products according to collection rules
  const products = luxuryProducts.filter((p) => {
    if (config.categoryFilter) {
      return p.category.toLowerCase() === config.categoryFilter.toLowerCase();
    }
    if (config.genderFilter) {
      return p.gender === config.genderFilter || p.gender === "unisex";
    }
    return true;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Banner Header */}
      <section className="relative h-[55vh] sm:h-[65vh] w-full overflow-hidden bg-noir-950 flex items-end justify-center pb-12 sm:pb-16">
        <img
          src={config.heroImage}
          alt={config.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

        <div className="relative z-10 container-page text-center text-white space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400 block">
            {config.eyebrow}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            {config.title}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200/90 font-light max-w-xl mx-auto leading-relaxed">
            {config.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <div className="container-fluid py-16 sm:py-24">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-10 text-xs font-heading tracking-wider uppercase text-neutral-500">
          <span>{products.length} Available Creation{products.length !== 1 ? "s" : ""}</span>
          <Link href="/products" className="text-noir-950 underline hover:text-leather-cognac">
            View All Atelier Pieces
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
