import type { Metadata } from "next";
import ITSolutionsPageClient from "./ITSolutionsPageClient";

export const metadata: Metadata = {
  title: "IT Solutions",
  description:
    "Acemen IT Solutions — custom software development, web & mobile apps, AI & automation, and strategic IT consulting services.",
};

export default function ITSolutionsPage() {
  return <ITSolutionsPageClient />;
}
