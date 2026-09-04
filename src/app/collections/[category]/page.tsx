"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { luxuryProducts, ProductCategory, GenderCategory } from "@/data/products";
import ProductCard from "@/components/luxury/ProductCard";
import InquiryQuoteModal from "@/components/luxury/InquiryQuoteModal";
import { ShieldCheck } from "lucide-react";

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
    eyebrow: "WHOLESALE & PRIVATE-LABEL FOOTWEAR",
    heroImage: "/images/luxury/footwear-campaign.webp",
    description:
      "Goodyear-welted Oxford shoes, double monk straps, Chelsea boots, and blucher derbies sculpted from French box calf and Bavarian hides. Available for OEM development and bespoke volume runs.",
    categoryFilter: "Shoes",
  },
  belts: {
    title: "SARTORIAL LEATHER BELTS",
    eyebrow: "HAND-STITCHED LEATHER BELTS",
    heroImage: "/images/luxury/prod-belt-1.webp",
    description:
      "Hand-finished reversible and dress belts cut from full-grain French box calfskin and Bavarian hides with solid brass buckles. Tailored for corporate wardrobes and bespoke private label collections.",
    categoryFilter: "Belts",
  },
  jackets: {
    title: "SARTORIAL LEATHER OUTERWEAR",
    eyebrow: "WHOLESALE LEATHER OUTERWEAR ATELIER",
    heroImage: "/images/luxury/prod-jacket-classic-1.webp",
    description:
      "Minimalist classic leather jackets and bombers cut from full-grain French box calfskin, cupro lining, and Swiss Riri hardware for luxury brand collections.",
    categoryFilter: "Jackets",
  },
  bags: {
    title: "FINE LEATHER BAGS & HOLDALLS",
    eyebrow: "EXECUTIVE LEATHER GOODS",
    heroImage: "/images/luxury/hero-campaign.webp",
    description:
      "From spacious travel holdalls to structured executive briefcases and everyday totes, hand saddle-stitched in London from premier full-grain hides.",
    categoryFilter: "Bags",
  },
  wallets: {
    title: "WALLETS & POCKET LEATHER GOODS",
    eyebrow: "SMALL LEATHER GOODS MANUFACTURING",
    heroImage: "/images/luxury/prod-wallet-1.webp",
    description:
      "Precision-crafted bifold wallets, ultra-slim cardholders, and passport cases finished with hand-burnished edges and private-label debossing.",
    categoryFilter: "Wallets",
  },
  travel: {
    title: "TRUNKS & TRAVEL ATELIER",
    eyebrow: "LUXURY TRAVEL LUGGAGE & CABIN TRUNKS",
    heroImage: "/images/luxury/travel-campaign.webp",
    description:
      "Wheeled cabin suitcases, weekender duffles, and garment luggage designed for effortless international movement and private-label production.",
    categoryFilter: "Travel",
  },
  women: {
    title: "WOMEN'S LEATHER GOODS",
    eyebrow: "THE WOMEN'S ATELIER COLLECTION",
    heroImage: "/images/luxury/women-campaign.webp",
    description:
      "Sculptural totes, compact crossbodies, and pocket accessories engineered from French box calfskin and Tuscan grain hides.",
    genderFilter: "women",
  },
  men: {
    title: "MEN'S SARTORIAL LEATHER",
    eyebrow: "THE MEN'S EXECUTIVE LINE",
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
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

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
          <span>{products.length} Available Model{products.length !== 1 ? "s" : ""}</span>
          <Link href="/products" className="text-noir-950 underline hover:text-leather-cognac">
            View All Catalog Pieces
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* B2B Callout */}
        <div className="mt-20 p-8 sm:p-10 bg-ivory-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-heading font-bold tracking-[0.25em] uppercase text-leather-cognac block">
              CUSTOM SPECIFICATIONS
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-noir-950">
              Inquire About Customization on this Department
            </h3>
            <p className="text-xs text-neutral-600 font-light">
              Discuss custom leather selection, private branding, sole options, and production timelines.
            </p>
          </div>

          <button
            onClick={() => setIsQuoteOpen(true)}
            className="btn-luxury-primary text-xs tracking-[0.2em] shrink-0"
          >
            REQUEST WHOLESALE QUOTE
          </button>
        </div>
      </div>

      {/* Inquiry Quote Modal */}
      <InquiryQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultSubject={`Inquiry regarding ${config.title}`}
      />
    </div>
  );
}
