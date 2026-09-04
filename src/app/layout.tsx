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
    default: "ACEMEN | British Luxury Footwear & Sartorial Leather Atelier • London",
    template: "%s | ACEMEN",
  },
  description:
    "ACEMEN is a British luxury leather house and master footwear atelier. Handcrafting Goodyear-welted shoes, outerwear, and fine leather goods available by Pre-Order, private waitlist allocation, and bespoke commission.",
  keywords: [
    "ACEMEN",
    "Luxury Leather Footwear",
    "Goodyear Welted Shoes",
    "Pre-Order Luxury Shoes",
    "London Footwear Atelier",
    "Bespoke Leather Goods",
    "Handcrafted Leather Shoes",
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
    title: "ACEMEN | British Luxury Footwear & Sartorial Leather Atelier • London",
    description:
      "Crafted by hand. Sculpted for distinction. Discover Goodyear-welted footwear, tailored leather outerwear, and fine leather goods available for pre-order and bespoke commissions.",
    images: [
      {
        url: "/images/luxury/hero-campaign.webp",
        width: 1200,
        height: 630,
        alt: "ACEMEN British Luxury Footwear & Leather Atelier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACEMEN | British Luxury Footwear & Sartorial Leather Atelier • London",
    description:
      "Crafted by hand. Sculpted for distinction. Discover Goodyear-welted footwear, tailored leather outerwear, and fine leather goods available for pre-order and bespoke commissions.",
    images: ["/images/luxury/hero-campaign.webp"],
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
