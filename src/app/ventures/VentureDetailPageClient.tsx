"use client";

import VentureDetailLayout from "@/components/VentureDetailLayout";
import { getVentureBySlug } from "@/data/ventures";

interface VentureDetailPageClientProps {
  slug: string;
}

export default function VentureDetailPageClient({ slug }: VentureDetailPageClientProps) {
  const venture = getVentureBySlug(slug);

  if (!venture) {
    return null;
  }

  return <VentureDetailLayout venture={venture} />;
}
