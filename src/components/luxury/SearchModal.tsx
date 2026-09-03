"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { luxuryProducts, ProductItem, getProductModelNumber } from "@/data/products";
import { B2B_MODE } from "@/config/b2b";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedSearches = [
  "Oxford Shoes",
  "Pilot Collection",
  "Monk Strap",
  "Chelsea Boots",
  "Reversible Belt",
  "Sovereign Weekender",
  "Audley Briefcase",
  "Kensington Tote",
  "Bifold Wallet",
  "Passport Case",
];

const popularCategories = [
  { name: "Footwear Atelier", href: "/collections/shoes" },
  { name: "The Pilot Collection", href: "/collections/pilot" },
  { name: "Leather Bags", href: "/collections/bags" },
  { name: "Sartorial Belts", href: "/collections/belts" },
  { name: "Wallets & Cardholders", href: "/collections/wallets" },
  { name: "Travel & Trunks", href: "/collections/travel" },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Filter products based on query
  const filteredProducts = query.trim()
    ? luxuryProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          (p.subType && p.subType.toLowerCase().includes(query.toLowerCase())) ||
          p.collection.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen sm:min-h-0 sm:max-h-[90vh] bg-white text-noir-950 z-10 sm:max-w-4xl sm:mx-auto sm:my-10 sm:rounded-none shadow-2xl flex flex-col"
          >
            {/* Top Search Bar */}
            <div className="p-6 sm:p-8 border-b border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-[10px] tracking-[0.3em] uppercase font-bold text-neutral-400">
                  Search ACEMEN Online Atelier
                </span>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-neutral-500 hover:text-noir-950 transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6 stroke-[1.2]" />
                </button>
              </div>

              <div className="relative flex items-center">
                <Search className="w-6 h-6 text-neutral-400 stroke-[1.5] absolute left-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for oxfords, pilot shoes, belts, holdalls, briefcases, wallets..."
                  className="w-full pl-10 pr-4 py-3 font-display text-xl sm:text-2xl text-noir-950 placeholder-neutral-400 bg-transparent border-b border-neutral-300 focus:border-noir-950 focus:outline-none transition-colors"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-0 text-xs font-heading tracking-widest text-neutral-400 hover:text-noir-950 uppercase"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Results or Suggested */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 max-h-[60vh]">
              {query.trim() === "" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                  {/* Suggested terms */}
                  <div>
                    <h4 className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-neutral-400 mb-4">
                      Suggested Searches
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {suggestedSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1.5 bg-ivory-100 hover:bg-noir-950 hover:text-white transition-colors text-xs font-heading tracking-wider uppercase font-semibold"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular categories */}
                  <div>
                    <h4 className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-neutral-400 mb-4">
                      Explore by Department
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {popularCategories.map((cat) => (
                        <Link
                          key={cat.name}
                          href={cat.href}
                          onClick={onClose}
                          className="p-3 bg-ivory-100 hover:bg-noir-950 hover:text-white transition-all duration-200 text-xs font-heading tracking-wider uppercase font-semibold flex items-center justify-between group"
                        >
                          <span>{cat.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="font-display text-2xl text-noir-950 mb-2">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-neutral-500 text-xs font-heading tracking-wider uppercase">
                    Try checking your spelling or exploring our footwear, pilot, bag, and belt collections.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6 pb-2 border-b border-neutral-100">
                    <span className="font-heading text-xs tracking-[0.2em] uppercase font-bold text-neutral-500">
                      Found {filteredProducts.length} Creation{filteredProducts.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={onClose}
                        className="group flex gap-4 items-center p-3 hover:bg-ivory-50 transition-colors"
                      >
                        <div className="relative w-20 h-24 bg-ivory-100 shrink-0 overflow-hidden border border-neutral-200">
                          <img
                            src={product.images.primary}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-heading tracking-[0.2em] uppercase text-leather-cognac block mb-0.5">
                            {product.collection}
                          </span>
                          <h4 className="font-display text-base font-semibold text-noir-950 group-hover:text-leather-cognac transition-colors truncate">
                            {product.name}
                          </h4>
                          {/* B2B MODE — D2C pricing temporarily disabled */}
                          {B2B_MODE ? (
                            <p className="text-xs font-heading font-medium text-neutral-500 mt-1">
                              Model: {getProductModelNumber(product)} • Specifications Available
                            </p>
                          ) : (
                            <p className="text-sm font-heading font-semibold text-noir-950 mt-1">
                              {product.formattedPrice}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-4 sm:p-6 bg-ivory-50 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-[11px] font-heading tracking-wider uppercase text-neutral-500">
                London Atelier Direct Service
              </span>
              <Link
                href="/products"
                onClick={onClose}
                className="editorial-link text-[11px]"
              >
                View Full Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
