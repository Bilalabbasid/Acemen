"use client";

import { Star, Calendar, UtensilsCrossed, Plane, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { HolidayPackage } from "@/data/holidays";

interface HolidayCardProps {
  holiday: HolidayPackage;
  onViewDeal: (holiday: HolidayPackage) => void;
}

const badgeStyles: Record<string, string> = {
  SALE: "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900",
  POPULAR: "bg-venture-travel text-white",
  LUXURY: "bg-gradient-to-r from-navy-600 to-navy-800 text-gold-400",
};

export default function HolidayCard({ holiday, onViewDeal }: HolidayCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card-premium flex flex-col h-full group cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={holiday.images[0]}
          alt={holiday.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Badge */}
        {holiday.badge && (
          <div
            className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase ${badgeStyles[holiday.badge]}`}
          >
            {holiday.badge}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Hotel Name & Stars */}
        <div className="mb-2">
          <h3 className="font-heading font-bold text-navy-800 text-lg leading-tight mb-1 group-hover:text-navy-600 transition-colors">
            {holiday.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(holiday.stars)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">{holiday.location}</span>
          </div>
        </div>

        {/* Review Score */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-venture-travel/10 text-venture-travel font-bold text-sm">
            {holiday.rating}
          </span>
          <span className="text-gray-500 text-sm">
            {holiday.rating >= 9.5 ? "Exceptional" : holiday.rating >= 9.0 ? "Superb" : "Excellent"} ·{" "}
            {holiday.reviewCount.toLocaleString()} reviews
          </span>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-5 flex-1">
          <div className="flex items-center gap-2.5 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
            <span>{holiday.duration}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-gray-600">
            <UtensilsCrossed className="w-4 h-4 text-gray-400 shrink-0" />
            <span>{holiday.boardType}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-gray-600">
            <Plane className="w-4 h-4 text-gray-400 shrink-0" />
            <span>{holiday.departureAirport}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-end justify-between mb-3">
            <div>
              {holiday.originalPrice && (
                <span className="line-through text-gray-400 text-sm mr-2">
                  £{holiday.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="font-display text-2xl font-bold text-navy-800">
                £{holiday.pricePerPerson.toLocaleString()}
              </span>
              <span className="text-xs text-gray-400 ml-1">pp</span>
            </div>
            {holiday.originalPrice && (
              <span className="text-xs font-bold text-venture-travel bg-venture-travel/10 px-2 py-1 rounded-full">
                Save £{(holiday.originalPrice - holiday.pricePerPerson).toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDeal(holiday);
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white rounded-xl py-3 font-semibold text-sm transition-all duration-300 group/btn"
          >
            View Deal
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
