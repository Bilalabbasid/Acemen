import type { Metadata } from "next";
import ECommercePageClient from "./ECommercePageClient";

export const metadata: Metadata = {
  title: "E-Commerce",
  description:
    "Acemen E-Commerce — our direct-to-consumer online retail business offering curated products with seamless shopping experiences and global delivery.",
};

export default function ECommercePage() {
  return <ECommercePageClient />;
}
