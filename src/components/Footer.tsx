"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { quickLinks, ventureLinks } from "@/data/navigation";

const socialLinks = [
  {
    href: "https://linkedin.com/company/acemenventures",
    label: "LinkedIn",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/acemenventures",
    label: "X (Twitter)",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/acemenventures",
    label: "Instagram",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com/acemenventures",
    label: "Facebook",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold-500/[0.03] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-navy-600/30 blur-3xl" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* Brand statement */}
      <div className="relative z-10 container-page pt-16 lg:pt-20 pb-12">
        <div className="max-w-2xl">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <img
              src="/images/logo.png"
              alt="Acemen Ventures"
              className="h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(201,168,76,0.3)]"
            />
            <span className="font-heading font-bold text-xl tracking-wider text-white">
              ACEMEN{" "}
              <span className="text-gold-400">VENTURES</span>
            </span>
          </Link>
          <p className="text-gray-400 text-base leading-relaxed max-w-lg">
            Acemen Ventures is a private, multi-sector holding company incorporated in
            the United Kingdom. Operating at the vanguard of commercial technology,
            elite lifestyle logistics, and fine luxury manufacturing, the firm
            orchestrates global operations dedicated to absolute capital efficiency and
            market-leading prestige.
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="container-page relative z-10">
        <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-white/[0.06]" />
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 container-page py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-5">
              Our Ventures
            </h4>
            <ul className="space-y-3">
              {ventureLinks.map((v) => (
                <li key={v.href}>
                  <Link
                    href={v.href}
                    className="text-gray-400 hover:text-gold-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold-500 transition-all duration-300" />
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <span className="text-gray-400 leading-relaxed">
                  551 Staines Road, Hounslow, Middlesex, London TW4 5DL, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <a
                  href="mailto:hello@acemenventures.com"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  hello@acemenventures.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <a
                  href="tel:+447587386522"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  +44 7587 386522
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-5">
              The Dispatch
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Considered dispatches on our houses, acquisitions, and market perspective —
              delivered in confidence.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address for newsletter"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.06] transition-all duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold text-sm hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shrink-0"
              >
                Join
              </button>
            </form>

            {/* Social links */}
            <div className="flex gap-2.5 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-gold-500/15 border border-white/[0.06] hover:border-gold-500/20 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all duration-300"
                  aria-label={`Acemen Ventures on ${s.label}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/[0.04]">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {year} Acemen Ventures. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
