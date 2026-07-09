"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface VentureCardProps {
  title: string;
  description: string;
  href: string;
  accentColor: string;
  icon: ReactNode;
  image?: string;
  imageAlt?: string;
}

export default function VentureCard({
  title,
  description,
  href,
  accentColor,
  icon,
  image,
  imageAlt,
}: VentureCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-premium"
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
          style={{ color: accentColor }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <h3 className="display-heading text-3xl text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center text-sm font-bold text-gold-300 transition-colors hover:text-gold-200"
        >
          Explore {title}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
