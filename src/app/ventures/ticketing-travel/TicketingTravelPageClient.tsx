"use client";

import {
  Ticket,
  Plane,
  Hotel,
  MapPin,
  Clock,
  Shield,
  HeadphonesIcon,
  Calendar,
} from "lucide-react";
import VentureDetailLayout from "@/components/VentureDetailLayout";

const categories = [
  { name: "Event Ticketing", desc: "Concerts, sports, theatre, and festivals — all in one seamless platform", icon: <Ticket className="w-6 h-6" /> },
  { name: "Flight Booking", desc: "Domestic and international flights with competitive pricing and flexibility", icon: <Plane className="w-6 h-6" /> },
  { name: "Hotels & Stays", desc: "Hand-picked accommodations from boutique hotels to luxury resorts", icon: <Hotel className="w-6 h-6" /> },
  { name: "Curated Experiences", desc: "Unique travel packages and guided experiences around the world", icon: <MapPin className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Instant Booking",
    desc: "Real-time availability and instant confirmations for hassle-free planning.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Transactions",
    desc: "Protected payments and comprehensive booking guarantees for peace of mind.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "24/7 Support",
    desc: "Round-the-clock customer service for any booking changes or assistance.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Flexible Options",
    desc: "Free cancellation policies and flexible rescheduling on most bookings.",
  },
];

export default function TicketingTravelPageClient() {
  return (
    <VentureDetailLayout
      ventureNumber="04"
      title="Ticketing & Travel"
      subtitle="Your Gateway to Experiences"
      heroDescription="A comprehensive platform for event ticketing and travel booking — from concerts and sports to flights, hotels, and curated travel experiences worldwide."
      accentColor="#f59e0b"
      heroIcon={<Ticket className="w-6 h-6" />}
      heroImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
      categories={categories}
      categoriesTitle="Our Services"
      categoriesSubtitle="Everything you need for events and travel, all in one place."
      categoriesLabel="What We Offer"
      features={features}
      featuresTitle="Why Book With Us"
      featuresLabel="The Acemen Advantage"
      testimonialQuote="Booking our family holiday was incredibly easy. The curated experience option made it special, and the customer service was outstanding throughout."
      testimonialAuthor="Mark & Jane P., Travellers"
      ctaTitle="Start Your Journey"
      ctaDescription="Book your next event, flight, or travel experience with confidence and ease."
      ctaPrimaryLabel="Book Now"
    />
  );
}
