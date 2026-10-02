import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Motion from "@/components/Motion";
import { LANGS, SITE, PREVIEW, ui, type Lang } from "@/lib/site";

export function generateStaticParams() { return LANGS.map((lang) => ({ lang })); }
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const t = ui[params.lang as Lang];
  if (!t) return {};
  return {
    metadataBase: new URL(SITE),
    title: t.meta.title,
    description: t.meta.desc,
    ...(PREVIEW ? { robots: { index: false, follow: false } } : {}),
    openGraph: { title: t.meta.title, description: t.meta.desc, siteName: "Cyprus Orthopaedics", locale: params.lang === "tr" ? "tr_TR" : "en_GB", type: "website", images: ["/brand/seal-512.png"] },
  };
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!LANGS.includes(params.lang as Lang)) notFound();
  return (
    <html lang={params.lang}>
      <body>
        <Motion />
        {children}
      </body>
    </html>
  );
}
