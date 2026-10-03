import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ui, type Lang, SITE, PHONE, PHONE_HREF, DOCTORS_SEGMENT } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { areas, areaUrl } from "@/lib/areas";
import { type Article, blogUi, blogUrl, articlesOfArea } from "@/lib/blog";

const fmt = (iso: string, lang: Lang) => new Date(iso + "T12:00:00Z").toLocaleDateString(lang === "tr" ? "tr-TR" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function Cited({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g);
  return <>{parts.map((s, i) => { const m = s.match(/^\[(\d+)\]$/); return m ? <sup key={i}><a href={`#src-${m[1]}`} className="link" style={{ fontWeight: 500 }}>[{m[1]}]</a></sup> : <span key={i}>{s}</span>; })}</>;
}

export default function ArticlePage({ lang, a }: { lang: Lang; a: Article }) {
  const t = ui[lang], b = blogUi[lang], x = a.i18n[lang];
  const area = areas.find((z) => z.id === a.area)!;
  const doc = doctors.find((d) => d.id === a.reviewer)!;
  const related = articlesOfArea(a.area).filter((z) => z.id !== a.id);
  const url = SITE + blogUrl(lang, a);
  const ld = [
    {
      "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": url, url, name: x.title, description: x.description, inLanguage: lang,
      dateModified: a.updated, ...(a.reviewed ? { lastReviewed: a.updated } : {}), mainContentOfPage: x.summary,
      about: { "@type": "MedicalCondition", name: x.title },
      ...(a.reviewed ? { reviewedBy: { "@id": `${SITE}/#${doc.id}` } } : {}), publisher: { "@id": `${SITE}/#clinic` },
      citation: a.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, publisher: s.publisher, url: s.url })),
      isPartOf: { "@type": "WebSite", name: "Cyprus Orthopaedics", url: SITE },
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: x.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\s*\[\d+\]/g, "") } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Cyprus Orthopaedics", item: `${SITE}/${lang}` },
      { "@type": "ListItem", position: 2, name: b.title, item: `${SITE}/${lang}/blog` },
      { "@type": "ListItem", position: 3, name: x.title, item: url },
    ] },
  ];
  return (
    <>
      {ld.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <Nav lang={lang} t={t} alt={{ tr: blogUrl("tr", a), en: blogUrl("en", a) }} tone="white" />
      <main className="pt-[8.5rem] md:pt-[9.5rem]">
        <div className="bg-mist">
          <div className="wrap py-12 md:py-20">
            <Link href={`/${lang}/blog`} className="link small" style={{ fontWeight: 500 }}>{b.back}</Link>
            <p className="mt-8 text-[1.05rem] text-tide" style={{ fontWeight: 500 }}><Link href={areaUrl(lang, area)}>{area.title[lang]}</Link></p>
            <h1 className="display mt-2 max-w-4xl" style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.4rem)" }}>{x.title}</h1>
            <p className="small mt-6 text-slate" style={{ fontWeight: 400 }}>
              {a.reviewed && <>{b.reviewed}: <Link className="link" href={`/${lang}/${DOCTORS_SEGMENT[lang]}/${doc.slug}`}>{doc.title[lang]} {doc.name}</Link> · </>}{b.updated}: {fmt(a.updated, lang)}
            </p>
          </div>
        </div>
        <article className="wrap pb-24 md:pb-32">
          <div className="mx-auto max-w-3xl">
            <p className="lead mt-12"><Cited text={x.summary} /></p>
            {x.sections.map((s) => (
              <section key={s.h} className="mt-12">
                <h2 className="h3">{s.h}</h2>
                {s.p.filter(Boolean).map((p) => <p key={p.slice(0, 30)} className="body mt-4" style={{ fontWeight: 400 }}><Cited text={p} /></p>)}
                {s.list && <ul className="mt-4 list-disc space-y-2 pl-6" style={{ fontWeight: 400 }}>{s.list.map((l) => <li key={l}><Cited text={l} /></li>)}</ul>}
              </section>
            ))}
            <section className="mt-16 border-t border-line pt-10">
              <h2 className="h3">{b.faq}</h2>
              <dl className="mt-6">{x.faq.map((f) => (
                <div key={f.q} className="border-b border-line py-5">
                  <dt style={{ fontWeight: 500 }}>{f.q}</dt>
                  <dd className="mt-2 text-slate" style={{ fontWeight: 400 }}><Cited text={f.a} /></dd>
                </div>))}
              </dl>
            </section>
            {x.note && <p className="mt-10 rounded-2xl bg-mist p-6" style={{ fontWeight: 400 }}>{x.note}</p>}
            <section className="mt-12">
              <h2 className="h3">{b.sources}</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-[0.98rem]" style={{ fontWeight: 400 }}>
                {a.sources.map((s, i) => (
                  <li key={s.url} id={`src-${i + 1}`}>{s.title}. <span className="text-slate">{s.publisher}{s.year ? `, ${s.year}` : ""}.</span> <a className="link" href={s.url} rel="noopener nofollow">{new URL(s.url).hostname.replace("www.", "")}</a></li>
                ))}
              </ol>
            </section>
            <p className="small mt-10 text-slate" style={{ fontWeight: 400 }}>{b.note}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${lang}#iletisim`} className="btn-turq">{b.book}</Link>
              <a href={PHONE_HREF} className="btn-line" dir="ltr">{PHONE}</a>
            </div>
            {related.length > 0 && (
              <section className="mt-16 border-t border-line pt-10">
                <h2 className="h3">{b.related}</h2>
                <ul className="mt-4">{related.map((r) => (<li key={r.id} className="border-b border-line py-3"><Link className="link" href={blogUrl(lang, r)}>{r.i18n[lang].title}</Link></li>))}</ul>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
