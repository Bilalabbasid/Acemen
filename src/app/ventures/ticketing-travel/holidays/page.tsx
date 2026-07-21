import type { Metadata } from "next";
import HolidaysPageClient from "./HolidaysPageClient";

export const metadata: Metadata = {
  title: "Ascend Holidays — Find Your Perfect Holiday",
  description:
    "Browse curated luxury holiday packages from Ascend by Acemen Ventures. Discover handpicked destinations, five-star resorts, and bespoke travel experiences.",
};

export default function HolidaysPage() {
  return <HolidaysPageClient />;
}
