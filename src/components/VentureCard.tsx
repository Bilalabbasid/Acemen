"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface VentureCardProps {
  title: string;
  description: string;
  href: string;
  accentColor: string;
  icon: React.ReactNode;
  image?: string;
}

export default function VentureCard({
  title,
  description,
  href,
  accentColor,
  icon,
  image,
}: VentureCardProps) {
  // Mouse track for dynamic spotlight gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-3xl overflow-hidden h-full flex flex-col border border-white/10 bg-navy-950/40 backdrop-blur-md shadow-premium-lg"
      onMouseMove={handleMouseMove}
      style={{ minHeight: "360px" }}
    >
      {/* Background Image with Zoom & Hue Effects */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 filter brightness-[0.4] group-hover:brightness-[0.5] contrast-[1.05]"
          />
        </div>
      )}

      {/* Dynamic Hover Spotlight Background */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(${parseInt(accentColor.slice(1, 3), 16) || 59}, ${parseInt(accentColor.slice(3, 5), 16) || 130}, ${parseInt(accentColor.slice(5, 7), 16) || 246}, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Overlay Gradients */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-colors duration-500"
        style={{
          background: image
            ? `linear-gradient(to bottom, rgba(10,22,40,0.2) 0%, rgba(10,22,40,0.6) 40%, rgba(5,10,24,0.95) 100%)`
            : `linear-gradient(135deg, ${accentColor}10 0%, rgba(5,10,24,0.95) 100%)`,
        }}
      />

      {/* Top Accent Gradient Border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20 transition-all duration-500 opacity-70 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-20 flex flex-col justify-between h-full p-8 sm:p-10 flex-1">
        {/* Top section: Icon and Step badge */}
        <div className="flex justify-between items-start mb-12">
          {/* Icon frame */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors duration-500"
            style={{
              backgroundColor: `${accentColor}15`,
              borderColor: `${accentColor}30`,
              color: accentColor,
              boxShadow: `0 0 20px ${accentColor}10`,
            }}
          >
            {icon}
          </motion.div>
        </div>

        {/* Bottom section: Info and CTA */}
        <div>
          <h3 className="display-heading text-3xl sm:text-4xl text-white mb-3 leading-[1.08] group-hover:text-gold-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300/80 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
            {description}
          </p>

          <Link href={href} className="inline-flex items-center">
            <motion.span
              className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: accentColor }}
            >
              Explore Venture
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
