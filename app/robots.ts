import type { MetadataRoute } from "next";
import { SITE, PREVIEW } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  if (PREVIEW) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${SITE}/sitemap.xml` };
}
