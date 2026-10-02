import Link from "next/link";
import { type Lang, type Ui, PHONE, PHONE_HREF, DOCTORS_SEGMENT } from "@/lib/site";
import { doctors } from "@/lib/doctors";

export default function Footer({ lang, t }: { lang: Lang; t: Ui }) {
  return (
    <footer className="on-deep bg-deep text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/seal-white.svg" alt="University of Kyrenia — Excellentia per Orthopaedics, 2013" width={132} height={132} loading="lazy" className="h-[132px] w-[132px]" />
          <p className="mt-6 font-seal text-3xl font-semibold">Cyprus Orthopaedics</p>
          <p className="small mt-2 text-white/75">{t.brandSub}</p>
        </div>
        <div className="flex flex-col gap-3 text-[0.98rem]">
          {doctors.map((d) => (<Link key={d.id} href={`/${lang}/${DOCTORS_SEGMENT[lang]}/${d.slug}`} className="hover:text-turq">{d.title[lang]} {d.name}</Link>))}
          <Link href={`/${lang}#tedavi`} className="mt-3 hover:text-turq">{t.nav.areas}</Link>
          <Link href={`/${lang}#surec`} className="hover:text-turq">{t.nav.process}</Link>
        </div>
        <div className="text-[0.98rem]">
          <a href={PHONE_HREF} className="h3 block hover:text-turq" dir="ltr">{PHONE}</a>
          <p className="mt-4 text-white/80">{t.contact.addr.map((l) => (<span key={l} className="block">{l}</span>))}</p>
          <a href="https://www.instagram.com/cyprusorthopaedics/" rel="me" className="mt-4 inline-block hover:text-turq">Instagram @cyprusorthopaedics</a>
        </div>
      </div>
      <div className="wrap"><div className="border-t border-white/15 py-6 small text-white/65">
        <p>{t.footer.disclaimer}</p>
        <p className="mt-2">© {new Date().getFullYear()} Cyprus Orthopaedics. {t.footer.rights}</p>
      </div></div>
    </footer>
  );
}
