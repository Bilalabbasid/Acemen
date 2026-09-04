"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight, Phone, Mail, Search, ShoppingBag, Heart, FileText, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brandData } from "@/data/brand";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { B2B_MODE } from "@/config/b2b";
import InquiryQuoteModal from "./InquiryQuoteModal";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

const navSections = [
  {
    title: "Footwear Atelier",
    href: "/collections/shoes",
    subItems: [
      { label: "All 10 Footwear Styles", href: "/collections/shoes" },
      { label: "The Regent Classic Oxford (ACE-OXF-01)", href: "/products/regent-cap-toe-oxford" },
      { label: "The Savile Monk Strap (ACE-MNK-01)", href: "/products/savile-double-monk-strap" },
      { label: "The Mayfair Chelsea Boot (ACE-BOT-01)", href: "/products/mayfair-leather-chelsea-boot" },
      { label: "The Belgravia Dress Boot (ACE-BOT-02)", href: "/products/belgravia-leather-dress-boot" },
      { label: "The Kensington Desert Chukka (ACE-CHK-01)", href: "/products/kensington-suede-desert-chukka" },
      { label: "The St. James Penny Loafer (ACE-LOF-01)", href: "/products/st-james-leather-penny-loafer" },
      { label: "The Piccadilly Casual Derby (ACE-DRB-01)", href: "/products/piccadilly-casual-luxury-derby" },
      { label: "The Sovereign Court Sneaker (ACE-SNK-01)", href: "/products/sovereign-court-leather-sneaker" },
      { label: "The Grand Sovereign Patina Shoe (ACE-PAT-01)", href: "/products/grand-sovereign-museum-patina-shoe" },
    ],
  },
  {
    title: "The Pilot Collection",
    href: "/collections/pilot",
    subItems: [
      { label: "Aviation Professional Shoes", href: "/collections/pilot" },
      { label: "The Aviator Sovereign Pilot Shoe", href: "/products/aviator-sovereign-pilot-shoe" },
      { label: "Airline Fleet Supply & Uniforms", href: "/contact" },
      { label: "Pilot Travel Luggage", href: "/collections/travel" },
    ],
  },
  {
    title: "Leather Outerwear",
    href: "/collections/jackets",
    subItems: [
      { label: "View All Leather Jackets", href: "/collections/jackets" },
      { label: "The Sovereign Classic Leather Jacket", href: "/products/sovereign-classic-leather-jacket" },
      { label: "The Signature Leather Bomber", href: "/products/signature-leather-bomber-jacket" },
    ],
  },
  {
    title: "Bags & Holdalls",
    href: "/collections/bags",
    subItems: [
      { label: "All Leather Bags", href: "/collections/bags" },
      { label: "The Grand Sovereign Weekender", href: "/products/grand-sovereign-weekender" },
      { label: "The Audley Leather Briefcase", href: "/products/audley-leather-briefcase" },
      { label: "The Kensington Structured Tote", href: "/products/kensington-structured-tote" },
    ],
  },
  {
    title: "Small Leather Goods",
    href: "/collections/wallets",
    subItems: [
      { label: "All Wallets & Cardholders", href: "/collections/wallets" },
      { label: "The Sovereign Bifold Wallet", href: "/products/sovereign-bifold-wallet" },
      { label: "The Cavendish Slim Cardholder", href: "/products/cavendish-slim-cardholder" },
      { label: "Sartorial Belts", href: "/collections/belts" },
    ],
  },
  {
    title: "Materials & Finishes",
    href: "/#leather",
    subItems: [
      { label: "Certified Full-Grain Hides", href: "/#leather" },
      { label: "Hand-Burnished & Patina Finishes", href: "/#leather" },
      { label: "Custom Dyeing & Swatches", href: "/contact" },
    ],
  },
  {
    title: "Customization & OEM",
    href: "/#customization",
    subItems: [
      { label: "12 Customization Parameters", href: "/#customization" },
      { label: "Manufacturing Parameters & MOQ", href: "/#manufacturing" },
      { label: "Built For Brands Capabilities", href: "/#built-for-brands" },
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
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const { openWishlist, wishlistCount } = useWishlist();

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <>
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
                  Saved Specs ({wishlistCount})
                </button>

                {/* B2B MODE — Quote action in mobile top bar */}
                {B2B_MODE ? (
                  <button
                    onClick={() => {
                      onClose();
                      setIsQuoteOpen(true);
                    }}
                    className="py-3 flex flex-col items-center gap-1 text-leather-cognac hover:text-noir-950 text-[10px] font-heading tracking-widest uppercase font-bold"
                  >
                    <FileText className="w-4 h-4" />
                    Quote
                  </button>
                ) : (
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
                )}
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

                <div className="pt-6 pb-2 space-y-2">
                  <Link
                    href="/products"
                    onClick={onClose}
                    className="font-display text-xl font-medium text-noir-950 hover:text-leather-cognac block py-1.5"
                  >
                    All Catalog Models
                  </Link>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="font-display text-xl font-medium text-leather-cognac hover:text-noir-950 block py-1.5"
                  >
                    Atelier Concierge & Inquiries
                  </Link>
                </div>
              </div>

              {/* Bottom Contact Details */}
              <div className="p-6 bg-ivory-100 border-t border-neutral-200 text-xs text-neutral-600 space-y-2.5">
                <div className="flex items-center gap-2.5 font-heading tracking-wider uppercase text-[10px] text-neutral-500 font-bold">
                  <span>London Atelier & Manufacturing Desk</span>
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

      <InquiryQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultSubject="Mobile Quick Quote Request"
      />
    </>
  );
}
