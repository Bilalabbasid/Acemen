"use client";

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import GradientOrb from "@/components/GradientOrb";

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Our Office",
    lines: [
      "551 Staines Road",
      "Hounslow, Middlesex",
      "London TW4 5DL",
      "United Kingdom",
    ],
    action: null,
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Us",
    lines: ["info@acemen.co.uk"],
    action: {
      label: "Send an email →",
      href: "mailto:info@acemen.co.uk",
    },
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Call Us",
    lines: ["+44 7587 386522"],
    action: {
      label: "Call now →",
      href: "tel:+447587386522",
    },
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Business Hours",
    lines: ["Monday – Friday: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 2:00 PM", "Sunday: Closed"],
    action: null,
  },
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/company/acemenventures" },
  { icon: <Twitter className="w-5 h-5" />, label: "Twitter / X", href: "https://twitter.com/acemenventures" },
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com/acemenventures" },
  { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://facebook.com/acemenventures" },
];

export default function ContactPageClient() {
  return (
    <>
      {/* Page Header */}
      <section className="relative gradient-hero pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <GradientOrb color="gold" size="lg" className="-top-32 -right-32 opacity-50" />
        <GradientOrb color="navy" size="md" className="-bottom-20 -left-20" />

        <div className="container-page text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] mb-6">
              <span className="text-gold-400 font-medium text-sm tracking-wide">Private Intake</span>
            </div>
            <h1 className="display-heading text-[2.6rem] sm:text-6xl lg:text-7xl text-white mb-6 text-balance leading-[1.05]">
              Initiate an Alliance
            </h1>
            <p className="text-lg sm:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
              Whether you seek to acquire our enterprise services, explore private
              portfolio placements, or request allocation for our luxury goods, our
              office is ready to facilitate your inquiry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28 gradient-section-light relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-light opacity-30" aria-hidden="true" />
        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <h2 className="display-heading text-3xl sm:text-4xl text-navy-800 mb-3">
                  The Private Office
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed text-[15px]">
                  Submit your inquiry through the secure form, or reach our London office
                  directly through any of the channels below.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="card-premium p-5 flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/20 flex items-center justify-center shrink-0 text-gold-600">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800 mb-1 text-sm">{item.title}</h3>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-gray-500 text-sm leading-relaxed">
                            {line}
                          </p>
                        ))}
                        {item.action && (
                          <a
                            href={item.action.href}
                            className="inline-block mt-2 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
                          >
                            {item.action.label}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-8 pt-6 border-t border-gray-200/60">
                  <h3 className="font-semibold text-navy-800 mb-4 text-sm">Follow Us</h3>
                  <div className="flex gap-2.5">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white border border-gray-100 hover:bg-gold-500/10 hover:border-gold-500/20 flex items-center justify-center text-gray-400 hover:text-gold-600 transition-all duration-300 shadow-sm"
                        aria-label={s.label}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location visual */}
      <section className="bg-white">
        <div className="container-page pb-20 sm:pb-28">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-premium relative" style={{ height: "400px" }}>
              <img
                src="/images/contact-london.png"
                alt="London skyline - Acemen Ventures headquarters location"
                className="w-full h-full object-cover"
              />
              {/* Overlay with location pin */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 glass-dark rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">London, United Kingdom</p>
                    <p className="text-gray-300 text-xs">551 Staines Road, Hounslow, Middlesex</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
