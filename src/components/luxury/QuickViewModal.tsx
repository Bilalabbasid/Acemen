"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Heart, ShoppingBag, ShieldCheck, ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductItem, getProductModelNumber } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { B2B_MODE } from "@/config/b2b";
import InquiryQuoteModal from "./InquiryQuoteModal";

interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);

  if (!product) return null;

  const activeImage = selectedImage || product.images.primary;
  const activeColor = selectedColor || product.colors[0]?.name || "Default";
  const activeSize = selectedSize || (product.sizes ? product.sizes[2] || product.sizes[0] : "");
  const isFav = isInWishlist(product.id);
  const isFootwear = product.category === "Shoes" || product.category === "Pilot Collection" || !!product.sizes;
  const modelNumber = getProductModelNumber(product);

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-[260] overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl bg-white text-noir-950 overflow-hidden shadow-2xl z-10 my-8 border border-neutral-200"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-neutral-500 hover:text-noir-950 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 stroke-[1.2]" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Gallery */}
              <div className="bg-ivory-100 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-200">
                <div className="relative aspect-square w-full overflow-hidden bg-white border border-neutral-200 mb-4">
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-noir-950 text-champagne-400 text-[9px] font-heading font-bold tracking-[0.2em] uppercase px-2.5 py-1 shadow-xs">
                      {modelNumber}
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                {product.images.gallery && product.images.gallery.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {product.images.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-14 h-14 bg-white shrink-0 border overflow-hidden transition-all ${
                          activeImage === img
                            ? "border-noir-950 ring-1 ring-noir-950"
                            : "border-neutral-200 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Info */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-heading font-bold tracking-[0.25em] uppercase text-leather-cognac mb-1">
                      <span>{product.collection}</span>
                      <span className="text-neutral-500 font-mono">{modelNumber}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-noir-950">
                      {product.name}
                    </h3>

                    {/* B2B MODE — D2C pricing temporarily disabled. Restore when retail sales are enabled. */}
                    {!B2B_MODE && (
                      <p className="font-heading text-lg font-bold text-noir-950 mt-2">
                        {product.formattedPrice}
                      </p>
                    )}
                  </div>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                    {product.shortDescription}
                  </p>

                  {/* B2B Technical Specifications Grid */}
                  <div className="py-2.5 px-3.5 bg-ivory-50 border border-neutral-200 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <strong className="text-neutral-500 font-heading text-[10px] uppercase tracking-wider">Upper Leather:</strong>
                      <span className="text-noir-950 font-medium">{product.materials[0]?.replace("100% ", "") || "French Box Calfskin"}</span>
                    </div>
                    <div className="flex justify-between">
                      <strong className="text-neutral-500 font-heading text-[10px] uppercase tracking-wider">Sole Construction:</strong>
                      <span className="text-noir-950 font-medium">{product.dimensions.soleType || "Goodyear Welted Leather Sole"}</span>
                    </div>
                    <div className="flex justify-between">
                      <strong className="text-neutral-500 font-heading text-[10px] uppercase tracking-wider">Branding:</strong>
                      <span className="text-noir-950 font-medium">Private Label Available</span>
                    </div>
                    <div className="flex justify-between">
                      <strong className="text-neutral-500 font-heading text-[10px] uppercase tracking-wider">Customization:</strong>
                      <span className="text-green-700 font-medium">Full OEM / ODM Support</span>
                    </div>
                  </div>

                  {/* Colors */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="pt-1">
                      <span className="text-xs font-heading font-semibold tracking-wider uppercase text-neutral-500 block mb-1.5">
                        Color Options: <strong className="text-noir-950">{activeColor}</strong> (Custom Dye Available)
                      </span>
                      <div className="flex gap-2">
                        {product.colors.map((c) => (
                          <button
                            key={c.name}
                            onClick={() => setSelectedColor(c.name)}
                            className={`w-7 h-7 rounded-full border-2 transition-all ${
                              activeColor === c.name
                                ? "border-noir-950 scale-110"
                                : "border-transparent opacity-80 hover:opacity-100"
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footwear Size Range */}
                  {isFootwear && product.sizes && (
                    <div className="pt-1">
                      <span className="text-xs font-heading font-semibold tracking-wider uppercase text-neutral-500 block mb-1">
                        Standard Size Matrix: <span className="text-noir-950 font-medium">EU 39 – 46 (Custom Widths on Request)</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 space-y-3">
                  <div className="flex gap-3">
                    {/* B2B MODE — D2C pricing & Add to Bag disabled. Replaced with Request a Quote CTA */}
                    {B2B_MODE ? (
                      <button
                        onClick={() => setIsQuoteOpen(true)}
                        className="flex-1 btn-luxury-primary py-3.5 tracking-[0.2em] flex items-center justify-center gap-2 text-xs"
                      >
                        <FileText className="w-4 h-4" />
                        REQUEST A QUOTE
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          addToCart(product, activeColor, 1, isFootwear ? activeSize : undefined);
                          onClose();
                        }}
                        className="flex-1 btn-luxury-primary py-3.5 tracking-[0.2em] flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Add to Bag
                      </button>
                    )}

                    <button
                      onClick={() => toggleWishlist(product)}
                      className="w-12 h-12 border border-neutral-300 flex items-center justify-center text-noir-950 hover:border-noir-950 transition-colors shrink-0"
                      aria-label="Save for quote inquiry"
                      title={isFav ? "Saved for inquiry" : "Save specification"}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFav ? "fill-leather-cognac text-leather-cognac" : "text-neutral-700"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={onClose}
                      className="editorial-link text-[11px]"
                    >
                      View Full Product Details & Manufacturing Specs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Quote Modal */}
      <InquiryQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        product={product}
      />
    </>
  );
}
