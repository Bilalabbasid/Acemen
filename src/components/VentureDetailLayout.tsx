import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LuxuryCard from "@/components/ui/LuxuryCard";
import MotionSection from "@/components/ui/MotionSection";
import SectionHeader from "@/components/ui/SectionHeader";
import VentureIcon from "@/components/VentureIcon";
import type { VentureDetail } from "@/data/ventures";

interface VentureDetailProps {
  venture: VentureDetail;
}

export default function VentureDetailLayout({ venture }: VentureDetailProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <MotionSection>
              <p className="section-label">Venture {venture.ventureNumber}</p>
              <h1 className="display-heading mt-5 text-5xl text-white sm:text-6xl lg:text-7xl">
                {venture.title}
              </h1>
              <p className="mt-4 text-lg font-semibold text-gold-300">{venture.tagline}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {venture.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="gold">
                  {venture.ctaPrimaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="/ventures" variant="outline">
                  Back to Portfolio
                </Button>
              </div>
            </MotionSection>

            <MotionSection delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-premium-lg">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={venture.image}
                    alt={venture.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
                  <div
                    className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-navy-950/65 text-white backdrop-blur-md"
                    aria-hidden="true"
                  >
                    <VentureIcon name={venture.icon} />
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>
        </Container>
      </section>

      <section className="section-space gradient-section-light">
        <Container>
          <SectionHeader
            eyebrow={venture.categoriesLabel}
            title={venture.categoriesTitle}
            description={venture.categoriesSubtitle}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {venture.categories.map((category, index) => (
              <MotionSection key={category.name} delay={index * 0.05}>
                <LuxuryCard light className="h-full p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${venture.accentColor}18`,
                      color: venture.accentColor,
                    }}
                    aria-hidden="true"
                  >
                    <VentureIcon name={category.icon} />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-bold text-navy-950">{category.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{category.desc}</p>
                </LuxuryCard>
              </MotionSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-navy-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <SectionHeader
              eyebrow={venture.differentiatorsLabel}
              title={venture.differentiatorsTitle}
              description="The strongest venture pages explain what matters without relying on unverifiable proof claims."
              align="left"
              inverse
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {venture.differentiators.map((item, index) => (
                <MotionSection key={item.title} delay={index * 0.05}>
                  <LuxuryCard className="h-full p-6">
                    <div className="flex gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10"
                        style={{ color: venture.accentColor }}
                        aria-hidden="true"
                      >
                        <VentureIcon name={item.icon} />
                      </div>
                      <div>
                        <h2 className="font-heading text-xl font-bold text-white">{item.title}</h2>
                        <p className="mt-2 text-sm leading-7 text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  </LuxuryCard>
                </MotionSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space gradient-section-light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              eyebrow="Pathway"
              title={venture.pathwayTitle}
              description="A simple route from first conversation to next step keeps the experience understandable."
              align="left"
            />
            <LuxuryCard light className="p-6 sm:p-8">
              <ol className="grid gap-4 sm:grid-cols-5">
                {venture.pathway.map((step, index) => (
                  <li key={step} className="relative">
                    <div className="flex items-center gap-3 sm:block">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-gold-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="font-heading text-sm font-bold text-navy-950 sm:mt-4">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </LuxuryCard>
          </div>
        </Container>
      </section>

      <section className="section-space bg-navy-950">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-8 text-center shadow-premium sm:p-12">
            <CheckCircle2 className="mx-auto h-9 w-9 text-gold-300" aria-hidden="true" />
            <h2 className="display-heading mx-auto mt-5 max-w-3xl text-4xl text-white sm:text-5xl">
              {venture.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              {venture.ctaDescription}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="gold">
                {venture.ctaPrimaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
