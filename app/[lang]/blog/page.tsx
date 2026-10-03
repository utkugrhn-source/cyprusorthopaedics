import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ui, LANGS, SITE, type Lang } from "@/lib/site";
import { areas, areaUrl } from "@/lib/areas";
import { allArticles, blogUi, blogUrl } from "@/lib/blog";

export const dynamicParams = false;
export function generateStaticParams() { return LANGS.map((lang) => ({ lang })); }
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = params.lang as Lang; const b = blogUi[lang];
  if (!b) return {};
  return { title: b.metaTitle, description: b.metaDesc, alternates: { canonical: `${SITE}/${lang}/blog`, languages: { tr: `${SITE}/tr/blog`, en: `${SITE}/en/blog`, "x-default": `${SITE}/tr/blog` } } };
}

export default function BlogIndex({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  if (!LANGS.includes(lang)) notFound();
  const t = ui[lang], b = blogUi[lang];
  const list = allArticles();
  return (
    <>
      <Nav lang={lang} t={t} alt={{ tr: "/tr/blog", en: "/en/blog" }} tone="white" />
      <main className="pt-[8.5rem] md:pt-[9.5rem]">
        <div className="bg-mist"><div className="wrap py-12 md:py-20">
          <h1 className="display" style={{ fontSize: "clamp(2.6rem, 6.4vw, 5.75rem)" }}>{b.title}</h1>
          <p className="lead mt-6 max-w-3xl">{b.lead}</p>
        </div></div>
        <div className="wrap pb-24 md:pb-32">
          {areas.map((ar) => {
            const items = list.filter((a) => a.area === ar.id);
            if (!items.length) return null;
            return (
              <section key={ar.id} className="grid gap-6 border-b border-line py-12 md:grid-cols-[1fr_2.1fr] md:gap-16">
                <h2 className="h3"><Link href={areaUrl(lang, ar)} className="hover:text-tide">{ar.title[lang]}</Link></h2>
                <ul>{items.map((a) => (
                  <li key={a.id} className="border-b border-line py-5 first:pt-0 last:border-0">
                    <Link href={blogUrl(lang, a)} className="group block">
                      <span className="block text-[1.15rem] group-hover:text-tide" style={{ fontWeight: 500 }}>{a.i18n[lang].title}</span>
                      <span className="small mt-1 block text-slate" style={{ fontWeight: 400 }}>{a.i18n[lang].description}</span>
                    </Link>
                  </li>))}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
