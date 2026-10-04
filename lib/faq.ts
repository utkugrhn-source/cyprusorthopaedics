import { PHONE, type Lang } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { areas, areaUrl, procedures } from "@/lib/areas";

export type FaqItem = { q: string; a: string; link?: { href: string; label: string } };
export const faqUi: Record<Lang, { h: string }> = { tr: { h: "Sık sorulanlar" }, en: { h: "Common questions" } };

/** Short answers to what people ask before they call. Every answer repeats a fact stated elsewhere on the site; names and lists come from the same data as the pages. */
export function faq(lang: Lang): FaqItem[] {
  const names = doctors.map((d) => `${d.title[lang]} ${d.name}`);
  const ops = procedures.map((p) => p.t[lang]);
  const area = (id: string) => areas.find((a) => a.id === id)!;
  // mid-sentence list items start in lower case, except abbreviations and names
  const lower = (s: string) => (/^(ACL|Achilles|Aşil)/.test(s) ? s : s.charAt(0).toLocaleLowerCase(lang === "tr" ? "tr-TR" : "en-GB") + s.slice(1));
  if (lang === "tr") return [
    { q: "Cyprus Orthopaedics nerede?", a: "Girne’de, Karakum’daki Dr. Suat Günsel Girne Üniversitesi Hastanesi’nin içinde. Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nın kliniğidir. Ercan Havalimanı’ndan arabayla yaklaşık 45 dakika sürer." },
    { q: "Nasıl randevu alınır?", a: `Hastane santralini (${PHONE}) arayıp Ortopedi ve Travmatoloji polikliniğini isteyin ya da hastanenin online randevu sayfasını kullanın.` },
    { q: "Klinikte hangi hekimler var?", a: `${names.slice(0, -1).join(", ")} ve ${names[names.length - 1]}. Hepsi ortopedi ve travmatoloji uzmanı ve Girne Üniversitesi Tıp Fakültesi öğretim üyesidir.` },
    { q: "Hangi ameliyatlar yapılıyor?", a: `${ops.slice(0, -1).map((x, i) => (i ? lower(x) : x)).join(", ")} ve ${lower(ops[ops.length - 1])}. Çoğu sorun ameliyatsız tedavi edilir; ameliyat gerekirse aynı hastanede yapılır.` },
    { q: "Kapalı ameliyat (artroskopi) yapılıyor mu?", a: "Evet. Diz ve omuzun yanı sıra dirsek, el bileği ve ayak bileğinde de artroskopik cerrahi yapılıyor. En sık yapılanlar menisküs ameliyatı, ön çapraz bağ ameliyatı, rotator manşet onarımı ve omuz çıkığı ameliyatıdır. Ameliyat, birkaç milimetrelik kesilerden kamera eşliğinde yapılır.", link: { href: areaUrl(lang, area("artroskopi")), label: area("artroskopi").title[lang] } },
    { q: "Kopan parmak yerine dikilebiliyor mu?", a: "Kopan parmağın yerine dikilmesi (replantasyon) mikrocerrahiyle yapılıyor. Uygun olup olmadığı yaralanmanın tipine, kopan parçanın durumuna ve geçen süreye bağlıdır; vakit kaybetmeden hastanenin acil servisine başvurun.", link: { href: areaUrl(lang, area("el-bilek")), label: area("el-bilek").title[lang] } },
    { q: "Kırık ya da yaralanmada nereye başvurulur?", a: "Kırıklar ve diğer yaralanmalar hastanenin acil servisi üzerinden değerlendirilir; randevu gerekmez." },
    { q: "Yurt dışından gelen hastalar için ne gerekiyor?", a: "Muayene ve görüşmeler Türkçe ve İngilizce yapılıyor. Elinizdeki röntgen, MR ve raporları ilk muayeneye getirin." },
  ];
  return [
    { q: "Where is Cyprus Orthopaedics?", a: "In Kyrenia (Girne), North Cyprus, inside Dr. Suat Günsel University of Kyrenia Hospital in the Karakum district. It is the clinic of the University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology. Ercan Airport is about 45 minutes away by car." },
    { q: "How do I make an appointment?", a: `Call the hospital switchboard (${PHONE}) and ask for the Orthopaedics and Traumatology clinic, or use the hospital’s online appointment page.` },
    { q: "Which doctors work at the clinic?", a: `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}. All are orthopaedic and trauma surgeons and members of the University of Kyrenia Faculty of Medicine.` },
    { q: "Which operations are done?", a: `${ops.slice(0, -1).map((x, i) => (i ? lower(x) : x)).join(", ")} and ${lower(ops[ops.length - 1])}. Most problems are treated without surgery; when an operation is needed it is done in the same hospital.` },
    { q: "Is keyhole (arthroscopic) surgery available?", a: "Yes. Arthroscopic surgery is done in the knee and the shoulder, and also in the elbow, the wrist and the ankle. The most common operations are meniscus surgery, ACL reconstruction, rotator cuff repair and shoulder stabilisation. The operation is carried out through cuts a few millimetres long, under camera view.", link: { href: areaUrl(lang, area("artroskopi")), label: area("artroskopi").title[lang] } },
    { q: "Can a severed finger be reattached?", a: "Reattaching a severed finger (replantation) is done with microsurgery. Whether it is suitable depends on the type of injury, the condition of the severed part and the time elapsed; go to the hospital’s emergency department without delay.", link: { href: areaUrl(lang, area("el-bilek")), label: area("el-bilek").title[lang] } },
    { q: "Where do I go with a fracture or an injury?", a: "Fractures and other injuries are seen through the hospital’s emergency department; no appointment is needed." },
    { q: "What do patients from abroad need?", a: "Consultations are held in Turkish and English. Bring any X-rays, MRI scans and reports you have to the first visit." },
  ];
}
