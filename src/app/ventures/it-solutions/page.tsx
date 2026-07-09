import type { Metadata } from "next";
import ITSolutionsPageClient from "./ITSolutionsPageClient";
import { getVentureBySlug } from "@/data/ventures";

const venture = getVentureBySlug("it-solutions");

export const metadata: Metadata = {
  title: venture?.metadata.title,
  description: venture?.metadata.description,
  alternates: {
    canonical: "/ventures/it-solutions",
  },
};

export default function ITSolutionsPage() {
  return <ITSolutionsPageClient />;
}
