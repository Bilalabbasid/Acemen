import type { Metadata } from "next";
import TicketingTravelPageClient from "./TicketingTravelPageClient";
import { getVentureBySlug } from "@/data/ventures";

const venture = getVentureBySlug("ticketing-travel");

export const metadata: Metadata = {
  title: venture?.metadata.title,
  description: venture?.metadata.description,
};

export default function TicketingTravelPage() {
  return <TicketingTravelPageClient />;
}
