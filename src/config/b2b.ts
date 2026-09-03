/**
 * ACEMAN B2B & Wholesale Mode Configuration
 *
 * When B2B_MODE is true:
 * - Product prices and currency symbols are hidden
 * - Shopping cart and consumer checkout flows are disabled
 * - "Add to Bag" / "Buy Now" buttons are replaced with B2B inquiry actions:
 *   "Request a Quote", "Request Wholesale Pricing", "Request Samples", "Discuss Your Collection"
 * - Wholesale & OEM/ODM manufacturing specifications are showcased
 *
 * To restore consumer D2C e-commerce with full retail checkout:
 * Set B2B_MODE = false
 */

export const B2B_MODE = true;

export const B2B_CONFIG = {
  brandName: "ACEMAN",
  tagline: "Premium Leather Footwear & Private-Label Manufacturing",
  primaryCta: "Request a Quote",
  secondaryCta: "Discuss Your Collection",
  wholesaleCta: "Request Wholesale Pricing",
  sampleCta: "Request Samples",
  catalogCta: "Request Full Catalog",
  partnerCta: "Become a Wholesale Partner",
  consultationCta: "Talk to Our Team",

  companyTypes: [
    "Brand",
    "Retailer",
    "Distributor",
    "Wholesaler",
    "Private Label",
    "Aviation / Corporate Fleet",
    "Other",
  ],

  estimatedVolumes: [
    "Sample / Prototype Only",
    "50 – 200 Pairs",
    "200 – 500 Pairs",
    "500 – 2,000 Pairs",
    "2,000+ Pairs",
    "Ongoing Production Contract",
  ],

  productCategories: [
    "Footwear (Oxfords, Monks, Boots, Derbies)",
    "The Pilot Collection (Aviation Grade Footwear)",
    "Sartorial Leather Outerwear & Jackets",
    "Fine Leather Holdalls & Executive Briefcases",
    "Wallets & Small Leather Goods",
    "Full Collection Development (OEM / ODM)",
  ],
};
