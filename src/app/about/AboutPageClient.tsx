import { Eye, LockKeyhole, Scale, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import LuxuryCard from "@/components/ui/LuxuryCard";
import MotionSection from "@/components/ui/MotionSection";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import VenturePreviewCard from "@/components/ui/VenturePreviewCard";
import { operatingPrinciples } from "@/data/site";
import { ventures } from "@/data/ventures";

const standards = [
  {
    icon: LockKeyhole,
    title: "Discretion",
    description:
      "The brand is presented for private conversations, considered enquiries, and carefully handled opportunities.",
  },
  {
    icon: Scale,
    title: "Consistency",
    description:
      "Each venture should communicate with the same level of clarity, restraint, and operational seriousness.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    description:
      "Premium positioning depends on precise copy, thoughtful visuals, and a service path that feels credible.",
  },
  {
    icon: Eye,
    title: "Focus",
    description:
      "The portfolio is easier to understand when every venture has a defined audience, role, and next step.",
  },
];

export default function AboutPageClient() {
  return (
    <>
      <PageHero
        eyebrow="The Institution"
        title="A private house built around standards."
        description="Acemen Ventures is presented as a multi-sector venture house. This page focuses on the brand's operating principles and current venture directions without adding unverified leadership or legal claims."
        primaryHref="/contact"
        primaryLabel="Start an Inquiry"
        secondaryHref="/ventures"
        secondaryLabel="View Portfolio"
      />

      <section className="section-space gradient-section-light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Purpose"
              title="Clear presentation for considered ventures"
              description="The site is designed to communicate what each venture direction does, why it exists, and how a relevant enquiry should begin."
              align="left"
            />
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Acemen Ventures brings together several venture directions across commerce,
                technology, leather goods, and concierge-led mobility. The current website
                positions those directions in a calm, premium, and factual way.
              </p>
              <p>
                Sections that require owner confirmation, such as directors, testimonials,
                partner logos, or registration details, should only be published once the
                business supplies verified information.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-navy-950">
        <Container>
          <SectionHeader
            eyebrow="Operating Standards"
            title="Principles before personalities"
            description="Until real leadership details are supplied, the page emphasizes the standards behind the brand rather than inventing people or biographies."
            inverse
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {standards.map(({ icon: Icon, title, description }, index) => (
              <MotionSection key={title} delay={index * 0.05}>
                <LuxuryCard className="h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-gold-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
                </LuxuryCard>
              </MotionSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space gradient-section-light">
        <Container>
          <SectionHeader
            eyebrow="How the house works"
            title="A disciplined frame for venture conversations"
            description="These principles keep the public website credible while preserving room for private detail during direct enquiries."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {operatingPrinciples.map((principle, index) => (
              <MotionSection key={principle.title} delay={index * 0.05}>
                <LuxuryCard light className="h-full p-7">
                  <h3 className="font-heading text-2xl font-bold text-navy-950">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{principle.description}</p>
                </LuxuryCard>
              </MotionSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-navy-950">
        <Container>
          <SectionHeader
            eyebrow="Portfolio"
            title="Current venture directions"
            description="The portfolio remains the clearest public expression of the Acemen Ventures brand."
            inverse
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ventures.map((venture, index) => (
              <VenturePreviewCard key={venture.href} venture={venture} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
