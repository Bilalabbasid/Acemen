import { Facebook, Instagram, Linkedin, Twitter, type LucideIcon } from "lucide-react";

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { href: "https://linkedin.com/company/acemenventures", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/acemenventures", label: "X", icon: Twitter },
  { href: "https://instagram.com/acemenventures", label: "Instagram", icon: Instagram },
  { href: "https://facebook.com/acemenventures", label: "Facebook", icon: Facebook },
].filter((link) => link.href.length > 0);
