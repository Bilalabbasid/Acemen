"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { luxuryProducts, ProductItem, ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  categoryFilter?: ProductCategory;
  initialLimit?: number;
  showFilters?: boolean;
}

const filterTabs: Array<{ label: string; category?: ProductCategory }> = [
  { label: "All Creations" },
  { label: "Footwear", category: "Shoes" },
  { label: "Leather Jackets", category: "Jackets" },
  { label: "Bags", category: "Bags" },
  { label: "Wallets", category: "Wallets" },
  { label: "Belts", category: "Belts" },
  { label: "Travel", category: "Travel" },
];

export default function ProductGrid({
  title = "THE LATEST CREATIONS",
  subtitle = "NEW ARRIVALS",
  categoryFilter,
  initialLimit,
  showFilters = true,
}: ProductGridProps) {
  const [activeTab, setActiveTab] = useState<ProductCategory | undefined>(categoryFilter);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  const displayedProducts = luxuryProducts.filter((p) => {
    if (activeTab) {
      return p.category === activeTab;
    }
    return true;
  });

  const productsToShow = initialLimit
    ? displayedProducts.slice(0, initialLimit)
    : displayedProducts;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac block mb-2">
            {subtitle}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-noir-950 font-medium tracking-tight">
            {title}
          </h2>
        </div>

        {/* Filter Tabs */}
        {showFilters && (
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-12 border-b border-neutral-200 pb-4">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.category;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.category)}
                  className={`text-xs font-heading font-semibold tracking-[0.2em] uppercase px-3.5 py-2 transition-all relative ${
                    isActive
                      ? "text-noir-950 font-bold"
                      : "text-neutral-500 hover:text-noir-950"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-noir-950"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* 4-Col Desktop / 2-Col Mobile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
          {productsToShow.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* View All CTA */}
        {initialLimit && displayedProducts.length > initialLimit && (
          <div className="text-center pt-14">
            <Link
              href="/products"
              className="btn-luxury-outline"
            >
              DISCOVER FULL CATALOG ({luxuryProducts.length} MODELS)
            </Link>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
