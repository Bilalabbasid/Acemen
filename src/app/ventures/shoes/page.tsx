import type { Metadata } from "next";
import ShoesPageClient from "./ShoesPageClient";

export const metadata: Metadata = {
  title: "Shoes Business",
  description:
    "Acemen Shoes — a modern footwear brand combining style, comfort, and craftsmanship for everyday excellence.",
};

export default function ShoesPage() {
  return <ShoesPageClient />;
}
