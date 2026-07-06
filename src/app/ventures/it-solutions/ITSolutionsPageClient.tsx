"use client";

import {
  Code2,
  Brain,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Cpu,
  BarChart3,
} from "lucide-react";
import VentureDetailLayout from "@/components/VentureDetailLayout";

const categories = [
  { name: "Bespoke Software Engineering", desc: "Enterprise-grade, tailormade applications architected to your organisation's unique operational DNA", icon: <Code2 className="w-6 h-6" /> },
  { name: "AI & Hyper-Automation", desc: "Proprietary machine intelligence, predictive analytics, and autonomous workflow systems", icon: <Brain className="w-6 h-6" /> },
  { name: "Mobile Masterpieces", desc: "Native and cross-platform applications delivering flawless UX at enterprise scale", icon: <Smartphone className="w-6 h-6" /> },
  { name: "Visionary Technology Consulting", desc: "C-suite advisory on digital transformation, architecture strategy, and emerging technology integration", icon: <Cpu className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Elite Full-Stack Engineering",
    desc: "Deep expertise across the complete technology stack — from bare-metal architecture to pixel-perfect front-end execution.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Next-Gen AI & Automation",
    desc: "We architect proprietary AI systems and hyper-automation pipelines that become your definitive competitive moat.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Fortress-Grade Security",
    desc: "Zero-trust architectures, end-to-end encryption, and compliance frameworks protecting your most critical digital assets.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data-Driven Dominance",
    desc: "Embedded analytics and real-time intelligence transforming raw data into executive-level strategic advantage.",
  },
];

export default function ITSolutionsPageClient() {
  return (
    <VentureDetailLayout
      ventureNumber="02"
      title="Acemen Digital"
      subtitle="Enterprise Architecture & AI Intelligence"
      heroDescription="We engineer bespoke digital infrastructure and enterprise-grade software ecosystems for industry leaders. From proprietary artificial intelligence to high-scalability application development, we transform complex technological challenges into fluid competitive advantages."
      accentColor="#7d8ca3"
      heroIcon={<Code2 className="w-6 h-6" />}
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
      categories={categories}
      categoriesTitle="Our Engineering Disciplines"
      categoriesSubtitle="Bespoke digital ecosystems engineered for industry leaders and market definers."
      categoriesLabel="Our Expertise"
      features={features}
      featuresTitle="The Vanguard Standard"
      featuresLabel="The Vanguard Distinction"
      testimonialQuote="Engaging Acemen's Vanguard team was a watershed moment for our enterprise. They didn't just build software — they architected our entire digital future. The AI pipeline alone has delivered a 340% efficiency gain."
      testimonialAuthor="Henrik V., Chief Digital Officer, Meridian Global"
      ctaTitle="Architect Your Digital Future"
      ctaDescription="Ready to commission bespoke digital infrastructure that defines your industry? Our elite engineering cohort awaits your briefing."
      ctaPrimaryLabel="Commission a Project"
    />
  );
}
