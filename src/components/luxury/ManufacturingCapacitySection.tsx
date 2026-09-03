"use client";

import React from "react";
import { Factory, Clock, PackageCheck, Layers, FileCheck, ShieldCheck } from "lucide-react";

interface SpecCard {
  label: string;
  value: string;
  note: string;
  icon: React.ReactNode;
}

const manufacturingSpecs: SpecCard[] = [
  {
    label: "Production Capacity",
    value: "[INSERT VERIFIED CAPACITY]",
    note: "Scalable monthly production capacity tailored to client seasonal orders.",
    icon: <Factory className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    label: "Minimum Order Quantity (MOQ)",
    value: "[INSERT VERIFIED MOQ]",
    note: "Flexible initial tier thresholds for newly launched collections and trial runs.",
    icon: <Layers className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    label: "Sampling & Prototyping",
    value: "[INSERT DETAILS]",
    note: "Rapid physical sample creation based on approved Last, tech pack, or reference shoe.",
    icon: <PackageCheck className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    label: "Production Lead Time",
    value: "[INSERT VERIFIED LEAD TIME]",
    note: "Standard production lead time from final sample approval to international dispatch.",
    icon: <Clock className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    label: "Private Label",
    value: "Available",
    note: "Comprehensive custom debossing, branded packaging, and custom insole sockliners.",
    icon: <FileCheck className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
  {
    label: "OEM / ODM Development",
    value: "Available",
    note: "Full custom development from design concepts to finished production runs.",
    icon: <ShieldCheck className="w-5 h-5 text-leather-cognac stroke-[1.4]" />,
  },
];

interface ManufacturingCapacitySectionProps {
  onOpenInquiry?: () => void;
}

export default function ManufacturingCapacitySection({ onOpenInquiry }: ManufacturingCapacitySectionProps) {
  return (
    <section id="manufacturing" className="py-20 sm:py-32 bg-ivory-50 border-t border-neutral-200">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-leather-cognac" />
            <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-leather-cognac">
              PRODUCTION & ORDER PARAMETERS
            </span>
            <span className="w-6 h-[1px] bg-leather-cognac" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-noir-950">
            MANUFACTURING SPECIFICATIONS
          </h2>

          <p className="font-body text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-xl mx-auto">
            Transparent manufacturing terms and commercial parameters for brands, corporate buyers, and wholesale partners.
          </p>
        </div>

        {/* 6-Card Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturingSpecs.map((spec) => (
            <div
              key={spec.label}
              className="bg-white p-7 border border-neutral-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-noir-950 transition-colors"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-ivory-100 flex items-center justify-center">
                  {spec.icon}
                </div>
                <span className="text-[10px] font-heading font-bold tracking-[0.2em] uppercase text-neutral-500 block">
                  {spec.label}
                </span>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-noir-950">
                  {spec.value}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {spec.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Callout */}
        <div className="mt-12 p-6 bg-white border border-neutral-200 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-heading tracking-wider uppercase text-neutral-500 font-semibold">
            Confidential Wholesale Pricing & Volume Tiers
          </p>
          <p className="text-xs text-neutral-600 font-light">
            Exact production schedules, sample turnaround, and tiered wholesale pricing matrix are provided upon direct review of your brand&apos;s project brief.
          </p>
          <div className="pt-3">
            <button
              onClick={onOpenInquiry}
              className="editorial-link text-xs tracking-[0.2em]"
            >
              REQUEST WHOLESALE PRICING MATRIX →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
