"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "Acemen Ventures has been an exceptional partner. Their strategic vision and commitment to quality have truly set them apart in the industry.",
    name: "James Richardson",
    title: "Managing Director",
    company: "NorthStar Capital",
    rating: 5,
  },
  {
    quote: "Working with the Acemen IT Solutions team transformed our digital infrastructure. Professional, innovative, and always ahead of the curve.",
    name: "Sarah Mitchell",
    title: "Chief Technology Officer",
    company: "GlobalTrade Ltd",
    rating: 5,
  },
  {
    quote: "Their e-commerce platform delivers an outstanding experience. The attention to detail and customer-first approach is truly remarkable.",
    name: "David Chen",
    title: "Head of Operations",
    company: "ApexGroup",
    rating: 5,
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function TestimonialCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {testimonials.map((t, i) => (
        <ScrollReveal key={t.name} delay={i * 120} direction="scale">
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass rounded-3xl p-8 border border-white/5 hover:border-gold-500/20 shadow-premium-lg h-full flex flex-col justify-between group cursor-default"
          >
            <div>
              {/* Quote icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-gold-400/20 group-hover:text-gold-400/40 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* User details */}
            <div className="flex items-center gap-3.5 pt-6 border-t border-white/5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center text-navy-950 font-heading font-black text-sm">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm group-hover:text-gold-400 transition-colors duration-300">
                  {t.name}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {t.title}, <span className="text-gold-400/80">{t.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
}
