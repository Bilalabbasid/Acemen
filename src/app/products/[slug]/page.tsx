"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  ShieldCheck,
  ChevronRight,
  Minus,
  Plus,
  Share2,
  Check,
  Ruler,
  Sparkles,
  FileText,
  Package,
  Layers,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { luxuryProducts, ProductItem, getProductModelNumber } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { B2B_MODE } from "@/config/b2b";
import ProductCard from "@/components/luxury/ProductCard";
import InquiryQuoteModal from "@/components/luxury/InquiryQuoteModal";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = luxuryProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState(product.images.primary);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Standard");
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[2] || product.sizes[0] : "");
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string>("details");
  const [copied, setCopied] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const isFavorite = isInWishlist(product.id);
  const isFootwear = product.category === "Shoes" || product.category === "Pilot Collection" || !!product.sizes;
  const modelNumber = getProductModelNumber(product);

  // Related products from same or adjacent category
  const relatedProducts = luxuryProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.gender === product.gender))
    .slice(0, 4);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 sm:pt-32 pb-24">
      {/* Breadcrumb */}
      <div className="container-fluid py-4 border-b border-neutral-100">
        <nav className="flex items-center gap-2 text-[11px] font-heading tracking-wider uppercase text-neutral-500">
          <Link href="/" className="hover:text-noir-950 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link href="/products" className="hover:text-noir-950 transition-colors">
            Catalog
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link
            href={`/collections/${product.category === "Pilot Collection" ? "pilot" : product.category.toLowerCase()}`}
            className="hover:text-noir-950 transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-noir-950 font-semibold truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* Main PDP Grid */}
      <div className="container-fluid pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* ── LEFT: Large Product Image Gallery (7 Cols) ── */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Large View */}
            <div className="relative aspect-square w-full bg-ivory-100/60 overflow-hidden border border-neutral-200">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                {product.tag && (
                  <span className="bg-white text-noir-950 text-[10px] font-heading font-bold tracking-[0.25em] uppercase px-3 py-1.5 shadow-sm border border-neutral-200">
                    {product.tag}
                  </span>
                )}
                <span className="bg-noir-950 text-champagne-400 text-[9px] font-heading font-bold tracking-[0.25em] uppercase px-3 py-1 shadow-sm">
                  MODEL: {modelNumber}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.images.gallery && product.images.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {product.images.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative aspect-square bg-ivory-50 overflow-hidden border transition-all ${
                      selectedImage === imgUrl
                        ? "border-noir-950 ring-1 ring-noir-950"
                        : "border-neutral-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Savoir-Faire Callout Banner under images */}
            <div className="p-6 bg-ivory-50 border border-neutral-200/80 mt-8 space-y-2">
              <div className="flex items-center gap-2 text-leather-cognac text-xs font-heading font-bold tracking-[0.25em] uppercase">
                <Sparkles className="w-4 h-4" />
                <span>London Atelier Craftsmanship & OEM Standards</span>
              </div>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                {isFootwear
                  ? "Every pair of ACEMEN shoes is hand-lasted over traditional British forms, finished with genuine Goodyear welted channeled soles and French box calfskin. Available for private-label development and custom volume manufacturing."
                  : "Every ACEMEN creation is cut from certified French or Italian full-grain hides, hand saddle-stitched with waxed linen thread, and accompanied by our manufacturing lifetime restoration pledge."}
              </p>
            </div>
          </div>

          {/* ── RIGHT: Product Info & Commerce Actions (5 Cols - Sticky) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            {/* Header / Titles */}
            <div className="border-b border-neutral-200 pb-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac">
                  ACEMEN • {product.collection}
                </span>

                <button
                  onClick={handleShare}
                  className="text-neutral-500 hover:text-noir-950 p-1 flex items-center gap-1 text-[10px] font-heading tracking-wider uppercase"
                  title="Copy link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Share Spec"}</span>
                </button>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-noir-950 leading-tight">
                {product.name}
              </h1>

              {/* Atelier Pre-Order & Waitlist mode */}
              {B2B_MODE ? (
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-noir-950 px-2.5 py-1 bg-ivory-100 border border-neutral-200">
                      MODEL: {modelNumber}
                    </span>
                    <span className="text-[11px] text-leather-cognac font-heading font-bold tracking-wider uppercase">
                      Atelier Allocation
                    </span>
                  </div>
                  <span className="text-[11px] text-green-700 font-heading font-semibold tracking-wider uppercase bg-green-50 px-2.5 py-1 border border-green-200">
                    Handcrafted in Small Batches
                  </span>
                </div>
              ) : (
                /* Retail D2C pricing block */
                <div className="flex items-center justify-between pt-2">
                  <span className="font-heading text-2xl font-bold text-noir-950">
                    {product.formattedPrice}
                  </span>
                  <span className="text-[11px] text-green-700 font-heading font-semibold tracking-wider uppercase bg-green-50 px-2.5 py-1 border border-green-200">
                    In Stock • Atelier Ready
                  </span>
                </div>
              )}
            </div>

            {/* Short Editorial Description */}
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
              {product.shortDescription}
            </p>

            {/* ── PRODUCT DETAILS & CRAFTSMANSHIP SPECIFICATIONS ── */}
            <div className="p-5 bg-ivory-50 border border-neutral-200 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <span className="text-[10px] font-heading font-bold tracking-[0.25em] uppercase text-leather-cognac">
                  ATELIER SPECIFICATIONS
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  {modelNumber}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
                <div>
                  <strong className="text-neutral-500 font-heading uppercase text-[10px] tracking-wider block">Model:</strong>
                  <span className="text-noir-950 font-semibold">{modelNumber}</span>
                </div>
                <div>
                  <strong className="text-neutral-500 font-heading uppercase text-[10px] tracking-wider block">Category:</strong>
                  <span className="text-noir-950 font-semibold">{product.subType || product.category}</span>
                </div>
                <div>
                  <strong className="text-neutral-500 font-heading uppercase text-[10px] tracking-wider block">Upper:</strong>
                  <span className="text-noir-950 font-semibold">{product.materials[0]?.replace("100% ", "") || "Premium Leather"}</span>
                </div>
                <div>
                  <strong className="text-neutral-500 font-heading uppercase text-[10px] tracking-wider block">Finish:</strong>
                  <span className="text-noir-950 font-semibold">Hand-Burnished / Mirror Glaze</span>
                </div>
                <div>
                  <strong className="text-neutral-500 font-heading uppercase text-[10px] tracking-wider block">Colors:</strong>
                  <span className="text-noir-950 font-semibold">Cognac, Noir, Espresso & Custom</span>
                </div>
                <div>
                  <strong className="text-neutral-500 font-heading uppercase text-[10px] tracking-wider block">Sole:</strong>
                  <span className="text-noir-950 font-semibold">{product.dimensions.soleType || "Closed-Channel Leather / Dainite"}</span>
                </div>
                <div>
                  <strong className="text-neutral-500 font-heading uppercase text-[10px] tracking-wider block">Craftsmanship:</strong>
                  <span className="text-noir-950 font-semibold">Goodyear-Welted / Hand-Lasted</span>
                </div>
                <div>
                  <strong className="text-neutral-500 font-heading uppercase text-[10px] tracking-wider block">Allocation:</strong>
                  <span className="text-green-700 font-semibold">Available for Pre-Order</span>
                </div>
              </div>
            </div>

            {/* Color Selection & Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs font-heading tracking-wider uppercase">
                  <span className="text-neutral-500">Available Colorways:</span>
                  <span className="font-bold text-noir-950">{selectedColor}</span>
                </div>
                <div className="flex gap-2.5">
                  {product.colors.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === col.name
                          ? "border-noir-950 scale-110 shadow-sm"
                          : "border-transparent opacity-75 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: col.hex }}
                      title={col.name}
                    >
                      {selectedColor === col.name && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footwear Size Matrix */}
            {isFootwear && product.sizes && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-heading tracking-wider uppercase">
                  <span className="text-neutral-500">Select Sizing For Pre-Order:</span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-leather-cognac hover:underline flex items-center gap-1 font-bold"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Conversion Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`h-11 flex items-center justify-center font-heading text-xs font-semibold tracking-wider transition-all border ${
                        selectedSize === sz
                          ? "bg-noir-950 text-white border-noir-950"
                          : "bg-white text-neutral-800 border-neutral-300 hover:border-noir-950"
                      }`}
                    >
                      EU {sz}
                    </button>
                  ))}
                </div>

                {/* Size guide modal / callout */}
                <AnimatePresence>
                  {showSizeGuide && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-ivory-100 border border-neutral-200 text-xs space-y-2 overflow-hidden"
                    >
                      <div className="flex items-center justify-between font-heading font-bold uppercase tracking-wider text-noir-950">
                        <span>International Sizing Matrix</span>
                        <button onClick={() => setShowSizeGuide(false)} className="text-neutral-500 hover:text-noir-950">✕</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-heading pt-1 border-t border-neutral-200">
                        <div><strong>EU</strong>: 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46</div>
                        <div><strong>UK</strong>: 5.5 | 6.5 | 7.5 | 8.5 | 9.5 | 10.5 | 11.5 | 12.5</div>
                        <div><strong>US</strong>: 6.5 | 7.5 | 8.5 | 9.5 | 10.5 | 11.5 | 12.5 | 13.5</div>
                      </div>
                      <p className="text-[10px] text-neutral-500 pt-1 font-light italic">
                        ACEMEN Lasts are graded to European standards. Custom volume production can be Lasted on US, UK, or bespoke client-supplied lasts.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* ── PRE-ORDER & WAITLIST ACTION BUTTONS ── */}
            <div className="space-y-3 pt-4">
              {/* Atelier Pre-Order & Waitlist Mode */}
              {B2B_MODE ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="flex-1 btn-luxury-primary h-13 tracking-[0.22em] flex items-center justify-center gap-2 text-xs font-bold"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>PRE-ORDER NOW</span>
                    </button>

                    <button
                      onClick={() => toggleWishlist(product)}
                      className="w-13 h-13 border border-neutral-300 flex items-center justify-center text-noir-950 hover:border-noir-950 transition-colors shrink-0"
                      aria-label="Save for pre-order waitlist"
                      title={isFavorite ? "Saved in wish list" : "Save specification"}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFavorite ? "fill-leather-cognac text-leather-cognac" : "text-neutral-600"
                        }`}
                      />
                    </button>
                  </div>

                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full btn-luxury-outline h-12 tracking-[0.2em] flex items-center justify-center gap-2 text-xs font-bold"
                  >
                    <Package className="w-4 h-4" />
                    <span>JOIN THE WAITLIST & INQUIRE</span>
                  </button>
                </div>
              ) : (
                /* Original D2C Add to Bag & Quantity selector (preserved for retail mode) */
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-neutral-300 h-12">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-full flex items-center justify-center text-neutral-600 hover:text-noir-950 hover:bg-neutral-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center text-xs font-heading font-bold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-full flex items-center justify-center text-neutral-600 hover:text-noir-950 hover:bg-neutral-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => addToCart(product, selectedColor, quantity, selectedSize)}
                    className="flex-1 btn-luxury-primary h-12 tracking-[0.25em] flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              )}

              {/* B2B Manufacturing Promise */}
              <div className="pt-2 flex items-center gap-2 text-[11px] text-neutral-500 font-heading tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-leather-cognac shrink-0" />
                <span>OEM / ODM development, private-label branding & worldwide insured freight</span>
              </div>
            </div>

            {/* ── Product Specification Accordions ── */}
            <div className="border-t border-neutral-200 divide-y divide-neutral-200 pt-4">
              {/* Accordion 1: Story & Details */}
              <div className="py-4">
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === "details" ? "" : "details")
                  }
                  className="w-full flex items-center justify-between font-heading text-xs tracking-[0.2em] uppercase font-bold text-noir-950 text-left"
                >
                  <span>Design Narrative & Construction</span>
                  <span className="text-base font-light">
                    {activeAccordion === "details" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "details" && (
                  <div className="pt-3 text-xs text-neutral-600 space-y-3 font-light leading-relaxed">
                    <p>{product.story}</p>
                    <ul className="list-disc list-inside space-y-1.5 pt-1">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 2: Materials & Provenance */}
              <div className="py-4">
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === "materials" ? "" : "materials")
                  }
                  className="w-full flex items-center justify-between font-heading text-xs tracking-[0.2em] uppercase font-bold text-noir-950 text-left"
                >
                  <span>Materials & Leather Provenance</span>
                  <span className="text-base font-light">
                    {activeAccordion === "materials" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "materials" && (
                  <div className="pt-3 text-xs text-neutral-600 space-y-2 font-light">
                    <ul className="list-disc list-inside space-y-1.5">
                      {product.materials.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 3: Dimensions & Specifications */}
              <div className="py-4">
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === "dimensions" ? "" : "dimensions")
                  }
                  className="w-full flex items-center justify-between font-heading text-xs tracking-[0.2em] uppercase font-bold text-noir-950 text-left"
                >
                  <span>{isFootwear ? "Last & Sole Technical Data" : "Dimensions & Specifications"}</span>
                  <span className="text-base font-light">
                    {activeAccordion === "dimensions" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "dimensions" && (
                  <div className="pt-3 text-xs text-neutral-600 space-y-1.5 font-light">
                    {product.dimensions.heelHeight && <p>Heel Profile: {product.dimensions.heelHeight}</p>}
                    {product.dimensions.soleType && <p>Sole Construction: {product.dimensions.soleType}</p>}
                    {product.dimensions.height && <p>Height: {product.dimensions.height}</p>}
                    {product.dimensions.width && <p>Width: {product.dimensions.width}</p>}
                    {product.dimensions.depth && <p>Depth: {product.dimensions.depth}</p>}
                    {product.dimensions.strapDrop && <p>Strap Drop: {product.dimensions.strapDrop}</p>}
                  </div>
                )}
              </div>

              {/* Accordion 4: Wholesale Dispatch & Sampling Terms */}
              <div className="py-4">
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === "shipping" ? "" : "shipping")
                  }
                  className="w-full flex items-center justify-between font-heading text-xs tracking-[0.2em] uppercase font-bold text-noir-950 text-left"
                >
                  <span>Wholesale Logistics & Sampling</span>
                  <span className="text-base font-light">
                    {activeAccordion === "shipping" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "shipping" && (
                  <div className="pt-3 text-xs text-neutral-600 space-y-2 font-light leading-relaxed">
                    <p>
                      <strong>Sample Prototyping:</strong> Initial physical sample pairs are produced and dispatched via express international air freight following tech pack sign-off.
                    </p>
                    <p>
                      <strong>Volume Freight:</strong> Full commercial shipments are handled via air or sea freight with custom export documentation, full transit insurance, and port clearance support.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Creations ── */}
        {relatedProducts.length > 0 && (
          <div className="pt-24 sm:pt-32 border-t border-neutral-200 mt-20">
            <div className="text-center mb-12">
              <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-leather-cognac block mb-2">
                COLLECTION PIECES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-noir-950">
                RELATED CREATIONS & SILHOUETTES
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Inquiry & Quote Modal */}
      <InquiryQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        product={product}
      />
    </div>
  );
}
