export type Lang = "tr" | "en";
export const LANGS: Lang[] = ["tr", "en"];
export const SITE = "https://www.cyprusorthopaedics.com";
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
  media: { film: string; team: string; hospital: string; band: string };
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
      lead: "Girne Üniversitesi Tıp Fakültesi’nin üç ortopedi öğretim üyesiyiz ve aynı klinikte birlikte çalışıyoruz. Kırık ve yaralanmalara, eklem protezine, artroskopiye, el cerrahisine, ayak ve ayak bileği sorunlarına bakıyoruz.",
      cta1: "Randevu al",
      cta2: "Hekimlerimiz",
      photoAlt: "Ortopedi ekibi artroskopi ameliyatında",
    },
    photos: ["İki cerrah ameliyat sırasında", "Kısa video: hastane binası ve çevresi, muayene odası, MR görüntüsünün incelenmesi, ameliyathane, alet takımları, artroskopi görüntüsü ve ekip", "Ekip ameliyat masasında"],
    media: { film: "Kısa video: Dr. Suat Günsel Girne Üniversitesi Hastanesi’nin havadan görünümü, ambulans ve hastane avlusu", team: "Ortopedi ekibi artroskopi ameliyatında", hospital: "Dr. Suat Günsel Girne Üniversitesi Hastanesi", band: "Yaptığımız ameliyatlar" },
    areas: {
      h: "Tedavi alanları",
      p: "Şikâyetinizin olduğu bölgeyi seçin. Çoğu sorunu ameliyatsız tedavi ediyoruz; ameliyat gerekirse aynı hastanede yapıyoruz.",
      items: [
        { t: "Omuz ve dirsek", d: "Rotator manşet yırtığı, omuz çıkığı, donuk omuz, tenisçi dirseği, omuz ve dirsek çevresi kırıkları" },
        { t: "El ve el bileği", d: "Karpal tünel sendromu, tetik parmak, tendon ve sinir yaralanmaları, el bileği kırıkları, parmak ucu yaralanmaları" },
        { t: "Kalça", d: "Kalça kireçlenmesi ve kalça protezi, kalça kırığı" },
        { t: "Diz", d: "Menisküs yırtığı, ön çapraz bağ yaralanması, diz kireçlenmesi ve diz protezi" },
        { t: "Ayak ve ayak bileği", d: "Ayak bileği burkulması ve kırığı, halluks valgus, Aşil tendonu sorunları" },
        { t: "Kırık ve travma", d: "Acil kırık tedavisi, çoklu yaralanmalar, kaynamayan ve yanlış kaynayan kırıklar" },
        { t: "Çocuk ortopedisi", d: "Çocukluk çağı kırıkları ve büyüme dönemine özgü ortopedik sorunlar" },
      ],
      note: "Bölge sayfaları genel bilgi içindir; tanı ve tedavi muayenede belirlenir.",
    },
    doctors: {
      h: "Hekimlerimiz",
      p: "Üç ortopedi ve travmatoloji uzmanıyız. Ameliyatları ve zor olguları birlikte değerlendiriyoruz.",
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
      p1: "Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’yız. Hasta bakmanın yanında tıp fakültesi öğrencilerine ders veriyor ve klinik araştırma yürütüyoruz.",
      p2: "Üçümüzün hakemli dergilerde yayımlanmış 50’den fazla makalesi var. Yayın listeleri hekim sayfalarında.",
      paperLead: "Ortak çalışmamız",
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
      title: "Cyprus Orthopaedics · Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı",
      desc: "Cyprus Orthopaedics: Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı, Dr. Suat Günsel Girne Üniversitesi Hastanesi. Üç öğretim üyesi; kırık ve travma, eklem protezi, artroskopi, el cerrahisi, ayak ve ayak bileği. Randevu: +90 392 444 99 39.",
    },
  },
  en: {
    brandSub: ["University of Kyrenia Faculty of Medicine", "Department of Orthopaedics and Traumatology"],
    nav: { areas: "What we treat", doctors: "Our doctors", process: "Your visit", contact: "Contact", book: "Book an appointment", menu: "Menu" },
    hero: {
      h1a: "Orthopaedics &",
      h1b: "Traumatology",
      place: "Dr. Suat Günsel University of Kyrenia Hospital, Kyrenia, North Cyprus",
      lead: "We are three orthopaedic faculty members of the University of Kyrenia Faculty of Medicine, working together in one clinic. We look after fractures and injuries, joint replacement, arthroscopy, hand surgery, and foot and ankle problems.",
      cta1: "Book an appointment",
      cta2: "Our doctors",
      photoAlt: "The orthopaedic team during an arthroscopy",
    },
    photos: ["Two surgeons operating", "Short video: the hospital building and its surroundings, examination room, reviewing an MRI scan, operating theatre, instrument sets, arthroscopy view and the team", "The team at the operating table"],
    media: { film: "Short video: aerial views of Dr. Suat Günsel University of Kyrenia Hospital, an ambulance and the hospital courtyard", team: "The orthopaedic team during an arthroscopy", hospital: "Dr. Suat Günsel University of Kyrenia Hospital", band: "Operations we perform" },
    areas: {
      h: "What we treat",
      p: "Choose the part of the body that is troubling you. We treat most problems without surgery; when an operation is needed, we do it in the same hospital.",
      items: [
        { t: "Shoulder and elbow", d: "Rotator cuff tears, shoulder dislocation, frozen shoulder, tennis elbow, fractures around the shoulder and elbow" },
        { t: "Hand and wrist", d: "Carpal tunnel syndrome, trigger finger, tendon and nerve injuries, wrist fractures, fingertip injuries" },
        { t: "Hip", d: "Hip arthritis and hip replacement, hip fracture" },
        { t: "Knee", d: "Meniscal tears, anterior cruciate ligament injury, knee arthritis and knee replacement" },
        { t: "Foot and ankle", d: "Ankle sprains and fractures, hallux valgus (bunion), Achilles tendon problems" },
        { t: "Fractures and trauma", d: "Emergency fracture care, multiple injuries, non-union and malunion" },
        { t: "Children’s orthopaedics", d: "Childhood fractures and orthopaedic problems of the growing skeleton" },
      ],
      note: "The area pages are general information; diagnosis and treatment are decided at examination.",
    },
    doctors: {
      h: "Our doctors",
      p: "We are three specialists in orthopaedics and traumatology. We review operations and difficult cases together.",
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
      p1: "We are the Department of Orthopaedics and Traumatology of the University of Kyrenia Faculty of Medicine. Alongside seeing patients, we teach medical students and carry out clinical research.",
      p2: "Between us we have published more than 50 articles in peer-reviewed journals. The lists are on the doctors’ pages.",
      paperLead: "A study we did together",
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
      title: "Cyprus Orthopaedics · University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology",
      desc: "Cyprus Orthopaedics: the Department of Orthopaedics and Traumatology of the University of Kyrenia Faculty of Medicine, at Dr. Suat Günsel University of Kyrenia Hospital, North Cyprus. Three faculty surgeons; fractures and trauma, joint replacement, arthroscopy, hand surgery, foot and ankle. Appointments: +90 392 444 99 39.",
    },
  },
};
