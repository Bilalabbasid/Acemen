"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  Sparkles,
  Footprints,
  Shield,
  Tag,
  Factory,
  Compass,
  Cpu,
  Package,
  ArrowRight,
} from "lucide-react";

interface CapabilityItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const capabilities: CapabilityItem[] = [
  {
    icon: <Layers className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "Premium Leather Selection",
    description: "Sourcing certified full-grain box calf, Tuscan hides, suede, nubuck, and specialty vegetable-tanned leathers.",
  },
  {
    icon: <Palette className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "Custom Colors & Dyeing",
    description: "Precision batch color matching, aniline dip dyes, and bespoke hand-applied museum patina shades.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "Custom Finishes & Burnishing",
    description: "Mirror toe glazing, antique burnishing, waxy pull-up treatments, and weather-resistant edge sealing.",
  },
  {
    icon: <Footprints className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "Custom Sole Engineering",
    description: "Goodyear welted closed-channel leather, Dainite studded rubber, Vibram lug outsoles, and anti-static aviation soles.",
  },
  {
    icon: <Shield className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "Custom Hardware & Metals",
    description: "Milled solid brass buckles, Swiss Riri zippers, nickel-free eyelets, and airport-compliant composite shanks.",
  },
  {
    icon: <Tag className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "Private-Label Branding",
    description: "Insole hot-stamping (gold/silver leaf/blind deboss), custom tongue woven labels, and laser-engraved sole markings.",
  },
  {
    icon: <Factory className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "Private-Label Production",
    description: "Turnkey manufacturing tailored to your brand's retail packaging, price architecture, and seasonal release calendar.",
  },
  {
    icon: <Compass className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "OEM Development",
    description: "Manufacturing accurately built to your exact technical tech packs, Last geometries, and proprietary patterns.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "ODM Development",
    description: "Co-designing new footwear silhouettes leveraging ACEMEN's proven British Last library and atelier blueprints.",
  },
  {
    icon: <Package className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
    title: "Custom Packaging",
    description: "Rigid magnetic gift boxes, branded heavy cotton dust bags, solid cedar shoe trees, and recycled shipping cartons.",
  },
];

interface BuiltForBrandsProps {
  onOpenInquiry?: () => void;
}

export default function BuiltForBrandsSection({ onOpenInquiry }: BuiltForBrandsProps) {
  return (
    <section id="built-for-brands" className="py-20 sm:py-32 bg-noir-950 text-white relative overflow-hidden">
      {/* Subtle Ambient Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,105,0.08),transparent_50%)]" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-champagne-400" />
            <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-champagne-400">
              WHOLESALE, OEM & PRIVATE-LABEL PARTNERSHIPS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            BUILT FOR BRANDS
          </h2>

          <p className="font-body text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl pt-1">
            ACEMEN works with brands, retailers, distributors, and private-label partners to develop and manufacture premium leather footwear tailored to their market and specifications.
          </p>
        </div>

        {/* 10-Item Capabilities Grid - Each card clickable to Request Quote with specific card details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Link
                href={`/contact?subject=${encodeURIComponent(cap.title)}&details=${encodeURIComponent(cap.description)}#form`}
                className="h-full bg-noir-900/90 border border-neutral-800/80 p-6 flex flex-col justify-between hover:border-champagne-400/80 hover:bg-noir-900 transition-all duration-300 group rounded-none cursor-pointer block shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-noir-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-noir-700 transition-all">
                    {cap.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-champagne-400 transition-colors mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-850 flex items-center justify-between text-[10px] font-heading tracking-widest text-champagne-400 uppercase font-semibold group-hover:text-white transition-colors">
                  <span>PRE-ORDER & INQUIRE</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 p-8 sm:p-10 bg-noir-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
              Reserve Upcoming Atelier Allocations
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl">
              From private pre-orders to bespoke boutique partnerships, our London atelier is ready to accommodate your requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-luxury-primary shrink-0 tracking-[0.22em] text-xs font-bold"
          >
            PRE-ORDER & INQUIRE
          </Link>
        </div>
      </div>
    </section>
  );
}
