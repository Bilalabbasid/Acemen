"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Eye, ArrowRight, ShieldCheck } from "lucide-react";
import { ProductItem, getProductModelNumber } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { B2B_MODE } from "@/config/b2b";

interface ProductCardProps {
  product: ProductItem;
  onQuickView?: (product: ProductItem) => void;
  onOpenQuote?: (product: ProductItem) => void;
}

export default function ProductCard({ product, onQuickView, onOpenQuote }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorite = isInWishlist(product.id);
  const hasDistinctSecondary =
    Boolean(product.images.secondary) &&
    product.images.secondary !== product.images.primary;

  const modelNumber = getProductModelNumber(product);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-ivory-100/70 overflow-hidden border border-neutral-200/80 mb-3.5">
        {/* Primary Image */}
        <img
          src={product.images.primary}
          alt={product.name}
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            hasDistinctSecondary
              ? isHovered
                ? "opacity-0 scale-105"
                : "opacity-100 scale-100"
              : isHovered
              ? "opacity-100 scale-108"
              : "opacity-100 scale-100"
          }`}
        />

        {/* Secondary Hover Image Reveal (Only if distinct angle/detail of the SAME product) */}
        {hasDistinctSecondary && (
          <img
            src={product.images.secondary}
            alt={`${product.name} alternate view`}
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        )}

        {/* Tag / Model Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {product.tag && (
            <span className="bg-white/95 backdrop-blur-xs text-noir-950 text-[9px] font-heading font-bold tracking-[0.2em] uppercase px-2.5 py-1 shadow-xs border border-black/5">
              {product.tag}
            </span>
          )}
          <span className="bg-noir-950/90 text-champagne-400 text-[8.5px] font-heading font-bold tracking-[0.2em] uppercase px-2 py-0.5 shadow-xs">
            {modelNumber}
          </span>
        </div>

        {/* Wishlist / Bookmark for Quote */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-noir-950 hover:scale-110 transition-transform shadow-xs"
          aria-label={isFavorite ? "Remove from saved specifications" : "Save specification for quote"}
          title={isFavorite ? "Saved for inquiry" : "Save for quote inquiry"}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? "fill-leather-cognac text-leather-cognac" : "text-neutral-600 stroke-[1.5]"
            }`}
          />
        </button>

        {/* Quick Actions Bar (Slides up on hover) */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/75 via-black/40 to-transparent transition-all duration-300 flex items-center justify-center gap-2 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {/* Atelier Pre-Order & Waitlist mode */}
          {B2B_MODE ? (
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 btn-luxury-white text-[10px] py-2.5 px-3 tracking-[0.18em] shadow-md text-center font-bold"
            >
              PRE-ORDER / WAITLIST
            </Link>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="flex-1 btn-luxury-white text-[10px] py-2.5 px-3 tracking-[0.18em] shadow-md"
            >
              Add to Bag
            </button>
          )}

          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className="w-9 h-9 bg-white text-noir-950 flex items-center justify-center hover:bg-ivory-100 transition-colors shadow-md shrink-0"
              aria-label="View specifications & details"
              title="Quick Specifications"
            >
              <Eye className="w-4 h-4 stroke-[1.5]" />
            </button>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 space-y-1.5">
        {/* Category & Model Eyebrow */}
        <div className="flex items-center justify-between text-[10px] font-heading font-bold tracking-[0.18em] uppercase text-leather-cognac">
          <span>{product.subType || product.category}</span>
          <span className="text-neutral-500 font-mono text-[9px]">{modelNumber}</span>
        </div>

        {/* Product Title */}
        <Link
          href={`/products/${product.slug}`}
          className="font-display text-base sm:text-lg font-semibold text-noir-950 hover:text-leather-cognac transition-colors leading-snug"
        >
          {product.name}
        </Link>

        {/* Specs / Color swatches */}
        <div className="pt-0.5 space-y-1">
          {/* Atelier Pre-Order & Waitlist display */}
          {B2B_MODE ? (
            <div className="flex items-center justify-between text-[11px] text-neutral-600 font-light">
              <span className="truncate max-w-[170px]">
                {product.materials[0]?.replace("100% ", "") || "Premium European Leather"}
              </span>

              {/* Color swatches */}
              {product.colors && product.colors.length > 0 && (
                <div className="flex items-center gap-1.5 shrink-0" title={`Colors: ${product.colors.map(c => c.name).join(", ")}`}>
                  {product.colors.slice(0, 3).map((col) => (
                    <span
                      key={col.name}
                      className="w-2.5 h-2.5 rounded-full border border-neutral-300 shadow-2xs"
                      style={{ backgroundColor: col.hex }}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Retail D2C pricing (preserved for when retail sales are enabled) */
            <div className="flex items-center justify-between pt-1">
              <span className="font-heading text-sm font-semibold text-noir-950">
                {product.formattedPrice}
              </span>
            </div>
          )}

          {/* Limited Batch / Pre-Order Badge */}
          {B2B_MODE && (
            <div className="flex items-center gap-1 pt-0.5 text-[9.5px] font-heading tracking-wider uppercase text-neutral-500 font-semibold">
              <ShieldCheck className="w-3 h-3 text-leather-cognac shrink-0" />
              <span>Handcrafted in Limited Atelier Batches</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
