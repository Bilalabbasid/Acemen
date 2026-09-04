"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { luxuryProducts, ProductCategory, GenderCategory, ProductItem } from "@/data/products";
import ProductCard from "@/components/luxury/ProductCard";
import QuickViewModal from "@/components/luxury/QuickViewModal";
import InquiryQuoteModal from "@/components/luxury/InquiryQuoteModal";
import { FileText, Layers, ShieldCheck } from "lucide-react";

const categoryTabs: Array<{ id: string; label: string; cat?: ProductCategory }> = [
  { id: "all", label: "All Items" },
  { id: "shoes", label: "Footwear", cat: "Shoes" },
  { id: "jackets", label: "Jackets", cat: "Jackets" },
  { id: "bags", label: "Bags", cat: "Bags" },
  { id: "wallets", label: "Wallets", cat: "Wallets" },
  { id: "belts", label: "Belts", cat: "Belts" },
  { id: "travel", label: "Travel", cat: "Travel" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialFilter = searchParams.get("filter");

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "all");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedSubType, setSelectedSubType] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [isCatalogQuoteOpen, setIsCatalogQuoteOpen] = useState(false);

  // Available sub-types for active selection
  const availableSubTypes = useMemo(() => {
    const types = new Set<string>();
    luxuryProducts.forEach((p) => {
      if (p.subType) {
        if (selectedCategory === "all" || p.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
          types.add(p.subType);
        }
      }
    });
    return Array.from(types);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    let list = [...luxuryProducts];

    // Filter by Category
    if (selectedCategory !== "all") {
      list = list.filter((p) => {
        if (selectedCategory === "shoes") return p.category === "Shoes";
        if (selectedCategory === "jackets") return p.category === "Jackets";
        if (selectedCategory === "bags") return p.category === "Bags";
        if (selectedCategory === "wallets") return p.category === "Wallets";
        if (selectedCategory === "belts") return p.category === "Belts";
        if (selectedCategory === "travel") return p.category === "Travel";
        return p.category.toLowerCase() === selectedCategory.toLowerCase();
      });
    }

    // Filter by Gender
    if (selectedGender !== "all") {
      list = list.filter((p) => p.gender === selectedGender || p.gender === "unisex");
    }

    // Filter by SubType
    if (selectedSubType !== "all") {
      list = list.filter((p) => p.subType === selectedSubType);
    }

    // Filter by Color
    if (selectedColor !== "all") {
      list = list.filter((p) =>
        p.colors.some((c) => c.name.toLowerCase().includes(selectedColor.toLowerCase()))
      );
    }

    // Filter by special query
    if (initialFilter === "new") {
      list = list.filter((p) => p.isNewArrival);
    } else if (initialFilter === "iconic") {
      list = list.filter((p) => p.isIconic);
    }

    // Sorting
    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    }

    return list;
  }, [selectedCategory, selectedGender, selectedSubType, selectedColor, sortBy, initialFilter]);

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedGender !== "all" ||
    selectedSubType !== "all" ||
    selectedColor !== "all";

  return (
    <div className="bg-white min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-leather-cognac block mb-2">
            B2B WHOLESALE & MANUFACTURING CATALOG
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-noir-950 font-medium tracking-tight">
            FOOTWEAR & LEATHER CREATIONS
          </h1>
          <p className="font-body text-neutral-600 text-xs sm:text-sm font-light mt-3 leading-relaxed">
            Goodyear-welted footwear, aviation professional shoes, tailored leather outerwear, holdalls, briefcases, and pocket leather goods available for wholesale supply, OEM development, and private-label manufacturing.
          </p>
        </div>

        {/* 1. Category Tabs Bar */}
        <div className="border-t border-b border-neutral-200 py-4 mb-6 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categoryTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setSelectedSubType("all");
                }}
                className={`text-xs font-heading font-semibold tracking-[0.18em] uppercase px-4 py-2 transition-colors ${
                  isSelected
                    ? "bg-noir-950 text-white"
                    : "bg-ivory-100 text-neutral-700 hover:bg-neutral-200 hover:text-noir-950"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 2. Secondary Filter & Sorting Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 mb-10 bg-ivory-50 px-4 sm:px-6 border border-neutral-200 text-xs font-heading">
          {/* Left: Filter Selectors */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Sub-Type Filter */}
            {availableSubTypes.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-neutral-500 uppercase tracking-wider text-[10px] font-bold">
                  Silhouette:
                </span>
                <select
                  value={selectedSubType}
                  onChange={(e) => setSelectedSubType(e.target.value)}
                  className="bg-white border border-neutral-300 text-noir-950 text-xs px-2.5 py-1.5 focus:outline-none focus:border-noir-950"
                >
                  <option value="all">All Silhouettes</option>
                  {availableSubTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Gender / Universe */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 uppercase tracking-wider text-[10px] font-bold">
                Line:
              </span>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="bg-white border border-neutral-300 text-noir-950 text-xs px-2.5 py-1.5 focus:outline-none focus:border-noir-950"
              >
                <option value="all">All Lines</option>
                <option value="men">Men&apos;s Line</option>
                <option value="women">Women&apos;s Line</option>
                <option value="unisex">Unisex / Aviation</option>
              </select>
            </div>

            {/* Reset Filters */}
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedGender("all");
                  setSelectedSubType("all");
                  setSelectedColor("all");
                }}
                className="text-leather-cognac hover:underline font-bold text-[11px] uppercase tracking-wider"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Right: Results Count & Sorting */}
          <div className="flex items-center justify-between md:justify-end gap-4">
            <span className="text-neutral-500 text-[11px] tracking-wider uppercase">
              {filteredProducts.length} Model{filteredProducts.length !== 1 ? "s" : ""}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-neutral-500 uppercase tracking-wider text-[10px] font-bold">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-neutral-300 text-noir-950 text-xs px-2.5 py-1.5 focus:outline-none focus:border-noir-950"
              >
                <option value="featured">Featured Atelier</option>
                <option value="name-asc">Model Name (A–Z)</option>
                <option value="newest">Latest Developments</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-ivory-50 border border-dashed border-neutral-300 max-w-lg mx-auto p-8">
            <h3 className="font-display text-xl text-noir-950 mb-2">No models found</h3>
            <p className="text-xs text-neutral-500 font-light mb-6">
              We could not find any models matching your chosen filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedGender("all");
                setSelectedSubType("all");
                setSelectedColor("all");
              }}
              className="btn-luxury-outline text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* 4. Bottom Atelier Pre-Order & Waitlist Callout */}
        <div className="mt-20 p-8 sm:p-12 bg-noir-950 text-white border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left max-w-xl">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-champagne-400 text-[10px] font-heading font-bold tracking-[0.25em] uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>ACEMEN ATELIER CONCIERGE</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
              Pre-Order Allocations & Bespoke Commissions
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light">
              Reserve pieces from our upcoming limited production runs, join private allocation waitlists, or inquire about bespoke commissions.
            </p>
          </div>

          <button
            onClick={() => setIsCatalogQuoteOpen(true)}
            className="btn-luxury-white text-xs tracking-[0.2em] shrink-0 font-bold"
          >
            PRE-ORDER / JOIN WAITLIST
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Catalog Quote Modal */}
      <InquiryQuoteModal
        isOpen={isCatalogQuoteOpen}
        onClose={() => setIsCatalogQuoteOpen(false)}
        defaultSubject="Atelier Pre-Order & Private Lookbook Request"
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-neutral-400 animate-pulse">
            Loading ACEMEN Atelier...
          </span>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
