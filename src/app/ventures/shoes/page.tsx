import type { Metadata } from "next";
import ShoesPageClient from "./ShoesPageClient";

export const metadata: Metadata = {
  title: "Acre & Hide — Sartorial Leather & Footwear",
  description:
    "Acre & Hide — a maison of fine leather goods. Handcrafted footwear, bags, jackets, wallets, and belts, sculpted from the world's most exceptional full-grain hides.",
};

export default function ShoesPage() {
  return <ShoesPageClient />;
}
