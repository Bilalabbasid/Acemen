import type { Metadata } from "next";
import { Outfit, Inter, Cormorant_Garamond } from "next/font/google";
import LuxuryHeader from "@/components/luxury/LuxuryHeader";
import LuxuryFooter from "@/components/luxury/LuxuryFooter";
import CartDrawer from "@/components/luxury/CartDrawer";
import WishlistDrawer from "@/components/luxury/WishlistDrawer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import "./globals.css";

// High-contrast luxury editorial serif font (Louis Vuitton style display)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acemen.co.uk"),
  title: {
    default: "ACEMEN | Luxury Leather Goods • London",
    template: "%s | ACEMEN",
  },
  description:
    "ACEMEN is a British luxury leather house crafting fine holdalls, briefcases, small leather goods, and travel luggage from premier French and Italian full-grain hides.",
  keywords: [
    "ACEMEN",
    "Luxury Leather Goods",
    "Full-Grain Leather Bags",
    "Handcrafted Leather Briefcase",
    "Leather Weekender Duffle",
    "London Leather Atelier",
    "Luxury Travel Luggage",
    "Sartorial Leather Wallets",
  ],
  authors: [{ name: "ACEMEN" }],
  creator: "ACEMEN",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://acemen.co.uk",
    siteName: "ACEMEN",
    title: "ACEMEN | World-Class Luxury Leather Goods • London",
    description:
      "Crafted to endure. Discover handcrafted luxury leather holdalls, briefcases, wallets, and travel trunks sculpted from premier full-grain hides.",
    images: [
      {
        url: "/images/luxury/.webp",
        width: 1200,
        height: 630,
        alt: "ACEMEN Luxury Leather Goods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACEMEN | World-Class Luxury Leather Goods • London",
    description:
      "Crafted to endure. Discover handcrafted luxury leather holdalls, briefcases, wallets, and travel trunks sculpted from premier full-grain hides.",
    images: ["/images/luxury/.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-noir-950 antialiased selection:bg-leather-cognac/20 selection:text-noir-950">
        <CartProvider>
          <WishlistProvider>
            <LuxuryHeader />
            <main id="main" className="flex-1 w-full">
              {children}
            </main>
            <LuxuryFooter />
            <CartDrawer />
            <WishlistDrawer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
