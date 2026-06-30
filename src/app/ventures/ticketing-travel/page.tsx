import type { Metadata } from "next";
import TicketingTravelPageClient from "./TicketingTravelPageClient";

export const metadata: Metadata = {
  title: "Ticketing & Travel",
  description:
    "Acemen Ticketing & Travel — event ticketing platform plus comprehensive travel booking and planning services for experiences worldwide.",
};

export default function TicketingTravelPage() {
  return <TicketingTravelPageClient />;
}
