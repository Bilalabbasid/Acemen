"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { B2B_MODE } from "@/config/b2b";
import MobileNav from "./MobileNav";
import SearchModal from "./SearchModal";
import InquiryQuoteModal from "./InquiryQuoteModal";

interface NavCategory {
  title: string;
  href: string;
  previewImage: string;
  tagline: string;
  columns: Array<{
    heading: string;
    links: Array<{ name: string; href: string }>;
  }>;
}

const navCategories: NavCategory[] = [
  {
    title: "Footwear",
    href: "/collections/shoes",
    previewImage: "/images/luxury/footwear-campaign.webp",
    tagline: "Goodyear-Welted British Oxfords, Monks & Chelsea Boots",
    columns: [
      {
        heading: "Formal & Atelier Silhouettes",
        links: [
          { name: "The Regent Classic Oxford (ACE-OXF-01)", href: "/products/regent-cap-toe-oxford" },
          { name: "The Savile Double Monk Strap (ACE-MNK-01)", href: "/products/savile-double-monk-strap" },
          { name: "The Mayfair Chelsea Boot (ACE-BOT-01)", href: "/products/mayfair-leather-chelsea-boot" },
          { name: "The Belgravia Dress Boot (ACE-BOT-02)", href: "/products/belgravia-leather-dress-boot" },
          { name: "The Grand Sovereign Patina Shoe (ACE-PAT-01)", href: "/products/grand-sovereign-museum-patina-shoe" },
        ],
      },
      {
        heading: "Casual & Smart Silhouettes",
        links: [
          { name: "The St. James Penny Loafer (ACE-LOF-01)", href: "/products/st-james-leather-penny-loafer" },
          { name: "The Kensington Desert Chukka (ACE-CHK-01)", href: "/products/kensington-suede-desert-chukka" },
          { name: "The Piccadilly Casual Derby (ACE-DRB-01)", href: "/products/piccadilly-casual-luxury-derby" },
          { name: "The Sovereign Court Sneaker (ACE-SNK-01)", href: "/products/sovereign-court-leather-sneaker" },
          { name: "Explore All 10 Footwear Styles", href: "/collections/shoes" },
        ],
      },
    ],
  },
  {
    title: "The Pilot Collection",
    href: "/collections/pilot",
    previewImage: "/images/luxury/pilot-campaign.webp",
    tagline: "Aviation-Grade Scanner-Compliant Flight Deck Shoes",
    columns: [
      {
        heading: "Aviation Line",
        links: [
          { name: "The Aviator Sovereign Pilot Shoe (ACE-PLT-01)", href: "/products/aviator-sovereign-pilot-shoe" },
          { name: "Flight Deck Anti-Static Specifications", href: "/products/aviator-sovereign-pilot-shoe" },
          { name: "Pilot Trunks & Travel Luggage", href: "/collections/travel" },
        ],
      },
      {
        heading: "Corporate Fleet Supply",
        links: [
          { name: "Airline Uniform Supply Contracts", href: "/contact" },
          { name: "Airport Scanner Compliant ShOption", href: "/collections/pilot" },
          { name: "Pilot Line Wholesale Inquiry", href: "/contact" },
        ],
      },
    ],
  },
  {
    title: "Outerwear",
    href: "/collections/jackets",
    previewImage: "/images/luxury/prod-jacket-classic-1.webp",
    tagline: "Tailored Full-Grain French Calfskin Outerwear",
    columns: [
      {
        heading: "Outerwear Silhouettes",
        links: [
          { name: "The Sovereign Classic Leather Jacket", href: "/products/sovereign-classic-leather-jacket" },
          { name: "The Signature Leather Bomber", href: "/products/signature-leather-bomber-jacket" },
          { name: "View All Leather Outerwear", href: "/collections/jackets" },
        ],
      },
      {
        heading: "Manufacturing & Fit",
        links: [
          { name: "French Box Calfskin & Cupro Lining", href: "/about#craftsmanship" },
          { name: "OEM Tech Pack Development", href: "/contact" },
        ],
      },
    ],
  },
  {
    title: "Leather Goods",
    href: "/collections/bags",
    previewImage: "/images/luxury/hero-campaign.webp",
    tagline: "Holdalls, Executive Briefcases & Pocket Accessories",
    columns: [
      {
        heading: "Holdalls & Briefcases",
        links: [
          { name: "The Grand Sovereign Weekender", href: "/products/grand-sovereign-weekender" },
          { name: "The Audley Leather Briefcase", href: "/products/audley-leather-briefcase" },
          { name: "The Kensington Structured Tote", href: "/products/kensington-structured-tote" },
        ],
      },
      {
        heading: "Small Leather Goods",
        links: [
          { name: "The Sovereign Bifold Wallet", href: "/products/sovereign-bifold-wallet" },
          { name: "The Cavendish Slim Cardholder", href: "/products/cavendish-slim-cardholder" },
          { name: "Sartorial Belts Collection", href: "/collections/belts" },
        ],
      },
    ],
  },
  {
    title: "Materials",
    href: "/#leather",
    previewImage: "/images/luxury/craftsmanship.webp",
    tagline: "Certified European Full-Grain Hides & Finishes",
    columns: [
      {
        heading: "Leather Provenance",
        links: [
          { name: "Full-Grain French Box Calf", href: "/#leather" },
          { name: "Bavarian Cowhide & Tuscan Veg-Tan", href: "/#leather" },
          { name: "Calf Suede, Nubuck & Pebble Grain", href: "/#leather" },
        ],
      },
      {
        heading: "Custom Finishes",
        links: [
          { name: "Mirror Glazing & Hand-Burnished Patinas", href: "/#leather" },
          { name: "Custom Dyeing & Aniline Dip Finishes", href: "/#leather" },
          { name: "Request Material Swatches", href: "/contact" },
        ],
      },
    ],
  },
  {
    title: "Customization",
    href: "/#customization",
    previewImage: "/images/luxury/prod-oxford-regent-1.webp",
    tagline: "Turnkey OEM, ODM & Private-Label Development",
    columns: [
      {
        heading: "OEM & ODM Services",
        links: [
          { name: "12 Customizable Component Parameters", href: "/#customization" },
          { name: "Manufacturing Parameters & MOQ", href: "/#manufacturing" },
          { name: "Built For Brands Capabilities", href: "/#built-for-brands" },
        ],
      },
      {
        heading: "Partnership Inquiries",
        links: [
          { name: "Request Wholesale Line Sheet", href: "/products" },
          { name: "Direct Tech Pack Review", href: "/contact" },
          { name: "London Atelier Desk Consultation", href: "/contact" },
        ],
      },
    ],
  },
  {
    title: "Catalog",
    href: "/products",
    previewImage: "/images/luxury/travel-campaign.webp",
    tagline: "The Complete ACEMEN Footwear & Leather Catalog",
    columns: [
      {
        heading: "Complete Departments",
        links: [
          { name: "The Footwear Atelier", href: "/collections/shoes" },
          { name: "The Pilot Collection (Aviation)", href: "/collections/pilot" },
          { name: "Leather Outerwear", href: "/collections/jackets" },
          { name: "Fine Leather Goods & Trunks", href: "/collections/bags" },
          { name: "All Catalog Models", href: "/products" },
        ],
      },
    ],
  },
];

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<NavCategory | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHeaderQuoteOpen, setIsHeaderQuoteOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const { openCart, totalItems } = useCart();
  const { openWishlist, wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileOpen(false);
  }, [pathname]);

  const isTransparent = isHomepage && !isScrolled && !activeDropdown;

  return (
    <>
      <header
        onMouseLeave={() => setActiveDropdown(null)}
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-300 ${
          isTransparent
            ? "bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white"
            : "bg-white/95 backdrop-blur-md text-noir-950 border-b border-neutral-200/80 shadow-sm"
        }`}
      >
        <div className="container-fluid">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* ── Left: Mobile Hamburger & Desktop Logo ── */}
            <div className="flex items-center gap-4 lg:w-1/5">
              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2 -ml-2 text-current hover:opacity-70 transition-opacity"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-6 h-6 stroke-[1.5]" />
              </button>

              <Link
                href="/"
                className="flex items-center gap-3 group"
                aria-label="ACEMEN Premium Leather Footwear — Home"
              >
                <img
                  src="/images/logo.png"
                  alt="ACEMEN"
                  className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span
                    className={`font-heading font-black text-sm sm:text-base tracking-[0.28em] uppercase leading-none transition-colors ${
                      isTransparent ? "text-white" : "text-noir-950"
                    }`}
                  >
                    ACEMEN
                  </span>
                  <span
                    className={`text-[8px] sm:text-[9px] font-heading tracking-[0.35em] uppercase mt-1 leading-none font-semibold transition-colors ${
                      isTransparent ? "text-champagne-400" : "text-leather-cognac"
                    }`}
                  >
                    London • Atelier
                  </span>
                </div>
              </Link>
            </div>

            {/* ── Center: Desktop Editorial Navigation ── */}
            <nav className="hidden lg:flex items-center justify-center space-x-5 xl:space-x-6 lg:w-3/5">
              {navCategories.map((cat) => {
                const isSelected = activeDropdown?.title === cat.title;
                return (
                  <div
                    key={cat.title}
                    onMouseEnter={() => setActiveDropdown(cat)}
                    className="relative py-2"
                  >
                    <Link
                      href={cat.href}
                      className={`text-xs font-heading font-semibold tracking-[0.16em] uppercase py-2 transition-all duration-200 relative ${
                        isSelected
                          ? isTransparent
                            ? "text-white"
                            : "text-leather-cognac"
                          : isTransparent
                          ? "text-neutral-200 hover:text-white"
                          : "text-noir-800 hover:text-noir-950"
                      }`}
                    >
                      {cat.title}
                      {isSelected && (
                        <motion.div
                          layoutId="nav-underline"
                          className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                            isTransparent ? "bg-white" : "bg-leather-cognac"
                          }`}
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* ── Right: Utilities (Search, Wishlist/Specs, B2B Quote Action) ── */}
            <div className="flex items-center justify-end gap-3 sm:gap-4 lg:w-1/5">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-current hover:opacity-70 transition-opacity flex items-center gap-1.5"
                aria-label="Search ACEMEN catalog"
              >
                <Search className="w-5 h-5 stroke-[1.5]" />
                <span className="hidden xl:inline text-[11px] font-heading tracking-[0.2em] uppercase font-semibold">
                  Search
                </span>
              </button>

              <button
                onClick={openWishlist}
                className="p-2 text-current hover:opacity-70 transition-opacity relative"
                aria-label="Saved specifications"
                title="Saved specifications for quote"
              >
                <Heart className="w-5 h-5 stroke-[1.5]" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-leather-cognac text-white text-[9px] font-heading font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* B2B / Atelier Pre-Order & Waitlist mode */}
              {B2B_MODE ? (
                <button
                  onClick={() => setIsHeaderQuoteOpen(true)}
                  className={`hidden sm:inline-flex items-center text-[10px] font-heading tracking-[0.22em] uppercase font-bold px-3.5 py-1.5 border transition-all ${
                    isTransparent
                      ? "border-white/80 text-white hover:bg-white hover:text-noir-950"
                      : "border-noir-950 bg-noir-950 text-white hover:bg-leather-cognac hover:border-leather-cognac"
                  }`}
                >
                  PRE-ORDER / WAITLIST
                </button>
              ) : (
                <button
                  onClick={openCart}
                  className="p-2 text-current hover:opacity-70 transition-opacity flex items-center gap-2"
                  aria-label="Shopping bag"
                >
                  <div className="relative">
                    <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-leather-cognac text-white text-[9px] font-heading font-bold rounded-full flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <span className="hidden xl:inline text-[11px] font-heading tracking-[0.2em] uppercase font-semibold">
                    Bag ({totalItems})
                  </span>
                </button>
              )}

              <Link
                href="/contact"
                className={`hidden md:inline-flex items-center text-[10px] font-heading tracking-[0.25em] uppercase font-bold px-3 py-1.5 border ${
                  isTransparent
                    ? "border-transparent text-neutral-300 hover:text-white"
                    : "border-transparent text-neutral-700 hover:text-noir-950"
                } transition-colors`}
              >
                Concierge
              </Link>
            </div>
          </div>
        </div>

        {/* ── Desktop Mega Menu Dropdown ── */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white text-noir-950 border-b border-neutral-200 shadow-xl overflow-hidden"
            >
              <div className="container-page py-10">
                <div className="grid grid-cols-12 gap-10 items-start">
                  <div className="col-span-8 grid grid-cols-2 gap-8">
                    {activeDropdown.columns.map((col) => (
                      <div key={col.heading}>
                        <h4 className="font-heading text-[10px] tracking-[0.25em] uppercase font-bold text-neutral-400 mb-4 pb-1 border-b border-neutral-100">
                          {col.heading}
                        </h4>
                        <ul className="space-y-3">
                          {col.links.map((link) => (
                            <li key={link.name}>
                              <Link
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className="font-display text-base font-medium text-noir-800 hover:text-leather-cognac transition-colors block py-0.5"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="col-span-2 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <Link
                        href={activeDropdown.href}
                        onClick={() => setActiveDropdown(null)}
                        className="editorial-link text-[11px]"
                      >
                        Explore {activeDropdown.title} Catalog
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-4 pl-6 border-l border-neutral-100">
                    <Link
                      href={activeDropdown.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group block"
                    >
                      <div className="relative aspect-[4/3] bg-ivory-100 overflow-hidden mb-3 border border-neutral-200">
                        <img
                          src={activeDropdown.previewImage}
                          alt={activeDropdown.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-[10px] font-heading tracking-[0.2em] uppercase font-bold text-leather-cognac block mb-1">
                        Atelier & Pre-Order Collection
                      </span>
                      <p className="font-display text-base font-semibold text-noir-950 group-hover:text-leather-cognac transition-colors">
                        {activeDropdown.tagline}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <InquiryQuoteModal
        isOpen={isHeaderQuoteOpen}
        onClose={() => setIsHeaderQuoteOpen(false)}
        defaultSubject="General Wholesale & Quote Inquiry"
      />
    </>
  );
}
