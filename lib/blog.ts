import fs from "fs";
import path from "path";
import type { Lang } from "@/lib/site";

export type Source = { title: string; publisher: string; url: string; year?: string };
export type Section = { h: string; p: string[]; list?: string[] };
export type Faq = { q: string; a: string };
export type ArticleLang = { slug: string; title: string; description: string; summary: string; sections: Section[]; faq: Faq[]; note?: string };
export type Article = { id: string; area: string; updated: string; reviewer: string; reviewed?: boolean; sources: Source[]; i18n: Record<Lang, ArticleLang> };

const DIR = path.join(process.cwd(), "content", "blog");
let cache: Article[] | null = null;
export function allArticles(): Article[] {
  if (cache) return cache;
  cache = fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as Article);
  return cache;
}
export const findArticle = (lang: Lang, slug: string) => allArticles().find((a) => a.i18n[lang].slug === decodeURIComponent(slug));
export const blogUrl = (lang: Lang, a: Article) => `/${lang}/blog/${a.i18n[lang].slug}`;
export const articlesOfArea = (areaId: string) => allArticles().filter((a) => a.area === areaId);

export const blogUi: Record<Lang, { title: string; lead: string; metaTitle: string; metaDesc: string; back: string; sources: string; faq: string; reviewed: string; updated: string; book: string; related: string; note: string; read: string }> = {
  tr: {
    title: "Hasta rehberi",
    lead: "Sık karşılaştığımız ortopedi sorunlarını, ne zaman izlenebileceğini, ne zaman tedavi gerektiğini ve sürecin nasıl işlediğini yazıyoruz. Her yazı kaynaklarıyla birlikte verilir.",
    metaTitle: "Ortopedi hasta rehberi · Cyprus Orthopaedics",
    metaDesc: "Girne'de ortopedi ve travmatoloji: omuz, el, kalça, diz, ayak, kırık, çocuk ortopedisi ve tümör konularında kaynaklı hasta bilgilendirme yazıları.",
    back: "← Hasta rehberi", sources: "Kaynaklar", faq: "Sık sorulan sorular", reviewed: "Gözden geçiren", updated: "Güncelleme", book: "Randevu al", related: "Bu alandaki diğer yazılar", read: "Oku",
    note: "Bu yazı genel bilgi içindir; muayenenin ve görüntülemenin yerini tutmaz. Kendinize ait bir yakınmanız varsa hekime başvurun.",
  },
  en: {
    title: "Patient guide",
    lead: "Plain-language articles on the orthopaedic problems we see most often: when watching is safe, when treatment is needed and how it works. Every article lists its sources.",
    metaTitle: "Orthopaedic patient guide · Cyprus Orthopaedics",
    metaDesc: "Orthopaedics and trauma in Kyrenia: sourced patient information on the shoulder, hand, hip, knee, foot, fractures, children's orthopaedics and tumours.",
    back: "← Patient guide", sources: "Sources", faq: "Frequently asked questions", reviewed: "Reviewed by", updated: "Updated", book: "Book an appointment", related: "More in this area", read: "Read",
    note: "This article is general information and does not replace an examination or imaging. If you have symptoms, see a doctor.",
  },
};
