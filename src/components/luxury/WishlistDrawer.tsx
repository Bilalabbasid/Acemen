"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Heart, Trash2, ShoppingBag, FileText, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { B2B_MODE } from "@/config/b2b";
import { getProductModelNumber } from "@/data/products";
import InquiryQuoteModal from "./InquiryQuoteModal";

export default function WishlistDrawer() {
  const { wishlistItems, isWishlistOpen, closeWishlist, removeFromWishlist, wishlistCount } =
    useWishlist();
  const { addToCart } = useCart();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isWishlistOpen && (
          <div className="fixed inset-0 z-[200] overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeWishlist}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-over */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute inset-y-0 right-0 max-w-full flex pl-10"
            >
              <div className="w-screen max-w-md bg-white text-noir-950 flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
                  <div className="flex items-center gap-2.5">
                    <Heart className="w-5 h-5 text-noir-950 stroke-[1.5] fill-noir-950" />
                    <span className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-noir-950">
                      {B2B_MODE ? `Saved Specifications (${wishlistCount})` : `Saved Creations (${wishlistCount})`}
                    </span>
                  </div>
                  <button
                    onClick={closeWishlist}
                    className="p-1.5 -mr-1.5 text-neutral-500 hover:text-noir-950 transition-colors"
                    aria-label="Close saved specs"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" />
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
                  {wishlistItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-16">
                      <div className="w-16 h-16 rounded-full bg-ivory-100 flex items-center justify-center mb-4 text-neutral-400">
                        <Heart className="w-7 h-7 stroke-[1.2]" />
                      </div>
                      <h3 className="font-display text-2xl font-medium text-noir-950 mb-2">
                        {B2B_MODE ? "No specifications saved" : "Your wishlist is empty"}
                      </h3>
                      <p className="text-neutral-500 text-xs font-heading tracking-wider uppercase mb-8 max-w-xs">
                        Save models to your project shortlist for direct quotation.
                      </p>
                      <button onClick={closeWishlist} className="btn-luxury-primary">
                        Explore Catalog
                      </button>
                    </div>
                  ) : (
                    wishlistItems.map((product) => (
                      <div key={product.id} className="py-5 flex gap-4 items-start">
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={closeWishlist}
                          className="relative w-20 h-24 bg-ivory-100 shrink-0 overflow-hidden border border-neutral-200 block"
                        >
                          <img
                            src={product.images.primary}
                            alt={product.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </Link>

                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-heading tracking-[0.2em] uppercase text-leather-cognac block mb-0.5">
                            {product.collection}
                          </span>
                          <Link
                            href={`/products/${product.slug}`}
                            onClick={closeWishlist}
                            className="font-display text-base font-semibold text-noir-950 hover:text-leather-cognac transition-colors truncate block leading-snug"
                          >
                            {product.name}
                          </Link>

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

                          <div className="flex items-center gap-3 mt-3">
                            {B2B_MODE ? (
                              <Link
                                href={`/products/${product.slug}`}
                                onClick={closeWishlist}
                                className="btn-luxury-outline text-[10px] py-1.5 px-3 flex items-center gap-1.5"
                              >
                                View Specs
                              </Link>
                            ) : (
                              <button
                                onClick={() => {
                                  addToCart(product);
                                  closeWishlist();
                                }}
                                className="btn-luxury-outline text-[10px] py-2 px-4 flex items-center gap-1.5"
                              >
                                <ShoppingBag className="w-3 h-3" />
                                Add to Bag
                              </button>
                            )}

                            <button
                              onClick={() => removeFromWishlist(product.id)}
                              className="text-neutral-400 hover:text-red-600 transition-colors p-1.5"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer Action */}
                {wishlistItems.length > 0 && B2B_MODE && (
                  <div className="border-t border-neutral-200 p-6 bg-ivory-50 space-y-3">
                    <button
                      onClick={() => {
                        closeWishlist();
                        setIsQuoteOpen(true);
                      }}
                      className="w-full btn-luxury-primary py-3.5 tracking-[0.2em] flex items-center justify-center gap-2 text-xs font-bold"
                    >
                      <Sparkles className="w-4 h-4" />
                      PRE-ORDER SAVED PIECES ({wishlistCount})
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <InquiryQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultSubject={`Pre-Order & Waitlist for ${wishlistItems.map(i => i.name).join(", ")}`}
      />
    </>
  );
}
