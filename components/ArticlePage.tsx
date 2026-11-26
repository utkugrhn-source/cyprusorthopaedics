import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ui, type Lang, SITE, PHONE, PHONE_HREF, DOCTORS_SEGMENT, alts, fmtDate as fmt } from "@/lib/site";
import { doctors, docFull } from "@/lib/doctors";
import { areas, areaUrl } from "@/lib/areas";
import { type Article, type ArticleVideo, blogUi, blogUrl, articlesOfArea } from "@/lib/blog";
import VideoEmbed from "@/components/VideoEmbed";


function Cited({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g);
  return <>{parts.map((s, i) => { const m = s.match(/^\[(\d+)\]$/); return m ? <sup key={i}><a href={`#src-${m[1]}`} className="link" style={{ fontWeight: 500 }}>[{m[1]}]</a></sup> : <span key={i}>{s}</span>; })}</>;
}

// Labels for the video block. Only languages that carry a video need them; others fall back to English.
const videoUi: Partial<Record<Lang, { play: string; transcript: string; source: string; open: string; privacy: string }>> = {
  tr: { play: "Videoyu oynat", transcript: "Videonun metni", source: "Videodaki verinin kaynağı", open: "YouTube'da aç", privacy: "Oynat düğmesine basınca video YouTube'dan (youtube-nocookie.com) yüklenir." },
  en: { play: "Play the video", transcript: "Video transcript", source: "Source of the figures in the video", open: "Open on YouTube", privacy: "The video loads from YouTube (youtube-nocookie.com) when you press play." },
};
const clock = (iso: string) => { const m = iso.match(/^PT(?:(\d+)M)?(?:(\d+)S)?$/); return m ? `${+(m[1] ?? 0)}:${String(+(m[2] ?? 0)).padStart(2, "0")}` : ""; };

function VideoBlock({ lang, v }: { lang: Lang; v: ArticleVideo }) {
  const u = videoUi[lang] ?? videoUi.en!;
  return (
    <div className="mt-12" id="video">
      <figure>
        <VideoEmbed id={v.youtube} title={v.title} poster={v.poster} play={u.play} length={clock(v.duration)} />
        <figcaption className="mt-4 max-w-[40em]">
          <span className="block" style={{ fontWeight: 500 }}>{v.title}</span>
          <span className="small mt-1 block text-slate" style={{ fontWeight: 400 }}>{u.privacy} <a className="link" href={`https://www.youtube.com/shorts/${v.youtube}`} rel="noopener">{u.open}</a></span>
        </figcaption>
      </figure>
      {v.transcript.length > 0 && (
        <details className="faq mt-6 border-y border-line">
          <summary><span style={{ fontWeight: 500 }}>{u.transcript}</span><span aria-hidden className="faq-mark" /></summary>
          <div className="pb-6">
            {v.transcript.map((p) => <p key={p.slice(0, 30)} className="body mt-3 first:mt-0" style={{ fontWeight: 400 }}>{p}</p>)}
            {v.source && <p className="small mt-5 text-slate" style={{ fontWeight: 400 }}>{u.source}: {v.source.title}. {v.source.publisher}{v.source.year ? `, ${v.source.year}` : ""}. <a className="link" dir="ltr" href={v.source.url} rel="noopener nofollow">{v.source.url.replace(/^https?:\/\//, "")}</a></p>}
          </div>
        </details>
      )}
    </div>
  );
}

export default function ArticlePage({ lang, a }: { lang: Lang; a: Article }) {
  const t = ui[lang], b = blogUi[lang], x = a.i18n[lang];
  const area = areas.find((z) => z.id === a.area)!;
  const doc = doctors.find((d) => d.id === a.reviewer)!;
  const related = articlesOfArea(a.area).filter((z) => z.id !== a.id);
  const url = SITE + blogUrl(lang, a);
  const v = a.video?.[lang];
  const ld = [
    {
      "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": url, url, name: x.title, description: x.description, inLanguage: lang,
      dateModified: a.updated, ...(a.reviewed ? { lastReviewed: a.updated } : {}), mainContentOfPage: x.summary,
      about: { "@type": "MedicalCondition", name: x.title },
      ...(a.reviewed ? { reviewedBy: { "@id": `${SITE}/#${doc.id}` } } : {}), publisher: { "@id": `${SITE}/#clinic` },
      citation: a.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, publisher: s.publisher, url: s.url })),
      isPartOf: { "@type": "WebSite", name: "Cyprus Orthopaedics", url: SITE },
      ...(v ? { video: { "@id": `${url}#video` } } : {}),
    },
    ...(v ? [{
      "@context": "https://schema.org", "@type": "VideoObject", "@id": `${url}#video`, name: v.title, description: v.description, inLanguage: lang,
      thumbnailUrl: [SITE + v.poster], uploadDate: v.uploadDate, duration: v.duration,
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtube}`, url: `https://www.youtube.com/shorts/${v.youtube}`,
      ...(v.transcript.length ? { transcript: v.transcript.join(" ") } : {}),
    }] : []),
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
      <Nav lang={lang} t={t} alt={alts((l) => blogUrl(l, a))} tone="white" />
      <main className="pt-[8.5rem] md:pt-[9.5rem]">
        <div className="bg-mist">
          <div className="wrap py-12 md:py-20">
            <Link href={`/${lang}/blog`} className="link small" style={{ fontWeight: 500 }}>{b.back}</Link>
            <p className="mt-8 text-[1.05rem] text-tide" style={{ fontWeight: 500 }}><Link href={areaUrl(lang, area)}>{area.title[lang]}</Link></p>
            <h1 className="display mt-2 max-w-4xl" style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.4rem)" }}>{x.title}</h1>
            <p className="small mt-6 text-slate" style={{ fontWeight: 400 }}>
              {a.reviewed && <>{b.reviewed}: <Link className="link" href={`/${lang}/${DOCTORS_SEGMENT[lang]}/${doc.slug}`}>{docFull(doc, lang)}</Link> · </>}{b.updated}: {fmt(a.updated, lang)}
            </p>
          </div>
        </div>
        <article className="wrap pb-24 md:pb-32">
          <div className="mx-auto max-w-3xl">
            <p className="lead mt-12"><Cited text={x.summary} /></p>
            {v && v.at === undefined && <VideoBlock lang={lang} v={v} />}
            {x.sections.map((s, si) => (
              <section key={s.h} className="mt-12">
                <h2 className="h3">{s.h}</h2>
                {s.p.filter(Boolean).map((p) => <p key={p.slice(0, 30)} className="body mt-4" style={{ fontWeight: 400 }}><Cited text={p} /></p>)}
                {s.list && <ul className="mt-4 list-disc space-y-2 ps-6" style={{ fontWeight: 400 }}>{s.list.map((l) => <li key={l}><Cited text={l} /></li>)}</ul>}
                {s.after?.map((p) => <p key={p.slice(0, 30)} className="body mt-4" style={{ fontWeight: 400 }}><Cited text={p} /></p>)}
                {v && v.at === si && <VideoBlock lang={lang} v={v} />}
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
              <ol dir="ltr" className="mt-4 list-decimal space-y-3 pl-6 text-[0.98rem]" style={{ fontWeight: 400 }}>
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
