import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "The House of ACEMEN | Maison de Cuir & Savoir-Faire",
  description:
    "Discover the history, artisanship, and craftsmanship philosophy of ACEMEN. Handcrafted luxury leather goods sculpted from premier full-grain hides in London.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
