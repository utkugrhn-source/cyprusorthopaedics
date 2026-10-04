import { chromium } from "playwright";
import fs from "fs";
const R = "/home/claude/cyprusorthopaedics/public";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell" });
const texts = {
  ru: ["Ортопедия и<br>травматология", "Медицинский факультет Университета Кирении", "Университетская больница им. д-ра Суата Гюнселя<br>Кирения, Северный Кипр"],
  fa: ["ارتوپدی و<br>تروماتولوژی", "دانشکدهٔ پزشکی دانشگاه گیرنه", "بیمارستان دانشگاهی دکتر سوات گونسل<br>گیرنه، قبرس شمالی"],
};
for (const lang of ["ru", "fa"]) {
  const [h, a, c] = texts[lang]; const rtl = lang === "fa";
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  const html = `<html dir="${rtl ? "rtl" : "ltr"}"><style>
  @font-face{font-family:G;font-weight:100 900;src:url(file://${R}/fonts/geologica-latin-wght-normal.woff2)}
  @font-face{font-family:G;font-weight:100 900;src:url(file://${R}/fonts/geologica-cyrillic-wght-normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}
  @font-face{font-family:G;font-weight:100 900;src:url(file://${R}/fonts/vazirmatn-arabic.woff2);unicode-range:U+0600-06FF,U+200C-200E,U+FB50-FDFF,U+FE70-FEFC}
  @font-face{font-family:C;font-weight:300 700;src:url(file://${R}/fonts/cormorant-latin.woff2)}
  *{margin:0;box-sizing:border-box} body{width:1200px;height:630px;background:#00ADB5;color:#06363B;font-family:G;display:grid;grid-template-columns:1fr 380px;align-items:center;padding:0 80px 0 84px;gap:40px}
  .b{font-family:C;font-weight:600;font-size:46px;letter-spacing:-.01em}
  h1{font-weight:${rtl ? 600 : 500};font-size:${rtl ? 84 : 74}px;line-height:${rtl ? 1.25 : 1};letter-spacing:${rtl ? 0 : "-.035em"};margin:${rtl ? "18px 0 26px" : "34px 0 38px"}}
  p{font-size:${rtl ? 26 : 22}px;line-height:${rtl ? 1.7 : 1.4};font-weight:400} p+p{font-weight:300}
  img{width:380px;height:380px}
  </style><div><div class="b" dir="ltr" style="text-align:${rtl ? "right" : "left"}">Cyprus Orthopaedics</div><h1>${h}</h1><p>${a}</p><p>${c}</p></div><img src="file://${R}/brand/seal-white.svg"></html>`;
  fs.writeFileSync(`og-${lang}.html`, "<!doctype html><meta charset=utf-8>" + html);
  await p.goto(`file://${process.cwd()}/og-${lang}.html`); await p.waitForTimeout(900);
  await p.screenshot({ path: `${R}/brand/og-${lang}.jpg`, type: "jpeg", quality: 86 });
  await p.close();
}
await b.close();
