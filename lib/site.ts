export type Lang = "tr" | "en";
export const LANGS: Lang[] = ["tr", "en"];
export const SITE = "https://cyprusorthopaedics.com";
/** Preview phase: keep search engines out until the team approves the content. Set to false at launch. */
export const PREVIEW = true;
export const PHONE = "+90 392 444 99 39";
export const PHONE_HREF = "tel:+903924449939";
export const APPT: Record<Lang, string> = {
  tr: "https://hospital.kyrenia.edu.tr/online-appointment/",
  en: "https://hospital.kyrenia.edu.tr/online-appointment/?lang=en",
};
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Dr.+Suat+G%C3%BCnsel+Girne+%C3%9Cniversitesi+Hastanesi";
export const DOCTORS_SEGMENT: Record<Lang, string> = { tr: "hekimler", en: "doctors" };

type Region = { t: string; d: string };
type Step = { t: string; d: string };

export type Ui = {
  brandSub: [string, string];
  nav: { areas: string; doctors: string; process: string; contact: string; book: string; menu: string };
  hero: { h1a: string; h1b: string; place: string; lead: string; cta1: string; cta2: string; photoAlt: string };
  photos: string[];
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
    nav: { areas: "Tedavi alanları", doctors: "Hekimler", process: "Randevu süreci", contact: "İletişim", book: "Randevu al", menu: "Menü" },
    hero: {
      h1a: "Ortopedi ve",
      h1b: "Travmatoloji",
      place: "Dr. Suat Günsel Girne Üniversitesi Hastanesi, Girne",
      lead: "Girne Üniversitesi Tıp Fakültesi’nin üç öğretim üyesi aynı klinikte birlikte çalışır. Kırıklar ve yaralanmalar, eklem protezi, artroskopi ve spor yaralanmaları, el cerrahisi ile ayak ve ayak bileği hastalıklarında muayene, ameliyatsız tedavi ve cerrahi yapılır.",
      cta1: "Randevu al",
      cta2: "Hekimleri tanıyın",
      photoAlt: "Ortopedi ekibi artroskopi ameliyatında",
    },
    photos: ["İki cerrah ameliyat sırasında", "Ameliyathaneden kısa video: alet takımı, artroskopi görüntüsü ve ekip", "Ekip ameliyat masasında"],
    areas: {
      h: "Tedavi alanları",
      p: "Hastalar şikâyetin olduğu bölgeye göre değerlendirilir. Çoğu şikâyette tedavi ameliyatsız yöntemlerle başlar; cerrahi gerektiğinde ameliyat aynı hastanede yapılır.",
      items: [
        { t: "Omuz ve dirsek", d: "Rotator manşet yırtığı, omuz çıkığı, donuk omuz, tenisçi dirseği, omuz ve dirsek çevresi kırıkları" },
        { t: "El ve el bileği", d: "Karpal tünel sendromu, tetik parmak, tendon ve sinir yaralanmaları, el bileği kırıkları, parmak ucu yaralanmaları" },
        { t: "Kalça", d: "Kalça kireçlenmesi ve kalça protezi, kalça kırığı" },
        { t: "Diz", d: "Menisküs yırtığı, ön çapraz bağ yaralanması, diz kireçlenmesi ve diz protezi" },
        { t: "Ayak ve ayak bileği", d: "Ayak bileği burkulması ve kırığı, halluks valgus, Aşil tendonu sorunları" },
        { t: "Kırık ve travma", d: "Acil kırık tedavisi, çoklu yaralanmalar, kaynamayan ve yanlış kaynayan kırıklar" },
        { t: "Çocuk ortopedisi", d: "Çocukluk çağı kırıkları ve büyüme dönemine özgü ortopedik sorunlar" },
      ],
      note: "Her bölge için ayrı bilgi sayfaları hazırlanmaktadır.",
    },
    doctors: {
      h: "Hekimler",
      p: "Klinikte üç ortopedi ve travmatoloji uzmanı çalışır. Ameliyatlar ve zor olgular ekip içinde birlikte değerlendirilir.",
      profile: "Özgeçmiş",
      photoPending: "Fotoğraf eklenecek",
    },
    process: {
      h: "Randevudan takibe",
      p: "İlk başvurudan kontrol muayenesine kadar süreç aynı hastane içinde yürür.",
      steps: [
        { t: "Randevu", d: "Hastane santrali aranır veya hastanenin online randevu sayfası kullanılır. Acil durumlarda acil servise doğrudan başvurulur." },
        { t: "Muayene ve görüntüleme", d: "Şikâyet dinlenir, muayene yapılır. Gerekli röntgen, MR ve diğer incelemeler hastanede çekilir; eski filmler ve raporlar getirilebilir." },
        { t: "Tedavi planı", d: "Ameliyatsız ve cerrahi seçenekler, beklenen iyileşme süresi ve riskler anlatılır. Karar hasta ile birlikte verilir." },
        { t: "Tedavi ve takip", d: "Tedaviden sonra kontrol muayeneleri ve gerektiğinde fizik tedavi planlanır." },
      ],
    },
    uni: {
      h: "Üniversite kliniği",
      p1: "Klinik, Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nın çalıştığı hastanededir. Hekimler tıp fakültesi öğrencilerine ders verir ve klinik araştırma yürütür.",
      p2: "Üç hekimin hakemli dergilerde yayımlanmış 50’den fazla makalesi vardır. Yayın listeleri hekim sayfalarında yer alır.",
      paperLead: "Ekibin ortak çalışması",
      paper: "Gürhan U, Kahve Y, Sarı E, Umur FL. Composite graft survival in Allen zone II fingertip amputations: independent predictors of graft failure. Injury. 2026;57(10):113587.",
    },
    intl: {
      h: "Yurt dışından gelen hastalar",
      p: "Muayene ve ameliyat öncesi görüşmeler Türkçe ve İngilizce yapılır.",
      items: [
        { t: "Ulaşım", d: "Hastane Girne’de, Karakum bölgesindedir. Ercan Havalimanı’ndan kara yoluyla yaklaşık 45 dakikadır." },
        { t: "Önceden hazırlık", d: "Daha önce çekilmiş röntgen, MR ve raporların ilk muayenede yanınızda olması değerlendirmeyi hızlandırır." },
        { t: "Randevu", d: "Randevu için hastane santrali aranır veya online randevu sayfası kullanılır." },
      ],
    },
    contact: {
      h: "Randevu ve iletişim",
      p: "Randevular hastane santrali üzerinden verilir. Arayınca Ortopedi ve Travmatoloji polikliniğini isteyin.",
      call: "Santrali ara",
      online: "Online randevu (hastane sitesi)",
      addrH: "Adres",
      addr: ["Dr. Suat Günsel Girne Üniversitesi Hastanesi", "Şehit Yahya Bakır Sokak, Karakum", "Girne, Kuzey Kıbrıs"],
      map: "Haritada aç",
      hoursNote: "Poliklinik saatleri için santrali arayın.",
    },
    footer: {
      disclaimer: "Bu sitedeki bilgiler genel bilgilendirme amaçlıdır; muayene ve hekim değerlendirmesinin yerini tutmaz.",
      rights: "Tüm hakları saklıdır.",
      personal: "Kişisel site",
    },
    profile: { back: "Hekimler", summary: "Özgeçmiş", focus: "Klinik ilgi alanları", focusPending: "Klinik ilgi alanları hekimden alınacak.", path: "Eğitim ve görevler", academic: "Akademik çalışmalar", selected: "Seçilmiş yayınlar", books: "Kitap bölümleri", courses: "Kurslar ve ek eğitim", memberships: "Yeterlik ve üyelikler", langs: "Muayene dilleri", links: "Akademik profiller", others: "Diğer hekimler", book: "Randevu al", site: "Kişisel site" },
    meta: {
      title: "Cyprus Orthopaedics · Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı",
      desc: "Cyprus Orthopaedics: Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı, Dr. Suat Günsel Girne Üniversitesi Hastanesi. Üç öğretim üyesi; kırık ve travma, eklem protezi, artroskopi, el cerrahisi, ayak ve ayak bileği. Randevu: +90 392 444 99 39.",
    },
  },
  en: {
    brandSub: ["University of Kyrenia Faculty of Medicine", "Department of Orthopaedics and Traumatology"],
    nav: { areas: "What we treat", doctors: "Doctors", process: "Your visit", contact: "Contact", book: "Book an appointment", menu: "Menu" },
    hero: {
      h1a: "Orthopaedics &",
      h1b: "Traumatology",
      place: "Dr. Suat Günsel University of Kyrenia Hospital, Kyrenia, North Cyprus",
      lead: "Three faculty members of the University of Kyrenia Faculty of Medicine work together in one clinic. The team sees patients with fractures and injuries, joint replacement, arthroscopy and sports injuries, hand surgery, and foot and ankle conditions, offering examination, non-surgical treatment and surgery.",
      cta1: "Book an appointment",
      cta2: "Meet the doctors",
      photoAlt: "The orthopaedic team during an arthroscopy",
    },
    photos: ["Two surgeons operating", "Short video from the operating theatre: instrument set, arthroscopy view and the team", "The team at the operating table"],
    areas: {
      h: "What we treat",
      p: "Patients are assessed by the part of the body that is causing trouble. Most problems are first treated without surgery; when an operation is needed, it is done in the same hospital.",
      items: [
        { t: "Shoulder and elbow", d: "Rotator cuff tears, shoulder dislocation, frozen shoulder, tennis elbow, fractures around the shoulder and elbow" },
        { t: "Hand and wrist", d: "Carpal tunnel syndrome, trigger finger, tendon and nerve injuries, wrist fractures, fingertip injuries" },
        { t: "Hip", d: "Hip arthritis and hip replacement, hip fracture" },
        { t: "Knee", d: "Meniscal tears, anterior cruciate ligament injury, knee arthritis and knee replacement" },
        { t: "Foot and ankle", d: "Ankle sprains and fractures, hallux valgus (bunion), Achilles tendon problems" },
        { t: "Fractures and trauma", d: "Emergency fracture care, multiple injuries, non-union and malunion" },
        { t: "Children’s orthopaedics", d: "Childhood fractures and orthopaedic problems of the growing skeleton" },
      ],
      note: "A separate information page is being prepared for each area.",
    },
    doctors: {
      h: "Doctors",
      p: "Three specialists in orthopaedics and traumatology work in the clinic. Operations and difficult cases are reviewed together as a team.",
      profile: "Profile",
      photoPending: "Photo to be added",
    },
    process: {
      h: "From appointment to follow-up",
      p: "From the first visit to the follow-up examination, everything takes place in the same hospital.",
      steps: [
        { t: "Appointment", d: "Call the hospital switchboard or use the hospital’s online appointment page. In an emergency, go straight to the emergency department." },
        { t: "Examination and imaging", d: "The doctor listens to the problem and examines you. X-rays, MRI and other tests are done in the hospital; bring any earlier images and reports." },
        { t: "Treatment plan", d: "Non-surgical and surgical options, expected recovery time and risks are explained. The decision is made together with the patient." },
        { t: "Treatment and follow-up", d: "After treatment, follow-up visits and, where needed, physiotherapy are arranged." },
      ],
    },
    uni: {
      h: "A university clinic",
      p1: "The clinic is based in the hospital of the University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology. The doctors teach medical students and carry out clinical research.",
      p2: "Together the three doctors have published more than 50 articles in peer-reviewed journals. Publication lists are on the doctors’ pages.",
      paperLead: "A joint study by the team",
      paper: "Gürhan U, Kahve Y, Sarı E, Umur FL. Composite graft survival in Allen zone II fingertip amputations: independent predictors of graft failure. Injury. 2026;57(10):113587.",
    },
    intl: {
      h: "Patients from abroad",
      p: "Consultations and pre-operative discussions are held in Turkish and English.",
      items: [
        { t: "Getting here", d: "The hospital is in the Karakum district of Kyrenia, about 45 minutes by road from Ercan Airport." },
        { t: "Before you come", d: "Bring any earlier X-rays, MRI scans and reports to the first visit; it speeds up the assessment." },
        { t: "Appointments", d: "Call the hospital switchboard or use the online appointment page." },
      ],
    },
    contact: {
      h: "Appointments and contact",
      p: "Appointments are made through the hospital switchboard. Ask for the Orthopaedics and Traumatology clinic.",
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
    profile: { back: "Doctors", summary: "Biography", focus: "Clinical interests", focusPending: "Clinical interests to be supplied by the doctor.", path: "Training and posts", academic: "Academic work", selected: "Selected publications", books: "Book chapters", courses: "Courses and further training", memberships: "Certification and memberships", langs: "Consultation languages", links: "Academic profiles", others: "Other doctors", book: "Book an appointment", site: "Personal site" },
    meta: {
      title: "Cyprus Orthopaedics · University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology",
      desc: "Cyprus Orthopaedics: the Department of Orthopaedics and Traumatology of the University of Kyrenia Faculty of Medicine, at Dr. Suat Günsel University of Kyrenia Hospital, North Cyprus. Three faculty surgeons; fractures and trauma, joint replacement, arthroscopy, hand surgery, foot and ankle. Appointments: +90 392 444 99 39.",
    },
  },
};
