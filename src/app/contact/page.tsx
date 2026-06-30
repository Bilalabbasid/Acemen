import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Acemen Ventures — reach out via our contact form, email, phone, or visit our UK office.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
