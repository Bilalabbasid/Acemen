import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/ui/Container";
import LuxuryCard from "@/components/ui/LuxuryCard";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { contactDetails } from "@/data/contact";

const contactCards = [
  {
    icon: MapPin,
    title: "Office",
    lines: contactDetails.officeLines,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [contactDetails.email],
    href: `mailto:${contactDetails.email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [contactDetails.phone],
    href: contactDetails.phoneHref,
  },
  {
    icon: Clock,
    title: "Business hours",
    lines: contactDetails.businessHours,
  },
];

export default function ContactPageClient() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a considered enquiry."
        description="Use the form to outline the venture, opportunity, or service area you want to discuss. If preferred, contact the office directly by email or phone."
      />

      <section className="section-space gradient-section-light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Private Office"
                title="Direct contact details"
                description="These details are shown exactly as currently configured in the codebase and should be confirmed by the owner before launch."
                align="left"
              />
              <div className="mt-8 grid gap-4">
                {contactCards.map(({ icon: Icon, title, lines, href }) => {
                  const content = (
                    <LuxuryCard light className="p-5 transition-colors hover:border-gold-500/20">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-gold-300">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h2 className="font-heading text-lg font-bold text-navy-950">{title}</h2>
                          <div className="mt-2 space-y-1">
                            {lines.map((line) => (
                              <p key={line} className="text-sm leading-6 text-slate-600">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </LuxuryCard>
                  );

                  return href ? (
                    <a key={title} href={href} className="block rounded-2xl">
                      {content}
                    </a>
                  ) : (
                    <div key={title}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
