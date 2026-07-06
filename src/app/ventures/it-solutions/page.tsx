import type { Metadata } from "next";
import ITSolutionsPageClient from "./ITSolutionsPageClient";

export const metadata: Metadata = {
  title: "Acemen Digital — Enterprise Architecture & AI Intelligence",
  description:
    "Acemen Digital — proprietary AI, cloud frameworks, and enterprise-grade software ecosystems engineered to keep industry leaders permanently ahead of the market.",
};

export default function ITSolutionsPage() {
  return <ITSolutionsPageClient />;
}
