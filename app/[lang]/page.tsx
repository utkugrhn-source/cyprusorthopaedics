import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Portrait from "@/components/Portrait";
import { ui, type Lang, PHONE, PHONE_HREF, APPT, MAPS, DOCTORS_SEGMENT, SITE } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { areas, areaUrl } from "@/lib/areas";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return { alternates: { canonical: `${SITE}/${params.lang}`, languages: { tr: `${SITE}/tr`, en: `${SITE}/en`, "x-default": `${SITE}/tr` } } };
}

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const t = ui[lang];
  const seg = DOCTORS_SEGMENT[lang];
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
                  <img src="/brand/seal.svg" alt="" />
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
              <source src="/video/hastane.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* treatment areas */}
        <section id="tedavi" className="wrap py-24 md:py-36">
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
        </section>

        {/* the team at work */}
        <div className="wrap">
          <div className="r-media relative aspect-[16/10] overflow-hidden bg-mist md:aspect-[21/9]" data-clip="0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/hero-team.jpg" alt={t.media.team} loading="lazy" className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover" style={{ objectPosition: "50% 30%" }} data-drift />
          </div>
        </div>

        {/* doctors */}
        <section id="hekimler" className="mt-24 bg-mist py-24 md:mt-36 md:py-36">
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
                <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/video/ameliyathane.jpg" aria-label={t.photos[i]}>
                  <source src="/video/ameliyathane.mp4" type="video/mp4" />
                </video>
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
                <p className="mt-2 max-w-[38em] text-[1rem] leading-relaxed text-white/90" style={{ fontWeight: 400 }}>{t.uni.paper} <a className="underline decoration-turq underline-offset-4 hover:text-turq" href="https://doi.org/10.1016/j.injury.2026.113587">doi:10.1016/j.injury.2026.113587</a></p>
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

        {/* the hospital building, edge to edge */}
        <figure className="relative aspect-[16/9] overflow-hidden bg-mist md:aspect-[1920/620]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/hastane.jpg" alt={t.media.hospital} loading="lazy" className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover" data-drift />
        </figure>

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
