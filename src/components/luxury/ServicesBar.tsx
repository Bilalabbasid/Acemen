"use client";

import React from "react";
import { Gift, Sparkles, Globe, Headphones } from "lucide-react";
import { brandData } from "@/data/brand";

const serviceIcons: Record<string, React.ReactNode> = {
  "0": <Gift className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
  "1": <Sparkles className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
  "2": <Globe className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
  "3": <Headphones className="w-6 h-6 text-leather-cognac stroke-[1.2]" />,
};

export default function ServicesBar() {
  return (
    <section className="bg-white border-b border-neutral-200 py-12 sm:py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {brandData.services.map((service, idx) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center space-y-3 p-4"
            >
              <div className="w-12 h-12 rounded-full bg-ivory-100 flex items-center justify-center mb-1">
                {serviceIcons[String(idx)]}
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
