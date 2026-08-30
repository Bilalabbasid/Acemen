"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import MobileNav from "./MobileNav";
import SearchModal from "./SearchModal";

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
    title: "Women",
    href: "/collections/women",
    previewImage: "/images/luxury/women-campaign.jpg",
    tagline: "Sculptural Totes & Hand-Stitched Essentials",
    columns: [
      {
        heading: "Handbags & Totes",
        links: [
          { name: "The Kensington Structured Tote", href: "/products/kensington-structured-tote" },
          { name: "All Women's Bags", href: "/collections/women" },
        ],
      },
      {
        heading: "Small Leather Goods",
        links: [
          { name: "The Sovereign Bifold Wallet", href: "/products/sovereign-bifold-wallet" },
          { name: "The Cavendish Cardholder", href: "/products/cavendish-slim-cardholder" },
        ],
      },
    ],
  },
  {
    title: "Men",
    href: "/collections/men",
    previewImage: "/images/luxury/men-campaign.jpg",
    tagline: "Enduring Executive Pieces & Sartorial Leather",
    columns: [
      {
        heading: "Executive Bags & Luggage",
        links: [
          { name: "The Audley Leather Briefcase", href: "/products/audley-leather-briefcase" },
          { name: "The Grand Sovereign Weekender", href: "/products/grand-sovereign-weekender" },
          { name: "All Leather Holdalls", href: "/collections/bags" },
        ],
      },
      {
        heading: "Sartorial Footwear & Jackets",
        links: [
          { name: "The Jermyn Classic Oxford", href: "/products/jermyn-classic-oxford-shoe" },
          { name: "The Sovereign Classic Leather Jacket", href: "/products/sovereign-classic-leather-jacket" },
          { name: "The Signature Leather Bomber", href: "/products/signature-leather-bomber-jacket" },
        ],
      },
    ],
  },
  {
    title: "Bags",
    href: "/collections/bags",
    previewImage: "/images/luxury/hero-campaign.jpg",
    tagline: "Handcrafted Holdalls, Briefcases & Totes",
    columns: [
      {
        heading: "By Silhouette",
        links: [
          { name: "The Grand Sovereign Weekender", href: "/products/grand-sovereign-weekender" },
          { name: "The Audley Briefcase", href: "/products/audley-leather-briefcase" },
          { name: "The Kensington Structured Tote", href: "/products/kensington-structured-tote" },
        ],
      },
      {
        heading: "Featured Provenance",
        links: [
          { name: "French Full-Grain Box Calf", href: "/collections/bags" },
          { name: "Tuscan Vegetable-Tanned Hide", href: "/collections/bags" },
          { name: "All Leather Bags", href: "/collections/bags" },
        ],
      },
    ],
  },
  {
    title: "Shoes",
    href: "/collections/shoes",
    previewImage: "/images/luxury/footwear-campaign.jpg",
    tagline: "Hand-Lasted British Oxfords, Monks & Boots",
    columns: [
      {
        heading: "Formal Styles",
        links: [
          { name: "The Jermyn Classic Oxford", href: "/products/jermyn-classic-oxford-shoe" },
          { name: "The Savile Double Monk Strap", href: "/products/savile-double-monk-strap" },
          { name: "The Mayfair Chelsea Boot", href: "/products/mayfair-leather-chelsea-boot" },
          { name: "The Piccadilly Blucher Derby", href: "/products/piccadilly-blucher-derby" },
        ],
      },
      {
        heading: "Specialist Lines",
        links: [
          { name: "The Pilot Collection (Aviation)", href: "/collections/pilot" },
          { name: "The Aviator Sovereign Pilot Shoe", href: "/products/aviator-sovereign-pilot-shoe" },
          { name: "All Handcrafted Footwear", href: "/collections/shoes" },
        ],
      },
    ],
  },
  {
    title: "Jackets",
    href: "/collections/jackets",
    previewImage: "/images/luxury/prod-jacket-classic-1.jpg",
    tagline: "Tailored Full-Grain French Calfskin Outerwear",
    columns: [
      {
        heading: "Outerwear Silhouettes",
        links: [
          { name: "The Sovereign Classic Leather Jacket", href: "/products/sovereign-classic-leather-jacket" },
          { name: "The Signature Leather Bomber", href: "/products/signature-leather-bomber-jacket" },
          { name: "View All Leather Jackets", href: "/collections/jackets" },
        ],
      },
      {
        heading: "Craftsmanship & Fit",
        links: [
          { name: "French Box Calfskin & Cupro Lining", href: "/about#craftsmanship" },
          { name: "Bespoke Outerwear Appointments", href: "/contact" },
        ],
      },
    ],
  },
  {
    title: "Wallets",
    href: "/collections/wallets",
    previewImage: "/images/luxury/prod-wallet-1.jpg",
    tagline: "Pocket Accessories Cut from Premier Tuscan Hides",
    columns: [
      {
        heading: "Small Leather Goods",
        links: [
          { name: "The Sovereign Bifold Wallet", href: "/products/sovereign-bifold-wallet" },
          { name: "The Cavendish Slim Cardholder", href: "/products/cavendish-slim-cardholder" },
          { name: "View All Wallets", href: "/collections/wallets" },
        ],
      },
      {
        heading: "Artisan Finishing",
        links: [
          { name: "Hand-Burnished Edge Inking", href: "/about#craftsmanship" },
          { name: "Gold Leaf Monogramming", href: "/contact" },
        ],
      },
    ],
  },
  {
    title: "Collections",
    href: "/products",
    previewImage: "/images/luxury/travel-campaign.jpg",
    tagline: "The Complete House of ACEMEN Catalog",
    columns: [
      {
        heading: "Specialty Houses",
        links: [
          { name: "The Footwear Atelier", href: "/collections/shoes" },
          { name: "The Pilot Collection (Aviation)", href: "/collections/pilot" },
          { name: "Leather Outerwear", href: "/collections/jackets" },
          { name: "Trunks & Travel", href: "/collections/travel" },
          { name: "All Leather Creations", href: "/products" },
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
                aria-label="ACEMEN Luxury Leather Goods — Home"
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
            <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-7 lg:w-3/5">
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
                      className={`text-xs font-heading font-semibold tracking-[0.18em] uppercase py-2 transition-all duration-200 relative ${
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

            {/* ── Right: Utilities (Search, Wishlist, Bag, Concierge) ── */}
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
                aria-label="Saved items"
              >
                <Heart className="w-5 h-5 stroke-[1.5]" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-leather-cognac text-white text-[9px] font-heading font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

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

              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center text-[10px] font-heading tracking-[0.25em] uppercase font-bold px-3 py-1.5 border border-current hover:bg-white hover:text-noir-950 transition-colors"
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
                        Explore Entire {activeDropdown.title} Department
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
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-[10px] font-heading tracking-[0.2em] uppercase font-bold text-leather-cognac block mb-1">
                        Featured Selection
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
    </>
  );
}
