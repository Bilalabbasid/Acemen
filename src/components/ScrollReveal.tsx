"use client";

import { motion, useInView, useReducedMotion, type Variant } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale" | "blur" | "none";
  once?: boolean;
  duration?: number;
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
  up: { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 } },
  blur: { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  duration = 0.42,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const v = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : variants[direction] || variants.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={v}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
