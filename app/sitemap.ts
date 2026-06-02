import type { MetadataRoute } from "next";
import { services } from "@/lib/content";

export const dynamic = "force-static";

const BASE = "https://www.bauitec.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/kontakt/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/impressum/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...services.map((s) => ({
      url: `${BASE}/leistungen/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
