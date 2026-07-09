import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/data/contact";
import { legalLinks, quickLinks, ventureLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="container-page py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 rounded-full">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                width={44}
                height={56}
                className="h-11 w-auto object-contain"
              />
              <span className="font-heading text-lg font-black uppercase tracking-[0.2em] text-white">
                Acemen <span className="text-gold-400">Ventures</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Navigation</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Ventures</h2>
            <ul className="mt-5 space-y-3">
              {ventureLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                <span>{contactDetails.officeLines.join(", ")}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-gold-300">
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                <a href={contactDetails.phoneHref} className="hover:text-gold-300">
                  {contactDetails.phone}
                </a>
              </li>
            </ul>
            {socialLinks.length > 0 && (
              <div className="mt-6 flex gap-2">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.name} on ${label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-gold-300/40 hover:text-gold-300"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
