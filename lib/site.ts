export type Lang = "tr" | "en" | "ru" | "fa";
export const LANGS: Lang[] = ["tr", "en", "ru", "fa"];
export const SITE = "https://www.cyprusorthopaedics.com";
/** True keeps search engines out (noindex + robots Disallow). Opened to search on 2026-10-04. */
export const PREVIEW = false;
/** Search Console and Bing Webmaster ownership codes (the content value of the meta tag each tool gives). Empty until supplied. */
export const GOOGLE_VERIFY = "";
export const BING_VERIFY = "1F3C90711822CA94E61DD635AA56A0C1";
export const PHONE = "+90 392 444 99 39";
export const PHONE_HREF = "tel:+903924449939";
/** WhatsApp line shown as the floating button: Dr. Gürhan's own number, by his decision (4 Oct 2026). Digits only, country code first. */
export const WHATSAPP = "905391126898";
export const WHATSAPP_UI: Record<Lang, { open: string; title: string; sub: string; hello: string; placeholder: string; send: string; close: string; note: string; fallback: string }> = {
  tr: { open: "WhatsApp’tan yazın", title: "Cyprus Orthopaedics", sub: "Mesajınız Yrd. Doç. Dr. Utku Gürhan’a ulaşır", hello: "Merhaba, size nasıl yardımcı olabiliriz? Mesajınızı yazın, WhatsApp’tan yanıtlayalım.", placeholder: "Mesajınızı yazın…", send: "Gönder", close: "Kapat", note: "Gönder’e bastığınızda WhatsApp açılır. Acil durumda hastanenin acil servisine başvurun.", fallback: "Merhaba, Cyprus Orthopaedics sitesinden yazıyorum." },
  en: { open: "Message us on WhatsApp", title: "Cyprus Orthopaedics", sub: "Your message goes to Asst. Prof. Dr. Utku Gürhan", hello: "Hello, how can we help? Write your message and we will reply on WhatsApp.", placeholder: "Type your message…", send: "Send", close: "Close", note: "Pressing Send opens WhatsApp. In an emergency, go to the hospital’s emergency department.", fallback: "Hello, I am writing from the Cyprus Orthopaedics website." },
  ru: { open: "Написать в WhatsApp", title: "Cyprus Orthopaedics", sub: "Ваше сообщение получит асс. проф., д-р Утку Гюрхан", hello: "Здравствуйте! Чем мы можем помочь? Напишите сообщение, мы ответим в WhatsApp.", placeholder: "Напишите сообщение…", send: "Отправить", close: "Закрыть", note: "После нажатия «Отправить» откроется WhatsApp. В экстренном случае обратитесь в отделение неотложной помощи больницы.", fallback: "Здравствуйте, пишу с сайта Cyprus Orthopaedics." },
  fa: { open: "پیام در واتس‌اپ", title: "Cyprus Orthopaedics", sub: "پیام شما به دکتر اوتکو گورهان می‌رسد", hello: "سلام، چطور می‌توانیم کمکتان کنیم؟ پیام خود را بنویسید؛ در واتس‌اپ پاسخ می‌دهیم.", placeholder: "پیام خود را بنویسید…", send: "ارسال", close: "بستن", note: "با زدن «ارسال»، واتس‌اپ باز می‌شود. در موارد اورژانسی به اورژانس بیمارستان مراجعه کنید.", fallback: "سلام، از طریق وب‌سایت Cyprus Orthopaedics پیام می‌دهم." },
};
export const APPT: Record<Lang, string> = {
  tr: "https://hospital.kyrenia.edu.tr/online-appointment/",
  en: "https://hospital.kyrenia.edu.tr/online-appointment/?lang=en",
  ru: "https://hospital.kyrenia.edu.tr/online-appointment/?lang=en",
  fa: "https://hospital.kyrenia.edu.tr/online-appointment/?lang=en",
};
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Dr.+Suat+G%C3%BCnsel+Girne+%C3%9Cniversitesi+Hastanesi";
export const DOCTORS_SEGMENT: Record<Lang, string> = { tr: "hekimler", en: "doctors", ru: "vrachi", fa: "pezeshkan" };
/** Consultations are held in Turkish and English only; the Russian and Persian pages say so wherever an appointment is offered. */
export const CONSULT_NOTE: Partial<Record<Lang, string>> = { ru: "Приём ведётся на турецком и английском языках.", fa: "معاینه و مشاوره به زبان‌های ترکی و انگلیسی انجام می‌شود." };
/** Each language's own name, for the language switcher. */
export const LANG_NAME: Record<Lang, string> = { tr: "Türkçe", en: "English", ru: "Русский", fa: "فارسی" };
/** Persian is written from right to left. */
export const dir = (lang: Lang): "ltr" | "rtl" => (lang === "fa" ? "rtl" : "ltr");
const DATE_LOCALE: Record<Lang, string> = { tr: "tr-TR", en: "en-GB", ru: "ru-RU", fa: "fa-IR" };
/** A date written out in the page's language (the Persian pages use the Iranian calendar, as readers there expect). */
export const fmtDate = (iso: string, lang: Lang) => new Date(iso + "T12:00:00Z").toLocaleDateString(DATE_LOCALE[lang], { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
/** Numerals as the language writes them: Persian digits on the Persian pages. */
export const num = (n: number | string, lang: Lang) => (lang === "fa" ? String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]) : String(n));
/** The same page in every language, as site paths (language switcher). */
export const alts = (path: (l: Lang) => string) => Object.fromEntries(LANGS.map((l) => [l, path(l)])) as Record<Lang, string>;
/** The same page in every language, as absolute URLs with x-default (hreflang). */
export const hreflangs = (path: (l: Lang) => string): Record<string, string> => ({ ...Object.fromEntries(LANGS.map((l) => [l, SITE + path(l)])), "x-default": SITE + path("tr") });

type Region = { t: string; d: string };
type Step = { t: string; d: string };

export type Ui = {
  brandSub: [string, string];
  nav: { areas: string; doctors: string; process: string; contact: string; book: string; menu: string };
  hero: { h1a: string; h1b: string; place: string; lead: string; cta1: string; cta2: string; photoAlt: string };
  photos: string[];
  media: { film: string; team: string; hospital: string; band: string };
  plan: { h: string; p: string; items: string[] };
  route: { h: string; p: string; items: string[] };
  reel: { prev: string; next: string; play: string; pause: string };
  areas: { h: string; p: string; items: Region[]; note: string };
  doctors: { h: string; p: string; profile: string; photoPending: string };
  process: { h: string; p: string; steps: Step[] };
  uni: { h: string; p1: string; p2: string; paperLead: string; paper: string };
  intl: { h: string; p: string; items: Region[] };
  contact: { h: string; p: string; call: string; online: string; addrH: string; addr: string[]; map: string; hoursNote: string };
  footer: { disclaimer: string; rights: string; personal: string };
  profile: { back: string; summary: string; focus: string; focusPending: string; path: string; academic: string; selected: string; books: string; courses: string; memberships: string; langs: string; links: string; others: string; book: string; site: string };
  meta: { title: string; desc: string };
};

export const ui: Record<Lang, Ui> = {
  tr: {
    brandSub: ["Girne Üniversitesi Tıp Fakültesi", "Ortopedi ve Travmatoloji Anabilim Dalı"],
    nav: { areas: "Tedavi alanları", doctors: "Hekimlerimiz", process: "Süreç", contact: "İletişim", book: "Randevu al", menu: "Menü" },
    hero: {
      h1a: "Ortopedi ve",
      h1b: "Travmatoloji",
      place: "Dr. Suat Günsel Girne Üniversitesi Hastanesi, Girne",
      lead: "Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nın kliniği. Kırık ve yaralanmalardan eklem protezine, artroskopiden el cerrahisine kadar tanı ve tedavi.",
      cta1: "Randevu al",
      cta2: "Hekimlerimiz",
      photoAlt: "Ortopedi ekibi artroskopi ameliyatında",
    },
    photos: ["İki cerrah ameliyat sırasında", "Kısa video: hastane binası ve çevresi, danışma, MR görüntüsünün incelenmesi, ameliyathane, alet takımları, artroskopi görüntüsü ve ekip", "Ekip ameliyat masasında"],
    media: { film: "Kısa video: Dr. Suat Günsel Girne Üniversitesi Hastanesi’nin havadan görünümü, ambulans ve hastane avlusu", team: "Ortopedi ekibi artroskopi ameliyatında", hospital: "Dr. Suat Günsel Girne Üniversitesi Hastanesi", band: "Yaptığımız ameliyatlar" },
    plan: { h: "Ameliyattan önce kırığı üç boyutlu inceleriz", p: "Eklem yüzeyine uzanan ya da çok parçalı kırıklarda bilgisayarlı tomografiyi üç boyutlu görüntüye çevirir, parçaların yerini ve nasıl tespit edeceğimizi ameliyattan önce planlarız. Görüntüleri kendi ekranlarımızdan çektik; hiçbirinde hasta kimliğine ait bilgi yok.", items: ["Omuz", "Üst kol", "El ve bilek", "Uyluk", "Diz", "Ayak bileği", "Ameliyatta röntgen kontrolü"] },
    route: { h: "Kapıdan ameliyathaneye", p: "Geldiğinizde göreceğiniz yerler: kampüs, acil servis, karşılama ve ameliyathane. Görüntüleri kendimiz, telefonla çektik.", items: ["Kampüs", "Hastane binası", "Acil servis", "Ambulans", "Karşılama", "Ameliyathane girişi", "Ameliyat ekibi", "Mikroskopik hassasiyet"] },
    reel: { prev: "Önceki görüntüler", next: "Sonraki görüntüler", play: "Oynat", pause: "Duraklat" },
    areas: {
      h: "Tedavi alanları",
      p: "Şikâyetinizin olduğu bölgeyi seçin. Çoğu sorunu ameliyatsız tedavi ediyoruz; ameliyat gerekirse aynı hastanede yapıyoruz.",
      items: [
        { t: "Omuz ve dirsek", d: "Rotator manşet yırtığı, omuz çıkığı, donuk omuz, tenisçi dirseği, omuz ve dirsek çevresi kırıkları" },
        { t: "El ve el bileği", d: "Karpal tünel sendromu, tetik parmak, tendon ve sinir yaralanmaları, el bileği kırıkları, replantasyon (kopan parmağın yerine dikilmesi), parmak ucu yaralanmaları, tırnak problemleri" },
        { t: "Kalça", d: "Kalça kireçlenmesi ve kalça protezi, kalça kırığı" },
        { t: "Diz", d: "Menisküs yırtığı, ön çapraz bağ yaralanması, diz kireçlenmesi ve diz protezi" },
        { t: "Ayak ve ayak bileği", d: "Ayak bileği burkulması ve kırığı, halluks valgus, Aşil tendonu sorunları" },
        { t: "Artroskopik cerrahi (kapalı eklem ameliyatı)", d: "Diz, omuz, dirsek, el bileği ve ayak bileği artroskopisi: menisküs ameliyatı, ön çapraz bağ ameliyatı, rotator manşet onarımı, omuz çıkığı ameliyatı" },
        { t: "Kırık ve travma", d: "Acil kırık tedavisi, çoklu yaralanmalar, kaynamayan ve yanlış kaynayan kırıklar" },
        { t: "Çocuk ortopedisi", d: "Çocukluk çağı kırıkları ve büyüme dönemine özgü ortopedik sorunlar" },
        { t: "Kemik ve yumuşak doku tümörleri", d: "İyi huylu kemik tümörleri ve kistleri, yumuşak doku kitleleri, sarkomlar, kemik metastazları" },
      ],
      note: "Bölge sayfaları genel bilgi içindir; tanı ve tedavi muayenede belirlenir.",
    },
    doctors: {
      h: "Hekimlerimiz",
      p: "Üç ortopedi uzmanından oluşan ekibimiz, değerlendirme ve tanıdan cerrahi ve cerrahi dışı tedavilere uzanan tüm süreçleri yakın iş birliği içinde yürütmektedir. Ortak bilgi ve deneyimimizle, her hastamız için en uygun tedavi yaklaşımını belirlemeyi ve en yüksek faydayı sağlamayı hedeflemekteyiz.",
      profile: "Özgeçmiş",
      photoPending: "Fotoğraf eklenecek",
    },
    process: {
      h: "Süreç nasıl işliyor",
      p: "Randevudan kontrol muayenesine kadar her şey aynı hastanede.",
      steps: [
        { t: "Randevu", d: "Santrali arayın ya da hastanenin online randevu sayfasını kullanın. Acil durumda doğrudan acil servise gelin." },
        { t: "Muayene ve görüntüleme", d: "Röntgen, MR ve diğer tetkikler hastanede yapılıyor. Elinizde eski film ve rapor varsa getirin." },
        { t: "Tedavi planı", d: "Ameliyatsız ve cerrahi seçenekleri, iyileşme süresini ve riskleri anlatıyoruz. Kararı birlikte veriyoruz." },
        { t: "Tedavi ve takip", d: "Tedaviden sonra kontrollerinizi ve gerekiyorsa fizik tedaviyi planlıyoruz." },
      ],
    },
    uni: {
      h: "Üniversite kliniği",
      p1: "Girne Üniversitesi Tıp Fakültesi’ne bağlı bir klinik: hasta bakımının yanında tıp öğrencilerinin eğitimi ve klinik araştırma.",
      p2: "Hakemli dergilerde yayımlanmış 50’den fazla makale. Yayın listeleri hekim sayfalarında.",
      paperLead: "Çalışmalarımız",
      paper: "Gürhan U, Kahve Y, Sarı E, Umur FL. Composite graft survival in Allen zone II fingertip amputations: independent predictors of graft failure. Injury. 2026;57(10):113587.",
    },
    intl: {
      h: "Yurt dışından gelenler",
      p: "Muayene ve görüşmeleri Türkçe ve İngilizce yapıyoruz.",
      items: [
        { t: "Ulaşım", d: "Hastane Girne’de, Karakum’da. Ercan Havalimanı’ndan arabayla yaklaşık 45 dakika." },
        { t: "Gelmeden önce", d: "Elinizdeki röntgen, MR ve raporları ilk muayeneye getirin." },
        { t: "Randevu", d: "Santrali arayın ya da online randevu sayfasını kullanın." },
      ],
    },
    contact: {
      h: "Randevu ve iletişim",
      p: "Randevuları hastane santrali veriyor. Aradığınızda Ortopedi ve Travmatoloji polikliniğini isteyin.",
      call: "Santrali ara",
      online: "Online randevu (hastane sitesi)",
      addrH: "Adres",
      addr: ["Dr. Suat Günsel Girne Üniversitesi Hastanesi", "Şehit Yahya Bakır Sokak, Karakum", "Girne, Kuzey Kıbrıs"],
      map: "Haritada aç",
      hoursNote: "Poliklinik saatlerini santralden öğrenebilirsiniz.",
    },
    footer: {
      disclaimer: "Bu sitedeki bilgiler genel bilgilendirme amaçlıdır; muayene ve hekim değerlendirmesinin yerini tutmaz.",
      rights: "Tüm hakları saklıdır.",
      personal: "Kişisel site",
    },
    profile: { back: "Hekimlerimiz", summary: "Özgeçmiş", focus: "Klinik ilgi alanları", focusPending: "Klinik ilgi alanları hekimden alınacak.", path: "Eğitim ve görevler", academic: "Akademik çalışmalar", selected: "Seçilmiş yayınlar", books: "Kitap bölümleri", courses: "Kurslar ve ek eğitim", memberships: "Yeterlik ve üyelikler", langs: "Muayene dilleri", links: "Akademik profiller", others: "Diğer hekimler", book: "Randevu al", site: "Kişisel site" },
    meta: {
      title: "Girne Ortopedi ve Travmatoloji · Cyprus Orthopaedics",
      desc: "Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı kliniği: kırık, protez, artroskopi, el cerrahisi, ayak, tümör. Randevu: +90 392 444 99 39.",
    },
  },
  en: {
    brandSub: ["University of Kyrenia Faculty of Medicine", "Department of Orthopaedics and Traumatology"],
    nav: { areas: "What we treat", doctors: "Our doctors", process: "Your visit", contact: "Contact", book: "Book an appointment", menu: "Menu" },
    hero: {
      h1a: "Orthopaedics &",
      h1b: "Traumatology",
      place: "Dr. Suat Günsel University of Kyrenia Hospital, Kyrenia, North Cyprus",
      lead: "The clinic of the Department of Orthopaedics and Traumatology, University of Kyrenia Faculty of Medicine. Diagnosis and treatment from fractures and injuries to joint replacement, arthroscopy and hand surgery.",
      cta1: "Book an appointment",
      cta2: "Our doctors",
      photoAlt: "The orthopaedic team during an arthroscopy",
    },
    photos: ["Two surgeons operating", "Short video: the hospital building and its surroundings, reception, reviewing an MRI scan, operating theatre, instrument sets, arthroscopy view and the team", "The team at the operating table"],
    media: { film: "Short video: aerial views of Dr. Suat Günsel University of Kyrenia Hospital, an ambulance and the hospital courtyard", team: "The orthopaedic team during an arthroscopy", hospital: "Dr. Suat Günsel University of Kyrenia Hospital", band: "Operations we perform" },
    plan: { h: "We study the fracture in three dimensions before we operate", p: "For fractures that reach a joint surface or break into several pieces, we turn the CT scan into a three-dimensional image and plan, before the operation, where each fragment goes and how we will fix it. We filmed these from our own screens; none of them shows any patient-identifying information.", items: ["Shoulder", "Upper arm", "Hand and wrist", "Thigh", "Knee", "Ankle", "X-ray check during surgery"] },
    route: { h: "From the gate to the operating theatre", p: "What you will see when you arrive: the campus, the emergency department, reception and the theatre. We filmed these ourselves, on a phone.", items: ["Campus", "Hospital building", "Emergency department", "Ambulance", "Reception", "Theatre entrance", "The surgical team", "Microscopic precision"] },
    reel: { prev: "Previous clips", next: "Next clips", play: "Play", pause: "Pause" },
    areas: {
      h: "What we treat",
      p: "Choose the part of the body that is troubling you. We treat most problems without surgery; when an operation is needed, we do it in the same hospital.",
      items: [
        { t: "Shoulder and elbow", d: "Rotator cuff tears, shoulder dislocation, frozen shoulder, tennis elbow, fractures around the shoulder and elbow" },
        { t: "Hand and wrist", d: "Carpal tunnel syndrome, trigger finger, tendon and nerve injuries, wrist fractures, replantation (reattaching a severed finger), fingertip injuries, nail problems" },
        { t: "Hip", d: "Hip arthritis and hip replacement, hip fracture" },
        { t: "Knee", d: "Meniscal tears, anterior cruciate ligament injury, knee arthritis and knee replacement" },
        { t: "Foot and ankle", d: "Ankle sprains and fractures, hallux valgus (bunion), Achilles tendon problems" },
        { t: "Arthroscopic surgery (keyhole joint surgery)", d: "Knee, shoulder, elbow, wrist and ankle arthroscopy: meniscus surgery, ACL reconstruction, rotator cuff repair, shoulder stabilisation" },
        { t: "Fractures and trauma", d: "Emergency fracture care, multiple injuries, non-union and malunion" },
        { t: "Children’s orthopaedics", d: "Childhood fractures and orthopaedic problems of the growing skeleton" },
        { t: "Bone and soft tissue tumours", d: "Benign bone tumours and cysts, soft tissue lumps, sarcomas, bone metastases" },
      ],
      note: "The area pages are general information; diagnosis and treatment are decided at examination.",
    },
    doctors: {
      h: "Our doctors",
      p: "Our team of three orthopaedic surgeons works in close collaboration at every stage, from assessment and diagnosis to surgical and non-surgical treatment. Drawing on our shared knowledge and experience, we aim to find the most suitable treatment for each patient and to achieve the greatest benefit.",
      profile: "Profile",
      photoPending: "Photo to be added",
    },
    process: {
      h: "How your visit works",
      p: "From the appointment to the follow-up visit, everything is in the same hospital.",
      steps: [
        { t: "Appointment", d: "Call the hospital switchboard or use the hospital’s online appointment page. In an emergency, go straight to the emergency department." },
        { t: "Examination and imaging", d: "X-rays, MRI and other tests are done in the hospital. Bring any earlier images and reports you have." },
        { t: "Treatment plan", d: "We explain the non-surgical and surgical options, the recovery time and the risks. We decide together." },
        { t: "Treatment and follow-up", d: "After treatment we plan your follow-up visits and, where needed, physiotherapy." },
      ],
    },
    uni: {
      h: "A university clinic",
      p1: "A clinic of the University of Kyrenia Faculty of Medicine: alongside patient care, the teaching of medical students and clinical research.",
      p2: "More than 50 articles published in peer-reviewed journals. The lists are on the doctors’ pages.",
      paperLead: "Our research",
      paper: "Gürhan U, Kahve Y, Sarı E, Umur FL. Composite graft survival in Allen zone II fingertip amputations: independent predictors of graft failure. Injury. 2026;57(10):113587.",
    },
    intl: {
      h: "Patients from abroad",
      p: "We hold consultations in Turkish and English.",
      items: [
        { t: "Getting here", d: "The hospital is in the Karakum district of Kyrenia, about 45 minutes by road from Ercan Airport." },
        { t: "Before you come", d: "Bring any X-rays, MRI scans and reports you have to the first visit." },
        { t: "Appointments", d: "Call the hospital switchboard or use the online appointment page." },
      ],
    },
    contact: {
      h: "Appointments and contact",
      p: "The hospital switchboard makes the appointments. Ask for the Orthopaedics and Traumatology clinic.",
      call: "Call the switchboard",
      online: "Online appointment (hospital website)",
      addrH: "Address",
      addr: ["Dr. Suat Günsel University of Kyrenia Hospital", "Şehit Yahya Bakır Sokak, Karakum", "Kyrenia, North Cyprus"],
      map: "Open in Maps",
      hoursNote: "Call the switchboard for clinic hours.",
    },
    footer: {
      disclaimer: "The information on this site is for general guidance and does not replace an examination and a doctor’s assessment.",
      rights: "All rights reserved.",
      personal: "Personal site",
    },
    profile: { back: "Our doctors", summary: "Biography", focus: "Clinical interests", focusPending: "Clinical interests to be supplied by the doctor.", path: "Training and posts", academic: "Academic work", selected: "Selected publications", books: "Book chapters", courses: "Courses and further training", memberships: "Certification and memberships", langs: "Consultation languages", links: "Academic profiles", others: "Other doctors", book: "Book an appointment", site: "Personal site" },
    meta: {
      title: "Orthopaedics in Kyrenia, North Cyprus · Cyprus Orthopaedics",
      desc: "Orthopaedics and traumatology at the University of Kyrenia Faculty of Medicine, North Cyprus: fractures, joint replacement, arthroscopy, hand and foot surgery.",
    },
  },
  ru: {
    brandSub: ["Медицинский факультет Университета Кирении", "Кафедра ортопедии и травматологии"],
    nav: { areas: "Лечение", doctors: "Наши врачи", process: "Порядок приёма", contact: "Контакты", book: "Записаться на приём", menu: "Меню" },
    hero: {
      h1a: "Ортопедия и",
      h1b: "травматология",
      place: "Университетская больница им. д-ра Суата Гюнселя, Кирения, Северный Кипр",
      lead: "Клиника кафедры ортопедии и травматологии медицинского факультета Университета Кирении. Диагностика и лечение: от переломов и травм до эндопротезирования суставов, артроскопии и хирургии кисти.",
      cta1: "Записаться на приём",
      cta2: "Наши врачи",
      photoAlt: "Бригада ортопедов во время артроскопической операции",
    },
    photos: ["Два хирурга во время операции", "Короткое видео: здание больницы и его окрестности, стойка информации, просмотр снимков МРТ, операционная, наборы инструментов, артроскопическое изображение и бригада", "Бригада у операционного стола"],
    media: { film: "Короткое видео: вид с воздуха на Университетскую больницу им. д-ра Суата Гюнселя (Кирения), машина скорой помощи и двор больницы", team: "Бригада ортопедов во время артроскопической операции", hospital: "Университетская больница им. д-ра Суата Гюнселя (Кирения)", band: "Операции, которые мы выполняем" },
    plan: { h: "Перед операцией мы изучаем перелом в трёх измерениях", p: "При переломах, доходящих до суставной поверхности, и при многооскольчатых переломах мы преобразуем компьютерную томограмму в трёхмерное изображение и ещё до операции планируем, где должен находиться каждый отломок и как мы будем его фиксировать. Эти кадры сняты с наших собственных экранов; ни на одном из них нет сведений, позволяющих установить личность пациента.", items: ["Плечевой сустав", "Плечевая кость", "Кисть и запястье", "Бедро", "Колено", "Голеностопный сустав", "Рентген-контроль во время операции"] },
    route: { h: "От входа до операционной", p: "Что вы увидите по приезде: кампус, отделение неотложной помощи, регистратура и операционная. Съёмку мы вели сами, на телефон.", items: ["Кампус", "Здание больницы", "Отделение неотложной помощи", "Машина скорой помощи", "Регистратура", "Вход в операционную", "Операционная бригада", "Микроскопическая точность"] },
    reel: { prev: "Предыдущие видео", next: "Следующие видео", play: "Воспроизвести", pause: "Пауза" },
    areas: {
      h: "Направления лечения",
      p: "Выберите область, которая вас беспокоит. Большинство проблем мы лечим без операции; если операция необходима, мы выполняем её в этой же больнице.",
      items: [
        { t: "Плечо и локоть", d: "Разрыв вращательной манжеты плеча, вывих плеча, «замороженное плечо», локоть теннисиста, переломы в области плечевого и локтевого суставов" },
        { t: "Кисть и запястье", d: "Синдром запястного (карпального) канала, щёлкающий палец, повреждения сухожилий и нервов, переломы запястья, реплантация (пришивание оторванного пальца), травмы кончиков пальцев, проблемы с ногтями" },
        { t: "Тазобедренный сустав", d: "Артроз и эндопротезирование тазобедренного сустава, перелом проксимального отдела бедра (шейки бедра)" },
        { t: "Колено", d: "Разрыв мениска, повреждение передней крестообразной связки (ПКС), артроз и эндопротезирование коленного сустава" },
        { t: "Стопа и голеностопный сустав", d: "Растяжение связок и перелом голеностопного сустава, вальгусная деформация большого пальца стопы (hallux valgus), проблемы с ахилловым сухожилием" },
        { t: "Артроскопическая хирургия (малоинвазивные операции на суставах)", d: "Артроскопия коленного, плечевого, локтевого, лучезапястного и голеностопного суставов: операции на мениске, операции на передней крестообразной связке, восстановление вращательной манжеты плеча, операции при вывихе плеча" },
        { t: "Переломы и травмы", d: "Неотложное лечение переломов, множественные травмы, несросшиеся и неправильно сросшиеся переломы" },
        { t: "Детская ортопедия", d: "Переломы у детей и ортопедические проблемы, характерные для периода роста" },
        { t: "Опухоли костей и мягких тканей", d: "Доброкачественные опухоли и кисты костей, образования мягких тканей, саркомы, метастазы в кости" },
      ],
      note: "Страницы по областям содержат общую информацию; диагноз и лечение определяются на осмотре.",
    },
    doctors: {
      h: "Наши врачи",
      p: "Наша команда из трёх ортопедов-травматологов в тесном сотрудничестве ведёт все этапы — от обследования и постановки диагноза до хирургического и нехирургического лечения. Опираясь на общие знания и опыт, мы стремимся определить для каждого пациента наиболее подходящий подход к лечению и добиться наибольшей пользы.",
      profile: "О враче",
      photoPending: "Фотография будет добавлена",
    },
    process: {
      h: "Как проходит приём и лечение",
      p: "От записи до контрольного осмотра — всё в одной больнице.",
      steps: [
        { t: "Запись", d: "Позвоните в справочную больницы или воспользуйтесь страницей онлайн-записи на сайте больницы. В экстренном случае обращайтесь сразу в отделение неотложной помощи." },
        { t: "Осмотр и обследование", d: "Рентген, МРТ и другие исследования выполняются в больнице. Если у вас есть прежние снимки и заключения, возьмите их с собой." },
        { t: "План лечения", d: "Мы объясняем варианты лечения без операции и с операцией, сроки восстановления и риски. Решение принимаем вместе." },
        { t: "Лечение и наблюдение", d: "После лечения мы планируем контрольные осмотры и, при необходимости, физиотерапию." },
      ],
    },
    uni: {
      h: "Университетская клиника",
      p1: "Клиника при медицинском факультете Университета Кирении: помимо лечения пациентов — обучение студентов-медиков и клинические исследования.",
      p2: "Более 50 статей, опубликованных в рецензируемых журналах. Списки публикаций — на страницах врачей.",
      paperLead: "Наши исследования",
      paper: "Gürhan U, Kahve Y, Sarı E, Umur FL. Composite graft survival in Allen zone II fingertip amputations: independent predictors of graft failure. Injury. 2026;57(10):113587.",
    },
    intl: {
      h: "Пациентам из-за рубежа",
      p: "Осмотры и консультации мы проводим на турецком и английском языках.",
      items: [
        { t: "Как добраться", d: "Больница находится в Кирении, в районе Каракум. От аэропорта Эрджан — около 45 минут на автомобиле." },
        { t: "Перед приездом", d: "Возьмите на первый приём имеющиеся у вас рентгеновские снимки, результаты МРТ и заключения." },
        { t: "Запись", d: "Позвоните в справочную больницы или воспользуйтесь страницей онлайн-записи." },
      ],
    },
    contact: {
      h: "Запись и контакты",
      p: "Запись на приём ведёт справочная больницы. Когда позвоните, попросите соединить вас с отделением ортопедии и травматологии.",
      call: "Позвонить в справочную",
      online: "Онлайн-запись (сайт больницы)",
      addrH: "Адрес",
      addr: ["Университетская больница им. д-ра Суата Гюнселя", "Şehit Yahya Bakır Sokak, Karakum", "Кирения, Северный Кипр"],
      map: "Открыть на карте",
      hoursNote: "Часы амбулаторного приёма можно узнать в справочной больницы.",
    },
    footer: {
      disclaimer: "Информация на этом сайте носит общий ознакомительный характер и не заменяет осмотра и заключения врача.",
      rights: "Все права защищены.",
      personal: "Личный сайт",
    },
    profile: { back: "Наши врачи", summary: "Биография", focus: "Области клинических интересов", focusPending: "Области клинических интересов будут указаны врачом.", path: "Образование и должности", academic: "Научная работа", selected: "Избранные публикации", books: "Главы в книгах", courses: "Курсы и дополнительное обучение", memberships: "Сертификация и членство", langs: "Языки консультаций", links: "Научные профили", others: "Другие врачи", book: "Записаться на приём", site: "Личный сайт" },
    meta: {
      title: "Ортопед в Кирении, Северный Кипр · Cyprus Orthopaedics",
      desc: "Ортопед-травматолог в Кирении, Северный Кипр: клиника медицинского факультета Университета Кирении. Переломы, эндопротезирование, артроскопия, хирургия кисти.",
    },
  },
  fa: {
    brandSub: ["دانشکدهٔ پزشکی دانشگاه گیرنه", "گروه ارتوپدی و تروماتولوژی"],
    nav: { areas: "زمینه‌های درمان", doctors: "پزشکان ما", process: "روند مراجعه", contact: "تماس", book: "گرفتن نوبت", menu: "منو" },
    hero: {
      h1a: "ارتوپدی و",
      h1b: "تروماتولوژی",
      place: "بیمارستان دانشگاهی دکتر سوات گونسل، گیرنه، قبرس شمالی",
      lead: "کلینیک گروه ارتوپدی و تروماتولوژی دانشکدهٔ پزشکی دانشگاه گیرنه. تشخیص و درمان، از شکستگی‌ها و آسیب‌ها تا تعویض مفصل، آرتروسکوپی و جراحی دست.",
      cta1: "گرفتن نوبت",
      cta2: "پزشکان ما",
      photoAlt: "تیم ارتوپدی در حین جراحی آرتروسکوپی",
    },
    photos: ["دو جراح در حین عمل", "ویدئوی کوتاه: ساختمان بیمارستان و محیط اطراف آن، میز اطلاعات، بررسی تصویر ام‌آرآی، اتاق عمل، ست‌های ابزار جراحی، تصویر آرتروسکوپی و تیم جراحی", "تیم جراحی کنار تخت عمل"],
    media: { film: "ویدئوی کوتاه: نمای هوایی بیمارستان دانشگاهی دکتر سوات گونسل گیرنه، آمبولانس و حیاط بیمارستان", team: "تیم ارتوپدی در حین جراحی آرتروسکوپی", hospital: "بیمارستان دانشگاهی دکتر سوات گونسل، گیرنه", band: "جراحی‌هایی که انجام می‌دهیم" },
    plan: { h: "پیش از جراحی، شکستگی را سه‌بعدی بررسی می‌کنیم", p: "در شکستگی‌هایی که به سطح مفصل می‌رسند یا چندتکه‌اند، سی‌تی‌اسکن را به تصویر سه‌بعدی تبدیل می‌کنیم و پیش از عمل برنامه‌ریزی می‌کنیم که هر قطعه کجا قرار بگیرد و چگونه آن را ثابت کنیم. این تصاویر را از صفحه‌نمایش‌های خودمان ضبط کرده‌ایم؛ در هیچ‌یک از آن‌ها اطلاعاتی از هویت بیمار وجود ندارد.", items: ["شانه", "بازو", "دست و مچ دست", "ران", "زانو", "مچ پا", "کنترل با عکس رادیولوژی حین عمل"] },
    route: { h: "از در ورودی تا اتاق عمل", p: "جاهایی که هنگام مراجعه می‌بینید: پردیس دانشگاه، اورژانس، پذیرش و اتاق عمل. این تصاویر را خودمان با تلفن همراه گرفته‌ایم.", items: ["پردیس دانشگاه", "ساختمان بیمارستان", "اورژانس", "آمبولانس", "پذیرش", "ورودی اتاق عمل", "تیم جراحی", "دقت میکروسکوپی"] },
    reel: { prev: "ویدئوهای قبلی", next: "ویدئوهای بعدی", play: "پخش", pause: "مکث" },
    areas: {
      h: "زمینه‌های درمان",
      p: "ناحیه‌ای را که در آن مشکل دارید انتخاب کنید. بیشتر مشکلات را بدون جراحی درمان می‌کنیم؛ اگر جراحی لازم باشد، آن را در همین بیمارستان انجام می‌دهیم.",
      items: [
        { t: "شانه و آرنج", d: "پارگی روتاتور کاف، دررفتگی شانه، شانهٔ یخ‌زده، آرنج تنیس‌بازان، شکستگی‌های اطراف شانه و آرنج" },
        { t: "دست و مچ دست", d: "سندرم تونل کارپ، انگشت ماشه‌ای، آسیب‌های تاندون و عصب، شکستگی‌های مچ دست، پیوند مجدد (پیوند زدن انگشت قطع‌شده)، آسیب‌های نوک انگشت، مشکلات ناخن" },
        { t: "لگن (مفصل ران)", d: "آرتروز لگن و تعویض مفصل لگن، شکستگی لگن" },
        { t: "زانو", d: "پارگی منیسک، آسیب رباط صلیبی قدامی (ACL)، آرتروز زانو و تعویض مفصل زانو" },
        { t: "پا و مچ پا", d: "پیچ‌خوردگی و شکستگی مچ پا، هالوکس والگوس (انحراف شست پا)، مشکلات تاندون آشیل" },
        { t: "جراحی آرتروسکوپی (جراحی بستهٔ مفصل)", d: "آرتروسکوپی زانو، شانه، آرنج، مچ دست و مچ پا: جراحی منیسک، جراحی رباط صلیبی قدامی، ترمیم روتاتور کاف، جراحی دررفتگی شانه" },
        { t: "شکستگی و تروما", d: "درمان اورژانسی شکستگی، آسیب‌های متعدد، شکستگی‌های جوش‌نخورده و بدجوش‌خورده" },
        { t: "ارتوپدی کودکان", d: "شکستگی‌های دوران کودکی و مشکلات ارتوپدی ویژهٔ دوران رشد" },
        { t: "تومورهای استخوان و بافت نرم", d: "تومورها و کیست‌های خوش‌خیم استخوان، توده‌های بافت نرم، سارکوم‌ها، متاستازهای استخوان" },
      ],
      note: "صفحه‌های مربوط به هر ناحیه برای اطلاعات عمومی است؛ تشخیص و درمان در معاینه مشخص می‌شود.",
    },
    doctors: {
      h: "پزشکان ما",
      p: "تیم ما، متشکل از سه متخصص ارتوپدی، همهٔ مراحل را از ارزیابی و تشخیص تا درمان‌های جراحی و غیرجراحی با همکاری نزدیک پیش می‌برد. با دانش و تجربهٔ مشترک خود می‌کوشیم برای هر بیمار مناسب‌ترین رویکرد درمانی را تعیین کنیم و بیشترین فایده را فراهم آوریم.",
      profile: "زندگی‌نامه",
      photoPending: "عکس افزوده خواهد شد",
    },
    process: {
      h: "روند مراجعه چگونه است",
      p: "از گرفتن نوبت تا معاینهٔ پیگیری، همه‌چیز در یک بیمارستان انجام می‌شود.",
      steps: [
        { t: "نوبت", d: "با تلفن مرکزی بیمارستان تماس بگیرید یا از صفحهٔ نوبت‌دهی اینترنتی بیمارستان استفاده کنید. در موارد اورژانسی مستقیم به اورژانس مراجعه کنید." },
        { t: "معاینه و تصویربرداری", d: "عکس رادیولوژی، ام‌آرآی و سایر بررسی‌ها در بیمارستان انجام می‌شود. اگر عکس‌ها و گزارش‌های قبلی دارید، همراه بیاورید." },
        { t: "برنامهٔ درمان", d: "گزینه‌های غیرجراحی و جراحی، مدت بهبودی و خطرها را توضیح می‌دهیم. تصمیم را با هم می‌گیریم." },
        { t: "درمان و پیگیری", d: "پس از درمان، معاینه‌های پیگیری و در صورت نیاز فیزیوتراپی را برنامه‌ریزی می‌کنیم." },
      ],
    },
    uni: {
      h: "کلینیک دانشگاهی",
      p1: "کلینیکی وابسته به دانشکدهٔ پزشکی دانشگاه گیرنه: در کنار مراقبت از بیماران، آموزش دانشجویان پزشکی و پژوهش بالینی.",
      p2: "بیش از ۵۰ مقالهٔ منتشرشده در مجلات داوری‌شده. فهرست مقالات در صفحهٔ هر پزشک آمده است.",
      paperLead: "پژوهش‌های ما",
      paper: "Gürhan U, Kahve Y, Sarı E, Umur FL. Composite graft survival in Allen zone II fingertip amputations: independent predictors of graft failure. Injury. 2026;57(10):113587.",
    },
    intl: {
      h: "بیماران مراجعه‌کننده از خارج",
      p: "معاینه و مشاوره را به زبان‌های ترکی و انگلیسی انجام می‌دهیم.",
      items: [
        { t: "مسیر دسترسی", d: "بیمارستان در گیرنه، در محلهٔ کاراکوم است. از فرودگاه ارجان با خودرو حدود ۴۵ دقیقه راه است." },
        { t: "پیش از آمدن", d: "عکس‌های رادیولوژی، ام‌آرآی و گزارش‌هایی را که دارید در نخستین معاینه همراه بیاورید." },
        { t: "نوبت", d: "با تلفن مرکزی بیمارستان تماس بگیرید یا از صفحهٔ نوبت‌دهی اینترنتی استفاده کنید." },
      ],
    },
    contact: {
      h: "نوبت و تماس",
      p: "نوبت‌ها را تلفن مرکزی بیمارستان می‌دهد. هنگام تماس، درمانگاه ارتوپدی و تروماتولوژی را بخواهید.",
      call: "تماس با تلفن مرکزی",
      online: "نوبت‌دهی اینترنتی (وب‌سایت بیمارستان)",
      addrH: "نشانی",
      addr: ["بیمارستان دانشگاهی دکتر سوات گونسل", "Şehit Yahya Bakır Sokak, Karakum", "گیرنه، قبرس شمالی"],
      map: "نمایش روی نقشه",
      hoursNote: "ساعت‌های کار درمانگاه را می‌توانید از تلفن مرکزی بیمارستان بپرسید.",
    },
    footer: {
      disclaimer: "اطلاعات این وب‌سایت برای آگاهی عمومی است و جای معاینه و ارزیابی پزشک را نمی‌گیرد.",
      rights: "تمامی حقوق محفوظ است.",
      personal: "وب‌سایت شخصی",
    },
    profile: { back: "پزشکان ما", summary: "زندگی‌نامه", focus: "زمینه‌های بالینی مورد علاقه", focusPending: "زمینه‌های بالینی مورد علاقه از پزشک دریافت خواهد شد.", path: "تحصیلات و سمت‌ها", academic: "فعالیت‌های علمی", selected: "مقالات منتخب", books: "فصل‌های کتاب", courses: "دوره‌ها و آموزش‌های تکمیلی", memberships: "گواهی‌نامه‌ها و عضویت‌ها", langs: "زبان‌های مشاوره", links: "پروفایل‌های علمی", others: "پزشکان دیگر", book: "گرفتن نوبت", site: "وب‌سایت شخصی" },
    meta: {
      title: "ارتوپدی در گیرنه، قبرس شمالی · Cyprus Orthopaedics",
      desc: "ارتوپدی و تروماتولوژی در گیرنه، قبرس شمالی؛ کلینیک دانشکدهٔ پزشکی دانشگاه گیرنه: شکستگی، تعویض مفصل، آرتروسکوپی، جراحی دست و پا.",
    },
  },
};
