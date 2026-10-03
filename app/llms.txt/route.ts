import { SITE, PHONE, DOCTORS_SEGMENT } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { areas, areaUrl } from "@/lib/areas";
import { allArticles, blogUrl } from "@/lib/blog";

export const dynamic = "force-static";

/** A plain-text map of the site for language-model crawlers, built from the same data as the pages. */
export function GET() {
  const list = allArticles();
  const out = [
    "# Cyprus Orthopaedics",
    "",
    "> Orthopaedics and trauma clinic of the University of Kyrenia (Girne Üniversitesi) Faculty of Medicine, Department of Orthopaedics and Traumatology, at Dr. Suat Günsel University of Kyrenia Hospital in Kyrenia (Girne), North Cyprus. Three faculty surgeons. Every page exists in Turkish and English.",
    "",
    "## Key facts",
    "- Location: Dr. Suat Günsel University of Kyrenia Hospital, Şehit Yahya Bakır Sokak, Karakum, Kyrenia (Girne), North Cyprus",
    `- Appointments: hospital switchboard ${PHONE}; ask for the Orthopaedics and Traumatology clinic`,
    "- Consultation languages: Turkish and English",
    "- Fractures and other injuries are seen through the hospital's emergency department",
    "- Spinal surgery is not offered at this clinic",
    "- Instagram: https://www.instagram.com/cyprusorthopaedics/",
    "",
    "## Doctors",
    ...doctors.map((d) => `- [${d.title.en} ${d.name}](${SITE}/en/${DOCTORS_SEGMENT.en}/${d.slug}): ${d.role.en}. ${d.line.en}`),
    "",
    "## Treatment areas",
    ...areas.map((a) => `- [${a.title.en}](${SITE}${areaUrl("en", a)}): ${a.conditions.en.map((c) => c.n).join("; ")}`),
    "",
    "## Patient guide (English)",
    "Articles written for patients; each lists its sources.",
    ...list.map((a) => `- [${a.i18n.en.title}](${SITE}${blogUrl("en", a)}): ${a.i18n.en.description}`),
    "",
    "## Türkçe",
    `- [Ana sayfa](${SITE}/tr)`,
    ...areas.map((a) => `- [${a.title.tr}](${SITE}${areaUrl("tr", a)}): ${a.conditions.tr.map((c) => c.n).join("; ")}`),
    "",
    "## Hasta rehberi (Türkçe)",
    ...list.map((a) => `- [${a.i18n.tr.title}](${SITE}${blogUrl("tr", a)}): ${a.i18n.tr.description}`),
    "",
  ];
  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
