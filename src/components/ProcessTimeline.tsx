"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Lightbulb, Compass, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Identify & Qualify",
    description: "We study global market shifts and identify high-value sectors where heritage craftsmanship and digital intelligence can converge to create lasting authority.",
    accent: "#b08d57",
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Architect the Blueprint",
    description: "Detailed acquisition theses, market-entry strategies, and operational frameworks are developed by our elite directorship.",
    accent: "#7d8ca3",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Build & Empower",
    description: "We assemble domain specialists, deploy centralised infrastructure, and launch each house with an uncompromising focus on execution.",
    accent: "#9c6b45",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Scale & Refine",
    description: "Through proprietary intelligence and continuous refinement, we scale operations from local exclusivity to dominant global reach.",
    accent: "#6f8778",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Sustain & Lead",
    description: "We steward each house into a category standard-bearer — a lasting brand that compounds value for principals and clients alike.",
    accent: "#c9a84c",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto px-4">
      {/* Central Line (Desktop Only) */}
      <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 lg:-translate-x-1/2 hidden sm:block" />

      <div className="space-y-12 sm:space-y-16">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={step.title}
              className={`relative flex flex-col sm:flex-row items-start gap-8 lg:gap-16 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Card Container */}
              <div className="flex-1 w-full z-10">
                <ScrollReveal direction={isEven ? "left" : "right"}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-gold-500/20 shadow-premium transition-all duration-300 group cursor-default"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-black tracking-[0.2em] uppercase text-gold-400">
                        Phase {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 transition-transform duration-500 group-hover:rotate-12"
                        style={{
                          backgroundColor: `${step.accent}15`,
                          color: step.accent,
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300/70 text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              </div>

              {/* Central Circle Indicator */}
              <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-navy-950 border-2 border-white/10 flex items-center justify-center z-20 hidden sm:flex">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: step.accent }}
                />
              </div>

              {/* Empty Space for alignment (Desktop Only) */}
              <div className="flex-1 hidden lg:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
