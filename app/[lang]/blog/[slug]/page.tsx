import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { LANGS, SITE, hreflangs, type Lang } from "@/lib/site";
import { pageTitle, clip, share } from "@/lib/seo";
import { allArticles, findArticle, blogUrl } from "@/lib/blog";

export const dynamicParams = false;
export function generateStaticParams() { return LANGS.flatMap((lang) => allArticles().map((a) => ({ lang, slug: a.i18n[lang].slug }))); }
export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  const lang = params.lang as Lang; const a = findArticle(lang, params.slug);
  if (!a) return {};
  const x = a.i18n[lang];
  const title = pageTitle(lang, x.title, false); const description = clip(x.description, 162);
  return {
    title, description,
    alternates: { canonical: SITE + blogUrl(lang, a), languages: hreflangs((l) => blogUrl(l, a)) },
    ...share(lang, blogUrl(lang, a), x.title, description, { modified: a.updated }),
  };
}
export default function Page({ params }: { params: { lang: string; slug: string } }) {
  const lang = params.lang as Lang; const a = findArticle(lang, params.slug);
  if (!a) notFound();
  return <ArticlePage lang={lang} a={a} />;
}
