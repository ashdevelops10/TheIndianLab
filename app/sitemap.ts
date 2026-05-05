import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/menu", "/about", "/reservations", "/gallery", "/events", "/blog", "/contact"];
  const urls: MetadataRoute.Sitemap = [];
  for (const l of locales) {
    for (const p of paths) {
      urls.push({
        url: `${siteConfig.url}/${l}${p}`,
        lastModified: new Date(),
        changeFrequency: p === "" ? "weekly" : "monthly",
        priority: p === "" ? 1 : 0.7,
      });
    }
  }
  return urls;
}
