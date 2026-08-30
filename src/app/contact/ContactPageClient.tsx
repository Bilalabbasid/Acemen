"use client";

import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ServicesBar from "@/components/luxury/ServicesBar";
import { brandData } from "@/data/brand";

const contactCards = [
  {
    icon: <MapPin className="w-5 h-5 text-leather-cognac stroke-[1.2]" />,
    title: "London Headquarters & Atelier",
    lines: [
      brandData.address.street,
      brandData.address.area,
      brandData.address.city + " " + brandData.address.postcode,
      brandData.address.country,
    ],
    action: null,
  },
  {
    icon: <Phone className="w-5 h-5 text-leather-cognac stroke-[1.2]" />,
    title: "Telephone & WhatsApp Direct",
    lines: [
      brandData.contact.phoneFormatted,
      "Direct line to London Concierge Desk",
    ],
    action: {
      label: "Call Now →",
      href: `tel:${brandData.contact.phone}`,
    },
  },
  {
    icon: <Mail className="w-5 h-5 text-leather-cognac stroke-[1.2]" />,
    title: "Private Inquiries Email",
    lines: [
      brandData.contact.email,
      "Response within 24 hours guaranteed",
    ],
    action: {
      label: "Email Concierge →",
      href: `mailto:${brandData.contact.email}`,
    },
  },
  {
    icon: <Clock className="w-5 h-5 text-leather-cognac stroke-[1.2]" />,
    title: "Atelier Operating Hours",
    lines: [
      "Monday – Friday: 9:00 AM – 6:00 PM GMT",
      "Saturday: By Private Appointment",
      "Sunday: Closed for Artisans",
    ],
    action: null,
  },
];

export default function ContactPageClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Page Header ── */}
      <section className="relative h-[45vh] sm:h-[55vh] bg-noir-950 text-white flex items-end justify-center pb-12 sm:pb-16 overflow-hidden">
        <img
          src="/images/contact-london.png"
          alt="London Private Office"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/40 to-transparent" />

        <div className="relative z-10 container-page text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400 block">
            CLIENT CONCIERGE & ATELIER
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
            INITIATE A COMMISSION
          </h1>
          <p className="font-body text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            Whether inquiring about bespoke creations, personalization, or private London atelier consultations, our desk is at your complete disposal.
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
                  The Private Desk
                </h2>
                <p className="text-xs text-neutral-600 font-light mt-2 leading-relaxed">
                  Reach our London team directly or complete the encrypted briefing form.
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
