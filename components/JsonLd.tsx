import { SITE, DOCTORS_SEGMENT, MAPS, LANGS, ui, type Lang } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";
import { doctors, docFull, type Doctor } from "@/lib/doctors";
import { areas, areaUrl, procedures } from "@/lib/areas";

const hospital = { "@type": "Hospital", name: "Dr. Suat Günsel Kyrenia University Hospital", telephone: "+903924449939", address: { "@type": "PostalAddress", streetAddress: "Şehit Yahya Bakır Sokak, Karakum", addressLocality: "Kyrenia", addressRegion: "North Cyprus", addressCountry: "CY" } };

export const physician = (d: Doctor, lang: Lang) => ({
  "@type": ["Physician", "Person"],
  "@id": `${SITE}/#${d.id}`,
  name: d.name,
  alternateName: [d.names.ru, d.names.fa],
  honorificPrefix: d.title[lang],
  jobTitle: d.role[lang],
  medicalSpecialty: "Orthopedic",
  ...(d.focus ? { knowsAbout: d.focus[lang] } : {}),
  url: `${SITE}/${lang}/${DOCTORS_SEGMENT[lang]}/${d.slug}`,
  ...(d.photo ? { image: `${SITE}${d.photo}` } : {}),
  ...(d.sameAs.length ? { sameAs: d.sameAs } : {}),
  worksFor: hospital,
  memberOf: { "@id": `${SITE}/#clinic` },
});

export default function JsonLd({ lang, doctor }: { lang: Lang; doctor?: Doctor }) {
  const clinic = {
    "@type": "MedicalClinic",
    "@id": `${SITE}/#clinic`,
    name: "Cyprus Orthopaedics",
    alternateName: ["Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı", "University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology", "Kyrenia University Orthopaedics"],
    disambiguatingDescription: "Orthopaedics and trauma clinic of the University of Kyrenia Faculty of Medicine at Dr. Suat Günsel University of Kyrenia Hospital, Kyrenia (Girne), North Cyprus. Not connected with practices of a similar name in the south of Cyprus.",
    medicalSpecialty: "Orthopedic",
    url: SITE,
    description: ui[lang].meta.desc,
    logo: `${SITE}/brand/seal-512.png`,
    image: SITE + OG_IMAGE[lang],
    telephone: "+903924449939",
    address: hospital.address,
    hasMap: MAPS,
    areaServed: { "@type": "AdministrativeArea", name: "Northern Cyprus" },
    availableLanguage: ["Turkish", "English"],
    contactPoint: { "@type": "ContactPoint", telephone: "+903924449939", contactType: "appointments", availableLanguage: ["Turkish", "English"] },
    parentOrganization: hospital,
    sameAs: ["https://www.instagram.com/cyprusorthopaedics/"],
    employee: doctors.map((d) => ({ "@id": `${SITE}/#${d.id}` })),
    knowsAbout: areas.map((x) => x.title[lang]),
    availableService: procedures.map((p) => ({ "@type": "MedicalProcedure", name: p.t[lang], url: SITE + areaUrl(lang, areas.find((x) => x.id === p.area)!) })),
  };
  const website = { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "Cyprus Orthopaedics", inLanguage: LANGS, publisher: { "@id": `${SITE}/#clinic` } };
  const crumbs = doctor && { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Cyprus Orthopaedics", item: `${SITE}/${lang}` },
    { "@type": "ListItem", position: 2, name: docFull(doctor, lang), item: `${SITE}/${lang}/${DOCTORS_SEGMENT[lang]}/${doctor.slug}` } ] };
  const graph = doctor ? [physician(doctor, lang), clinic, website, crumbs] : [clinic, website, ...doctors.map((d) => physician(d, lang))];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}
