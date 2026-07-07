"use client";

export default function PartnersLogos() {
  // SVG text-based logos for partner companies
  const partners = [
    "TechVentures", "GlobalTrade", "InnovateCo", "SilverOak",
    "NorthStar", "BridgePoint", "EverGreen", "ApexGroup",
    "QuantumLabs", "SwiftLogistics", "VanguardFin", "PeakDigital",
  ];

  return (
    <div className="relative overflow-hidden py-6">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...partners, ...partners].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center justify-center mx-8 sm:mx-12 shrink-0 group"
          >
            <span className="text-xl sm:text-2xl font-heading font-bold tracking-wider text-gray-300 group-hover:text-gray-500 transition-colors duration-300 select-none">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
