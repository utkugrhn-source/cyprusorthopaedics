import type { MetadataRoute } from "next";
import { SITE, LANGS, DOCTORS_SEGMENT } from "@/lib/site";
import { doctors } from "@/lib/doctors";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...LANGS.map((l) => ({ url: `${SITE}/${l}`, lastModified: now })),
    ...LANGS.flatMap((l) => doctors.map((d) => ({ url: `${SITE}/${l}/${DOCTORS_SEGMENT[l]}/${d.slug}`, lastModified: now }))),
  ];
}
