"use client";

import {
  Footprints,
  Briefcase,
  Gem,
  Crown,
  Scissors,
  Award,
  ShieldCheck,
  Layers,
} from "lucide-react";
import VentureDetailLayout from "@/components/VentureDetailLayout";

const categories = [
  { name: "Footwear Atelier", desc: "Hand-lasted oxfords, derbies, and loafers uniting Italian artistry with all-day orthotic comfort", icon: <Footprints className="w-6 h-6" /> },
  { name: "Fine Bags & Holdalls", desc: "Structured totes, briefcases, and weekenders cut from full-grain heritage hides", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Leather Outerwear", desc: "Investment-grade jackets, hand-stitched and sculpted to develop a lifelong patina", icon: <Crown className="w-6 h-6" /> },
  { name: "Wallets & Small Goods", desc: "Bifolds, cardholders, and belts with personalised monogramming and edge-painted finishing", icon: <Gem className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Master-Artisan Handcraftsmanship",
    desc: "Every piece is cut, stitched, and finished by generational leather artisans using techniques refined over centuries.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Heritage-Grade Full-Grain Hides",
    desc: "We source exclusively full-grain and top-grain leathers from ethical, premier tanneries across Italy and France.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Limited-Run Atelier Production",
    desc: "Each collection is released in numbered micro-batches — ensuring exclusivity and uncompromising quality control.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Lifetime Restoration Guarantee",
    desc: "An uncompromising promise — every piece is backed by our lifetime craftsmanship warranty and restoration service.",
  },
];

export default function ShoesPageClient() {
  return (
    <VentureDetailLayout
      ventureNumber="03"
      title="Acre & Hide"
      subtitle="Sartorial Leather & Footwear"
      heroDescription="A maison devoted to the art of fine leatherwork. From hand-lasted footwear to structured bags, sculpted jackets, wallets, and belts — every piece is crafted from the world's most exceptional hides, for those who refuse to compromise between presence and comfort."
      accentColor="#9c6b45"
      heroIcon={<Footprints className="w-6 h-6" />}
      heroImage="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
      categories={categories}
      categoriesTitle="The Maison Collections"
      categoriesSubtitle="A complete house of leather — footwear, bags, outerwear, and fine small goods, crafted for the uncompromising."
      categoriesLabel="Our Craft"
      features={features}
      featuresTitle="The Acre & Hide Distinction"
      featuresLabel="The Artisan Pledge"
      testimonialQuote="I have collected from the finest houses across Milan and Paris. Acre & Hide rivals them all — the leather, the hand-stitching, the patina that deepens with every year. From the boots to the weekender bag, this is heirloom-level craftsmanship."
      testimonialAuthor="Victoria K., Private Collector"
      ctaTitle="Commission a Masterpiece"
      ctaDescription="Discover our limited-run leather collections — footwear, bags, outerwear, and small goods, delivered with white-glove service to your door."
      ctaPrimaryLabel="Enter the Atelier"
    />
  );
}
