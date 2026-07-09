import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LuxuryCard from "@/components/ui/LuxuryCard";
import MotionSection from "@/components/ui/MotionSection";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import VenturePreviewCard from "@/components/ui/VenturePreviewCard";
import { ventures } from "@/data/ventures";

const portfolioNotes = [
  "Each venture has a dedicated detail page and enquiry path.",
  "Status labels are intentionally omitted until the owner confirms operational status.",
  "The portfolio avoids unverifiable partner, testimonial, or scale claims.",
];

export default function VenturesPageClient() {
  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title="Four venture directions, one considered standard."
        description="Explore the current Acemen Ventures portfolio across curated commerce, digital systems, leather goods, and concierge-led mobility."
        primaryHref="/contact"
        primaryLabel="Discuss an Opportunity"
        secondaryHref="/about"
        secondaryLabel="The Institution"
      />

      <section className="section-space gradient-section-light">
        <Container>
          <SectionHeader
            eyebrow="Venture Index"
            title="A focused portfolio structure"
            description="Each card uses the shared venture data source, making the site easier to maintain and keeping names, descriptions, images, and metadata aligned."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ventures.map((venture, index) => (
              <VenturePreviewCard
                key={venture.href}
                venture={venture}
                index={index}
                variant="light"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-navy-950">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              eyebrow="Presentation Standard"
              title="Clear, selective, and enquiry-led."
              description="The portfolio is designed for confidence and clarity rather than unsupported claims."
              align="left"
              inverse
            />
            <div className="grid gap-4">
              {portfolioNotes.map((note, index) => (
                <MotionSection key={note} delay={index * 0.05}>
                  <LuxuryCard className="p-5">
                    <p className="text-sm leading-7 text-slate-300">{note}</p>
                  </LuxuryCard>
                </MotionSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space gradient-section-light">
        <Container>
          <div className="rounded-3xl bg-navy-950 p-8 text-center shadow-premium sm:p-12">
            <p className="section-label justify-center">Private Enquiry</p>
            <h2 className="display-heading text-4xl text-white sm:text-5xl">
              Start with the right venture.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              If your enquiry spans multiple venture areas, use the contact page and select
              the closest inquiry type.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="gold">
                Start an Inquiry
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
