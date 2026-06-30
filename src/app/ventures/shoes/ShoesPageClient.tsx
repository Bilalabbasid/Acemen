"use client";

import {
  Footprints,
  Palette,
  Leaf,
  Crown,
  Heart,
  Star,
  Sparkles,
  Shield,
} from "lucide-react";
import VentureDetailLayout from "@/components/VentureDetailLayout";

const categories = [
  { name: "Casual Collection", desc: "Everyday comfort meets contemporary street style and versatility", icon: <Star className="w-6 h-6" /> },
  { name: "Premium Line", desc: "Handcrafted luxury footwear using finest materials and artisanal methods", icon: <Crown className="w-6 h-6" /> },
  { name: "Performance", desc: "Athletic and sport-focused designs engineered for peak performance", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Sustainable Range", desc: "Eco-conscious footwear made from recycled and organic materials", icon: <Leaf className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Comfort-First Design",
    desc: "Every pair is engineered with ergonomic insoles and premium cushioning systems.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Timeless Aesthetics",
    desc: "Clean, modern designs that transcend seasonal trends for lasting style.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sustainable Materials",
    desc: "Responsibly sourced materials and eco-friendly production processes.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Built to Last",
    desc: "Premium craftsmanship and rigorous quality testing for exceptional durability.",
  },
];

export default function ShoesPageClient() {
  return (
    <VentureDetailLayout
      ventureNumber="03"
      title="Shoes Business"
      subtitle="Style Meets Substance"
      heroDescription="A contemporary footwear brand that blends style, comfort, and craftsmanship. Designed for everyday excellence — from casual wear to performance-driven designs."
      accentColor="#a855f7"
      heroIcon={<Footprints className="w-6 h-6" />}
      heroImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
      categories={categories}
      categoriesTitle="Our Collections"
      categoriesSubtitle="Curated footwear lines for every occasion, lifestyle, and preference."
      categoriesLabel="What We Create"
      features={features}
      featuresTitle="Our Promise"
      featuresLabel="Why Our Shoes Stand Out"
      testimonialQuote="These are hands down the most comfortable shoes I've ever owned. The quality is exceptional, and they look even better in person. Absolutely worth it."
      testimonialAuthor="Emma L., Loyal Customer"
      ctaTitle="Step Into Excellence"
      ctaDescription="Discover our latest collections — where premium craftsmanship meets everyday comfort."
      ctaPrimaryLabel="Explore Collections"
    />
  );
}
