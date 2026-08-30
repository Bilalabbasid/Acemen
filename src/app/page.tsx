"use client";

import React from "react";
import Link from "next/link";
import HeroCampaign from "@/components/luxury/HeroCampaign";
import FeaturedCollections from "@/components/luxury/FeaturedCollections";
import CategoryDiscovery from "@/components/luxury/CategoryDiscovery";
import ProductGrid from "@/components/luxury/ProductGrid";
import FootwearEditorialSection from "@/components/luxury/FootwearEditorialSection";
import PilotEditorialSection from "@/components/luxury/PilotEditorialSection";
import CraftsmanshipSection from "@/components/luxury/CraftsmanshipSection";
import BrandStorySection from "@/components/luxury/BrandStorySection";
import ServicesBar from "@/components/luxury/ServicesBar";
import NewsletterSection from "@/components/luxury/NewsletterSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. Full-Screen Luxury Campaign Hero */}
      <HeroCampaign />

      {/* 2. Featured Collections Editorial Split (Women, Men, Travel) */}
      <FeaturedCollections />

      {/* 3. Category Discovery (Footwear, Pilot, Jackets, Bags, Wallets, Travel) */}
      <CategoryDiscovery />

      {/* 4. Featured Luxury Leather Creations (4-Column Grid with Tabs) */}
      <ProductGrid
        title="ICONIC LEATHER PIECES"
        subtitle="THE ATELIER COLLECTION"
        initialLimit={8}
        showFilters={true}
      />

      {/* 5. Editorial Footwear Section — The ACEMEN Shoe Collection */}
      <FootwearEditorialSection />

      {/* 6. Dedicated Aviation Feature — The Pilot Collection */}
      <PilotEditorialSection />

      {/* 7. Editorial Savoir-Faire / Craftsmanship Feature */}
      <CraftsmanshipSection />

      {/* 8. Asymmetric Editorial Maison & Philosophy Story */}
      <BrandStorySection />

      {/* 9. Full-Bleed Lifestyle Campaign Spread */}
      <section className="relative py-24 sm:py-36 bg-noir-950 text-white overflow-hidden flex items-center justify-center">
        <img
          src="/images/luxury/travel-campaign.jpg"
          alt="ACEMEN Jet-Set Travel Atelier"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/40 to-noir-950/60" />

        <div className="container-page relative z-10 text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400 block">
            THE ART OF TRAVEL
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
            CRAFTED FOR THE ENDLESS HORIZON
          </h2>
          <p className="font-body text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            From the London atelier to international skies, ACEMEN trunks and weekender holdalls are companion pieces engineered to outlast the journey.
          </p>
          <div className="pt-4">
            <Link
              href="/collections/travel"
              className="editorial-link-white text-xs tracking-[0.25em]"
            >
              EXPLORE TRUNKS & TRAVEL
            </Link>
          </div>
        </div>
      </section>

      {/* 10. White-Glove Client Services & Atelier Guarantees */}
      <ServicesBar />

      {/* 11. Newsletter Subscription — The Private Dispatch */}
      <NewsletterSection />
    </div>
  );
}
