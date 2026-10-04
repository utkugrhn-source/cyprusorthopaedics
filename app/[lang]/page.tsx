import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Portrait from "@/components/Portrait";
import Reel from "@/components/Reel";
import LazyVideo from "@/components/LazyVideo";
import Papers from "@/components/Papers";
import { ui, type Lang, PHONE, PHONE_HREF, APPT, MAPS, DOCTORS_SEGMENT, SITE } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { areas, areaUrl } from "@/lib/areas";
import type { Metadata } from "next";
import { share } from "@/lib/seo";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = params.lang as Lang; const m = ui[lang]?.meta;
  if (!m) return {};
  return { alternates: { canonical: `${SITE}/${lang}`, languages: { tr: `${SITE}/tr`, en: `${SITE}/en`, "x-default": `${SITE}/tr` } }, ...share(lang, `/${lang}`, m.title, m.desc) };
}

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const t = ui[lang];
  const seg = DOCTORS_SEGMENT[lang];
  const areaHref = (id: string) => areaUrl(lang, areas.find((a) => a.id === id)!);
  // three-dimensional CT views filmed from the team's own screens, each pointing at its treatment area
  const plan = ([["bt-omuz", "omuz-dirsek"], ["bt-kol", "omuz-dirsek"], ["bt-el", "el-bilek"], ["bt-uyluk", "kirik-travma"], ["bt-diz", "diz"], ["bt-ayak", "ayak-bilek"], ["skopi", "kirik-travma"]] as const)
    .map(([id, area], i) => ({ id, label: t.plan.items[i], href: areaHref(area) }));
  // the doctors' listed publications, taken in turn from each and without repeats, so the block shows a mix
  const seen = new Set<string>();
  const papers = Array.from({ length: Math.max(...doctors.map((d) => d.pubs.length)) }, (_, n) => [...doctors].reverse().map((d) => d.pubs[n]))
    .flat().filter((x) => x && !seen.has(x.doi) && seen.add(x.doi)).map((x) => ({ text: `${x.a} ${x.t} ${x.j}`, doi: x.doi, journal: x.j.split(/\.\s*\d{4}/)[0], year: x.j.match(/\d{4}/)?.[0] ?? "" }));
  // the way in, filmed on a phone: campus, emergency, reception, theatre
  const route = (["kampus", "hastane", "acil", "ambulans", "karsilama", "koridor", "ekip", "mikroskop"] as const)
    .map((id, i) => ({ id, label: t.route.items[i] }));
  return (
    <>
      <JsonLd lang={lang} />
      <Nav lang={lang} t={t} alt={{ tr: "/tr", en: "/en" }} tone="turq" />
      <main>
        {/* hero: the seal's own colour as the field */}
        <section data-hero className="relative bg-turq pt-[9.5rem] md:pt-[11.5rem]">
          <div className="wrap grid items-center gap-10 pb-40 md:grid-cols-[1.35fr_0.65fr] md:pb-56">
            <div>
              <h1 className="display">
                <span className="rise block" style={{ animationDelay: ".15s" }}>{t.hero.h1a}</span>
                <span className="rise block" style={{ animationDelay: ".3s" }}>{t.hero.h1b}</span>
              </h1>
              <p className="rise mt-6 text-[1.15rem] md:text-[1.35rem]" style={{ animationDelay: ".5s", fontWeight: 500, letterSpacing: "-0.01em" }}>{t.hero.place}</p>
              <p className="rise lead mt-6" style={{ animationDelay: ".65s", fontWeight: 400 }}>{t.hero.lead}</p>
              <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: ".8s" }}>
                <Link href={`/${lang}#iletisim`} className="btn-deep">{t.hero.cta1}</Link>
                <Link href={`/${lang}#hekimler`} className="btn-line">{t.hero.cta2}</Link>
              </div>
            </div>
            <div className="mx-auto w-[min(72vw,26rem)] md:w-full md:max-w-[30rem]" data-seal>
              <div className="seal-stage">
                <div className="seal-emboss-wrap" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/brand/seal.svg" alt="" width={480} height={480} />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="seal-ink" src="/brand/seal-white.svg" alt="University of Kyrenia — Excellentia per Orthopaedics, 2013" width={480} height={480} />
              </div>
            </div>
          </div>
        </section>
        {/* the hospital, moving: a short silent loop */}
        <div className="wrap -mt-28 md:-mt-44">
          <div className="r-media relative aspect-[16/10] overflow-hidden bg-deep md:aspect-[21/9]" data-clip="0">
            <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/video/hastane.jpg" aria-label={t.media.film}>
              <source src="/video/hastane-m.mp4" type="video/mp4" media="(max-width: 767px)" />
              <source src="/video/hastane.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* treatment areas */}
        <section id="tedavi" className="py-24 md:py-36">
          <div className="wrap">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16" data-reveal>
            <h2 className="h2">{t.areas.h}</h2>
            <p className="lead">{t.areas.p}</p>
          </div>
          <ul className="mt-14 border-b border-line md:mt-20" data-stagger>
            {t.areas.items.map((r, i) => (
              <li key={r.t} className="row border-t border-line">
                <Link href={areaUrl(lang, areas[i])} className="group grid gap-2 px-3 py-7 md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-5 md:py-9">
                  <h3 className="h3 row-t flex items-baseline gap-4"><span className="row-n">{String(i + 1).padStart(2, "0")}</span>{r.t}<span aria-hidden className="text-turq transition-transform duration-300 group-hover:translate-x-1.5">→</span></h3>
                  <p className="body text-slate" style={{ fontWeight: 400 }}>{r.d}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="small mt-6 text-slate">{t.areas.note}</p>
          {/* planning: the fracture seen in three dimensions */}
          <div className="mt-20 grid gap-6 md:mt-28 md:grid-cols-[1fr_1.4fr] md:gap-16" data-reveal>
            <h3 className="h3">{t.plan.h}</h3>
            <p className="body text-slate" style={{ fontWeight: 400 }}>{t.plan.p}</p>
          </div>
          </div>
          <div className="mt-10 md:mt-14"><Reel items={plan} labels={t.reel} /></div>
        </section>

        {/* doctors */}
        <section id="hekimler" className="bg-mist py-24 md:py-36">
          <div className="wrap">
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16" data-reveal>
              <h2 className="h2">{t.doctors.h}</h2>
              <p className="lead">{t.doctors.p}</p>
            </div>
            <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8" data-stagger>
              {doctors.map((d, i) => (
                <Link key={d.id} href={`/${lang}/${seg}/${d.slug}`} className="group block">
                  <Portrait d={d} pending={t.doctors.photoPending} delay={i} />
                  <p className="mt-6 text-[0.95rem] text-tide" style={{ fontWeight: 500 }}>{d.title[lang]}</p>
                  <h3 className="h3 mt-1 group-hover:underline decoration-turq decoration-[3px] underline-offset-[6px]">{d.name}</h3>
                  <p className="small mt-3 text-slate" style={{ fontWeight: 400 }}>{d.line[lang]}</p>
                  <span className="link small mt-4 inline-block" style={{ fontWeight: 500 }}>{t.doctors.profile} <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* the team at work */}
        <div className="wrap pt-24 md:pt-36">
          <div className="r-media relative aspect-[16/10] overflow-hidden bg-mist md:aspect-[21/9]" data-clip="0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/hero-team.jpg" alt={t.media.team} loading="lazy" className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover" style={{ objectPosition: "50% 30%" }} data-drift />
          </div>
        </div>

        {/* the visit, a real sequence */}
        <section id="surec" className="wrap py-24 md:py-36">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16" data-reveal>
            <h2 className="h2">{t.process.h}</h2>
            <p className="lead">{t.process.p}</p>
          </div>
          <ol className="mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-8" data-stagger data-lines>
            {t.process.steps.map((s, i) => (
              <li key={s.t}>
                <span className="step-line" />
                <span className="mt-6 block font-seal text-5xl font-medium text-tide">{i + 1}</span>
                <h3 className="mt-4 text-[1.3rem]" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>{s.t}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate" style={{ fontWeight: 400 }}>{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* theatre photographs */}
        <div className="wrap grid gap-4 pb-24 sm:grid-cols-3 md:gap-8 md:pb-36">
          {(["or-2", "video", "or-3"] as const).map((f, i) => (
            <div key={f} className={`zoom r-media relative aspect-[4/5] overflow-hidden bg-mist ${i === 1 ? "sm:mt-16" : ""}`} data-clip={i}>
              {f === "video" ? (
                <LazyVideo className="h-full w-full object-cover" src="/video/ameliyathane.mp4" poster="/video/ameliyathane.jpg" label={t.photos[i]} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={`/img/${f}.jpg`} alt={t.photos[i]} loading="lazy" className="h-full w-full object-cover" />
              )}
            </div>
          ))}
        </div>

        {/* university */}
        <section className="on-deep relative overflow-hidden bg-deep py-24 text-white md:py-36">
          <div className="pointer-events-none absolute -right-72 top-1/2 hidden w-[44rem] -translate-y-1/2 opacity-[0.09] lg:block" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/seal.svg" alt="" loading="lazy" className="w-full" data-turn />
          </div>
          <div className="wrap relative grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 className="h2" data-reveal>{t.uni.h}</h2>
            <div data-stagger>
              <p className="lead">{t.uni.p1}</p>
              <p className="lead mt-5">{t.uni.p2}</p>
              <div className="mt-10 border-l-[3px] border-turq pl-6">
                <p className="small text-turq" style={{ fontWeight: 500 }}>{t.uni.paperLead}</p>
                <div className="mt-2"><Papers items={papers} /></div>
              </div>
            </div>
          </div>
        </section>

        {/* patients from abroad */}
        <section className="wrap py-24 md:py-36">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 className="h2" data-reveal>{t.intl.h}</h2>
            <div>
              <p className="lead" data-reveal>{t.intl.p}</p>
              <dl className="mt-10 border-b border-line" data-stagger>
                {t.intl.items.map((r) => (
                  <div key={r.t} className="grid gap-1 border-t border-line py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
                    <dt style={{ fontWeight: 500 }}>{r.t}</dt>
                    <dd className="text-slate" style={{ fontWeight: 400 }}>{r.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* the way in, from the campus gate to the theatre */}
        <section className="pb-24 md:pb-36">
          <div className="wrap grid gap-8 border-t border-line pt-24 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pt-36" data-reveal>
            <h2 className="h2">{t.route.h}</h2>
            <p className="lead">{t.route.p}</p>
          </div>
          <div className="mt-14 md:mt-20"><Reel items={route} labels={t.reel} /></div>
        </section>

        {/* contact: the phone number is the page's last large element */}
        <section id="iletisim" className="bg-turq py-24 md:py-36">
          <div className="wrap">
            <div data-reveal>
              <h2 className="h2">{t.contact.h}</h2>
              <p className="lead mt-6" style={{ fontWeight: 400 }}>{t.contact.p}</p>
            </div>
            <a href={PHONE_HREF} dir="ltr" className="mt-10 block w-fit hover:text-white" style={{ fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, fontSize: "clamp(2.4rem, 9.2vw, 8.5rem)" }} data-reveal>{PHONE}</a>
            <div className="mt-12 grid gap-10 border-t border-deep/30 pt-10 md:grid-cols-[1.4fr_1fr]">
              <div className="flex flex-wrap items-start gap-3">
                <a href={PHONE_HREF} className="btn-deep">{t.contact.call}</a>
                <a href={APPT[lang]} className="btn-line" rel="noopener">{t.contact.online}</a>
              </div>
              <address className="not-italic" style={{ fontWeight: 400 }}>
                {t.contact.addr.map((l, i) => (<span key={l} className="block" style={i === 0 ? { fontWeight: 500 } : undefined}>{l}</span>))}
                <a href={MAPS} className="mt-3 inline-block underline decoration-deep decoration-2 underline-offset-4 hover:text-white" rel="noopener">{t.contact.map}</a>
                <span className="small mt-4 block">{t.contact.hoursNote}</span>
              </address>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
