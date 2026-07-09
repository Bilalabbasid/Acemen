import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers, Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LuxuryCard from "@/components/ui/LuxuryCard";
import MotionSection from "@/components/ui/MotionSection";
import ProofStrip from "@/components/ui/ProofStrip";
import SectionHeader from "@/components/ui/SectionHeader";
import VenturePreviewCard from "@/components/ui/VenturePreviewCard";
import { operatingPrinciples, siteConfig } from "@/data/site";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Private Venture House",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

const houseModel = [
  {
    icon: Compass,
    title: "Position",
    description:
      "Clarify the venture, audience, service promise, and the standards required to make the experience credible.",
  },
  {
    icon: Layers,
    title: "Build",
    description:
      "Shape the operating model, digital experience, brand language, and customer pathway around practical execution.",
  },
  {
    icon: Shield,
    title: "Maintain",
    description:
      "Keep the presentation, communication, and client handling consistent as each venture develops.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero pt-32 pb-20 sm:pt-40 lg:min-h-dvh lg:pb-28">
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <MotionSection>
              <span className="section-label">Private Venture House</span>
              <h1 className="display-heading mt-5 max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
                A refined house for commerce, craft, technology, and access.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {siteConfig.positioning} The website presents the current venture
                portfolio and gives prospective partners, clients, and collaborators a
                clear way to start a conversation.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="gold">
                  Start an Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="/ventures" variant="outline">
                  Explore Ventures
                </Button>
              </div>
            </MotionSection>

            <MotionSection delay={0.08}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] border border-gold-300/10" aria-hidden="true" />
                <LuxuryCard className="p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">
                    Portfolio focus
                  </p>
                  <div className="mt-8 space-y-5">
                    {ventures.map((venture) => (
                      <Link
                        key={venture.href}
                        href={venture.href}
                        className="group flex items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-gold-300/35"
                      >
                        <div>
                          <p className="text-sm font-bold text-white">{venture.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">{venture.tagline}</p>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gold-300 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </LuxuryCard>
              </div>
            </MotionSection>
          </div>
        </Container>
      </section>

      <ProofStrip />

      <section className="section-space bg-navy-950">
        <Container>
          <SectionHeader
            eyebrow="Portfolio"
            title="Four focused venture directions"
            description="Each venture is presented with a clear role, a defined service pathway, and a direct enquiry route."
            inverse
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ventures.map((venture, index) => (
              <VenturePreviewCard key={venture.href} venture={venture} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space gradient-section-light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Operating Philosophy"
              title="Calm execution over noise"
              description="The site avoids unverifiable claims and focuses on a disciplined way to present, shape, and discuss venture opportunities."
              align="left"
            />
            <div className="grid gap-5">
              {houseModel.map(({ icon: Icon, title, description }, index) => (
                <MotionSection key={title} delay={index * 0.05}>
                  <LuxuryCard light className="p-6">
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-gold-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-navy-950">{title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                      </div>
                    </div>
                  </LuxuryCard>
                </MotionSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-navy-950">
        <Container>
          <SectionHeader
            eyebrow="Standards"
            title="Designed for private, considered conversations"
            description="The current website is structured around clear enquiry paths rather than unsupported trust claims."
            inverse
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {operatingPrinciples.map((principle, index) => (
              <MotionSection key={principle.title} delay={index * 0.05}>
                <LuxuryCard className="h-full p-7">
                  <h3 className="font-heading text-2xl font-bold text-white">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{principle.description}</p>
                </LuxuryCard>
              </MotionSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space gradient-section-light">
        <Container>
          <div className="rounded-3xl bg-navy-950 p-8 text-center shadow-premium sm:p-12">
            <p className="section-label justify-center">Enquiries</p>
            <h2 className="display-heading mx-auto max-w-3xl text-4xl text-white sm:text-5xl">
              Start with a clear brief.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Use the contact page to outline the opportunity, venture, or service area
              you want to discuss. The form is intentionally direct and avoids claiming a
              secure workflow until a production email provider is configured.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="gold">
                Discuss an Opportunity
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
