import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import MotionSection from "./MotionSection";
import VentureIcon from "@/components/VentureIcon";
import type { VentureDetail } from "@/data/ventures";

interface VenturePreviewCardProps {
  venture: VentureDetail;
  index?: number;
  variant?: "dark" | "light";
}

export default function VenturePreviewCard({
  venture,
  index = 0,
  variant = "dark",
}: VenturePreviewCardProps) {
  const dark = variant === "dark";

  return (
    <MotionSection delay={index * 0.05}>
      <article
        className={`group overflow-hidden rounded-2xl border transition duration-300 ${
          dark
            ? "border-white/10 bg-white/[0.045] text-white hover:border-gold-300/30"
            : "border-black/5 bg-white text-navy-950 shadow-[0_18px_60px_rgba(10,22,40,0.08)] hover:border-gold-500/25"
        }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={venture.image}
            alt={venture.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
          <div
            className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-navy-950/50 text-white backdrop-blur-md"
            aria-hidden="true"
          >
            <VentureIcon name={venture.icon} />
          </div>
        </div>
        <div className="p-6 sm:p-7">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: venture.accentColor }}
          >
            Venture {venture.ventureNumber}
          </p>
          <h3 className="mt-3 display-heading text-3xl">{venture.title}</h3>
          <p className={`mt-3 text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>
            {venture.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {venture.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className={`rounded-full border px-3 py-1 text-xs ${
                  dark
                    ? "border-white/10 bg-white/[0.04] text-slate-300"
                    : "border-slate-200 bg-slate-50 text-slate-600"
                }`}
              >
                {feature}
              </span>
            ))}
          </div>
          <Button href={venture.href} variant={dark ? "outline" : "dark"} className="mt-6">
            Explore {venture.title}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </article>
    </MotionSection>
  );
}
