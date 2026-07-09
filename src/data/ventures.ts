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

export interface VentureDetail {
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
  imageAlt: string;
  features: string[];
  categoriesLabel: string;
  categoriesTitle: string;
  categoriesSubtitle: string;
  categories: Array<{
    name: string;
    desc: string;
    icon: VentureIcon;
  }>;
  differentiatorsLabel: string;
  differentiatorsTitle: string;
  differentiators: Array<{
    title: string;
    desc: string;
    icon: VentureIcon;
  }>;
  pathwayTitle: string;
  pathway: string[];
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
      "A commerce venture focused on curated digital retail experiences and considered fulfilment.",
    description:
      "Acemen Emporium is positioned around curated digital commerce, bringing together product selection, storefront experience, fulfilment, and client care.",
    href: "/ventures/e-commerce",
    accentColor: "#b08d57",
    icon: "shoppingBag",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    imageAlt: "Premium retail packaging and digital commerce workspace",
    features: [
      "Curated marketplace experience",
      "House label storefronts",
      "Fulfilment-led operations",
      "Client service pathway",
    ],
    categoriesLabel: "What it does",
    categoriesTitle: "A Considered Commerce House",
    categoriesSubtitle:
      "The venture is shaped around selection, presentation, fulfilment, and client support.",
    categories: [
      { name: "Curated Marketplace", desc: "An edited retail experience designed around product quality and clarity.", icon: "layers" },
      { name: "House Storefronts", desc: "Direct-to-consumer storefronts for owned or managed product lines.", icon: "badgeCheck" },
      { name: "Fulfilment Operations", desc: "Operational focus on packaging, delivery coordination, and post-purchase care.", icon: "truck" },
      { name: "Client Support", desc: "A clear enquiry pathway for product, order, and service conversations.", icon: "headphones" },
    ],
    differentiatorsLabel: "Why it matters",
    differentiatorsTitle: "Commerce With a Higher Standard",
    differentiators: [
      { icon: "sparkles", title: "Curated by intent", desc: "The experience prioritizes clarity, selection, and product presentation over volume." },
      { icon: "shoppingBag", title: "Designed for conversion", desc: "Storefronts can be shaped around accessible browsing, checkout, and service touchpoints." },
      { icon: "shieldCheck", title: "Trust-led retail", desc: "The model benefits from clear policies, transparent communication, and consistent fulfilment." },
      { icon: "globe", title: "Built to adapt", desc: "The digital format can support new collections, categories, and markets over time." },
    ],
    pathwayTitle: "Customer Pathway",
    pathway: ["Discover", "Evaluate", "Enquire or purchase", "Fulfilment", "Aftercare"],
    ctaTitle: "Enquire About Acemen Emporium",
    ctaDescription:
      "Use the enquiry form to discuss commerce, product, or partnership opportunities connected to this venture.",
    ctaPrimaryLabel: "Start a Private Inquiry",
    metadata: {
      title: "Acemen Emporium - Curated Digital Commerce",
      description:
        "Acemen Emporium is a curated digital commerce venture focused on refined retail experiences, fulfilment, and client care.",
    },
  },
  {
    slug: "it-solutions",
    ventureNumber: "02",
    title: "Acemen Digital",
    tagline: "Enterprise Architecture & AI",
    summary:
      "A digital systems venture focused on software architecture, automation, and technology advisory.",
    description:
      "Acemen Digital is positioned around enterprise-grade digital systems, software delivery, automation, and technology strategy.",
    href: "/ventures/it-solutions",
    accentColor: "#7d8ca3",
    icon: "code",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    imageAlt: "Server hardware and enterprise technology infrastructure",
    features: [
      "Software architecture",
      "AI and automation workflows",
      "Mobile and web systems",
      "Technology consulting",
    ],
    categoriesLabel: "What it does",
    categoriesTitle: "Digital Systems and Advisory",
    categoriesSubtitle:
      "The venture is framed around practical technology delivery and operational intelligence.",
    categories: [
      { name: "Software Engineering", desc: "Custom software and platform work shaped around business requirements.", icon: "code" },
      { name: "AI & Automation", desc: "Workflow automation and intelligence systems where they can create operational value.", icon: "brain" },
      { name: "Application Experiences", desc: "Web and mobile interfaces with an emphasis on usability and maintainability.", icon: "smartphone" },
      { name: "Technology Advisory", desc: "Guidance on architecture, delivery planning, and implementation priorities.", icon: "cpu" },
    ],
    differentiatorsLabel: "Why it matters",
    differentiatorsTitle: "Technology With Operational Clarity",
    differentiators: [
      { icon: "zap", title: "Practical delivery", desc: "The emphasis is on systems that improve real workflows rather than decorative technology." },
      { icon: "barChart", title: "Data-aware decisions", desc: "Digital products can be designed to make operational information easier to act on." },
      { icon: "shield", title: "Security posture", desc: "Security and access control should be considered from the architecture stage." },
      { icon: "layers", title: "Scalable foundations", desc: "A disciplined architecture makes future product evolution easier to manage." },
    ],
    pathwayTitle: "Project Pathway",
    pathway: ["Brief", "Architecture", "Prototype", "Build", "Support"],
    ctaTitle: "Discuss a Digital Brief",
    ctaDescription:
      "Use the enquiry form to start a conversation about software, automation, or technology advisory needs.",
    ctaPrimaryLabel: "Enquire About This Venture",
    metadata: {
      title: "Acemen Digital - Enterprise Architecture & AI",
      description:
        "Acemen Digital is a technology venture focused on software architecture, automation, and digital systems.",
    },
  },
  {
    slug: "shoes",
    ventureNumber: "03",
    title: "Acre & Hide",
    tagline: "Sartorial Leather & Footwear",
    summary:
      "A leather goods and footwear venture focused on craft, materials, and considered product experience.",
    description:
      "Acre & Hide is positioned around fine leather goods, footwear, and accessories with a focus on materials, craft, and customer experience.",
    href: "/ventures/shoes",
    accentColor: "#9c6b45",
    icon: "footprints",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80",
    imageAlt: "Fine leather bag and accessories arranged on a work surface",
    features: [
      "Footwear concepts",
      "Bags and leather goods",
      "Small accessories",
      "Material-led collections",
    ],
    categoriesLabel: "What it does",
    categoriesTitle: "A Leather House in Development",
    categoriesSubtitle:
      "The venture is framed around leather categories where material, form, and finish matter.",
    categories: [
      { name: "Footwear", desc: "Footwear concepts shaped around presence, comfort, and material quality.", icon: "footprints" },
      { name: "Bags & Holdalls", desc: "Carry goods where structure, durability, and finish are central.", icon: "briefcase" },
      { name: "Outerwear", desc: "Leather outerwear concepts with a focus on silhouette and longevity.", icon: "crown" },
      { name: "Small Goods", desc: "Wallets, belts, and accessories that support a coherent leather collection.", icon: "gem" },
    ],
    differentiatorsLabel: "Why it matters",
    differentiatorsTitle: "Craft as a Brand Standard",
    differentiators: [
      { icon: "scissors", title: "Material discipline", desc: "The brand benefits from careful material selection and transparent product standards." },
      { icon: "award", title: "Refined finish", desc: "Details such as stitching, edge treatment, and proportions define perceived quality." },
      { icon: "layers", title: "Collection clarity", desc: "A focused range can feel more premium than a broad but unfocused catalogue." },
      { icon: "shieldCheck", title: "Service expectation", desc: "A luxury product experience should include clear support and aftercare expectations." },
    ],
    pathwayTitle: "Product Pathway",
    pathway: ["Concept", "Material selection", "Sampling", "Collection", "Client care"],
    ctaTitle: "Enquire About Acre & Hide",
    ctaDescription:
      "Use the enquiry form to discuss leather goods, footwear, or collection-related opportunities.",
    ctaPrimaryLabel: "Start a Private Inquiry",
    metadata: {
      title: "Acre & Hide - Sartorial Leather & Footwear",
      description:
        "Acre & Hide is a leather goods and footwear venture focused on materials, craft, and considered product experience.",
    },
  },
  {
    slug: "ticketing-travel",
    ventureNumber: "04",
    title: "Ascend",
    tagline: "Concierge & Mobility Logistics",
    summary:
      "A concierge-led access and mobility venture focused on travel, events, and carefully managed enquiries.",
    description:
      "Ascend is positioned around event access, travel coordination, and concierge-led mobility conversations for private and business enquiries.",
    href: "/ventures/ticketing-travel",
    accentColor: "#6f8778",
    icon: "ticket",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    imageAlt: "Airport terminal and travel movement",
    features: [
      "Event access enquiries",
      "Travel coordination",
      "Accommodation support",
      "Concierge communication",
    ],
    categoriesLabel: "What it does",
    categoriesTitle: "Access and Travel Coordination",
    categoriesSubtitle:
      "The venture is framed around carefully managed enquiries for events, travel, and mobility support.",
    categories: [
      { name: "Event Access", desc: "Enquiries around event attendance, hospitality, and managed access.", icon: "ticket" },
      { name: "Travel Coordination", desc: "Support conversations around flights, mobility, and trip planning.", icon: "plane" },
      { name: "Accommodation", desc: "Accommodation-related support where requirements call for a considered approach.", icon: "hotel" },
      { name: "Bespoke Itineraries", desc: "Tailored planning conversations for private or business travel needs.", icon: "mapPin" },
    ],
    differentiatorsLabel: "Why it matters",
    differentiatorsTitle: "Coordination With Discretion",
    differentiators: [
      { icon: "crown", title: "Private access mindset", desc: "The experience should feel controlled, clear, and respectful of client context." },
      { icon: "sparkles", title: "Tailored handling", desc: "Concierge work benefits from understanding the request before suggesting the path." },
      { icon: "shield", title: "Privacy-aware process", desc: "Sensitive travel and event conversations require careful communication." },
      { icon: "gem", title: "Detail orientation", desc: "The value sits in timing, coordination, and reliable follow-through." },
    ],
    pathwayTitle: "Enquiry Pathway",
    pathway: ["Request", "Clarify", "Coordinate", "Confirm", "Support"],
    ctaTitle: "Enquire About Ascend",
    ctaDescription:
      "Use the enquiry form to discuss event access, travel coordination, or concierge-related requirements.",
    ctaPrimaryLabel: "Start a Private Inquiry",
    metadata: {
      title: "Ascend - Concierge & Mobility Logistics",
      description:
        "Ascend is a concierge and mobility venture focused on event access, travel coordination, and private enquiries.",
    },
  },
];

export function getVentureBySlug(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
