import type { Metadata } from "next";
import { Outfit, Inter, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Elegant high-contrast serif for display headlines (luxury flagship voice)
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
  metadataBase: new URL("https://acemenventures.com"),
  title: {
    default: "Acemen Ventures | A Private Multi-Sector Holding House",
    template: "%s | Acemen Ventures",
  },
  description:
    "Acemen Ventures is a private, UK-incorporated holding house architecting world-class enterprises across curated digital commerce, enterprise technology & AI, fine leather goods, and global concierge & mobility.",
  keywords: [
    "Acemen Ventures",
    "holding company",
    "private holding house",
    "UK ventures",
    "curated commerce",
    "enterprise architecture",
    "AI intelligence",
    "fine leather goods",
    "luxury leather",
    "global concierge",
    "mobility logistics",
  ],
  authors: [{ name: "Acemen Ventures" }],
  creator: "Acemen Ventures",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://acemenventures.com",
    siteName: "Acemen Ventures",
    title: "Acemen Ventures | A Private Multi-Sector Holding House",
    description:
      "Architecting the future of commerce, luxury, and technology — a private UK holding house scaling world-class enterprises.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Acemen Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acemen Ventures | A Private Multi-Sector Holding House",
    description:
      "Architecting the future of commerce, luxury, and technology — a private UK holding house scaling world-class enterprises.",
    images: ["/images/logo.png"],
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
