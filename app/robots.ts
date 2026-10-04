import type { MetadataRoute } from "next";
import { SITE, PREVIEW } from "@/lib/site";
// Search and AI-answer crawlers are named explicitly; everything else falls under "*".
const searchBots = ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "YandexBot", "DuckDuckBot", "Applebot"];
export default function robots(): MetadataRoute.Robots {
  if (PREVIEW) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [...searchBots.map((b) => ({ userAgent: b, allow: "/" })), { userAgent: "*", allow: "/" }], sitemap: `${SITE}/sitemap.xml` };
}
