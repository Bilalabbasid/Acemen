"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { brandData } from "@/data/brand";

export default function LuxuryFooter() {
  const currentYear = new Date().getFullYear();
  const [footerEmail, setFooterEmail] = useState("");
  const [footerSubscribed, setFooterSubscribed] = useState(false);

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail.trim()) {
      setFooterSubscribed(true);
    }
  };

  return (
    <footer className="bg-noir-950 text-white border-t border-neutral-800 overflow-hidden">
      {/* Top Brand Bar */}
      <div className="container-page pt-16 sm:pt-20 pb-12 border-b border-neutral-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <Link href="/" className="flex items-center gap-3.5 group">
              <img
                src="/images/logo.png"
                alt="ACEMEN"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg sm:text-xl tracking-[0.3em] uppercase text-white leading-none">
                  ACEMEN
                </span>
                <span className="text-[9px] font-heading tracking-[0.35em] uppercase text-champagne-400 mt-1 font-semibold">
                  Maison de Cuir • London
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              ACEMEN is a British luxury leather house and footwear manufacturer incorporated in the United Kingdom. We develop and manufacture fine Goodyear-welted shoes, aviation footwear, holdalls, briefcases, and small leather goods for brands, wholesale distributors, and private-label partners.
            </p>
          </div>

          {/* Direct London Contact Snippet */}
          <div className="space-y-2 text-xs text-neutral-300 font-light border-l border-neutral-800 pl-6">
            <p className="font-heading tracking-widest text-[10px] uppercase font-bold text-champagne-400">
              London Headquarters & Atelier
            </p>
            {/* Company address temporarily commented out */}
            {/* <p className="text-neutral-400 max-w-xs">{brandData.address.full}</p> */}
            <p className="text-neutral-400">London, United Kingdom</p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={`tel:${brandData.contact.phone}`}
                className="text-white hover:text-champagne-400 transition-colors font-medium"
              >
                {brandData.contact.phoneFormatted}
              </a>
              <span className="text-neutral-700">•</span>
              <a
                href={`mailto:${brandData.contact.email}`}
                className="text-white hover:text-champagne-400 transition-colors font-medium"
              >
                {brandData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Navigation */}
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Wholesale & OEM Services */}
          <div>
            <h4 className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-champagne-400 mb-6">
              Wholesale & OEM
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Manufacturing Desk
                </Link>
              </li>
              <li>
                <Link href="/#customization" className="hover:text-white transition-colors">
                  Private-Label Development
                </Link>
              </li>
              <li>
                <Link href="/#leather" className="hover:text-white transition-colors">
                  European Leather Sourcing
                </Link>
              </li>
              <li>
                <Link href="/#manufacturing" className="hover:text-white transition-colors">
                  Manufacturing Specifications & MOQ
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Request Wholesale Line Sheet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  London Atelier Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: The Atelier Collections */}
          <div>
            <h4 className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-champagne-400 mb-6">
              Catalog Departments
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
              <li>
                <Link href="/collections/shoes" className="hover:text-white transition-colors">
                  The Footwear Atelier (Oxfords, Monks, Boots)
                </Link>
              </li>
              <li>
                <Link href="/collections/pilot" className="hover:text-white transition-colors">
                  The Pilot Collection (Aviation Grade)
                </Link>
              </li>
              <li>
                <Link href="/collections/jackets" className="hover:text-white transition-colors">
                  Sartorial Leather Outerwear
                </Link>
              </li>
              <li>
                <Link href="/collections/bags" className="hover:text-white transition-colors">
                  Fine Leather Bags & Briefcases
                </Link>
              </li>
              <li>
                <Link href="/collections/wallets" className="hover:text-white transition-colors">
                  Wallets & Pocket Leather Goods
                </Link>
              </li>
              <li>
                <Link href="/collections/travel" className="hover:text-white transition-colors">
                  Trunks & Travel Luggage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow ACEMEN & Social Links */}
          <div>
            <h4 className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-champagne-400 mb-6">
              Connect With Us
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
              {brandData.socialLinks.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between group max-w-[180px]"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-champagne-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h4 className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-champagne-400 mb-6">
              The Industry Dispatch
            </h4>
            <p className="text-xs text-neutral-400 font-light mb-4 leading-relaxed">
              Subscribe for exclusive previews of upcoming Last silhouettes, leather swatch updates, and private London showroom viewings.
            </p>

            {footerSubscribed ? (
              <div className="flex items-center gap-2 text-xs text-champagne-400 py-2">
                <Check className="w-4 h-4" />
                <span>Thank you. Your request is registered.</span>
              </div>
            ) : (
              <form onSubmit={handleFooterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Your business email"
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-champagne-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full btn-luxury-white text-[10px] py-2.5 tracking-[0.2em]"
                >
                  Join The Dispatch
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-neutral-850 bg-noir-950 py-6 text-neutral-500 text-[11px] font-light">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} ACEMEN. All rights reserved. Registered in England & Wales.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Wholesale Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Manufacturing FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
