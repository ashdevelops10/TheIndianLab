import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces, Inter, JetBrains_Mono, Noto_Serif_Devanagari } from "next/font/google";
import { siteConfig } from "@/config/site";

const display = localFont({
  src: [
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-Light-BF674fe9fb49a83.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-Regular-BF674fe9fb56512.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-Italic-BF674fe9fb42e67.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-Medium-BF674fe9fb4d257.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-MedIta-BF674fe9fb4a852.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-SemiBold-BF674fe9fb5ce44.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-SemBdIta-BF674fe9fb588a0.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-ExtraBold-BF674fe9fb3a99f.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-ExtBdIta-BF674fe9fb43b22.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: [
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-Light-BF674fe9fb49a83.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-Regular-BF674fe9fb56512.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-Medium-BF674fe9fb4d257.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Fonts/heuvel-grotesk-font-family/HeuvelGroteskDEMO-SemiBold-BF674fe9fb5ce44.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const accent = localFont({
  src: "../Fonts/viola-essence-font/viola-essense.otf",
  variable: "--font-accent",
  display: "swap",
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
      <body className="bg-bg-base text-fg-cream antialiased">{children}</body>
    </html>
  );
}
