import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy information for Acemen Ventures. Final legal wording should be reviewed by the business owner or legal advisor.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        title="Privacy Policy"
        description="This page provides neutral placeholder privacy information. Final legal wording should be reviewed and approved by the business owner or a qualified legal advisor."
      />
      <section className="section-space gradient-section-light">
        <Container className="max-w-3xl">
          <div className="prose prose-slate max-w-none">
            <p>
              Acemen Ventures may receive personal information when a visitor contacts the
              business, such as name, email address, phone number, organisation, inquiry type,
              and message content.
            </p>
            <p>
              The site should only collect information needed to respond to enquiries. Final
              retention periods, lawful basis, third-party processors, and data rights wording
              should be supplied by the business owner or legal advisor.
            </p>
            <p>
              Until final policy wording is approved, this page should not be treated as legal
              advice or a complete privacy notice.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
