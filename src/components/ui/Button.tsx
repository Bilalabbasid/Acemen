import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "gold" | "outline" | "primary" | "dark";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  gold: "btn-gold",
  outline: "btn-outline",
  primary: "btn-primary",
  dark: "btn-dark",
};

export default function Button({
  href,
  children,
  variant = "gold",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link href={href} className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
