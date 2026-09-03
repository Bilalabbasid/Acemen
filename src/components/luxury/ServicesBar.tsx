"use client";

import React from "react";
import { Tag, Sparkles, Globe, Headphones, Factory, ShieldCheck } from "lucide-react";

const b2bServices = [
  {
    icon: <Tag className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
    tag: "OEM / ODM",
    title: "Private-Label Branding",
    description: "Custom insole debossing, hardware engraving, laser sole markings, and bespoke client packaging.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
    tag: "Material Sourcing",
    title: "Premier European Leathers",
    description: "Certified full-grain box calf, Tuscan vegetable-tanned hides, Bavarian cowhide, and waterproof suede.",
  },
  {
    icon: <Globe className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
    tag: "Worldwide Cargo",
    title: "Global Freight & Logistics",
    description: "Fully insured air and maritime commercial cargo delivery with customs clearance documentation to over 40 countries.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
    tag: "London Desk",
    title: "Dedicated Partnership Desk",
    description: "Direct consultation with our senior footwear development director for tech pack analysis and sampling.",
  },
];

export default function ServicesBar() {
  return (
    <section className="bg-white border-b border-neutral-200 py-12 sm:py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {b2bServices.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center space-y-3 p-4"
            >
              <div className="w-12 h-12 rounded-full bg-ivory-100 flex items-center justify-center mb-1">
                {service.icon}
              </div>
              <span className="text-[9px] font-heading font-bold tracking-[0.25em] uppercase text-leather-cognac">
                {service.tag}
              </span>
              <h4 className="font-display text-lg font-semibold text-noir-950">
                {service.title}
              </h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
