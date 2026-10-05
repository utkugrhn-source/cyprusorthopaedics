/**
 * Days on which the Turkish pages show a one-line strip.
 *
 * Sources (checked 6 Oct 2026):
 * - Public holidays: KKTC Resmî Tatil ve Anma Günleri Yasası (49/1984).
 * - National and commemoration days marked with a state ceremony: Millî Günleri Kutlama ve Anma Günü Törenleri
 *   (Değişiklik) Tüzüğü, I'inci Cetvel — Resmî Gazete 25 Aralık 2023, sayı 265, Ek III, A.E. 1019.
 *   The 30 local ceremonies of the II'nci Cetvel are left out.
 * - Religious holidays move every year and are entered by hand; eves are not shown.
 */
export type Gun = { ad: string; mesaj: string };

/** Fixed days, keyed "MM-DD". */
const SABIT: Record<string, Gun> = {
  "01-01": { ad: "Yılbaşı", mesaj: "Yeni yılınız kutlu olsun." },
  "01-13": { ad: "Rauf Raif Denktaş’ı Anma Günü", mesaj: "Kurucu Cumhurbaşkanı Rauf Raif Denktaş’ı saygıyla anıyoruz." },
  "01-15": { ad: "Dr. Fazıl Küçük’ü Anma Günü", mesaj: "Dr. Fazıl Küçük’ü saygıyla anıyoruz." },
  "03-18": { ad: "Şehitleri Anma Günü", mesaj: "Çanakkale şehitlerini ve tüm şehitlerimizi saygıyla anıyoruz." },
  "03-24": { ad: "Osman Örek’i Anma Günü", mesaj: "Osman Örek’i saygıyla anıyoruz." },
  "04-03": { ad: "Mustafa Çağatay’ı Anma Günü", mesaj: "Mustafa Çağatay’ı saygıyla anıyoruz." },
  "04-23": { ad: "Ulusal Egemenlik ve Çocuk Bayramı", mesaj: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı kutlu olsun." },
  "05-01": { ad: "İşçi ve Bahar Bayramı", mesaj: "1 Mayıs İşçi ve Bahar Bayramı kutlu olsun." },
  "05-19": { ad: "Atatürk’ü Anma, Gençlik ve Spor Bayramı", mesaj: "19 Mayıs Atatürk’ü Anma, Gençlik ve Spor Bayramı kutlu olsun." },
  "07-20": { ad: "Barış ve Özgürlük Bayramı", mesaj: "20 Temmuz Barış ve Özgürlük Bayramı kutlu olsun." },
  "08-01": { ad: "Toplumsal Direniş Bayramı", mesaj: "1 Ağustos Toplumsal Direniş Bayramı kutlu olsun." },
  "08-08": { ad: "Erenköy Direnişi ve Erenköy Şehitlerini Anma Günü", mesaj: "Erenköy şehitlerini saygıyla anıyoruz." },
  "08-14": { ad: "Muratağa-Sandallar-Atlılar Şehitlerini Anma Günü", mesaj: "Muratağa, Sandallar ve Atlılar şehitlerini saygıyla anıyoruz." },
  "08-15": { ad: "Taşkent Şehitlerini Anma Günü", mesaj: "Taşkent şehitlerini saygıyla anıyoruz." },
  "08-30": { ad: "Zafer Bayramı", mesaj: "30 Ağustos Zafer Bayramı kutlu olsun." },
  "10-29": { ad: "Türkiye Cumhuriyeti Cumhuriyet Bayramı", mesaj: "29 Ekim Cumhuriyet Bayramı kutlu olsun." },
  "11-10": { ad: "Atatürk’ü Anma Günü", mesaj: "Mustafa Kemal Atatürk’ü saygıyla anıyoruz." },
  "11-15": { ad: "KKTC Cumhuriyet Bayramı", mesaj: "15 Kasım Cumhuriyet Bayramı kutlu olsun." },
  "12-21": { ad: "Millî Mücadele ve Şehitler Haftası", mesaj: "21–25 Aralık Millî Mücadele ve Şehitler Haftası. Şehitlerimizi saygıyla anıyoruz." },
  "12-22": { ad: "Millî Mücadele ve Şehitler Haftası", mesaj: "21–25 Aralık Millî Mücadele ve Şehitler Haftası. Şehitlerimizi saygıyla anıyoruz." },
  "12-23": { ad: "Millî Mücadele ve Şehitler Haftası", mesaj: "21–25 Aralık Millî Mücadele ve Şehitler Haftası. Şehitlerimizi saygıyla anıyoruz." },
  "12-24": { ad: "Millî Mücadele ve Şehitler Haftası", mesaj: "21–25 Aralık Millî Mücadele ve Şehitler Haftası. Şehitlerimizi saygıyla anıyoruz." },
  "12-25": { ad: "Millî Mücadele ve Şehitler Haftası", mesaj: "21–25 Aralık Millî Mücadele ve Şehitler Haftası. Şehitlerimizi saygıyla anıyoruz." },
};

const RAMAZAN: Gun = { ad: "Ramazan Bayramı", mesaj: "Ramazan Bayramınız kutlu olsun." };
const KURBAN: Gun = { ad: "Kurban Bayramı", mesaj: "Kurban Bayramınız kutlu olsun." };

/**
 * Moving days, keyed "YYYY-MM-DD". Add each new year when the Diyanet calendar is published.
 * 2027: Ramazan Bayramı 9–11 Mart, Kurban Bayramı 16–19 Mayıs (Diyanet calendar as reported in July 2026).
 * Mevlid Kandili 2027 is not entered yet: its date was not confirmed.
 */
const DEGISKEN: Record<string, Gun> = {
  "2027-03-09": RAMAZAN, "2027-03-10": RAMAZAN, "2027-03-11": RAMAZAN,
  "2027-05-16": KURBAN, "2027-05-17": KURBAN, "2027-05-18": KURBAN, "2027-05-19": KURBAN,
};

/** The day's entry for a date written "YYYY-MM-DD"; a fixed national day comes before a moving one. */
export function gunBul(iso: string): Gun | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  return SABIT[iso.slice(5)] ?? DEGISKEN[iso] ?? null;
}

/** Today's date in North Cyprus, "YYYY-MM-DD". */
export function bugunKibris(now: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Nicosia", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  } catch {
    return now.toISOString().slice(0, 10);
  }
}

export const GUN_SAYISI = { sabit: Object.keys(SABIT).length, degisken: Object.keys(DEGISKEN).length };
