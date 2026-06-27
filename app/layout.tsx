import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat, JetBrains_Mono, Noto_Serif_Devanagari } from "next/font/google";
import { siteConfig } from "@/config/site";

// Playfair Display — editorial luxury headings
const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Montserrat — clean body + UI text
const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Playfair italic also drives the accent variable (italic display moments)
const accent = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const deva = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Modern Indian Fine Dining`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${accent.variable} ${mono.variable} ${deva.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg-base text-fg-cream font-sans antialiased">{children}</body>
    </html>
  );
}
