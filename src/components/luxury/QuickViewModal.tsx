"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Heart, ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductItem } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

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

  if (!product) return null;

  const activeImage = selectedImage || product.images.primary;
  const activeColor = selectedColor || product.colors[0]?.name || "Default";
  const activeSize = selectedSize || (product.sizes ? product.sizes[2] || product.sizes[0] : "");
  const isFav = isInWishlist(product.id);
  const isFootwear = product.category === "Shoes" || product.category === "Pilot Collection" || !!product.sizes;

  return (
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
          className="relative w-full max-w-4xl bg-white text-noir-950 overflow-hidden shadow-2xl z-10 my-8"
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
                  <span className="text-[10px] font-heading font-bold tracking-[0.25em] uppercase text-leather-cognac block mb-1">
                    {product.collection}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-noir-950">
                    {product.name}
                  </h3>
                  <p className="font-heading text-lg font-bold text-noir-950 mt-2">
                    {product.formattedPrice}
                  </p>
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs font-heading font-semibold tracking-wider uppercase text-neutral-500 block mb-2">
                      Color: <strong className="text-noir-950">{activeColor}</strong>
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

                {/* Footwear Size Selector in QuickView */}
                {isFootwear && product.sizes && (
                  <div className="pt-2">
                    <span className="text-xs font-heading font-semibold tracking-wider uppercase text-neutral-500 block mb-1.5">
                      Size: <strong className="text-noir-950">EU {activeSize}</strong>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-2.5 py-1 text-[11px] font-heading font-semibold border transition-all ${
                            activeSize === sz
                              ? "bg-noir-950 text-white border-noir-950"
                              : "bg-white text-neutral-700 border-neutral-300 hover:border-noir-950"
                          }`}
                        >
                          EU {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dimensions or Origin */}
                <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-500 space-y-1">
                  {product.dimensions.heelHeight ? (
                    <p>Heel: {product.dimensions.heelHeight}</p>
                  ) : (
                    <p>Dimensions: {product.dimensions.height || "Bespoke"} × {product.dimensions.width || "Tailored"}</p>
                  )}
                  <p>Origin: Hand-assembled in London Atelier</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <div className="flex gap-3">
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

                  <button
                    onClick={() => toggleWishlist(product)}
                    className="w-12 h-12 border border-neutral-300 flex items-center justify-center text-noir-950 hover:border-noir-950 transition-colors shrink-0"
                    aria-label="Toggle wishlist"
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
                    View Full Product Details & Craftsmanship
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
