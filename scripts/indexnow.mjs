// Notify Bing/Yandex (IndexNow) of every URL in the live sitemap.
// Usage: node scripts/indexnow.mjs   (run after a deploy)
import fs from "fs";
const host = "www.cyprusorthopaedics.com";
const key = fs.readdirSync("public").find((f) => /^[0-9a-f]{32}\.txt$/.test(f)).replace(".txt", "");
const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(res.status, res.statusText, urlList.length, "URLs");
