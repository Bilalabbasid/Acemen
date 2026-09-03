"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Layers, ArrowRight } from "lucide-react";

interface LeatherType {
  name: string;
  category: string;
  characteristics: string;
  recommendedFor: string;
  finishType: string;
}

const leatherTypes: LeatherType[] = [
  {
    name: "Full-Grain French Box Calfskin",
    category: "Premier Grade",
    characteristics: "Tight grain structure, smooth hand-feel, develops rich natural lustre with mirror wax polishing.",
    recommendedFor: "Formal Oxfords, Plain-Toe Derbies, Executive Wallets",
    finishType: "Smooth / Glazed Mirror",
  },
  {
    name: "Bavarian Full-Grain Cowhide",
    category: "Heavyweight Sartorial",
    characteristics: "Dense fiber density, exceptional tensile resilience, outstanding weather resistance and durability.",
    recommendedFor: "Chelsea Boots, Double Monk Straps, Holdall Duffels",
    finishType: "Burnished / Aniline",
  },
  {
    name: "Tuscan Vegetable-Tanned Hide",
    category: "Generational Patina",
    characteristics: "Slow tree-bark tanned, organic vegetable dye penetration, gains deep character through oxidation.",
    recommendedFor: "Briefcases, Luggage Handles, Sartorial Belts",
    finishType: "Antique Patina / Pull-Up",
  },
  {
    name: "Velvety Calf Suede & Nubuck",
    category: "Soft Suede Finish",
    characteristics: "Supple buffed nap with Scotchgard water-repellent pre-treatment option for daily comfort.",
    recommendedFor: "Casual Monks, Loafers, Bomber Jacket Accents",
    finishType: "Brushed Nap / Water-Shield",
  },
  {
    name: "Top-Grain Smooth Leather",
    category: "Commercial Uniformity",
    characteristics: "Uniform surface grain with flexible temper, ideal for high-volume consistent private-label runs.",
    recommendedFor: "Aviation Pilot Footwear, Uniform Shoes",
    finishType: "High-Gloss / Semi-Matte",
  },
  {
    name: "Pebble & Embossed Grain Leather",
    category: "Textured Durability",
    characteristics: "Mechanical hatch and pebble grain embossing, highly scratch-resistant and supple.",
    recommendedFor: "Winter Brogues, All-Weather Boots, Travel Trunks",
    finishType: "Pebbled / Cross-Hatch",
  },
];

const customizableFinishes = [
  { name: "Smooth Mirror Glaze", desc: "High-friction wax burnishing on toe-cap and heel counters." },
  { name: "Hand-Burnished Antique", desc: "Layered pigment inking to highlight stitch lines and brogue perforations." },
  { name: "Museum Marble Patina", desc: "Artisanal sponge and brush dye application creating organic stone marbling." },
  { name: "Pebbled & Hatch Grain", desc: "Textured tactile finish offering high resistance to daily scuffs." },
  { name: "Waxy Pull-Up Oiled", desc: "Infused with natural waxes that shift tone when creased or flexed." },
  { name: "Embossed Exotic Textures", desc: "Precision plate-stamped patterns including mock crocodile and lizard." },
  { name: "Brushed Suede & Nubuck", desc: "Micro-velvet sanded nap with supple drape and rich color saturation." },
  { name: "Weatherproof Sealed Edges", desc: "Five-step hand-inked edge seal with heat burnishing for moisture barrier." },
];

export default function LeatherMaterialsSection() {
  const [activeTab, setActiveTab] = useState<"materials" | "finishes">("materials");

  return (
    <section id="leather" className="py-20 sm:py-32 bg-ivory-50 border-y border-neutral-200/90">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 space-y-3">
          <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-leather-cognac block">
            MATERIAL PROVENANCE & FINISHING
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-noir-950">
            PREMIER LEATHERS & FINISHES
          </h2>
          <p className="font-body text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-xl mx-auto">
            From premier European full-grain hides to custom hand-burnished patinas, ACEMEN accommodates tailored material specifications for wholesale and OEM partners.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white border border-neutral-300 shadow-xs">
            <button
              onClick={() => setActiveTab("materials")}
              className={`px-6 py-2.5 text-xs font-heading font-semibold tracking-wider uppercase transition-all ${
                activeTab === "materials"
                  ? "bg-noir-950 text-white shadow-xs"
                  : "text-neutral-600 hover:text-noir-950"
              }`}
            >
              Leather Grades & Hides
            </button>
            <button
              onClick={() => setActiveTab("finishes")}
              className={`px-6 py-2.5 text-xs font-heading font-semibold tracking-wider uppercase transition-all ${
                activeTab === "finishes"
                  ? "bg-noir-950 text-white shadow-xs"
                  : "text-neutral-600 hover:text-noir-950"
              }`}
            >
              Customizable Finishes
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === "materials" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leatherTypes.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <Link
                  href={`/contact?subject=${encodeURIComponent(item.name)}&details=${encodeURIComponent(item.characteristics + " Recommended for: " + item.recommendedFor)}#form`}
                  className="h-full bg-white p-7 border border-neutral-200/90 shadow-xs flex flex-col justify-between space-y-4 hover:border-noir-950 transition-all group cursor-pointer block hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-heading font-bold tracking-[0.2em] uppercase text-leather-cognac">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-heading tracking-wide">
                        {item.finishType}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-noir-950 group-hover:text-leather-cognac transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {item.characteristics}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 space-y-2">
                    <p className="text-[11px] text-neutral-500 font-light">
                      <strong className="font-heading font-semibold text-neutral-700">Recommended:</strong> {item.recommendedFor}
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-heading tracking-wider uppercase font-semibold text-leather-cognac">
                      <span>Request Hide Swatch & Quote</span>
                      <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {customizableFinishes.map((finish, idx) => (
              <motion.div
                key={finish.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                <Link
                  href={`/contact?subject=${encodeURIComponent("Finish: " + finish.name)}&details=${encodeURIComponent(finish.desc)}#form`}
                  className="h-full bg-white p-6 border border-neutral-200/90 shadow-xs flex flex-col justify-between space-y-3 hover:border-noir-950 transition-all group cursor-pointer block hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-ivory-100 flex items-center justify-center mb-3 group-hover:bg-noir-950 group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4 text-leather-cognac group-hover:text-champagne-400 transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-noir-950 group-hover:text-leather-cognac transition-colors">
                      {finish.name}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
                      {finish.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] font-heading tracking-wider uppercase font-semibold text-leather-cognac">
                    <span>Select Finish</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Disclaimer Note */}
        <p className="mt-12 text-center text-xs text-neutral-400 font-light italic max-w-xl mx-auto">
          * Note: Natural leather hides exhibit subtle grain variations, tonal depth, and patina evolution over time, reflecting authentic artisanal provenance.
        </p>
      </div>
    </section>
  );
}
