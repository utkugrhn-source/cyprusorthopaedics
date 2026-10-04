import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Portrait from "@/components/Portrait";
import { ui, LANGS, type Lang, DOCTORS_SEGMENT, SITE, PHONE, PHONE_HREF, CONSULT_NOTE, alts, hreflangs, num } from "@/lib/site";
import { doctors, getDoctor, docName, docFull } from "@/lib/doctors";
import AreaPage from "@/components/AreaPage";
import { areas, getArea, areaUrl, areaUi, areaSeo, AREAS_SEGMENT } from "@/lib/areas";
import { pageTitle, clip, share } from "@/lib/seo";

type P = { lang: string; section: string; slug: string };
export function generateStaticParams() {
  return LANGS.flatMap((lang) => [
    ...doctors.map((d) => ({ lang, section: DOCTORS_SEGMENT[lang], slug: d.slug })),
    ...areas.map((a) => ({ lang, section: AREAS_SEGMENT[lang], slug: a.slug[lang] })),
  ]);
}
export const dynamicParams = false;

const url = (lang: Lang, slug: string) => `/${lang}/${DOCTORS_SEGMENT[lang]}/${slug}`;

export function generateMetadata({ params }: { params: P }): Metadata {
  const lang = params.lang as Lang;
  if (params.section === AREAS_SEGMENT[lang]) {
    const a = getArea(lang, params.slug);
    if (!a) return {};
    const seo = areaSeo[a.id];
    const title = pageTitle(lang, seo?.title[lang] ?? a.title[lang]);
    const description = seo?.desc[lang] ?? clip(a.lead[lang]);
    return {
      title, description,
      alternates: { canonical: SITE + areaUrl(lang, a), languages: hreflangs((l) => areaUrl(l, a)) },
      ...share(lang, areaUrl(lang, a), title, description),
    };
  }
  const d = getDoctor(params.slug);
  if (!d || params.section !== DOCTORS_SEGMENT[lang]) return {};
  const who = docFull(d, lang);
  // the Russian and Persian pages also carry the Latin spelling, which is what the name is searched by
  const title = { tr: `${who} · Ortopedi ve Travmatoloji, Girne`, en: `${who} · Orthopaedic Surgeon, Kyrenia`, ru: `${who} · ортопед-травматолог, Кирения`, fa: `${who} · متخصص ارتوپدی، گیرنه` }[lang];
  const description = {
    tr: `${who}, Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı öğretim üyesi. Özgeçmiş, yayınlar ve randevu bilgisi.`,
    en: `${who}, orthopaedic surgeon and faculty member at the University of Kyrenia Faculty of Medicine. Biography, publications, appointments.`,
    ru: `${who} (${d.name}) — ортопед-травматолог, Университет Кирении. Биография, публикации, запись на приём.`,
    fa: `${who} (${d.name})، متخصص ارتوپدی و تروماتولوژی و عضو هیئت علمی دانشکدهٔ پزشکی دانشگاه گیرنه. زندگی‌نامه، مقالات و نوبت‌دهی.`,
  }[lang];
  const path = `/${lang}/${DOCTORS_SEGMENT[lang]}/${d.slug}`;
  return {
    title, description,
    alternates: { canonical: SITE + url(lang, d.slug), languages: hreflangs((l) => url(l, d.slug)) },
    ...share(lang, path, title, description),
  };
}

function Block({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-line py-12 md:grid-cols-[1fr_2.1fr] md:gap-16 md:py-16">
      <h2 className="h3">{h}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function Page({ params }: { params: P }) {
  const lang = params.lang as Lang;
  if (params.section === AREAS_SEGMENT[lang]) {
    const a = getArea(lang, params.slug);
    if (!a) notFound();
    return <AreaPage lang={lang} a={a} />;
  }
  const d = getDoctor(params.slug);
  if (!d || params.section !== DOCTORS_SEGMENT[lang]) notFound();
  const t = ui[lang];
  const p = t.profile;
  const others = doctors.filter((x) => x.id !== d.id);
  return (
    <>
      <JsonLd lang={lang} doctor={d} />
      <Nav lang={lang} t={t} alt={alts((l) => url(l, d.slug))} tone="white" />
      <main className="pt-[8.5rem] md:pt-[9.5rem]">
        <div className="bg-mist">
          <div className="wrap grid gap-10 py-12 md:grid-cols-[0.8fr_1.6fr] md:gap-16 md:py-20">
            <div className="max-w-sm md:max-w-none"><Portrait d={d} name={docName(d, lang)} pending={t.doctors.photoPending} priority /></div>
            <div className="self-end">
              <Link href={`/${lang}#hekimler`} className="link small" style={{ fontWeight: 500 }}>{p.back}</Link>
              <p className="mt-8 text-[1.15rem] text-tide" style={{ fontWeight: 500 }}>{d.title[lang]}</p>
              <h1 className="display mt-1" style={{ fontSize: "clamp(2.6rem, 6.4vw, 5.75rem)" }}>{docName(d, lang)}</h1>
              {docName(d, lang) !== d.name && <p className="mt-3 text-[1.05rem] text-slate" lang="tr" style={{ fontWeight: 400 }}>{d.name}</p>}
              <p className="mt-5 text-[1.2rem]" style={{ fontWeight: 400 }}>{d.role[lang]}</p>
              <p className="small mt-1 text-slate" style={{ fontWeight: 400 }}>{t.hero.place}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={`/${lang}#iletisim`} className="btn-turq">{p.book}</Link>
                <a href={PHONE_HREF} className="btn-line" dir="ltr">{PHONE}</a>
              </div>
              {CONSULT_NOTE[lang] && <p className="small mt-4 text-slate" style={{ fontWeight: 400 }}>{CONSULT_NOTE[lang]}</p>}
            </div>
          </div>
        </div>

        <div className="wrap pb-24 md:pb-32">
          <section className="grid gap-6 py-12 md:grid-cols-[1fr_2.1fr] md:gap-16 md:py-16">
            <h2 className="h3">{p.summary}</h2>
            <div className="space-y-5">{d.summary[lang].map((x) => (<p key={x.slice(0, 24)} className="lead">{x}</p>))}</div>
          </section>

          {/* shown only once the doctor has stated their interests; no placeholder on a public page */}
          {(d.focus || d.langs) && (
            <Block h={d.focus ? p.focus : p.langs}>
              {d.focus && (
                <ul className="flex flex-wrap gap-x-3 gap-y-3">
                  {d.focus[lang].map((f) => (<li key={f} className="rounded-full bg-mist px-5 py-2.5 text-[1rem]" style={{ fontWeight: 400 }}>{f}</li>))}
                </ul>
              )}
              {d.langs && (<p className={`${d.focus ? "mt-7 " : ""}text-[1rem]`} style={{ fontWeight: 400 }}>{d.focus && <span style={{ fontWeight: 500 }}>{p.langs}: </span>}{d.langs[lang]}</p>)}
            </Block>
          )}

          <Block h={p.path}>
            <ol>
              {d.path.map((x, i) => (
                <li key={i} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-4 first:pt-0 sm:grid-cols-[8rem_1fr]">
                  <span className="text-tide tabular-nums" style={{ fontWeight: 500 }}>{num(x.y, lang)}</span>
                  <span><span className="block" style={{ fontWeight: 500 }}>{x.t[lang]}</span><span className="block text-slate" style={{ fontWeight: 400 }}>{x.s[lang]}</span></span>
                </li>
              ))}
            </ol>
          </Block>

          <Block h={p.academic}>
            <p className="body" style={{ fontWeight: 400 }}>{d.academic[lang]}</p>
            <h3 className="mt-10 text-[1.05rem]" style={{ fontWeight: 500 }}>{p.selected}</h3>
            <ol className="mt-4" dir="ltr">
              {d.pubs.map((x) => (
                <li key={x.doi} className="border-b border-line py-4 text-[0.98rem] leading-relaxed" lang="en" style={{ fontWeight: 400 }}>
                  <span className="text-slate">{x.a}</span> {x.t} <span className="text-slate">{x.j}</span>{" "}
                  <a className="link whitespace-nowrap" href={`https://doi.org/${x.doi}`} rel="noopener">doi:{x.doi}</a>
                </li>
              ))}
            </ol>
            {d.books && (<>
              <h3 className="mt-10 text-[1.05rem]" style={{ fontWeight: 500 }}>{p.books}</h3>
              <ul className="mt-4">{d.books[lang].map((b) => (<li key={b} dir="auto" className="border-b border-line py-3 text-[0.98rem] leading-relaxed" style={{ fontWeight: 400 }}>{b}</li>))}</ul>
            </>)}
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[1rem]" style={{ fontWeight: 500 }}>
              {d.links.map((l) => (<a key={l.href} className="link" href={l.href} rel="noopener me">{l.label}</a>))}
              {d.site && (<a className="link" href={d.site} rel="noopener me">{p.site}: {d.site.replace("https://", "")}</a>)}
            </p>
          </Block>

          {d.courses && (
            <Block h={p.courses}>
              <ul>{d.courses[lang].map((c) => (<li key={c} className="border-b border-line py-3 first:pt-0" style={{ fontWeight: 400 }}>{c}</li>))}</ul>
            </Block>
          )}

          <Block h={p.memberships}>
            <ul>{d.memberships[lang].map((c) => (<li key={c} className="border-b border-line py-3 first:pt-0" style={{ fontWeight: 400 }}>{c}</li>))}</ul>
          </Block>

          <Block h={p.others}>
            <div className="grid gap-6 sm:grid-cols-2">
              {others.map((o) => (
                <Link key={o.id} href={url(lang, o.slug)} className="group block rounded-2xl bg-mist p-7 transition-colors hover:bg-turq">
                  <span className="text-[0.95rem] text-tide group-hover:text-deep" style={{ fontWeight: 500 }}>{o.title[lang]}</span>
                  <span className="h3 mt-1 block">{docName(o, lang)}</span>
                  <span className="small mt-2 block text-slate group-hover:text-deep" style={{ fontWeight: 400 }}>{o.role[lang]}</span>
                </Link>
              ))}
            </div>
          </Block>
        </div>
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
