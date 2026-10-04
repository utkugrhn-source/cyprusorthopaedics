import { PHONE, type Lang } from "@/lib/site";
import { doctors, docFull } from "@/lib/doctors";
import { areas, areaUrl, procedures } from "@/lib/areas";

export type FaqItem = { q: string; a: string; link?: { href: string; label: string } };
export const faqUi: Record<Lang, { h: string }> = { tr: { h: "Sık sorulanlar" }, en: { h: "Common questions" }, ru: { h: "Частые вопросы" }, fa: { h: "پرسش‌های پرتکرار" } };

/** Short answers to what people ask before they call. Every answer repeats a fact stated elsewhere on the site; names and lists come from the same data as the pages. */
export function faq(lang: Lang): FaqItem[] {
  const names = doctors.map((d) => docFull(d, lang));
  const ops = procedures.map((p) => p.t[lang]);
  const area = (id: string) => areas.find((a) => a.id === id)!;
  // mid-sentence list items start in lower case, except abbreviations and names; Persian has no letter case
  const locale = lang === "tr" ? "tr-TR" : lang === "ru" ? "ru-RU" : "en-GB";
  // (in Russian an item that opens with two capitals, such as «ПКС», is an abbreviation and is left alone)
  const abbr = (s: string) => lang === "ru" && s.charAt(1) !== s.charAt(1).toLocaleLowerCase(locale);
  const lower = (s: string) => (lang === "fa" || abbr(s) || /^(ACL|Achilles|Aşil)/.test(s) ? s : s.charAt(0).toLocaleLowerCase(locale) + s.slice(1));
  // Russian writes academic titles in lower case inside a sentence and with a capital only at its start
  const upper = (s: string) => s.charAt(0).toLocaleUpperCase(locale) + s.slice(1);
  const ruNames = names.map((n, i) => (i ? lower(n) : upper(n)));
  if (lang === "tr") return [
    { q: "Cyprus Orthopaedics nerede?", a: "Girne’de, Karakum’daki Dr. Suat Günsel Girne Üniversitesi Hastanesi’nin içinde. Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nın kliniğidir. Ercan Havalimanı’ndan arabayla yaklaşık 45 dakika sürer. Adanın güneyinde benzer adla çalışan muayenehanelerle bir bağlantısı yoktur." },
    { q: "Nasıl randevu alınır?", a: `Hastane santralini (${PHONE}) arayıp Ortopedi ve Travmatoloji polikliniğini isteyin ya da hastanenin online randevu sayfasını kullanın.` },
    { q: "Klinikte hangi hekimler var?", a: `${names.slice(0, -1).join(", ")} ve ${names[names.length - 1]}. Hepsi ortopedi ve travmatoloji uzmanı ve Girne Üniversitesi Tıp Fakültesi öğretim üyesidir.` },
    { q: "Hangi ameliyatlar yapılıyor?", a: `${ops.slice(0, -1).map((x, i) => (i ? lower(x) : x)).join(", ")} ve ${lower(ops[ops.length - 1])}. Çoğu sorun ameliyatsız tedavi edilir; ameliyat gerekirse aynı hastanede yapılır.` },
    { q: "Kapalı ameliyat (artroskopi) yapılıyor mu?", a: "Evet. Diz ve omuzun yanı sıra dirsek, el bileği ve ayak bileğinde de artroskopik cerrahi yapılıyor. En sık yapılanlar menisküs ameliyatı, ön çapraz bağ ameliyatı, rotator manşet onarımı ve omuz çıkığı ameliyatıdır. Ameliyat, birkaç milimetrelik kesilerden kamera eşliğinde yapılır.", link: { href: areaUrl(lang, area("artroskopi")), label: area("artroskopi").title[lang] } },
    { q: "Kopan parmak yerine dikilebiliyor mu?", a: "Kopan parmağın yerine dikilmesi (replantasyon) mikrocerrahiyle yapılıyor. Uygun olup olmadığı yaralanmanın tipine, kopan parçanın durumuna ve geçen süreye bağlıdır; vakit kaybetmeden hastanenin acil servisine başvurun.", link: { href: areaUrl(lang, area("el-bilek")), label: area("el-bilek").title[lang] } },
    { q: "Kırık ya da yaralanmada nereye başvurulur?", a: "Kırıklar ve diğer yaralanmalar hastanenin acil servisi üzerinden değerlendirilir; randevu gerekmez." },
    { q: "Yurt dışından gelen hastalar için ne gerekiyor?", a: "Muayene ve görüşmeler Türkçe ve İngilizce yapılıyor. Elinizdeki röntgen, MR ve raporları ilk muayeneye getirin." },
  ];
  if (lang === "ru") return [
    { q: "Где находится Cyprus Orthopaedics?", a: "В Кирении (Гирне), Северный Кипр, в Университетской больнице им. д-ра Суата Гюнселя в районе Каракум. Это клиника кафедры ортопедии и травматологии медицинского факультета Университета Кирении. Дорога от аэропорта Эрджан на автомобиле занимает около 45 минут. Клиника не связана с частными практиками с похожим названием на юге острова." },
    { q: "Как записаться на приём?", a: `Позвоните в справочную больницы (${PHONE}) и попросите соединить вас с отделением ортопедии и травматологии либо воспользуйтесь страницей онлайн-записи на сайте больницы.` },
    { q: "Какие врачи работают в клинике?", a: `${ruNames.slice(0, -1).join(", ")} и ${ruNames[ruNames.length - 1]}. Все они — ортопеды-травматологи и преподаватели медицинского факультета Университета Кирении.` },
    { q: "Какие операции выполняются?", a: `${ops.slice(0, -1).map((x, i) => (i ? lower(x) : x)).join(", ")} и ${lower(ops[ops.length - 1])}. Большинство проблем лечится без операции; если операция необходима, она выполняется в этой же больнице.` },
    { q: "Выполняются ли малоинвазивные операции на суставах (артроскопия)?", a: "Да. Артроскопические операции выполняются не только на коленном и плечевом суставах, но и на локтевом, лучезапястном и голеностопном. Чаще всего проводятся операции на мениске, операции на передней крестообразной связке, восстановление вращательной манжеты плеча и операции при вывихе плеча. Операция выполняется через разрезы длиной в несколько миллиметров под контролем камеры.", link: { href: areaUrl(lang, area("artroskopi")), label: area("artroskopi").title[lang] } },
    { q: "Можно ли пришить оторванный палец?", a: "Пришивание оторванного пальца (реплантация) выполняется методами микрохирургии. Возможна ли она, зависит от характера травмы, состояния оторванной части и прошедшего времени; не теряя времени, обратитесь в отделение неотложной помощи больницы.", link: { href: areaUrl(lang, area("el-bilek")), label: area("el-bilek").title[lang] } },
    { q: "Куда обращаться при переломе или травме?", a: "Пациентов с переломами и другими травмами принимают через отделение неотложной помощи больницы; запись не требуется." },
    { q: "Что нужно пациентам из-за рубежа?", a: "Осмотры и консультации проводятся на турецком и английском языках. Возьмите на первый приём имеющиеся у вас рентгеновские снимки, результаты МРТ и заключения." },
  ];
  // the phone number sits inside a left-to-right isolate (U+2066 … U+2069), otherwise its groups would be laid out right to left
  if (lang === "fa") return [
    { q: "Cyprus Orthopaedics کجاست؟", a: "در گیرنه (کایرنیا)، قبرس شمالی، داخل بیمارستان دانشگاهی دکتر سوات گونسل در محلهٔ کاراکوم. این مرکز کلینیک گروه ارتوپدی و تروماتولوژی دانشکدهٔ پزشکی دانشگاه گیرنه است. از فرودگاه ارجان با خودرو حدود ۴۵ دقیقه راه است. این کلینیک با مطب‌هایی که در جنوب جزیره با نامی مشابه فعالیت می‌کنند ارتباطی ندارد." },
    { q: "چگونه نوبت بگیرم؟", a: `با تلفن مرکزی بیمارستان (\u2066${PHONE}\u2069) تماس بگیرید و درمانگاه ارتوپدی و تروماتولوژی را بخواهید، یا از صفحهٔ نوبت‌دهی اینترنتی بیمارستان استفاده کنید.` },
    { q: "چه پزشکانی در کلینیک هستند؟", a: `${names.slice(0, -1).join("، ")} و ${names[names.length - 1]}. همگی متخصص ارتوپدی و تروماتولوژی و عضو هیئت علمی دانشکدهٔ پزشکی دانشگاه گیرنه هستند.` },
    { q: "چه جراحی‌هایی انجام می‌شود؟", a: `${ops.slice(0, -1).map((x, i) => (i ? lower(x) : x)).join("، ")} و ${lower(ops[ops.length - 1])}. بیشتر مشکلات بدون جراحی درمان می‌شود؛ اگر جراحی لازم باشد، در همین بیمارستان انجام می‌شود.` },
    { q: "آیا جراحی بسته (آرتروسکوپی) انجام می‌شود؟", a: "بله. جراحی آرتروسکوپی علاوه بر زانو و شانه، در آرنج، مچ دست و مچ پا نیز انجام می‌شود. رایج‌ترین آن‌ها جراحی منیسک، جراحی رباط صلیبی قدامی، ترمیم روتاتور کاف و جراحی دررفتگی شانه است. این جراحی از راه برش‌هایی چندمیلی‌متری و با کمک دوربین انجام می‌شود.", link: { href: areaUrl(lang, area("artroskopi")), label: area("artroskopi").title[lang] } },
    { q: "آیا انگشت قطع‌شده را می‌توان پیوند زد؟", a: "پیوند زدن انگشت قطع‌شده (پیوند مجدد) با میکروجراحی انجام می‌شود. مناسب بودن آن به نوع آسیب، وضعیت قطعهٔ جداشده و زمان سپری‌شده بستگی دارد؛ بدون اتلاف وقت به اورژانس بیمارستان مراجعه کنید.", link: { href: areaUrl(lang, area("el-bilek")), label: area("el-bilek").title[lang] } },
    { q: "در صورت شکستگی یا آسیب‌دیدگی به کجا باید مراجعه کرد؟", a: "شکستگی‌ها و سایر آسیب‌ها از طریق اورژانس بیمارستان ارزیابی می‌شوند؛ نیازی به نوبت نیست." },
    { q: "بیمارانی که از خارج می‌آیند به چه چیزی نیاز دارند؟", a: "معاینه و مشاوره به زبان‌های ترکی و انگلیسی انجام می‌شود. عکس‌های رادیولوژی، ام‌آرآی و گزارش‌هایی را که دارید در نخستین معاینه همراه بیاورید." },
  ];
  return [
    { q: "Where is Cyprus Orthopaedics?", a: "In Kyrenia (Girne), North Cyprus, inside Dr. Suat Günsel University of Kyrenia Hospital in the Karakum district. It is the clinic of the University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology. Ercan Airport is about 45 minutes away by car. It has no connection with practices of a similar name in the south of the island." },
    { q: "How do I make an appointment?", a: `Call the hospital switchboard (${PHONE}) and ask for the Orthopaedics and Traumatology clinic, or use the hospital’s online appointment page.` },
    { q: "Which doctors work at the clinic?", a: `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}. All are orthopaedic and trauma surgeons and members of the University of Kyrenia Faculty of Medicine.` },
    { q: "Which operations are done?", a: `${ops.slice(0, -1).map((x, i) => (i ? lower(x) : x)).join(", ")} and ${lower(ops[ops.length - 1])}. Most problems are treated without surgery; when an operation is needed it is done in the same hospital.` },
    { q: "Is keyhole (arthroscopic) surgery available?", a: "Yes. Arthroscopic surgery is done in the knee and the shoulder, and also in the elbow, the wrist and the ankle. The most common operations are meniscus surgery, ACL reconstruction, rotator cuff repair and shoulder stabilisation. The operation is carried out through cuts a few millimetres long, under camera view.", link: { href: areaUrl(lang, area("artroskopi")), label: area("artroskopi").title[lang] } },
    { q: "Can a severed finger be reattached?", a: "Reattaching a severed finger (replantation) is done with microsurgery. Whether it is suitable depends on the type of injury, the condition of the severed part and the time elapsed; go to the hospital’s emergency department without delay.", link: { href: areaUrl(lang, area("el-bilek")), label: area("el-bilek").title[lang] } },
    { q: "Where do I go with a fracture or an injury?", a: "Fractures and other injuries are seen through the hospital’s emergency department; no appointment is needed." },
    { q: "What do patients from abroad need?", a: "Consultations are held in Turkish and English. Bring any X-rays, MRI scans and reports you have to the first visit." },
  ];
}
