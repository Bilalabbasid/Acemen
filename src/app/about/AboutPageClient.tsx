"use client";

import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Sparkles,
  Shield,
  TrendingUp,
  Globe,
  Users,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import StatsStrip from "@/components/StatsStrip";
import GradientOrb from "@/components/GradientOrb";

const values = [
  {
    icon: <Sparkles className="w-6 h-6 text-gold-400" />,
    title: "Quality First",
    desc: "We never compromise on excellence. Every product, service, and interaction reflects the highest standards of quality.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    title: "Innovation & Tech",
    desc: "We leverage cutting-edge technology and creative thinking to stay ahead of the curve and deliver unmatched value.",
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-400" />,
    title: "Customer Obsession",
    desc: "Our customers are at the heart of everything we build. We listen, learn, and deliver beyond expectations.",
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    title: "Integrity & Trust",
    desc: "We operate with transparency, honesty, and reliability — earning trust through every action we take.",
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-400" />,
    title: "Long-Term Growth",
    desc: "We prioritise sustainable, long-term growth over short-term wins, building businesses that last.",
  },
  {
    icon: <Award className="w-6 h-6 text-purple-400" />,
    title: "Excellence in Execution",
    desc: "From strategy to delivery, we maintain the highest standards of professionalism and operational rigour.",
  },
];

const goals = [
  "Grow each venture into a market leader in its category",
  "Expand operations across UK, Europe, and global markets",
  "Leverage technology and automation across all ventures",
  "Build lasting partnerships and customer relationships",
  "Foster a culture of innovation, diversity, and excellence",
  "Deliver consistent value to stakeholders and communities",
];

const whyUs = [
  {
    icon: <Award className="w-6 h-6 text-gold-400" />,
    title: "Proven Expertise",
    desc: "Our leadership team brings decades of combined experience across commerce, technology, retail, and travel sectors.",
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-400" />,
    title: "Collaborative Approach",
    desc: "We work closely with partners, investors, and teams to align goals and drive collective success.",
  },
  {
    icon: <Clock className="w-6 h-6 text-emerald-400" />,
    title: "Agile & Adaptable",
    desc: "Our lean structure allows us to move fast, adapt to market changes, and seize opportunities quickly.",
  },
];

const team = [
  { name: "Alexander Wright", title: "Chief Executive Officer", initial: "AW" },
  { name: "Sophia Chen", title: "Chief Operating Officer", initial: "SC" },
  { name: "Marcus Reynolds", title: "Chief Technology Officer", initial: "MR" },
  { name: "Isabella Foster", title: "Chief Financial Officer", initial: "IF" },
];

export default function AboutPageClient() {
  return (
    <div className="bg-navy-950 text-white min-h-screen">
      {/* Page Header */}
      <section className="relative gradient-hero pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <GradientOrb color="gold" size="xl" className="-top-40 -right-40 opacity-50" />
        <GradientOrb color="navy" size="lg" className="-bottom-32 -left-32 opacity-70" />

        <div className="container-page text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <span className="text-gold-400 font-bold text-xs tracking-wider uppercase">Our Heritage</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight leading-none mb-6">
              Who We Are
            </h1>
            <p className="text-lg sm:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Acemen Ventures is a UK-registered holding company that builds, operates,
              and scales exceptional businesses across commerce, technology, retail, and travel.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-navy-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" aria-hidden="true" />
        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <span className="section-label">Our Story</span>
                <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight mb-8">
                  Built for <span className="gradient-gold-text">Growth</span>
                </h2>
                <div className="space-y-6 text-gray-300/80 leading-relaxed font-medium text-[15px] sm:text-base">
                  <p>
                    Founded in the United Kingdom, Acemen Ventures was created with a
                    clear purpose: to build and operate businesses that make a real
                    difference. Our model is simple — we identify opportunities across
                    diverse sectors, invest in exceptional teams, and provide the
                    structure and support needed to scale.
                  </p>
                  <p>
                    From e-commerce to software development, footwear to travel
                    services — each venture under our umbrella operates with autonomy
                    while benefiting from shared resources, strategic guidance, and a
                    unified vision.
                  </p>
                  <p>
                    We believe that great businesses are built on trust, innovation,
                    and an unwavering commitment to quality. That philosophy guides
                    every decision we make.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-premium-xl border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80"
                    alt="Corporate Heritage"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border border-gold-500/10 -z-10" aria-hidden="true" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-navy-950 border-t border-white/5">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0} direction="scale">
              <motion.div
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-8 border border-white/10 hover:border-gold-500/30 transition-all duration-300 h-full group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold-500/15 group-hover:border-gold-500/20 border border-white/5 transition-all duration-500">
                  <Target className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300/80 leading-relaxed text-sm font-medium">
                  To build and operate exceptional businesses across multiple sectors —
                  delivering quality, innovation, and value to customers worldwide under
                  one trusted group.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="scale">
              <motion.div
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 h-full group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/20 border border-white/5 transition-all duration-500">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300/80 leading-relaxed text-sm font-medium">
                  To become a globally recognised ventures group, scaling diverse
                  businesses that lead in their markets and set new standards for
                  quality and innovation.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="scale">
              <motion.div
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 h-full group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/20 border border-white/5 transition-all duration-500">
                  <Globe className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Goals</h3>
                <ul className="text-gray-300/80 space-y-3 text-sm font-medium">
                  {goals.slice(0, 4).map((g) => (
                    <li key={g} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Core Values */}
      <section className="py-24 bg-navy-950 border-t border-white/5 relative overflow-hidden">
        <GradientOrb color="gold" size="lg" className="-bottom-32 -right-32 opacity-15" />
        <div className="container-page relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="section-label">What We Stand For</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight leading-tight mb-4">
                Core Values
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
                The principles that guide every decision and shape our culture across
                all ventures.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass rounded-3xl p-8 border border-white/10 hover:border-gold-500/30 transition-all duration-300 h-full group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500 border border-white/5">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-gray-300/70 text-sm leading-relaxed font-medium">{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-navy-950 border-t border-white/5">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="section-label">The Difference</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight leading-tight mb-4">
                Why Choose Acemen
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
                What sets us apart as a premium holdings and ventures group.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-6 text-gold-400 border border-white/5 group-hover:border-gold-500/30 group-hover:bg-gold-500/10 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300/70 leading-relaxed text-sm font-medium">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-navy-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" aria-hidden="true" />
        <div className="container-page relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="section-label">Our People</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight leading-tight mb-4">
                Leadership Team
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
                The experienced leaders driving Acemen Ventures forward.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, n) => (
              <ScrollReveal key={member.name} delay={n * 80}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass rounded-3xl p-6 text-center border border-white/5 hover:border-gold-500/20 transition-all duration-300 group"
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-5 bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center overflow-hidden shadow-lg shadow-gold-500/10 group-hover:scale-105 transition-all duration-500">
                    <span className="text-2xl font-heading font-black text-navy-950">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-gold-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{member.title}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24 pt-0">
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <GradientOrb color="gold" size="lg" className="-top-20 -right-20 opacity-40" />

          <div className="relative z-10 py-16 sm:py-24 text-center max-w-2xl mx-auto px-6">
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white mb-5">
              Build the Future With Us
            </h2>
            <p className="text-gray-300/80 mb-8 leading-relaxed font-medium">
              Whether you&apos;re looking to collaborate, invest, or learn more about our
              ventures — we&apos;d love to talk.
            </p>
            <Link href="/contact" className="btn-gold group !py-4 !px-8 text-xs tracking-wider uppercase font-black">
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
