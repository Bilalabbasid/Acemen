"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, Gift, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { B2B_MODE } from "@/config/b2b";
import InquiryQuoteModal from "./InquiryQuoteModal";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    formattedTotal,
    totalPrice,
  } = useCart();

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[200] overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeCart}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-over panel */}
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
                    <ShoppingBag className="w-5 h-5 text-noir-950 stroke-[1.5]" />
                    <span className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-noir-950">
                      {B2B_MODE ? `Saved Quote Items (${totalItems})` : `Shopping Bag (${totalItems})`}
                    </span>
                  </div>
                  <button
                    onClick={closeCart}
                    className="p-1.5 -mr-1.5 text-neutral-500 hover:text-noir-950 transition-colors"
                    aria-label="Close cart"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" />
                  </button>
                </div>

                {/* B2B Notice */}
                <div className="bg-ivory-100 px-6 py-3 border-b border-neutral-200 flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-leather-cognac shrink-0" />
                  <p className="text-[11px] font-heading tracking-wide text-neutral-700 leading-snug">
                    {B2B_MODE
                      ? "Wholesale & OEM specifications. Submit saved items to receive tiered volume pricing."
                      : "Complimentary signature ACEMEN magnetic gift box and velvet dust bag included with every order."}
                  </p>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
                  {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-16">
                      <div className="w-16 h-16 rounded-full bg-ivory-100 flex items-center justify-center mb-4 text-neutral-400">
                        <ShoppingBag className="w-7 h-7 stroke-[1.2]" />
                      </div>
                      <h3 className="font-display text-2xl font-medium text-noir-950 mb-2">
                        {B2B_MODE ? "No items selected for quote" : "Your bag is empty"}
                      </h3>
                      <p className="text-neutral-500 text-xs font-heading tracking-wider uppercase mb-8 max-w-xs">
                        Discover our masterfully crafted footwear and leather collections.
                      </p>
                      <button
                        onClick={closeCart}
                        className="btn-luxury-primary"
                      >
                        Explore Catalog
                      </button>
                    </div>
                  ) : (
                    cartItems.map((item, idx) => (
                      <div
                        key={`${item.product.id}-${item.selectedColor || idx}`}
                        className="py-5 flex gap-4 items-start"
                      >
                        {/* Product Image */}
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={closeCart}
                          className="relative w-20 h-24 bg-ivory-100 shrink-0 overflow-hidden border border-neutral-200 block"
                        >
                          <img
                            src={item.product.images.primary}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </Link>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/products/${item.product.slug}`}
                            onClick={closeCart}
                            className="font-display text-base font-semibold text-noir-950 hover:text-leather-cognac transition-colors block truncate"
                          >
                            {item.product.name}
                          </Link>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-0.5 text-[11px] text-neutral-500 font-heading tracking-wider">
                            {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                            {item.selectedSize && <span>Size: EU {item.selectedSize}</span>}
                          </div>

                          {/* B2B MODE — D2C pricing temporarily disabled */}
                          {!B2B_MODE && (
                            <p className="text-sm font-heading font-semibold text-noir-950 mt-1">
                              {item.product.formattedPrice}
                            </p>
                          )}

                          {/* Quantity controls */}
                          <div className="flex items-center justify-between mt-3 pt-2">
                            <div className="flex items-center border border-neutral-300">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.selectedColor,
                                    item.quantity - 1,
                                    item.selectedSize
                                  )
                                }
                                className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:text-noir-950 hover:bg-neutral-100 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-xs font-heading font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.selectedColor,
                                    item.quantity + 1,
                                    item.selectedSize
                                  )
                                }
                                className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:text-noir-950 hover:bg-neutral-100 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() =>
                                removeFromCart(item.product.id, item.selectedColor, item.selectedSize)
                              }
                              className="text-neutral-400 hover:text-red-600 transition-colors p-1"
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

                {/* Footer / Subtotal & Actions */}
                {cartItems.length > 0 && (
                  <div className="border-t border-neutral-200 p-6 bg-ivory-50 space-y-4">
                    {/* B2B MODE — D2C pricing subtotal temporarily disabled. Restore when retail sales are enabled. */}
                    {!B2B_MODE ? (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-heading tracking-[0.2em] uppercase text-neutral-600">
                            Subtotal
                          </span>
                          <span className="font-heading text-lg font-bold text-noir-950">
                            {formattedTotal}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-heading tracking-wider">
                          <ShieldCheck className="w-3.5 h-3.5 text-leather-cognac shrink-0" />
                          <span>Complimentary White-Glove Global Shipping Included</span>
                        </div>

                        <button
                          onClick={() => {
                            alert("Thank you for choosing ACEMEN. Proceeding to our encrypted checkout gateway.");
                          }}
                          className="w-full btn-luxury-primary py-4 tracking-[0.25em]"
                        >
                          Proceed to Checkout
                        </button>
                      </>
                    ) : (
                      /* Atelier Pre-Order & Waitlist Submission */
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-heading tracking-wider">
                          <ShieldCheck className="w-3.5 h-3.5 text-leather-cognac shrink-0" />
                          <span>Guaranteed atelier allocation for upcoming batch</span>
                        </div>

                        <button
                          onClick={() => {
                            closeCart();
                            setIsQuoteModalOpen(true);
                          }}
                          className="w-full btn-luxury-primary py-4 tracking-[0.2em] flex items-center justify-center gap-2 text-xs font-bold"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>PRE-ORDER SELECTED PIECES</span>
                        </button>
                      </div>
                    )}

                    <p className="text-center text-[10px] text-neutral-400 font-heading tracking-widest uppercase">
                      ACEMEN London Atelier • Handcrafted in Limited Batches
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <InquiryQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultSubject={`Pre-Order / Reservation for ${cartItems.map(i => i.product.name).join(", ")}`}
      />
    </>
  );
}
