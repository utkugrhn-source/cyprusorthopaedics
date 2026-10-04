import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ui, type Lang, DOCTORS_SEGMENT, SITE, PHONE, PHONE_HREF } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { allArticles, articlesOfArea, blogUrl, blogUi } from "@/lib/blog";
import { areas, areaUi, areaUrl, AREAS_UPDATED, type Area } from "@/lib/areas";

const fmt = (iso: string, lang: Lang) => new Date(iso + "T12:00:00Z").toLocaleDateString(lang === "tr" ? "tr-TR" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function AreaPage({ lang, a }: { lang: Lang; a: Area }) {
  const t = ui[lang];
  const u = areaUi[lang];
  const findById = (id: string) => allArticles().find((x) => x.id === id);
  // an area's own articles, plus any its list entries point to (the arthroscopy page borrows the knee and shoulder ones)
  const guide = [...articlesOfArea(a.id), ...a.conditions[lang].map((c) => (c.guide ? findById(c.guide) : undefined)).filter((x): x is NonNullable<typeof x> => !!x)].filter((x, i, arr) => arr.findIndex((y) => y.id === x.id) === i);
  // articles already linked beside a list entry are not repeated in the guide block
  const inline = new Set(a.conditions[lang].map((c) => c.guide).filter(Boolean));
  const rest = guide.filter((g) => !inline.has(g.id));
  const others = areas.filter((x) => x.id !== a.id);
  const ld = { "@context": "https://schema.org", "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": SITE + areaUrl(lang, a),
      url: SITE + areaUrl(lang, a),
      name: a.title[lang],
      description: a.lead[lang],
      inLanguage: lang,
      dateModified: AREAS_UPDATED,
      about: a.conditions[lang].map((c) => ({ "@type": a.kind === "procedure" ? "MedicalProcedure" : "MedicalCondition", name: c.n })),
      isPartOf: { "@id": `${SITE}/#website` },
      publisher: { "@id": `${SITE}/#clinic` },
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Cyprus Orthopaedics", item: `${SITE}/${lang}` },
      { "@type": "ListItem", position: 2, name: a.title[lang], item: SITE + areaUrl(lang, a) } ] },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Nav lang={lang} t={t} alt={{ tr: areaUrl("tr", a), en: areaUrl("en", a) }} tone="white" />
      <main className="pt-[8.5rem] md:pt-[9.5rem]">
        <div className="bg-mist">
          <div className="wrap py-12 md:py-20">
            <Link href={`/${lang}#tedavi`} className="link small" style={{ fontWeight: 500 }}>{u.back}</Link>
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end md:gap-16">
              <h1 className="display" style={{ fontSize: "clamp(2.6rem, 6.4vw, 5.75rem)" }}>{a.title[lang]}</h1>
              <div>
                <p className="lead">{a.lead[lang]}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/${lang}#iletisim`} className="btn-turq">{u.book}</Link>
                  <a href={PHONE_HREF} className="btn-line" dir="ltr">{PHONE}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap pb-24 md:pb-32">
          <section className="py-12 md:py-20">
            <h2 className="h2">{a.listTitle ? a.listTitle[lang] : u.conditions}</h2>
            <ul className="mt-10 border-b border-line md:mt-14">
              {a.conditions[lang].map((c) => (
                <li key={c.n} className="grid gap-3 border-t border-line py-7 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-9">
                  <h3 className="h3">{c.n}</h3>
                  <div>
                    <p className="body" style={{ fontWeight: 400 }}>{c.d}</p>
                    {c.guide && findById(c.guide) && (
                      <p className="mt-4 text-[1rem]" style={{ fontWeight: 500 }}>
                        <Link className="link" href={blogUrl(lang, findById(c.guide)!)}>{u.more}: {findById(c.guide)!.i18n[lang].title}</Link>
                      </p>
                    )}
                    {c.more && (
                      <p className="mt-4 text-[1rem]" style={{ fontWeight: 500 }}>
                        <a className="link" href={c.more[lang]} rel="noopener">{u.more}: utkugurhan.com</a>
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="r-media grid gap-6 bg-deep px-6 py-10 text-white md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-12 md:py-14">
            <h2 className="h3">{u.urgent}</h2>
            <div>
              <ul>
                {a.urgent[lang].map((x) => (
                  <li key={x} className="flex gap-4 border-b border-white/20 py-4 first:pt-0" style={{ fontWeight: 400 }}>
                    <span aria-hidden className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-turq" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <p className="small mt-6 text-white/75" style={{ fontWeight: 400 }}>{a.urgentNote ? a.urgentNote[lang] : u.urgentNote}</p>
            </div>
          </section>

          <section className="grid gap-6 border-b border-line py-12 md:grid-cols-[1fr_2.1fr] md:gap-16 md:py-16">
            <div>
              <h2 className="h3">{u.doctors}</h2>
              <p className="small mt-4 max-w-xs text-slate" style={{ fontWeight: 400 }}>{u.doctorsP}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {doctors.map((o) => (
                <Link key={o.id} href={`/${lang}/${DOCTORS_SEGMENT[lang]}/${o.slug}`} className="group block rounded-2xl bg-mist p-6 transition-colors hover:bg-turq">
                  <span className="text-[0.9rem] text-tide group-hover:text-deep" style={{ fontWeight: 500 }}>{o.title[lang]}</span>
                  <span className="mt-1 block text-[1.25rem] leading-tight" style={{ fontWeight: 500 }}>{o.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {rest.length > 0 && (
            <section className="grid gap-6 border-t border-line py-12 md:grid-cols-[1fr_2.1fr] md:gap-16 md:py-16">
              <h2 className="h3">{blogUi[lang].title}</h2>
              <ul>{rest.map((g) => (<li key={g.id} className="border-b border-line py-3 first:pt-0"><Link className="link" href={blogUrl(lang, g)}>{g.i18n[lang].title}</Link></li>))}</ul>
            </section>
          )}

          <section className="grid gap-6 py-12 md:grid-cols-[1fr_2.1fr] md:gap-16 md:py-16">
            <h2 className="h3">{u.others}</h2>
            <ul className="flex flex-wrap gap-3">
              {others.map((o) => (
                <li key={o.id}><Link href={areaUrl(lang, o)} className="block rounded-full bg-mist px-5 py-2.5 text-[1rem] transition-colors hover:bg-turq" style={{ fontWeight: 400 }}>{o.title[lang]}</Link></li>
              ))}
            </ul>
          </section>

          <p className="small border-t border-line pt-6 text-slate" style={{ fontWeight: 400 }}>
            {u.disclaimer} {u.updated}: <time dateTime={AREAS_UPDATED}>{fmt(AREAS_UPDATED, lang)}</time>.
          </p>
        </div>
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
