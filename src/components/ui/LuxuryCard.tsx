import type { ReactNode } from "react";

interface LuxuryCardProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export default function LuxuryCard({
  children,
  className = "",
  light = false,
}: LuxuryCardProps) {
  return (
    <div className={`${light ? "card-premium" : "luxury-card"} ${className}`}>
      {children}
    </div>
  );
}
