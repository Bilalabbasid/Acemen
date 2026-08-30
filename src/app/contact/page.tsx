import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Client Concierge & Bespoke Commissions | ACEMEN London",
  description:
    "Contact the ACEMEN London Private Client Desk for bespoke leather commissions, monogramming appointments, and worldwide client services.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
