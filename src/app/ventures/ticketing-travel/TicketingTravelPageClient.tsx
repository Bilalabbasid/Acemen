"use client";

import { Globe, Plane } from "lucide-react";
import Link from "next/link";
import VentureDetailLayout from "@/components/VentureDetailLayout";
import type { VentureDetail } from "@/data/ventures";

const venture: VentureDetail = {
  slug: "ticketing-travel",
  ventureNumber: "04",
  title: "Ascend",
  tagline: "Global Concierge & Mobility Logistics",
  summary: "Ultra-premium ecosystem granting unfettered access to global events and bespoke travel.",
  description: "An ultra-premium ecosystem granting unfettered access to global events and bespoke travel for high-net-worth individuals and corporate institutions.",
  href: "/ventures/ticketing-travel",
  accentColor: "#6f8778",
  icon: "ticket",
  image: "/images/travel.png",
  features: [
    "First-Tier Global Access",
    "Bespoke Itinerary Curation",
    "High-Security Booking Protocol",
    "24/7 Elite Lifestyle Management",
  ],
  subtitle: "Global Concierge & Mobility Logistics",
  heroDescription: "An ultra-premium ecosystem granting unfettered access to global events and bespoke travel. We curate highly sought-after, sold-out access alongside elite, tailormade itinerary design for high-net-worth individuals and corporate institutions.",
  categoriesTitle: "The Ascend Portfolio",
  categoriesSubtitle: "An ultra-premium ecosystem of access, curated for the world's most discerning.",
  categoriesLabel: "Our Domain",
  categories: [
    { name: "First-Tier Event Access", desc: "Guaranteed entry to sold-out arenas, VIP hospitality, and exclusive global spectacles", icon: "ticket" },
    { name: "Private Aviation & Charters", desc: "Curated private jet and first-class commercial itineraries with zero friction", icon: "plane" },
    { name: "Elite Accommodations", desc: "Hand-selected presidential suites, private villas, and members-only luxury retreats", icon: "hotel" },
    { name: "Bespoke Expedition Curation", desc: "Tailormade journeys designed by elite travel architects for the most discerning globetrotters", icon: "mapPin" },
  ],
  differentiatorsTitle: "The Ascend Advantage",
  differentiatorsLabel: "The Ascend Distinction",
  differentiators: [
    {
      title: "First-Tier Global Access",
      desc: "Unlock sold-out arenas, exclusive VIP enclosures, and private global spectacles inaccessible to the general public.",
      icon: "crown",
    },
    {
      title: "Bespoke Itinerary Curation",
      desc: "Every journey is architecturally designed by elite travel specialists — from private aviation to members-only retreats.",
      icon: "sparkles",
    },
    {
      title: "High-Security Booking Protocol",
      desc: "Fortress-grade encrypted transactions, biometric verification, and absolute privacy for high-net-worth clientele.",
      icon: "shield",
    },
    {
      title: "24/7 Elite Lifestyle Management",
      desc: "A dedicated personal concierge available around the clock for last-minute alterations, upgrades, and exclusive requests.",
      icon: "gem",
    },
  ],
  testimonialQuote: "Ascend secured us front-row access to a sold-out Monaco Grand Prix weekend — private yacht transfer, penthouse suite, and a concierge who anticipated every need before we voiced it. Simply extraordinary.",
  testimonialAuthor: "Alistair & Penelope C., Private Clients",
  ctaTitle: "Embark on Your Next Expedition",
  ctaDescription: "Grant yourself unfettered access to the world's most coveted events and bespoke travel experiences, curated exclusively for you.",
  ctaPrimaryLabel: "Engage Your Concierge",
  metadata: {
    title: "Ascend - Ticketing & Travel | Acemen Ventures",
    description: "Ascend - an ultra-premium ecosystem granting unfettered access to global events and bespoke travel for high-net-worth individuals and corporate institutions.",
  },
};

export default function TicketingTravelPageClient() {
  return (
    <>
      <VentureDetailLayout venture={venture} />

      {/* Holiday Packages Banner Commented Out
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="card-premium p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-venture-travel/5 via-transparent to-gold-500/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-venture-travel/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-venture-travel" />
              </div>
              <h2 className="display-heading text-3xl sm:text-4xl text-navy-800 mb-4">
                Browse Holiday Packages
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-8">
                Explore our curated collection of luxury holiday packages — from
                sun-drenched Mediterranean retreats to private island escapes,
                each handpicked by our elite travel architects.
              </p>
              <Link
                href="/ventures/ticketing-travel/holidays"
                className="btn-gold group inline-flex items-center"
              >
                Explore Holiday Packages
                <Plane className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      */}
    </>
  );
}

