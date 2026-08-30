"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight, Phone, Mail, Search, ShoppingBag, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brandData } from "@/data/brand";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

const navSections = [
  {
    title: "Women",
    href: "/collections/women",
    subItems: [
      { label: "View All Women's Leather", href: "/collections/women" },
      { label: "The Kensington Tote", href: "/products/kensington-structured-tote" },
      { label: "The Mayfair Crossbody", href: "/products/mayfair-crossbody-bag" },
      { label: "Small Leather Goods", href: "/collections/wallets" },
    ],
  },
  {
    title: "Men",
    href: "/collections/men",
    subItems: [
      { label: "View All Men's Collection", href: "/collections/men" },
      { label: "The Audley Briefcase", href: "/products/audley-leather-briefcase" },
      { label: "The Grand Sovereign Weekender", href: "/products/grand-sovereign-weekender" },
      { label: "The Jermyn Classic Oxford", href: "/products/jermyn-classic-oxford-shoe" },
      { label: "Sartorial Belts", href: "/collections/belts" },
    ],
  },
  {
    title: "Bags",
    href: "/collections/bags",
    subItems: [
      { label: "All Leather Bags", href: "/collections/bags" },
      { label: "Executive Briefcases", href: "/products/audley-leather-briefcase" },
      { label: "Structured Totes", href: "/products/kensington-structured-tote" },
      { label: "Holdalls & Duffles", href: "/products/grand-sovereign-weekender" },
    ],
  },
  {
    title: "Shoes & Footwear",
    href: "/collections/shoes",
    subItems: [
      { label: "All Footwear Atelier", href: "/collections/shoes" },
      { label: "The Jermyn Classic Oxford", href: "/products/jermyn-classic-oxford-shoe" },
      { label: "The Savile Double Monk Strap", href: "/products/savile-double-monk-strap" },
      { label: "The Mayfair Chelsea Boot", href: "/products/mayfair-leather-chelsea-boot" },
      { label: "The Piccadilly Blucher Derby", href: "/products/piccadilly-blucher-derby" },
      { label: "The Pilot Collection (Aviation)", href: "/collections/pilot" },
    ],
  },
  {
    title: "The Pilot Collection",
    href: "/collections/pilot",
    subItems: [
      { label: "Aviation Professional Shoes", href: "/collections/pilot" },
      { label: "The Aviator Sovereign Pilot Shoe", href: "/products/aviator-sovereign-pilot-shoe" },
      { label: "Pilot Travel Trunks & Passport Cases", href: "/collections/travel" },
    ],
  },
  {
    title: "Wallets",
    href: "/collections/wallets",
    subItems: [
      { label: "All Small Leather Goods", href: "/collections/wallets" },
      { label: "The Sovereign Bifold", href: "/products/sovereign-bifold-wallet" },
      { label: "The Cavendish Cardholder", href: "/products/cavendish-slim-cardholder" },
    ],
  },
  {
    title: "Belts",
    href: "/collections/belts",
    subItems: [
      { label: "All Sartorial Belts", href: "/collections/belts" },
      { label: "The Sovereign Reversible Belt", href: "/products/sovereign-reversible-saddle-belt" },
      { label: "The Heritage Brass Buckle Belt", href: "/products/heritage-brass-buckle-belt" },
    ],
  },
  {
    title: "Accessories",
    href: "/collections/accessories",
    subItems: [
      { label: "All Leather Accessories", href: "/collections/accessories" },
      { label: "The St. James Passport Case", href: "/products/st-james-passport-case" },
      { label: "Travel Luggage & Trunks", href: "/collections/travel" },
    ],
  },
  {
    title: "The Maison",
    href: "/about",
    subItems: [
      { label: "The House of ACEMEN", href: "/about" },
      { label: "Savoir-Faire & Craftsmanship", href: "/about#craftsmanship" },
      { label: "London Atelier Services", href: "/contact" },
    ],
  },
];

export default function MobileNav({ isOpen, onClose, onOpenSearch }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { openCart, totalItems } = useCart();
  const { openWishlist, wishlistCount } = useWishlist();

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative w-[88vw] max-w-md h-full bg-white text-noir-950 flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Top Bar */}
            <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
              <Link href="/" onClick={onClose} className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="ACEMEN"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-heading font-black text-sm tracking-[0.25em] text-noir-950 uppercase">
                  ACEMEN
                </span>
              </Link>

              <button
                onClick={onClose}
                className="p-2 -mr-2 text-neutral-500 hover:text-noir-950 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 stroke-[1.2]" />
              </button>
            </div>

            {/* Quick action bar */}
            <div className="grid grid-cols-3 border-b border-neutral-200 divide-x divide-neutral-200 bg-ivory-50">
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="py-3 flex flex-col items-center gap-1 text-neutral-700 hover:text-noir-950 text-[10px] font-heading tracking-widest uppercase font-semibold"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
              <button
                onClick={() => {
                  onClose();
                  openWishlist();
                }}
                className="py-3 flex flex-col items-center gap-1 text-neutral-700 hover:text-noir-950 text-[10px] font-heading tracking-widest uppercase font-semibold"
              >
                <Heart className="w-4 h-4" />
                Wishlist ({wishlistCount})
              </button>
              <button
                onClick={() => {
                  onClose();
                  openCart();
                }}
                className="py-3 flex flex-col items-center gap-1 text-neutral-700 hover:text-noir-950 text-[10px] font-heading tracking-widest uppercase font-semibold"
              >
                <ShoppingBag className="w-4 h-4" />
                Bag ({totalItems})
              </button>
            </div>

            {/* Navigation Accordion */}
            <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-neutral-100">
              {navSections.map((section) => (
                <div key={section.title} className="py-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href={section.href}
                      onClick={onClose}
                      className="font-display text-xl font-medium text-noir-950 hover:text-leather-cognac transition-colors"
                    >
                      {section.title}
                    </Link>
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="p-2 text-neutral-400 hover:text-noir-950 transition-colors"
                      aria-label={`Expand ${section.title}`}
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedSection === section.title ? "rotate-90 text-noir-950" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedSection === section.title && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-3 pt-2 space-y-2"
                      >
                        {section.subItems.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={onClose}
                              className="text-xs font-heading tracking-wider uppercase text-neutral-600 hover:text-leather-cognac block py-1.5 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-6 pb-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="font-display text-xl font-medium text-noir-950 hover:text-leather-cognac block py-1.5"
                >
                  Client Services & Concierge
                </Link>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="font-display text-xl font-medium text-noir-950 hover:text-leather-cognac block py-1.5"
                >
                  All Leather Creations
                </Link>
              </div>
            </div>

            {/* Bottom Contact Details */}
            <div className="p-6 bg-ivory-100 border-t border-neutral-200 text-xs text-neutral-600 space-y-2.5">
              <div className="flex items-center gap-2.5 font-heading tracking-wider uppercase text-[10px] text-neutral-500 font-bold">
                <span>London Private Atelier</span>
              </div>
              <a
                href={`tel:${brandData.contact.phone}`}
                className="flex items-center gap-2 hover:text-noir-950 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-leather-cognac" />
                <span>{brandData.contact.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${brandData.contact.email}`}
                className="flex items-center gap-2 hover:text-noir-950 transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-leather-cognac" />
                <span>{brandData.contact.email}</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
