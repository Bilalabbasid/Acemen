import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "The Institution",
  description:
    "Learn about the Acemen Ventures operating principles, portfolio direction, and approach to private venture conversations.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
