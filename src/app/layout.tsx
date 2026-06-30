import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
    default: "Acemen Ventures | UK Holding Company — Building Exceptional Businesses",
    template: "%s | Acemen Ventures",
  },
  description:
    "Acemen Ventures is a UK-registered holding company building and scaling businesses across e-commerce, IT solutions, footwear, and ticketing & travel.",
  keywords: [
    "Acemen Ventures",
    "holding company",
    "UK ventures",
    "e-commerce",
    "IT solutions",
    "software development",
    "footwear brand",
    "ticketing",
    "travel services",
  ],
  authors: [{ name: "Acemen Ventures" }],
  creator: "Acemen Ventures",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://acemenventures.com",
    siteName: "Acemen Ventures",
    title: "Acemen Ventures | Building Exceptional Businesses",
    description:
      "A UK holding company operating across e-commerce, IT solutions, footwear, and ticketing & travel.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Acemen Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acemen Ventures | Building Exceptional Businesses",
    description:
      "A UK holding company operating across e-commerce, IT solutions, footwear, and ticketing & travel.",
    images: ["/images/og-image.jpg"],
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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
