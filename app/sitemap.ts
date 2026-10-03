import type { MetadataRoute } from "next";
import { SITE, LANGS, DOCTORS_SEGMENT } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { areas, areaUrl } from "@/lib/areas";
import { allArticles, blogUrl } from "@/lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...LANGS.map((l) => ({ url: `${SITE}/${l}`, lastModified: now })),
    ...LANGS.flatMap((l) => doctors.map((d) => ({ url: `${SITE}/${l}/${DOCTORS_SEGMENT[l]}/${d.slug}`, lastModified: now }))),
    ...LANGS.flatMap((l) => areas.map((a) => ({ url: SITE + areaUrl(l, a), lastModified: now }))),
    ...LANGS.map((l) => ({ url: `${SITE}/${l}/blog`, lastModified: now })),
    ...LANGS.flatMap((l) => allArticles().map((a) => ({ url: SITE + blogUrl(l, a), lastModified: new Date(a.updated) }))),
  ];
}
