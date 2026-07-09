import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms information for Acemen Ventures. Final legal wording should be reviewed by the business owner or legal advisor.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of Service"
        description="This page provides neutral placeholder terms information. Final terms should be reviewed and approved by the business owner or a qualified legal advisor."
      />
      <section className="section-space gradient-section-light">
        <Container className="max-w-3xl">
          <div className="prose prose-slate max-w-none">
            <p>
              Website content is provided for general information about Acemen Ventures and
              its venture interests. It should not be read as a binding offer, investment
              advice, legal advice, or final commercial terms.
            </p>
            <p>
              Enquiries submitted through the website are requests for conversation only.
              Any commercial relationship, service engagement, product purchase, or
              partnership arrangement should be governed by separate written terms.
            </p>
            <p>
              Final terms, disclaimers, jurisdiction wording, and liability limitations should
              be supplied by the business owner or legal advisor.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
