import type { Metadata } from "next";
import ECommercePageClient from "./ECommercePageClient";
import { getVentureBySlug } from "@/data/ventures";

const venture = getVentureBySlug("e-commerce");

export const metadata: Metadata = {
  title: venture?.metadata.title,
  description: venture?.metadata.description,
  alternates: {
    canonical: "/ventures/e-commerce",
  },
};

export default function ECommercePage() {
  return <ECommercePageClient />;
}
