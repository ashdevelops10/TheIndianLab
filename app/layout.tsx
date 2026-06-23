import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono, Noto_Serif_Devanagari } from "next/font/google";
import { siteConfig } from "@/config/site";

const display = localFont({
  src: [
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Light.otf", weight: "300" },
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Regular.otf", weight: "400" },
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Medium.otf", weight: "500" },
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Bold.otf", weight: "700" },
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Dark.otf", weight: "900" },
  ],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const accent = localFont({
  src: [
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Light.otf", weight: "300" },
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Regular.otf", weight: "400" },
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Medium.otf", weight: "500" },
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Bold.otf", weight: "700" },
    { path: "../Fonts/nyght_serif/fonts/OTF/NyghtSerif-Dark.otf", weight: "900" },
  ],
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
