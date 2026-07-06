import type { Metadata } from "next";
import TicketingTravelPageClient from "./TicketingTravelPageClient";

export const metadata: Metadata = {
  title: "Ascend — Concierge Ticketing & Global Expeditions",
  description:
    "Ascend — an ultra-premium ecosystem granting unfettered access to global events and bespoke travel for high-net-worth individuals and corporate institutions.",
};

export default function TicketingTravelPage() {
  return <TicketingTravelPageClient />;
}
