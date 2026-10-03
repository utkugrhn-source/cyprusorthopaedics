import type { MetadataRoute } from "next";
import { SITE, LANGS, DOCTORS_SEGMENT, type Lang } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { areas, areaUrl, AREAS_UPDATED } from "@/lib/areas";
import { allArticles, blogUrl } from "@/lib/blog";
import { PAGES_UPDATED } from "@/lib/seo";

/** One entry per language version, each listing all of its language alternates. */
function entries(path: (l: Lang) => string, updated: string, priority: number): MetadataRoute.Sitemap {
  const languages = { ...Object.fromEntries(LANGS.map((l) => [l, SITE + path(l)])), "x-default": SITE + path("tr") };
  return LANGS.map((l) => ({ url: SITE + path(l), lastModified: new Date(updated), priority, alternates: { languages } }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entries((l) => `/${l}`, PAGES_UPDATED, 1),
    ...areas.flatMap((a) => entries((l) => areaUrl(l, a), AREAS_UPDATED, 0.9)),
    ...doctors.flatMap((d) => entries((l) => `/${l}/${DOCTORS_SEGMENT[l]}/${d.slug}`, PAGES_UPDATED, 0.8)),
    ...entries((l) => `/${l}/blog`, PAGES_UPDATED, 0.7),
    ...allArticles().flatMap((a) => entries((l) => blogUrl(l, a), a.updated, 0.6)),
  ];
}
