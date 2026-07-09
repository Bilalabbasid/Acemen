import { ventures } from "./ventures";

export interface NavigationLink {
  href: string;
  label: string;
  children?: Array<{
    href: string;
    label: string;
  }>;
}

export const quickLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Institution" },
  { href: "/ventures", label: "The Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const ventureLinks = ventures.map((venture) => ({
  href: venture.href,
  label: venture.tagline,
}));

export const navLinks: NavigationLink[] = [
  quickLinks[0],
  quickLinks[1],
  {
    ...quickLinks[2],
    children: [
      { href: "/ventures/e-commerce", label: "Curated Commerce" },
      { href: "/ventures/it-solutions", label: "Enterprise & AI" },
      { href: "/ventures/shoes", label: "Leather & Footwear" },
      { href: "/ventures/ticketing-travel", label: "Concierge & Mobility" },
    ],
  },
  quickLinks[3],
];
