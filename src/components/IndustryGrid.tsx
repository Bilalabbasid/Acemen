"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  ShoppingCart,
  Cpu,
  Briefcase,
  Plane,
} from "lucide-react";

const industries = [
  { icon: <ShoppingCart className="w-6 h-6" />, label: "Retail & Commerce", color: "#3b82f6" },
  { icon: <Cpu className="w-6 h-6" />, label: "Technology & AI", color: "#06b6d4" },
  { icon: <Briefcase className="w-6 h-6" />, label: "Business Services", color: "#a855f7" },
  { icon: <Plane className="w-6 h-6" />, label: "Travel & Tourism", color: "#f59e0b" },
];

export default function IndustryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
      {industries.map((item, i) => (
        <ScrollReveal key={item.label} delay={i * 60} direction="scale">
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="group glass rounded-3xl p-6 text-center cursor-pointer border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col justify-center items-center shadow-premium"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 border border-white/5"
              style={{
                backgroundColor: `${item.color}15`,
                color: item.color,
                boxShadow: `0 0 15px ${item.color}05`,
              }}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
            </div>
            <p className="text-sm font-heading font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
              {item.label}
            </p>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
}
