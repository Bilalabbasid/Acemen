/**
 * ACEMEN Atelier & Pre-Order Mode Configuration
 *
 * When B2B_MODE is true:
 * - Product prices and instant retail checkout are replaced with luxury Pre-Order & Waitlist reservations
 * - Visitors can "Pre-Order", "Join the Waitlist", or request "Bespoke Commissions"
 * - Bridges luxury private clients, collectors, and bespoke boutique orders
 *
 * To restore consumer D2C e-commerce with full direct checkout:
 * Set B2B_MODE = false
 */

export const B2B_MODE = true;

export const B2B_CONFIG = {
  brandName: "ACEMEN",
  tagline: "Luxury British Leather Footwear & Sartorial Atelier",
  primaryCta: "Pre-Order",
  secondaryCta: "Join Waitlist",
  preOrderCta: "Pre-Order Now",
  waitlistCta: "Join the Waitlist",
  bespokeCta: "Bespoke Commission",
  catalogCta: "Request Atelier Lookbook",
  partnerCta: "Private Inquiries & Orders",
  consultationCta: "Speak to Our Atelier Desk",

  orderTypes: [
    "Individual Pre-Order (1–5 Pairs)",
    "Private Client Allocation / Waitlist",
    "Made-to-Order Bespoke Commission",
    "Corporate & Private Fleet Allocation",
    "Boutique & Retail Partnership",
    "Other Special Request",
  ],

  estimatedVolumes: [
    "1 Pair / Single Piece",
    "2 – 5 Pairs",
    "10 – 50 Pairs",
    "50 – 200 Pairs",
    "200+ Pairs / Volume Run",
  ],

  productCategories: [
    "Footwear (Oxfords, Monks, Chelsea Boots, Loafers, Derbies)",
    "Sartorial Leather Outerwear & Tailored Jackets",
    "Fine Leather Holdalls & Executive Briefcases",
    "Wallets & Small Leather Goods",
    "Sartorial Belts & Leather Accessories",
    "Bespoke Made-to-Order Commission",
  ],
};
