import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Acemen Ventures — our story, mission, vision, values, and the team behind our multi-sector ventures group.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
