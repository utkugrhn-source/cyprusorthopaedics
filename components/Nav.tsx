"use client";
import Link from "next/link";
import { useState } from "react";
import { LANGS, type Lang, type Ui } from "@/lib/site";

export default function Nav({ lang, t, alt, tone }: { lang: Lang; t: Ui; alt: Record<Lang, string>; tone: "turq" | "white" }) {
  const [open, setOpen] = useState(false);
  const home = `/${lang}`;
  const links = [
    { h: `${home}#tedavi`, l: t.nav.areas },
    { h: `${home}#hekimler`, l: t.nav.doctors },
    { h: `${home}#surec`, l: t.nav.process },
    { h: `${home}#iletisim`, l: t.nav.contact },
  ];
  return (
    <header data-header data-tone={tone} className="site-header fixed inset-x-0 top-0 z-50 text-deep">
      <div className="wrap flex items-center justify-between py-4">
        <Link href={home} className="flex items-center gap-3" aria-label="Cyprus Orthopaedics">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tone === "turq" ? "/brand/mark-white-160.png" : "/brand/mark-160.png"} alt="" width={44} height={44} className="mark-a h-11 w-11" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mark-160.png" alt="" width={44} height={44} className="mark-b h-11 w-11" />
          <span className="leading-none">
            <span className="block font-seal text-[1.55rem] font-semibold tracking-[0.01em]">Cyprus Orthopaedics</span>
            <span className="mt-1 hidden text-[0.7rem] leading-[1.25] whitespace-nowrap sm:block" style={{ fontWeight: 400 }}>{t.brandSub[0]}<br />{t.brandSub[1]}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 whitespace-nowrap xl:flex" aria-label={t.nav.menu}>
          {links.map((x) => (<Link key={x.h} href={x.h} className="text-[0.95rem] hover:underline decoration-2 underline-offset-8" style={{ fontWeight: 400 }}>{x.l}</Link>))}
          <span className="flex items-center gap-1 text-[0.9rem]" style={{ fontWeight: 400 }}>
            {LANGS.map((l, i) => (<span key={l} className="flex items-center gap-1">{i > 0 && <span aria-hidden="true">/</span>}<Link href={alt[l]} lang={l} aria-current={l === lang ? "true" : undefined} className={l === lang ? "underline decoration-2 underline-offset-8" : "opacity-70 hover:opacity-100"}>{l.toUpperCase()}</Link></span>))}
          </span>
          <Link href={`${home}#iletisim`} className="btn-deep !py-3">{t.nav.book}</Link>
        </nav>
        <button className="xl:hidden rounded-full border border-current px-4 py-2 text-sm" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "✕" : t.nav.menu}</button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-line bg-white px-5 py-6">
          <div className="flex flex-col gap-4">
            {links.map((x) => (<Link key={x.h} href={x.h} onClick={() => setOpen(false)} className="h3">{x.l}</Link>))}
          </div>
          <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
            {LANGS.map((l) => (<Link key={l} href={alt[l]} lang={l} className={`rounded-full border px-4 py-2 text-sm ${l === lang ? "border-deep bg-deep text-white" : "border-line"}`}>{l === "tr" ? "Türkçe" : "English"}</Link>))}
          </div>
        </div>
      )}
    </header>
  );
}
