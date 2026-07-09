import type { Metadata } from "next";
import VenturesPageClient from "./VenturesPageClient";

export const metadata: Metadata = {
  title: "Venture Portfolio",
  description:
    "Explore Acemen Ventures across Acemen Emporium, Acemen Digital, Acre & Hide, and Ascend.",
  alternates: {
    canonical: "/ventures",
  },
};

export default function VenturesPage() {
  return <VenturesPageClient />;
}
