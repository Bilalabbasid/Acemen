"use client";

import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  HeadphonesIcon,
  CreditCard,
  Package,
  Heart,
  Sparkles,
} from "lucide-react";
import VentureDetailLayout from "@/components/VentureDetailLayout";

const categories = [
  { name: "Electronics & Gadgets", desc: "Latest tech accessories and smart devices for modern living", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Home & Living", desc: "Modern home essentials, furniture, and sophisticated decor", icon: <Package className="w-6 h-6" /> },
  { name: "Fashion & Accessories", desc: "Trend-led apparel, bags, and lifestyle accessories", icon: <Heart className="w-6 h-6" /> },
  { name: "Health & Wellness", desc: "Fitness gear, supplements, and premium self-care products", icon: <ShieldCheck className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Fast Global Delivery",
    desc: "Reliable shipping to over 100 countries with real-time tracking on every order.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure Shopping",
    desc: "Enterprise-grade security and encrypted payments for complete peace of mind.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "24/7 Support",
    desc: "Round-the-clock customer care via chat, email, and phone support channels.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Flexible Payments",
    desc: "Multiple payment options including buy-now-pay-later and instalment plans.",
  },
];

export default function ECommercePageClient() {
  return (
    <VentureDetailLayout
      ventureNumber="01"
      title="E-Commerce"
      subtitle="Online Retail, Reimagined"
      heroDescription="Our direct-to-consumer e-commerce business delivers curated products across multiple categories — designed for a seamless, enjoyable shopping experience from browse to unboxing."
      accentColor="#3b82f6"
      heroIcon={<ShoppingBag className="w-6 h-6" />}
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
      categories={categories}
      categoriesTitle="Product Categories"
      categoriesSubtitle="Diverse product lines curated for quality, value, and customer satisfaction."
      categoriesLabel="What We Offer"
      features={features}
      featuresTitle="The Acemen Promise"
      featuresLabel="Why Shop With Us"
      testimonialQuote="The shopping experience was seamless from start to finish. Fast delivery and excellent product quality — I'll definitely be back."
      testimonialAuthor="Sarah M., Verified Customer"
      ctaTitle="Start Shopping Today"
      ctaDescription="Discover our curated collection of products with fast delivery and outstanding customer service."
      ctaPrimaryLabel="Visit Our Store"
    />
  );
}
