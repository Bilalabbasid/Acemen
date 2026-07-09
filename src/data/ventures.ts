export type VentureIcon =
  | "shoppingBag"
  | "code"
  | "footprints"
  | "ticket"
  | "layers"
  | "badgeCheck"
  | "globe"
  | "headphones"
  | "sparkles"
  | "truck"
  | "shieldCheck"
  | "brain"
  | "smartphone"
  | "cpu"
  | "zap"
  | "shield"
  | "barChart"
  | "briefcase"
  | "crown"
  | "gem"
  | "scissors"
  | "award"
  | "plane"
  | "hotel"
  | "mapPin";

export interface VentureListItem {
  slug: string;
  ventureNumber: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  href: string;
  accentColor: string;
  icon: VentureIcon;
  image: string;
  features: string[];
}

export interface VentureDetail extends VentureListItem {
  subtitle: string;
  heroDescription: string;
  categoriesTitle: string;
  categoriesSubtitle: string;
  categoriesLabel: string;
  categories: Array<{
    name: string;
    desc: string;
    icon: VentureIcon;
  }>;
  differentiatorsTitle: string;
  differentiatorsLabel: string;
  differentiators: Array<{
    title: string;
    desc: string;
    icon: VentureIcon;
  }>;
  testimonialQuote: string;
  testimonialAuthor: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  metadata: {
    title: string;
    description: string;
  };
}

export const ventures: VentureDetail[] = [
  {
    slug: "e-commerce",
    ventureNumber: "01",
    title: "Acemen Emporium",
    tagline: "Curated Digital Commerce",
    summary:
      "Acemen Emporium - our direct-to-consumer commerce house, pairing an impeccably curated marketplace with white-glove fulfilment for a discerning global clientele.",
    description:
      "Our direct-to-consumer commerce house, pairing an impeccably curated marketplace with the technology and logistics to serve a discerning global clientele - where premium goods meet a purchase experience engineered to the same standard as the products themselves.",
    href: "/ventures/e-commerce",
    accentColor: "#b08d57",
    icon: "shoppingBag",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: [
      "Editorially Curated Marketplace",
      "White-Glove Global Fulfilment",
      "Frictionless, Secure Checkout",
      "Dedicated Client Concierge",
    ],
    subtitle: "Curated Digital Commerce",
    heroDescription:
      "Our direct-to-consumer commerce house, pairing an impeccably curated marketplace with the technology and logistics to serve a discerning global clientele. Where premium goods meet a purchase experience engineered to the same standard as the products themselves.",
    categoriesTitle: "The Commerce Portfolio",
    categoriesSubtitle:
      "A curated retail ecosystem, engineered for the discerning modern buyer.",
    categoriesLabel: "Our Domain",
    categories: [
      { name: "Curated Marketplace", desc: "An impeccably edited assortment of premium lifestyle goods, vetted for provenance and quality", icon: "layers" },
      { name: "House Label Storefronts", desc: "Direct-to-consumer flagships for our own maisons, engineered for a flawless purchase journey", icon: "badgeCheck" },
      { name: "Global Fulfilment", desc: "Insured, temperature-considered, hand-packaged delivery to more than fifteen countries", icon: "globe" },
      { name: "Client Concierge", desc: "A dedicated personal shopping desk with white-glove aftercare and priority resolution", icon: "headphones" },
    ],
    differentiatorsTitle: "The Emporium Standard",
    differentiatorsLabel: "The Emporium Difference",
    differentiators: [
      { icon: "sparkles", title: "Editorially Curated", desc: "Every product is selected by our buying house for craftsmanship, provenance, and enduring value - never volume." },
      { icon: "shoppingBag", title: "Frictionless Commerce", desc: "A conversion-engineered storefront with one-touch checkout, saved profiles, and intelligent recommendations." },
      { icon: "truck", title: "White-Glove Fulfilment", desc: "Hand-packaged, fully insured, and tracked door to door with dedicated concierge support at every step." },
      { icon: "shieldCheck", title: "Assured & Authentic", desc: "Bank-grade payment security, guaranteed authenticity, and a frictionless returns and satisfaction promise." },
    ],
    testimonialQuote:
      "The most considered online purchase experience I have encountered. From the curation to the packaging to the concierge follow-up, every touchpoint feels intentional - this is how premium commerce should feel.",
    testimonialAuthor: "Sebastian V., Private Client",
    ctaTitle: "Discover the Emporium",
    ctaDescription:
      "Explore a curated world of premium goods, delivered with white-glove service and concierge-level care to your door.",
    ctaPrimaryLabel: "Browse the Collection",
    metadata: {
      title: "Acemen Emporium - Curated Digital Commerce",
      description:
        "Acemen Emporium - a curated direct-to-consumer commerce house pairing an impeccably edited marketplace with white-glove fulfilment for a discerning global clientele.",
    },
  },
  {
    slug: "it-solutions",
    ventureNumber: "02",
    title: "Acemen Digital",
    tagline: "Enterprise Architecture & AI Intelligence",
    summary:
      "Acemen Digital - we engineer proprietary AI, cloud frameworks, and enterprise-grade software ecosystems that keep industry leaders permanently ahead of the market.",
    description:
      "We engineer bespoke digital infrastructure and enterprise-grade software ecosystems for industry leaders. From proprietary artificial intelligence to high-scalability application development, we transform complex technological challenges into fluid competitive advantages.",
    href: "/ventures/it-solutions",
    accentColor: "#7d8ca3",
    icon: "code",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    features: [
      "Elite Full-Stack & Architecture Engineering",
      "Next-Generation AI & Hyper-Automation Systems",
      "Tailored Digital Ecosystems & Mobile Masterpieces",
      "High-Level Visionary Technology Consulting",
    ],
    subtitle: "Enterprise Architecture & AI Intelligence",
    heroDescription:
      "We engineer bespoke digital infrastructure and enterprise-grade software ecosystems for industry leaders. From proprietary artificial intelligence to high-scalability application development, we transform complex technological challenges into fluid competitive advantages.",
    categoriesTitle: "Our Engineering Disciplines",
    categoriesSubtitle:
      "Bespoke digital ecosystems engineered for industry leaders and market definers.",
    categoriesLabel: "Our Expertise",
    categories: [
      { name: "Bespoke Software Engineering", desc: "Enterprise-grade, tailormade applications architected to your organisation's unique operational DNA", icon: "code" },
      { name: "AI & Hyper-Automation", desc: "Proprietary machine intelligence, predictive analytics, and autonomous workflow systems", icon: "brain" },
      { name: "Mobile Masterpieces", desc: "Native and cross-platform applications delivering flawless UX at enterprise scale", icon: "smartphone" },
      { name: "Visionary Technology Consulting", desc: "C-suite advisory on digital transformation, architecture strategy, and emerging technology integration", icon: "cpu" },
    ],
    differentiatorsTitle: "The Vanguard Standard",
    differentiatorsLabel: "The Vanguard Distinction",
    differentiators: [
      { icon: "zap", title: "Elite Full-Stack Engineering", desc: "Deep expertise across the complete technology stack - from bare-metal architecture to pixel-perfect front-end execution." },
      { icon: "brain", title: "Next-Gen AI & Automation", desc: "We architect proprietary AI systems and hyper-automation pipelines that become your definitive competitive moat." },
      { icon: "shield", title: "Fortress-Grade Security", desc: "Zero-trust architectures, end-to-end encryption, and compliance frameworks protecting your most critical digital assets." },
      { icon: "barChart", title: "Data-Driven Dominance", desc: "Embedded analytics and real-time intelligence transforming raw data into executive-level strategic advantage." },
    ],
    testimonialQuote:
      "Engaging Acemen's Vanguard team was a watershed moment for our enterprise. They didn't just build software - they architected our entire digital future. The AI pipeline alone has delivered a 340% efficiency gain.",
    testimonialAuthor: "Henrik V., Chief Digital Officer, Meridian Global",
    ctaTitle: "Architect Your Digital Future",
    ctaDescription:
      "Ready to commission bespoke digital infrastructure that defines your industry? Our elite engineering cohort awaits your briefing.",
    ctaPrimaryLabel: "Commission a Project",
    metadata: {
      title: "Acemen Digital - Enterprise Architecture & AI Intelligence",
      description:
        "Acemen Digital - proprietary AI, cloud frameworks, and enterprise-grade software ecosystems engineered to keep industry leaders permanently ahead of the market.",
    },
  },
  {
    slug: "shoes",
    ventureNumber: "03",
    title: "Acre & Hide",
    tagline: "Sartorial Leather & Footwear",
    summary:
      "Acre & Hide - a maison of fine leather goods. Handcrafted footwear, bags, jackets, wallets, and belts, sculpted from the world's most exceptional hides.",
    description:
      "A maison devoted to the art of fine leatherwork - hand-lasted footwear, structured bags, sculpted jackets, wallets, and belts, each crafted from the world's most exceptional full-grain hides for those who refuse to compromise between presence and comfort.",
    href: "/ventures/shoes",
    accentColor: "#9c6b45",
    icon: "footprints",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    features: [
      "Master-Artisan Handcraftsmanship",
      "Full-Grain, Heritage-Grade Hides",
      "Footwear, Bags, Outerwear & Small Goods",
      "Lifetime Restoration Guarantee",
    ],
    subtitle: "Sartorial Leather & Footwear",
    heroDescription:
      "A maison devoted to the art of fine leatherwork. From hand-lasted footwear to structured bags, sculpted jackets, wallets, and belts - every piece is crafted from the world's most exceptional hides, for those who refuse to compromise between presence and comfort.",
    categoriesTitle: "The Maison Collections",
    categoriesSubtitle:
      "A complete house of leather - footwear, bags, outerwear, and fine small goods, crafted for the uncompromising.",
    categoriesLabel: "Our Craft",
    categories: [
      { name: "Footwear Atelier", desc: "Hand-lasted oxfords, derbies, and loafers uniting Italian artistry with all-day orthotic comfort", icon: "footprints" },
      { name: "Fine Bags & Holdalls", desc: "Structured totes, briefcases, and weekenders cut from full-grain heritage hides", icon: "briefcase" },
      { name: "Leather Outerwear", desc: "Investment-grade jackets, hand-stitched and sculpted to develop a lifelong patina", icon: "crown" },
      { name: "Wallets & Small Goods", desc: "Bifolds, cardholders, and belts with personalised monogramming and edge-painted finishing", icon: "gem" },
    ],
    differentiatorsTitle: "The Acre & Hide Distinction",
    differentiatorsLabel: "The Artisan Pledge",
    differentiators: [
      { icon: "scissors", title: "Master-Artisan Handcraftsmanship", desc: "Every piece is cut, stitched, and finished by generational leather artisans using techniques refined over centuries." },
      { icon: "award", title: "Heritage-Grade Full-Grain Hides", desc: "We source exclusively full-grain and top-grain leathers from ethical, premier tanneries across Italy and France." },
      { icon: "layers", title: "Limited-Run Atelier Production", desc: "Each collection is released in numbered micro-batches - ensuring exclusivity and uncompromising quality control." },
      { icon: "shieldCheck", title: "Lifetime Restoration Guarantee", desc: "An uncompromising promise - every piece is backed by our lifetime craftsmanship warranty and restoration service." },
    ],
    testimonialQuote:
      "I have collected from the finest houses across Milan and Paris. Acre & Hide rivals them all - the leather, the hand-stitching, the patina that deepens with every year. From the boots to the weekender bag, this is heirloom-level craftsmanship.",
    testimonialAuthor: "Victoria K., Private Collector",
    ctaTitle: "Commission a Masterpiece",
    ctaDescription:
      "Discover our limited-run leather collections - footwear, bags, outerwear, and small goods, delivered with white-glove service to your door.",
    ctaPrimaryLabel: "Enter the Atelier",
    metadata: {
      title: "Acre & Hide - Sartorial Leather & Footwear",
      description:
        "Acre & Hide - a maison of fine leather goods. Handcrafted footwear, bags, jackets, wallets, and belts, sculpted from the world's most exceptional full-grain hides.",
    },
  },
  {
    slug: "ticketing-travel",
    ventureNumber: "04",
    title: "Ascend",
    tagline: "Global Concierge & Mobility Logistics",
    summary:
      "Ascend - a private concierge for the world's most coveted events and bespoke travel, delivering first-tier access and seamless mobility logistics.",
    description:
      "An ultra-premium ecosystem granting unfettered access to global events and bespoke travel. We curate highly sought-after, sold-out access alongside elite, tailormade itinerary design for high-net-worth individuals and corporate institutions.",
    href: "/ventures/ticketing-travel",
    accentColor: "#6f8778",
    icon: "ticket",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    features: [
      "First-Tier Access to Global Events & Arenas",
      "Bespoke Luxury Itinerary & Expedition Curation",
      "Seamless, High-Security Booking Interface",
      "Dedicated 24/7 Elite Lifestyle Management",
    ],
    subtitle: "Global Concierge & Mobility Logistics",
    heroDescription:
      "An ultra-premium ecosystem granting unfettered access to global events and bespoke travel. We curate highly sought-after, sold-out access alongside elite, tailormade itinerary design for high-net-worth individuals and corporate institutions.",
    categoriesTitle: "The Ascend Portfolio",
    categoriesSubtitle:
      "An ultra-premium ecosystem of access, curated for the world's most discerning.",
    categoriesLabel: "Our Domain",
    categories: [
      { name: "First-Tier Event Access", desc: "Guaranteed entry to sold-out arenas, VIP hospitality, and exclusive global spectacles", icon: "ticket" },
      { name: "Private Aviation & Charters", desc: "Curated private jet and first-class commercial itineraries with zero friction", icon: "plane" },
      { name: "Elite Accommodations", desc: "Hand-selected presidential suites, private villas, and members-only luxury retreats", icon: "hotel" },
      { name: "Bespoke Expedition Curation", desc: "Tailormade journeys designed by elite travel architects for the most discerning globetrotters", icon: "mapPin" },
    ],
    differentiatorsTitle: "The Ascend Advantage",
    differentiatorsLabel: "The Ascend Distinction",
    differentiators: [
      { icon: "crown", title: "First-Tier Global Access", desc: "Unlock sold-out arenas, exclusive VIP enclosures, and private global spectacles inaccessible to the general public." },
      { icon: "sparkles", title: "Bespoke Itinerary Curation", desc: "Every journey is architecturally designed by elite travel specialists - from private aviation to members-only retreats." },
      { icon: "shield", title: "High-Security Booking Protocol", desc: "Fortress-grade encrypted transactions, biometric verification, and absolute privacy for high-net-worth clientele." },
      { icon: "gem", title: "24/7 Elite Lifestyle Management", desc: "A dedicated personal concierge available around the clock for last-minute alterations, upgrades, and exclusive requests." },
    ],
    testimonialQuote:
      "Ascend secured us front-row access to a sold-out Monaco Grand Prix weekend - private yacht transfer, penthouse suite, and a concierge who anticipated every need before we voiced it. Simply extraordinary.",
    testimonialAuthor: "Alistair & Penelope C., Private Clients",
    ctaTitle: "Embark on Your Next Expedition",
    ctaDescription:
      "Grant yourself unfettered access to the world's most coveted events and bespoke travel experiences, curated exclusively for you.",
    ctaPrimaryLabel: "Engage Your Concierge",
    metadata: {
      title: "Ascend - Concierge Ticketing & Global Expeditions",
      description:
        "Ascend - an ultra-premium ecosystem granting unfettered access to global events and bespoke travel for high-net-worth individuals and corporate institutions.",
    },
  },
];

export function getVentureBySlug(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
