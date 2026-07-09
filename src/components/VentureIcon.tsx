import {
  Award,
  BadgeCheck,
  BarChart3,
  Brain,
  Briefcase,
  Code2,
  Cpu,
  Crown,
  Footprints,
  Gem,
  Globe,
  Headphones,
  Hotel,
  Layers,
  MapPin,
  Plane,
  Scissors,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Ticket,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { VentureIcon as VentureIconName } from "@/data/ventures";

const icons: Record<VentureIconName, LucideIcon> = {
  award: Award,
  badgeCheck: BadgeCheck,
  barChart: BarChart3,
  brain: Brain,
  briefcase: Briefcase,
  code: Code2,
  cpu: Cpu,
  crown: Crown,
  footprints: Footprints,
  gem: Gem,
  globe: Globe,
  headphones: Headphones,
  hotel: Hotel,
  layers: Layers,
  mapPin: MapPin,
  plane: Plane,
  scissors: Scissors,
  shield: Shield,
  shieldCheck: ShieldCheck,
  shoppingBag: ShoppingBag,
  smartphone: Smartphone,
  sparkles: Sparkles,
  ticket: Ticket,
  truck: Truck,
  zap: Zap,
};

interface VentureIconProps {
  name: VentureIconName;
  className?: string;
}

export default function VentureIcon({ name, className = "w-6 h-6" }: VentureIconProps) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
