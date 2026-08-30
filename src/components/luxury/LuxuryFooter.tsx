"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Check } from "lucide-react";
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
              ACEMEN is a luxury leather house incorporated in the United Kingdom. Devoted to the art of master craftsmanship, we sculpt fine footwear, aviation professional shoes, holdalls, briefcases, belts, and small leather goods from premier full-grain hides.
            </p>
          </div>

          {/* Direct London Contact Snippet */}
          <div className="space-y-2 text-xs text-neutral-300 font-light border-l border-neutral-800 pl-6">
            <p className="font-heading tracking-widest text-[10px] uppercase font-bold text-champagne-400">
              London Headquarters & Atelier
            </p>
            <p className="text-neutral-400 max-w-xs">{brandData.address.full}</p>
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
          {/* Column 1: Client Services */}
          <div>
            <h4 className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-champagne-400 mb-6">
              Client Services
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Concierge Desk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  White-Glove Courier Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Complimentary 30-Day Returns
                </Link>
              </li>
              <li>
                <Link href="/about#craftsmanship" className="hover:text-white transition-colors">
                  Lifetime Restoration Pledge
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Bespoke Monogramming & Commissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Private Atelier Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: The Atelier Collections */}
          <div>
            <h4 className="font-heading text-xs tracking-[0.25em] uppercase font-bold text-champagne-400 mb-6">
              Atelier Collections
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
                <Link href="/collections/bags" className="hover:text-white transition-colors">
                  Fine Leather Bags & Briefcases
                </Link>
              </li>
              <li>
                <Link href="/collections/belts" className="hover:text-white transition-colors">
                  Sartorial Bridle & Reversible Belts
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
              The Dispatch
            </h4>
            <p className="text-xs text-neutral-400 font-light mb-4 leading-relaxed">
              Subscribe for exclusive previews of limited atelier editions and invitations to private London showcases.
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
                  placeholder="Your email address"
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-champagne-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full btn-luxury-white text-[10px] py-2.5 tracking-[0.2em]"
                >
                  Join The Salon
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
              Shipping Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Returns Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
