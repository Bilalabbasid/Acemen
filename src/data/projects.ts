import type { VentureIcon } from "./ventures";

export interface Project {
  slug: string;
  name: string;
  sector: string;
  tagline: string;
  summary: string;
  /** Short, scannable capability list surfaced on the card. */
  capabilities: string[];
  /** Named stack, rendered as pills. */
  stack: string[];
  /** Screenshot. Omit for engagements with no public visual — the card
   *  falls back to a designed brand panel rather than a stock photo. */
  image?: string;
  /** Public URL, where the engagement is live and publicly viewable. */
  href?: string;
  /** Label for the outbound link. */
  hrefLabel?: string;
  /** Badge shown in place of a link for unreleased or confidential work. */
  status?: string;
  /** Monogram used by the fallback panel when there is no image. */
  monogram?: string;
  icon: VentureIcon;
  accentColor: string;
}

/**
 * Selected engineering engagements delivered by the Acemen Digital team.
 * Client-facing work shipped under our CodesWave studio (codeswave.com),
 * alongside proprietary in-house platforms.
 */
export const projects: Project[] = [
  {
    slug: "gatetact-pam",
    name: "Gatetact PAM",
    sector: "Cybersecurity & Identity",
    tagline: "Privileged Access Management",
    summary:
      "Our proprietary privileged access platform — vaulting the credentials that unlock critical infrastructure, granting elevation only when it is justified, and recording every privileged session end to end. Built in-house for organisations that must prove exactly who touched what, and when.",
    capabilities: [
      "Encrypted credential vaulting & rotation",
      "Just-in-time privilege elevation",
      "Full session recording & keystroke audit",
      "Least-privilege policy engine",
      "SSO, MFA & directory integration",
      "Break-glass emergency access",
      "Secrets management for CI/CD",
      "SOC 2 & ISO 27001 audit reporting",
    ],
    stack: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "Kubernetes"],
    monogram: "G",
    status: "Proprietary Platform",
    icon: "shieldCheck",
    accentColor: "#7d8ca3",
  },
  {
    slug: "dial-eats",
    name: "Dial Eats",
    sector: "Food Delivery & Grocery Commerce",
    tagline: "Cross-Platform Delivery Infrastructure",
    summary:
      "A complete web and mobile commerce platform connecting customers with restaurants and grocers across Zimbabwe — built to support multi-city coverage, real-time order tracking, and the growth of a national food and retail ecosystem.",
    capabilities: [
      "Cross-platform web & mobile",
      "Integrated food and grocery delivery",
      "Multi-city coverage",
      "Real-time order tracking",
      "Secure payment processing",
      "Reviews, ratings & wishlists",
    ],
    stack: ["MongoDB", "Express.js", "Angular", "Node.js"],
    image: "/images/projects/dialeats.png",
    href: "https://dialeats.co.zw/",
    hrefLabel: "dialeats.co.zw",
    icon: "truck",
    accentColor: "#b08d57",
  },
  {
    slug: "little-let",
    name: "Little Let",
    sector: "Travel & Hospitality",
    tagline: "Global Stay Reservation Platform",
    summary:
      "A modern online booking platform helping travellers find hotels, homes, apartments, and lodges worldwide — with real-time availability, multi-currency pricing, and separate operational dashboards for hosts and administrators.",
    capabilities: [
      "Wide property inventory",
      "Real-time availability engine",
      "Multi-currency support",
      "Smart search & filtering",
      "Secure payments",
      "Dedicated host & admin dashboards",
    ],
    stack: ["MongoDB", "Express.js", "Angular", "Node.js"],
    image: "/images/projects/littlelet.png",
    href: "https://littlelet.com/",
    hrefLabel: "littlelet.com",
    icon: "hotel",
    accentColor: "#6f8778",
  },
  {
    slug: "lead-sniper",
    name: "Lead Sniper",
    sector: "Field Sales & Property Services",
    tagline: "Field Lead Intelligence & Automation",
    summary:
      "An intelligent mobile application for construction, renovation, and property maintenance teams — surfacing prospects in the field and automatically opening contact through personalised funnels and direct-mail sequences.",
    capabilities: [
      "Field-based lead discovery",
      "Property owner insights",
      "On-site video capture",
      "Automated GHL funnel creation",
      "Postcard marketing automation",
      "Opportunity & multi-company admin",
    ],
    stack: ["React Native", "Expo", "Node.js", "GoHighLevel"],
    image: "/images/projects/leadsniper.png",
    status: "Private Engagement",
    icon: "mapPin",
    accentColor: "#9c6b45",
  },
  {
    slug: "cash-canvas",
    name: "Cash Canvas",
    sector: "Financial Technology",
    tagline: "AI-Assisted Personal Finance",
    summary:
      "A full-stack finance management application unifying income, expenses, savings, debts, and investments in a single platform — with an embedded AI assistant delivering personalised insight and forward-looking recommendations.",
    capabilities: [
      "Unlimited accounts & multi-currency",
      "Budget and expense tracking",
      "Savings goals & debt tracking",
      "Investment portfolio tracking",
      "Subscription management",
      "AI insights via CashBot",
    ],
    stack: ["React", "Nest.js", "AI Insights"],
    image: "/images/projects/cashcanvas.png",
    href: "https://www.mycashcanvas.com",
    hrefLabel: "mycashcanvas.com",
    icon: "barChart",
    accentColor: "#6b7a8f",
  },
];

/** Disciplines evidenced across the engagements above. */
export const projectDisciplines: string[] = [
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "Security Engineering",
  "Workflow Automation",
  "Data Engineering",
  "AI Integration",
];
