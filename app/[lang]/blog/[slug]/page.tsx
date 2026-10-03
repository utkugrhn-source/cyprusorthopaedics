import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { LANGS, SITE, type Lang } from "@/lib/site";
import { allArticles, findArticle, blogUrl } from "@/lib/blog";

export const dynamicParams = false;
export function generateStaticParams() { return LANGS.flatMap((lang) => allArticles().map((a) => ({ lang, slug: a.i18n[lang].slug }))); }
export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  const lang = params.lang as Lang; const a = findArticle(lang, params.slug);
  if (!a) return {};
  const x = a.i18n[lang];
  return {
    title: `${x.title} · Cyprus Orthopaedics`, description: x.description,
    alternates: { canonical: SITE + blogUrl(lang, a), languages: { tr: SITE + blogUrl("tr", a), en: SITE + blogUrl("en", a), "x-default": SITE + blogUrl("tr", a) } },
    openGraph: { title: x.title, description: x.description, type: "article", modifiedTime: a.updated },
  };
}
export default function Page({ params }: { params: { lang: string; slug: string } }) {
  const lang = params.lang as Lang; const a = findArticle(lang, params.slug);
  if (!a) notFound();
  return <ArticlePage lang={lang} a={a} />;
}
