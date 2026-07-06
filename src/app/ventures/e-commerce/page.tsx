import type { Metadata } from "next";
import ECommercePageClient from "./ECommercePageClient";

export const metadata: Metadata = {
  title: "Acemen Emporium — Curated Digital Commerce",
  description:
    "Acemen Emporium — a curated direct-to-consumer commerce house pairing an impeccably edited marketplace with white-glove fulfilment for a discerning global clientele.",
};

export default function ECommercePage() {
  return <ECommercePageClient />;
}
