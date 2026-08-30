"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Eye } from "lucide-react";
import { ProductItem } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: ProductItem;
  onQuickView?: (product: ProductItem) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorite = isInWishlist(product.id);
  const hasDistinctSecondary =
    Boolean(product.images.secondary) &&
    product.images.secondary !== product.images.primary;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-ivory-100/70 overflow-hidden border border-neutral-200/80 mb-4">
        {/* Primary Image */}
        <img
          src={product.images.primary}
          alt={product.name}
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
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        )}

        {/* Tag (e.g. Masterpiece, Iconic, New Arrival) */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-white/90 backdrop-blur-xs text-noir-950 text-[9px] font-heading font-bold tracking-[0.2em] uppercase px-2.5 py-1 shadow-xs border border-black/5">
              {product.tag}
            </span>
          </div>
        )}

        {/* Wishlist Button (Top Right) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-noir-950 hover:scale-110 transition-transform shadow-xs"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? "fill-leather-cognac text-leather-cognac" : "text-neutral-600 stroke-[1.5]"
            }`}
          />
        </button>

        {/* Quick Actions Bar (Slides up on hover) */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 flex items-center justify-center gap-2 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="flex-1 btn-luxury-white text-[10px] py-2.5 px-3 tracking-[0.18em] shadow-md"
          >
            Add to Bag
          </button>
          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className="w-9 h-9 bg-white text-noir-950 flex items-center justify-center hover:bg-ivory-100 transition-colors shadow-md shrink-0"
              aria-label="Quick view"
            >
              <Eye className="w-4 h-4 stroke-[1.5]" />
            </button>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 space-y-1">
        {/* Category Eyebrow */}
        <span className="text-[10px] font-heading font-bold tracking-[0.2em] uppercase text-leather-cognac">
          {product.category} • {product.collection}
        </span>

        {/* Product Title */}
        <Link
          href={`/products/${product.slug}`}
          className="font-display text-base sm:text-lg font-semibold text-noir-950 hover:text-leather-cognac transition-colors leading-snug"
        >
          {product.name}
        </Link>

        {/* Price & Colors */}
        <div className="flex items-center justify-between pt-1">
          <span className="font-heading text-sm font-semibold text-noir-950">
            {product.formattedPrice}
          </span>

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5" title={product.colors.map(c => c.name).join(", ")}>
              {product.colors.slice(0, 3).map((col) => (
                <span
                  key={col.name}
                  className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                  style={{ backgroundColor: col.hex }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
