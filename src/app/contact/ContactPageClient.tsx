"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Building2,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ServicesBar from "@/components/luxury/ServicesBar";
import { brandData } from "@/data/brand";

const contactCards = [
  {
    icon: <MapPin className="w-5 h-5 text-leather-cognac stroke-[1.2]" />,
    title: "London Headquarters & Atelier",
    lines: [
      // Address temporarily commented out
      // brandData.address.street,
      // brandData.address.area,
      // brandData.address.city + " " + brandData.address.postcode,
      "London, United Kingdom",
      "Visits by trade appointment only",
    ],
    action: null,
  },
  {
    icon: <Phone className="w-5 h-5 text-leather-cognac stroke-[1.2]" />,
    title: "Direct B2B Line & WhatsApp",
    lines: [
      brandData.contact.phoneFormatted,
      "Direct line to London Manufacturing Desk",
    ],
    action: {
      label: "Call Desk →",
      href: `tel:${brandData.contact.phone}`,
    },
  },
  {
    icon: <Mail className="w-5 h-5 text-leather-cognac stroke-[1.2]" />,
    title: "Wholesale & OEM Inquiries",
    lines: [
      brandData.contact.email,
      "NDA and technical brief review within 24 hours",
    ],
    action: {
      label: "Email Desk →",
      href: `mailto:${brandData.contact.email}`,
    },
  },
  {
    icon: <Clock className="w-5 h-5 text-leather-cognac stroke-[1.2]" />,
    title: "Atelier & Office Hours",
    lines: [
      "Monday – Friday: 9:00 AM – 6:00 PM GMT",
      "Saturday: By Trade Appointment",
      "Sunday: Closed for Artisans",
    ],
    action: null,
  },
];

export default function ContactPageClient() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      {/* ── Top Return Navigation Bar ── */}
      <div className="pt-24 sm:pt-28 bg-noir-950 border-b border-neutral-800">
        <div className="container-page py-3 flex items-center justify-between">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                router.back();
              } else {
                router.push("/");
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold tracking-widest uppercase text-champagne-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Return to Previous Page</span>
          </button>

          <Link
            href="/"
            className="text-[11px] font-heading font-medium tracking-wider uppercase text-neutral-400 hover:text-white transition-colors"
          >
            ACEMEN Home
          </Link>
        </div>
      </div>

      {/* ── Page Header ── */}
      <section className="relative h-[40vh] sm:h-[48vh] bg-noir-950 text-white flex items-end justify-center pb-12 sm:pb-16 overflow-hidden">
        <img
          src="/images/contact-london.png"
          alt="London Private Office & Footwear Atelier"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/40 to-transparent" />

        <div className="relative z-10 container-page text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400 block">
            B2B & WHOLESALE MANUFACTURING DESK
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
            INITIATE A PARTNERSHIP BRIEF
          </h1>
          <p className="font-body text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            Whether inquiring about wholesale line sheets, private-label footwear collections, custom OEM tech pack development, or private London consultations, our team is at your disposal.
          </p>
        </div>
      </section>

      {/* ── Main Content Grid ── */}
      <section className="py-16 sm:py-24 bg-ivory-50 border-b border-neutral-200">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-heading font-bold tracking-[0.25em] uppercase text-leather-cognac block mb-1">
                  DIRECT CHANNELS
                </span>
                <h2 className="font-display text-3xl font-medium text-noir-950">
                  The Partnership Desk
                </h2>
                <p className="text-xs text-neutral-600 font-light mt-2 leading-relaxed">
                  Reach our London footwear development team directly or submit your project specifications below.
                </p>
              </div>

              <div className="space-y-4">
                {contactCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-white border border-neutral-200 p-6 space-y-2 hover:border-noir-950 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-ivory-100 flex items-center justify-center">
                        {card.icon}
                      </div>
                      <h3 className="font-display text-base font-semibold text-noir-950">
                        {card.title}
                      </h3>
                    </div>
                    <div className="text-xs text-neutral-600 font-light space-y-1 pl-11">
                      {card.lines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                      {card.action && (
                        <div className="pt-2">
                          <a
                            href={card.action.href}
                            className="editorial-link text-[11px]"
                          >
                            {card.action.label}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] font-heading font-bold tracking-[0.2em] uppercase text-neutral-400 block mb-3">
                  Connect on Social
                </span>
                <div className="flex flex-wrap gap-2">
                  {brandData.socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-white border border-neutral-200 hover:border-noir-950 text-xs font-heading tracking-wider uppercase font-semibold text-neutral-700 hover:text-noir-950 transition-colors flex items-center gap-1"
                    >
                      <span>{s.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services bar */}
      <ServicesBar />
    </div>
  );
}
