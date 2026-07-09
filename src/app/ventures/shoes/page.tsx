import type { Metadata } from "next";
import ShoesPageClient from "./ShoesPageClient";
import { getVentureBySlug } from "@/data/ventures";

const venture = getVentureBySlug("shoes");

export const metadata: Metadata = {
  title: venture?.metadata.title,
  description: venture?.metadata.description,
  alternates: {
    canonical: "/ventures/shoes",
  },
};

export default function ShoesPage() {
  return <ShoesPageClient />;
}
