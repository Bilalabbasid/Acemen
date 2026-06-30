import type { Metadata } from "next";
import VenturesPageClient from "./VenturesPageClient";

export const metadata: Metadata = {
  title: "Our Ventures",
  description:
    "Explore Acemen Ventures' portfolio: E-Commerce, IT Solutions, Shoes Business, and Ticketing & Travel — four distinct businesses under one group.",
};

export default function VenturesPage() {
  return <VenturesPageClient />;
}
