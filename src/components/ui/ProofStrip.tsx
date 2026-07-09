import { CheckCircle2 } from "lucide-react";
import { proofItems } from "@/data/site";
import Container from "./Container";
import MotionSection from "./MotionSection";

export default function ProofStrip() {
  return (
    <section className="border-y border-white/10 bg-navy-950">
      <Container>
        <div className="grid gap-4 py-8 md:grid-cols-3">
          {proofItems.map((item, index) => (
            <MotionSection key={item.label} delay={index * 0.04}>
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
                <div>
                  <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
