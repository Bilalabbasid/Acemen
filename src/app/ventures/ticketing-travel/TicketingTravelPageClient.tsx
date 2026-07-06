"use client";

import {
  Ticket,
  Plane,
  Hotel,
  MapPin,
  Crown,
  Shield,
  Gem,
  Sparkles,
} from "lucide-react";
import VentureDetailLayout from "@/components/VentureDetailLayout";

const categories = [
  { name: "First-Tier Event Access", desc: "Guaranteed entry to sold-out arenas, VIP hospitality, and exclusive global spectacles", icon: <Ticket className="w-6 h-6" /> },
  { name: "Private Aviation & Charters", desc: "Curated private jet and first-class commercial itineraries with zero friction", icon: <Plane className="w-6 h-6" /> },
  { name: "Elite Accommodations", desc: "Hand-selected presidential suites, private villas, and members-only luxury retreats", icon: <Hotel className="w-6 h-6" /> },
  { name: "Bespoke Expedition Curation", desc: "Tailormade journeys designed by elite travel architects for the most discerning globetrotters", icon: <MapPin className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Crown className="w-6 h-6" />,
    title: "First-Tier Global Access",
    desc: "Unlock sold-out arenas, exclusive VIP enclosures, and private global spectacles inaccessible to the general public.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Bespoke Itinerary Curation",
    desc: "Every journey is architecturally designed by elite travel specialists — from private aviation to members-only retreats.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "High-Security Booking Protocol",
    desc: "Fortress-grade encrypted transactions, biometric verification, and absolute privacy for high-net-worth clientele.",
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "24/7 Elite Lifestyle Management",
    desc: "A dedicated personal concierge available around the clock for last-minute alterations, upgrades, and exclusive requests.",
  },
];

export default function TicketingTravelPageClient() {
  return (
    <VentureDetailLayout
      ventureNumber="04"
      title="Ascend"
      subtitle="Global Concierge & Mobility Logistics"
      heroDescription="An ultra-premium ecosystem granting unfettered access to global events and bespoke travel. We curate highly sought-after, sold-out access alongside elite, tailormade itinerary design for high-net-worth individuals and corporate institutions."
      accentColor="#6f8778"
      heroIcon={<Ticket className="w-6 h-6" />}
      heroImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
      categories={categories}
      categoriesTitle="The Ascend Portfolio"
      categoriesSubtitle="An ultra-premium ecosystem of access, curated for the world's most discerning."
      categoriesLabel="Our Domain"
      features={features}
      featuresTitle="The Ascend Advantage"
      featuresLabel="The Ascend Distinction"
      testimonialQuote="Ascend secured us front-row access to a sold-out Monaco Grand Prix weekend — private yacht transfer, penthouse suite, and a concierge who anticipated every need before we voiced it. Simply extraordinary."
      testimonialAuthor="Alistair & Penelope C., Private Clients"
      ctaTitle="Embark on Your Next Expedition"
      ctaDescription="Grant yourself unfettered access to the world's most coveted events and bespoke travel experiences, curated exclusively for you."
      ctaPrimaryLabel="Engage Your Concierge"
    />
  );
}
