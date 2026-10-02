import { SITE, DOCTORS_SEGMENT, type Lang } from "@/lib/site";
import { doctors, type Doctor } from "@/lib/doctors";

const hospital = { "@type": "Hospital", name: "Dr. Suat Günsel Kyrenia University Hospital", telephone: "+903924449939", address: { "@type": "PostalAddress", streetAddress: "Şehit Yahya Bakır Sokak, Karakum", addressLocality: "Kyrenia", addressRegion: "North Cyprus", addressCountry: "CY" } };

export const physician = (d: Doctor, lang: Lang) => ({
  "@type": ["Physician", "Person"],
  "@id": `${SITE}/#${d.id}`,
  name: d.name,
  honorificPrefix: d.title[lang],
  jobTitle: d.role[lang],
  medicalSpecialty: "Orthopedic",
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
    alternateName: ["Kyrenia University Orthopaedics", "Girne Üniversitesi Ortopedi ve Travmatoloji Kliniği"],
    medicalSpecialty: "Orthopedic",
    url: SITE,
    logo: `${SITE}/brand/seal-512.png`,
    telephone: "+903924449939",
    address: hospital.address,
    parentOrganization: hospital,
    sameAs: ["https://www.instagram.com/cyprusorthopaedics/"],
    employee: doctors.map((d) => ({ "@id": `${SITE}/#${d.id}` })),
  };
  const graph = doctor ? [physician(doctor, lang), clinic] : [clinic, ...doctors.map((d) => physician(d, lang))];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}
