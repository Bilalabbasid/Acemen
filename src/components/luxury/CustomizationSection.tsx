"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  Sparkles,
  Scissors,
  Footprints,
  Maximize2,
  Shield,
  Feather,
  Bookmark,
  Tag,
  Package,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface SpecElement {
  title: string;
  options: string;
  icon: React.ReactNode;
}

const customizationElements: SpecElement[] = [
  {
    title: "1. Leather & Hide Selection",
    options: "French Box Calf, Bavarian Cowhide, Tuscan Veg-Tan, Suede, Nubuck, Top-Grain",
    icon: <Layers className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "2. Color & Custom Dye",
    options: "Pantone Color Matching, Aniline Dip Dyes, Bespoke Multi-Tone Museum Patinas",
    icon: <Palette className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "3. Surface Finishes",
    options: "High-Gloss Mirror Glaze, Hand-Burnished, Antique Patina, Pebbled Grain, Waxy Pull-Up",
    icon: <Sparkles className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "4. Upper Silhouette & Pattern",
    options: "Seamless Wholecut, Cap-Toe, Plain-Toe, Wingtip Brogue, Double Monk, Chelsea, Derby",
    icon: <Scissors className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "5. Stitching & Edge Inking",
    options: "Two-Needle Hand Saddle Stitch, Contrast Stitching, French Seams, Beveled Inked Edges",
    icon: <Scissors className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "6. Sole Construction",
    options: "Goodyear Welted Closed-Channel Leather Sole, Dainite Studded Rubber, Vibram Commando, Anti-Static Flight Deck",
    icon: <Footprints className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "7. Heel Profiles",
    options: "Stacked Leather Cuban, Classic British 25mm Stack, Beveled Waist, Rubber Top-Piece",
    icon: <Maximize2 className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "8. Hardware & Metalwork",
    options: "Milled Solid Brass, Gunmetal, Polished Chrome, Swiss Riri Zips, Non-Metallic Airport Shank",
    icon: <Shield className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "9. Interior Lining",
    options: "Ultra-Soft Glove Calfskin, Breathable Cupro Silk, Thermal Merino Wool, Moisture-Wicking Mesh",
    icon: <Feather className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "10. Insole & Arch Support",
    options: "Full Leather Sockliner, Orthotic Arch Footbed, High-Density Memory Foam, Perforated Forefoot",
    icon: <Bookmark className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "11. Private-Label Branding",
    options: "24k Gold Foil Debossing, Blind Insole Stamp, Custom Woven Tongue Label, Laser Sole Engraving",
    icon: <Tag className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    title: "12. Bespoke Packaging",
    options: "Custom Rigid Gift Box, Printed Dust Bags, Branded Solid Cedar Shoe Trees, Retail Hangtags",
    icon: <Package className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
];

interface CustomizationSectionProps {
  onOpenInquiry?: () => void;
}

export default function CustomizationSection({ onOpenInquiry }: CustomizationSectionProps) {
  return (
    <section id="customization" className="py-20 sm:py-32 bg-white">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-leather-cognac" />
            <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-leather-cognac">
              TAILORED FOOTWEAR DEVELOPMENT
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-noir-950 leading-[1.08]">
            MADE TO YOUR SPECIFICATION
          </h2>

          <p className="font-body text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl pt-1">
            Every component of our footwear and leather collections can be tailored to meet your brand&apos;s exact aesthetic, functional, and commercial requirements.
          </p>
        </div>

        {/* 12 Customization Parameters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customizationElements.map((elem, idx) => (
            <motion.div
              key={elem.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <Link
                href={`/contact?subject=${encodeURIComponent(elem.title)}&details=${encodeURIComponent(elem.options)}#form`}
                className="h-full p-6 border border-neutral-200 bg-ivory-50/70 hover:bg-white hover:border-noir-950 transition-all shadow-xs flex flex-col justify-between space-y-3 group cursor-pointer block hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-ivory-100 transition-colors">
                    {elem.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-noir-950 group-hover:text-leather-cognac transition-colors">
                      {elem.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                      {elem.options}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-heading tracking-wider uppercase font-semibold text-leather-cognac">
                  <span>Request Custom Spec</span>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 p-8 bg-noir-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-champagne-400 block">
              COLLABORATIVE DEVELOPMENT
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-medium text-white">
              Have a Tech Pack or Collection Concept?
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              Send your reference designs or let our London atelier develop samples for your brand.
            </p>
          </div>

          <Link
            href="/contact?subject=Tech%20Pack%20%26%20Sample%20Development&details=Requesting%20tech%20pack%20review%20and%20prototype%20sampling%20development%20terms.#form"
            className="btn-luxury-white text-xs tracking-[0.2em] shrink-0"
          >
            REQUEST SAMPLES & SPECIFICATIONS
          </Link>
        </div>
      </div>
    </section>
  );
}
