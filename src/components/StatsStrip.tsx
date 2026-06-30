"use client";

import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function StatsStrip() {
  const stats = [
    { value: 4, label: "Active Ventures", suffix: "", prefix: "" },
    { value: 50, label: "Team Members", suffix: "+", prefix: "" },
    { value: 15, label: "Countries Served", suffix: "+", prefix: "" },
    { value: 100, label: "Client Satisfaction", suffix: "%", prefix: "" },
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-500/[0.03] blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-500/[0.02] blur-3xl" />

      <div className="relative z-10 container-page py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100} direction="scale">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="text-center group cursor-default"
              >
                <div className="glass rounded-3xl p-6 sm:p-8 transition-all duration-500 border border-white/5 hover:border-gold-500/20 shadow-premium">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white mb-3">
                    <AnimatedCounter
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <div className="gold-line-wide mx-auto mb-3" />
                  <p className="text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
