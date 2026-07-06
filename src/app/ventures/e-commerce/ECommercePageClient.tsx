"use client";

import {
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Globe,
  Truck,
  Headphones,
  BadgeCheck,
  Layers,
} from "lucide-react";
import VentureDetailLayout from "@/components/VentureDetailLayout";

const categories = [
  { name: "Curated Marketplace", desc: "An impeccably edited assortment of premium lifestyle goods, vetted for provenance and quality", icon: <Layers className="w-6 h-6" /> },
  { name: "House Label Storefronts", desc: "Direct-to-consumer flagships for our own maisons, engineered for a flawless purchase journey", icon: <BadgeCheck className="w-6 h-6" /> },
  { name: "Global Fulfilment", desc: "Insured, temperature-considered, hand-packaged delivery to more than fifteen countries", icon: <Globe className="w-6 h-6" /> },
  { name: "Client Concierge", desc: "A dedicated personal shopping desk with white-glove aftercare and priority resolution", icon: <Headphones className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Editorially Curated",
    desc: "Every product is selected by our buying house for craftsmanship, provenance, and enduring value — never volume.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Frictionless Commerce",
    desc: "A conversion-engineered storefront with one-touch checkout, saved profiles, and intelligent recommendations.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "White-Glove Fulfilment",
    desc: "Hand-packaged, fully insured, and tracked door to door with dedicated concierge support at every step.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Assured & Authentic",
    desc: "Bank-grade payment security, guaranteed authenticity, and a frictionless returns and satisfaction promise.",
  },
];

export default function ECommercePageClient() {
  return (
    <VentureDetailLayout
      ventureNumber="01"
      title="Acemen Emporium"
      subtitle="Curated Digital Commerce"
      heroDescription="Our direct-to-consumer commerce house, pairing an impeccably curated marketplace with the technology and logistics to serve a discerning global clientele. Where premium goods meet a purchase experience engineered to the same standard as the products themselves."
      accentColor="#b08d57"
      heroIcon={<ShoppingBag className="w-6 h-6" />}
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
      categories={categories}
      categoriesTitle="The Commerce Portfolio"
      categoriesSubtitle="A curated retail ecosystem, engineered for the discerning modern buyer."
      categoriesLabel="Our Domain"
      features={features}
      featuresTitle="The Emporium Standard"
      featuresLabel="The Emporium Difference"
      testimonialQuote="The most considered online purchase experience I have encountered. From the curation to the packaging to the concierge follow-up, every touchpoint feels intentional — this is how premium commerce should feel."
      testimonialAuthor="Sebastian V., Private Client"
      ctaTitle="Discover the Emporium"
      ctaDescription="Explore a curated world of premium goods, delivered with white-glove service and concierge-level care to your door."
      ctaPrimaryLabel="Browse the Collection"
    />
  );
}
