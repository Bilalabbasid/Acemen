export interface BrandInfo {
  name: string;
  tagline: string;
  category: string;
  founded: string;
  headquarters: string;
  address: {
    street: string;
    area: string;
    city: string;
    postcode: string;
    country: string;
    full: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    businessHours: string;
    conciergeAvailability: string;
  };
  socialLinks: Array<{
    name: string;
    href: string;
    label: string;
  }>;
  pillars: Array<{
    title: string;
    subtitle: string;
    description: string;
    iconName: string;
  }>;
  services: Array<{
    title: string;
    description: string;
    tag: string;
  }>;
}

export const brandData: BrandInfo = {
  name: "ACEMEN",
  tagline: "Timeless Leather, Masterfully Crafted",
  category: "Fine Luxury Leather Goods",
  founded: "London",
  headquarters: "London, United Kingdom",
  address: {
    street: "551 Staines Road",
    area: "Hounslow, Middlesex",
    city: "London",
    postcode: "TW4 5DL",
    country: "United Kingdom",
    full: "551 Staines Road, Hounslow, Middlesex, London TW4 5DL, United Kingdom",
  },
  contact: {
    email: "info@acemen.co.uk",
    phone: "+447587386522",
    phoneFormatted: "+44 7587 386522",
    businessHours: "Monday – Friday: 9:00 AM – 6:00 PM GMT",
    conciergeAvailability: "Private Client Concierge Desk open 24/7 for bespoke commissions",
  },
  socialLinks: [
    {
      name: "Instagram",
      href: "https://instagram.com/acemenventures",
      label: "@acemen.leather",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/acemenventures",
      label: "ACEMEN House",
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/acemenventures",
      label: "@acemen_uk",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/acemenventures",
      label: "ACEMEN Official",
    },
  ],
  pillars: [
    {
      title: "French & Italian Full-Grain Hides",
      subtitle: "Uncompromising Provenance",
      description:
        "Sourced exclusively from certified heritage tanneries in Tuscany and Alsace. Each hide undergoes traditional slow vegetable tanning that develops a deep, individual patina over decades.",
      iconName: "shieldCheck",
    },
    {
      title: "Master Artisan Saddle-Stitching",
      subtitle: "Hand-Sewn Longevity",
      description:
        "Every critical seam is joined using two-needle saddle stitching with beeswax-coated linen thread. Unlike machine lock-stitches, hand saddle-stitching will never unravel.",
      iconName: "scissors",
    },
    {
      title: "Hand-Burnished Edge Inking",
      subtitle: "Artisanal Finish",
      description:
        "Raw leather edges undergo five stages of manual sanding, beveling, pigment inking, and heat burnishing to create a glass-smooth, weather-impervious seal.",
      iconName: "sparkles",
    },
    {
      title: "Lifetime Restoration Guarantee",
      subtitle: "Heirloom Assurance",
      description:
        "Every ACEMEN creation is accompanied by our lifetime atelier restoration pledge. Our artisans will condition, re-stitch, and service your piece for generations.",
      iconName: "award",
    },
  ],
  services: [
    {
      title: "Complimentary Luxury Packaging",
      description:
        "Every creation arrives enveloped in custom heavy-weave cotton dust bags inside our signature magnetic gift box, hand-tied with silk grosgrain ribbon.",
      tag: "Every Order",
    },
    {
      title: "Hot-Stamped Monogramming",
      description:
        "Personalise your leather piece with custom initials debossed in 24k gold leaf, blind stamp, or silver foil by our London atelier.",
      tag: "Bespoke Service",
    },
    {
      title: "White-Glove Global Delivery",
      description:
        "Fully insured, climate-conscious courier delivery to over 40 countries, with real-time tracking and signature reception.",
      tag: "Worldwide",
    },
    {
      title: "Private Client Concierge",
      description:
        "Dedicated consultation with our head leather specialist for tailored advice, gift recommendations, and bespoke commissions.",
      tag: "24/7 Desk",
    },
  ],
};
