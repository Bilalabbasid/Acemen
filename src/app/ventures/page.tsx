import type { Metadata } from "next";
import VenturesPageClient from "./VenturesPageClient";

export const metadata: Metadata = {
  title: "Our Ventures",
  description:
    "A curated collective of premier enterprises — Premium Leather Goods, Acre & Sole Haute Footwear, Enterprise IT & Intelligence, and Ascend Concierge Ticketing — united by master-tier craftsmanship and uncompromising quality.",
};

export default function VenturesPage() {
  return <VenturesPageClient />;
}
