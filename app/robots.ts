import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://www.bauitec.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/impressum/", "/datenschutz/"] }],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
