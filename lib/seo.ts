import type { Metadata } from "next";
import { LANGS, SITE, type Lang } from "./site";

const BRAND = "Cyprus Orthopaedics";
/** Share image, 1200×630, one per language. */
export const OG_IMAGE: Record<Lang, string> = { tr: "/brand/og-tr.jpg", en: "/brand/og-en.jpg", ru: "/brand/og-ru.jpg", fa: "/brand/og-fa.jpg" };
export const PLACE: Record<Lang, string> = { tr: "Girne", en: "Kyrenia, North Cyprus", ru: "Кирения, Северный Кипр", fa: "گیرنه، قبرس شمالی" };
/** Shorter place, tried when the full one does not fit in the title. */
const PLACE_SHORT: Record<Lang, string> = { tr: "Girne", en: "North Cyprus", ru: "Северный Кипр", fa: "قبرس شمالی" };
/** og:locale value for each language. */
const OG_LOCALE: Record<Lang, string> = { tr: "tr_TR", en: "en_GB", ru: "ru_RU", fa: "fa_IR" };
/** Dates the non-article pages were last edited; the sitemap reports these instead of the build time. */
export const PAGES_UPDATED = "2026-10-04";

/** Adds the place and the clinic name while the whole title still fits a search result line. */
export function pageTitle(lang: Lang, main: string, withPlace = true): string {
  const tries = withPlace
    ? [`${main} · ${PLACE[lang]} · ${BRAND}`, `${main} · ${PLACE[lang]}`, `${main} · ${PLACE_SHORT[lang]}`]
    : [`${main} · ${BRAND}`];
  return tries.find((t) => t.length <= 65) ?? main;
}

/** Cuts a description at a sentence end, or failing that at a word, so it is not truncated mid-word in results. */
export function clip(text: string, max = 158): string {
  const s = text.replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max + 1);
  const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("; "), cut.lastIndexOf("؟ "), cut.lastIndexOf("؛ "));
  if (stop > max * 0.55) return cut.slice(0, stop + 1).replace(/[;؛]$/, ".");
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:،؛]$/, "") + "…";
}

/** Open Graph and Twitter fields. A page's own openGraph replaces the layout's, so every page states the full set. */
export function share(lang: Lang, path: string, title: string, description: string, article?: { modified: string }): Pick<Metadata, "openGraph" | "twitter"> {
  const images = [{ url: OG_IMAGE[lang], width: 1200, height: 630, alt: BRAND }];
  const base = { title, description, url: SITE + path, siteName: BRAND, locale: OG_LOCALE[lang], alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]), images };
  return {
    openGraph: article ? { ...base, type: "article", modifiedTime: article.modified } : { ...base, type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE[lang]] },
  };
}
