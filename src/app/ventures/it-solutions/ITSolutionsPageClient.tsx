"use client";

import {
  Code2,
  Brain,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Settings,
  BarChart3,
} from "lucide-react";
import VentureDetailLayout from "@/components/VentureDetailLayout";

const categories = [
  { name: "Custom Software", desc: "Bespoke enterprise applications tailored to your business processes", icon: <Code2 className="w-6 h-6" /> },
  { name: "AI & Automation", desc: "Machine learning solutions, chatbots, and intelligent process automation", icon: <Brain className="w-6 h-6" /> },
  { name: "Web & Mobile Apps", desc: "Responsive web platforms and native mobile applications", icon: <Smartphone className="w-6 h-6" /> },
  { name: "IT Consulting", desc: "Strategic technology advisory, digital transformation, and architecture", icon: <Settings className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Cutting-Edge Stack",
    desc: "We use the latest technologies and frameworks to build future-proof solutions.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    desc: "Every solution is built with security-first principles and compliance standards.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data-Driven Results",
    desc: "Analytics and insights baked into every solution to drive measurable business outcomes.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Scalable Architecture",
    desc: "Cloud-native solutions designed to scale seamlessly with your business growth.",
  },
];

export default function ITSolutionsPageClient() {
  return (
    <VentureDetailLayout
      ventureNumber="02"
      title="IT Solutions"
      subtitle="Technology That Drives Results"
      heroDescription="Full-stack software development, web and mobile app creation, AI & automation solutions, and strategic IT consulting — empowering businesses with technology that delivers real impact."
      accentColor="#06b6d4"
      heroIcon={<Code2 className="w-6 h-6" />}
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
      categories={categories}
      categoriesTitle="Our Services"
      categoriesSubtitle="Comprehensive technology solutions for businesses of all sizes."
      categoriesLabel="What We Do"
      features={features}
      featuresTitle="Our Approach"
      featuresLabel="Why Choose Our IT Team"
      testimonialQuote="Working with the Acemen IT team transformed our digital infrastructure. Professional, innovative, and always ahead of the curve. A truly exceptional technology partner."
      testimonialAuthor="David R., CTO at GlobalTrade Ltd"
      ctaTitle="Let's Build Together"
      ctaDescription="Ready to transform your business with cutting-edge technology? Our team of experts is here to help."
      ctaPrimaryLabel="Start a Project"
    />
  );
}
