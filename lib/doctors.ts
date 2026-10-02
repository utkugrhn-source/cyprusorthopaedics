import type { Lang } from "./site";

type L = Record<Lang, string>;
export type Pub = { a: string; t: string; j: string; doi: string };
export type Doctor = {
  id: string;
  slug: string;
  name: string;
  short: string;
  title: L;
  role: L;
  line: L; // one factual line under the name on cards
  photo?: string;
  summary: Record<Lang, string[]>;
  focus?: Record<Lang, string[]>; // only what the doctor has stated
  path: { y: string; t: L; s: L }[];
  academic: L;
  pubs: Pub[];
  books?: Record<Lang, string[]>;
  courses?: Record<Lang, string[]>;
  memberships: Record<Lang, string[]>;
  langs?: L;
  links: { label: string; href: string }[];
  site?: string;
  sameAs: string[];
};

// Order: seniority by year of graduation from medical school (decided by Dr. Gürhan, 3 Oct 2026). Sources: each doctor's own CV (YÖKSİS export, Sept–Oct 2026), checked against PubMed.
export const doctors: Doctor[] = [
  {
    id: "umur",
    slug: "fazli-levent-umur",
    name: "Fazlı Levent Umur",
    short: "Umur",
    title: { tr: "Doç. Dr.", en: "Assoc. Prof. Dr." },
    role: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and Trauma Surgeon" },
    line: { tr: "Uzmanlık: GATA Haydarpaşa, 2015", en: "Specialist training: GATA Haydarpaşa, 2015" },
    photo: "/img/umur.jpg", // interim: frame from an operating-theatre clip, until a portrait is supplied
    summary: {
      tr: [
        "Doç. Dr. Fazlı Levent Umur, 2002 yılında Gülhane Askeri Tıp Akademisi Askeri Tıp Fakültesi’nden mezun oldu. 2003–2010 yılları arasında Deniz Kuvvetleri’nde gemi tabibi ve dalış tabibi olarak görev yaptı; 2007’de ABD Deniz Kuvvetleri’nin dalış tıbbı ve hiperbarik tıp kursunu tamamladı. Ortopedi ve Travmatoloji uzmanlık eğitimini GATA Haydarpaşa Eğitim Hastanesi’nde 2015 yılında tamamladı.",
        "Çorlu Asker Hastanesi, Sultan Abdülhamid Han Eğitim ve Araştırma Hastanesi ve Acıbadem Kadıköy Hastanesi’nde uzman olarak çalıştı. Nisan 2022’den bu yana Dr. Suat Günsel Girne Üniversitesi Hastanesi’nde görev yapmaktadır. Aralık 2022’den itibaren Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nda doçenttir.",
      ],
      en: [
        "Dr. Fazlı Levent Umur graduated from the Gülhane Military Medical Academy Faculty of Medicine in 2002. From 2003 to 2010 he served in the Turkish Navy as a ship’s medical officer and diving medical officer, completing the US Navy Diving Medical Officer and Hyperbaric Medicine course in 2007. He completed his residency in Orthopaedics and Traumatology at GATA Haydarpaşa Training Hospital in 2015.",
        "He worked as a specialist at Çorlu Military Hospital, Sultan Abdülhamid Han Training and Research Hospital and Acıbadem Kadıköy Hospital. He has practised at Dr. Suat Günsel University of Kyrenia Hospital since April 2022 and has been an associate professor in the University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology, since December 2022.",
      ],
    },
    path: [
      { y: "2002", t: { tr: "Tıp Doktoru", en: "Doctor of Medicine" }, s: { tr: "Gülhane Askeri Tıp Akademisi, Askeri Tıp Fakültesi", en: "Gülhane Military Medical Academy, Faculty of Medicine" } },
      { y: "2003–2010", t: { tr: "Gemi tabibi ve dalış tabibi", en: "Ship’s medical officer and diving medical officer" }, s: { tr: "Deniz Kuvvetleri Komutanlığı", en: "Turkish Naval Forces" } },
      { y: "2010–2015", t: { tr: "Ortopedi ve Travmatoloji uzmanlık eğitimi", en: "Residency in Orthopaedics and Traumatology" }, s: { tr: "GATA Haydarpaşa Eğitim Hastanesi, İstanbul", en: "GATA Haydarpaşa Training Hospital, Istanbul" } },
      { y: "2015–2016", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon" }, s: { tr: "Çorlu Asker Hastanesi", en: "Çorlu Military Hospital" } },
      { y: "2016–2019", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon" }, s: { tr: "Sultan Abdülhamid Han Eğitim ve Araştırma Hastanesi, İstanbul", en: "Sultan Abdülhamid Han Training and Research Hospital, Istanbul" } },
      { y: "2019–2022", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon" }, s: { tr: "Acıbadem Kadıköy Hastanesi, İstanbul", en: "Acıbadem Kadıköy Hospital, Istanbul" } },
      { y: "2022–", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and trauma surgeon" }, s: { tr: "Dr. Suat Günsel Girne Üniversitesi Hastanesi", en: "Dr. Suat Günsel University of Kyrenia Hospital" } },
      { y: "2022–", t: { tr: "Doçent", en: "Associate Professor" }, s: { tr: "Girne Üniversitesi Tıp Fakültesi", en: "University of Kyrenia Faculty of Medicine" } },
    ],
    academic: {
      tr: "Hakemli dergilerde 19 makale ve olgu sunumu. Çalışmaları kırık cerrahisi, çocuk kırıkları, kalça kırığı ve hasta bilgilendirme kaynaklarının niteliği üzerinedir. Springer’dan çıkan Knots in Orthopedic Surgery kitabı dahil dört kitapta bölüm yazarıdır; iki ortopedi başvuru kitabının Türkçe çevirisinde 12 bölümü çevirmiştir.",
      en: "19 articles and case reports in peer-reviewed journals, on fracture surgery, children’s fractures, hip fracture and the quality of patient information sources. Chapter author in four books, including Knots in Orthopedic Surgery (Springer), and translator of 12 chapters in the Turkish editions of two orthopaedic reference books.",
    },
    pubs: [
      { a: "Umur FL, Sarı E, Orhan S, Sürücü S, Yıldırım C.", t: "Dilemma of supra- or infrapatellar tibial nailing: anterior knee pain vs. intra-articular damage.", j: "Int J Clin Pract. 2022;2022:8220030.", doi: "10.1155/2022/8220030" },
      { a: "Sürücü S, Aydın M, Gürcan MB, Dağlar Ş, Umur FL.", t: "The effect of surgical technique on cognitive function in elderly patients with hip fractures: proximal femoral nailing versus hemiarthroplasty.", j: "Jt Dis Relat Surg. 2022;33(3):574-579.", doi: "10.52312/jdrs.2022.623" },
      { a: "Umur FL, Sürücü S.", t: "Association between increased elbow carrying angle and lateral epicondylitis.", j: "Cureus. 2022;14(3):e22981.", doi: "10.7759/cureus.22981" },
      { a: "Umur FL, Aydın M, Sürücü S.", t: "Comparison of conservative and surgical treatment in Gartland type IIB fractures in pediatric patients.", j: "Eur Rev Med Pharmacol Sci. 2021;25(20):6271-6276.", doi: "10.26355/eurrev_202110_26996" },
      { a: "Gürhan U, Kahve Y, Sarı E, Umur FL.", t: "Composite graft survival in Allen zone II fingertip amputations: independent predictors of graft failure.", j: "Injury. 2026;57(10):113587.", doi: "10.1016/j.injury.2026.113587" },
    ],
    courses: {
      tr: [
        "Kas-iskelet sistemi patolojisi kursu (kemik ve yumuşak doku tümörleri), Rizzoli Enstitüsü, Bologna, 2019",
        "Spor ortopedisi sempozyumu, Estepona, İspanya, 2021",
        "Temel artroplasti kursu, Ankara, 2018",
        "Diz ve ayak bileği artroskopisi kursları, Antalya, 2018",
        "ASAMİ deformite eğitim toplantısı, İstanbul, 2016",
        "Temel el cerrahisi kursu, Ankara, 2015",
        "ABD Deniz Kuvvetleri dalış tıbbı ve hiperbarik tıp kursu, 2007",
      ],
      en: [
        "Course on Musculoskeletal Pathology (bone and soft-tissue tumours), Rizzoli Institute, Bologna, 2019",
        "Sports Orthopaedics Symposium, Estepona, Spain, 2021",
        "Basic arthroplasty course, Ankara, 2018",
        "Knee and ankle arthroscopy courses, Antalya, 2018",
        "ASAMI deformity training meeting, Istanbul, 2016",
        "Basic hand surgery course, Ankara, 2015",
        "US Navy Diving Medical Officer and Hyperbaric Medicine course, 2007",
      ],
    },
    memberships: {
      tr: ["Türk Ortopedi ve Travmatoloji Birliği Derneği (TOTBİD)", "TOTBİD Ortopedik Travma Şubesi"],
      en: ["Turkish Society of Orthopaedics and Traumatology (TOTBİD)", "TOTBİD Orthopaedic Trauma Section"],
    },
    links: [{ label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/?term=Umur+FL%5BAuthor%5D+OR+Umur+LF%5BAuthor%5D" }],
    sameAs: ["https://hospital.kyrenia.edu.tr/doktor/fazli-levent-umur/"],
  },
  {
    id: "sari",
    slug: "enes-sari",
    name: "Enes Sarı",
    short: "Sarı",
    title: { tr: "Doç. Dr.", en: "Assoc. Prof. Dr." },
    role: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and Trauma Surgeon" },
    line: { tr: "Uzmanlık: GATA Haydarpaşa, 2015", en: "Specialist training: GATA Haydarpaşa, 2015" },
    summary: {
      tr: [
        "Doç. Dr. Enes Sarı, 2007 yılında Gülhane Askeri Tıp Akademisi Askeri Tıp Fakültesi’nden mezun oldu ve 2008–2010 yıllarında Deniz Kuvvetleri’nde tabip subay olarak görev yaptı. Ortopedi ve Travmatoloji uzmanlık eğitimini GATA Haydarpaşa Eğitim Hastanesi’nde 2015 yılında tamamladı. Türk Ortopedi ve Travmatoloji Eğitim Konseyi (TOTEK) yeterlik belgesine sahiptir.",
        "Aksaz Asker Hastanesi ve Marmaris Devlet Hastanesi’nde uzman olarak çalıştı. 2019’dan itibaren Yakın Doğu Üniversitesi Tıp Fakültesi’nde öğretim üyesi olarak görev yaptı ve 2021’de doçent oldu. Eylül 2026’dan bu yana Girne Üniversitesi’nde çalışmaktadır.",
      ],
      en: [
        "Dr. Enes Sarı graduated from the Gülhane Military Medical Academy Faculty of Medicine in 2007 and served as a naval medical officer from 2008 to 2010. He completed his residency in Orthopaedics and Traumatology at GATA Haydarpaşa Training Hospital in 2015. He is board certified by the Turkish Board of Orthopaedics and Traumatology (TOTEK).",
        "He worked as a specialist at Aksaz Military Hospital and Marmaris State Hospital. From 2019 he was a faculty member at Near East University Faculty of Medicine, becoming associate professor in 2021. He has worked at the University of Kyrenia since September 2026.",
      ],
    },
    path: [
      { y: "2007", t: { tr: "Tıp Doktoru", en: "Doctor of Medicine" }, s: { tr: "Gülhane Askeri Tıp Akademisi, Askeri Tıp Fakültesi", en: "Gülhane Military Medical Academy, Faculty of Medicine" } },
      { y: "2008–2010", t: { tr: "Tabip subay", en: "Naval medical officer" }, s: { tr: "TCG Akar, Deniz Kuvvetleri Komutanlığı", en: "TCG Akar, Turkish Naval Forces" } },
      { y: "2010–2015", t: { tr: "Ortopedi ve Travmatoloji uzmanlık eğitimi", en: "Residency in Orthopaedics and Traumatology" }, s: { tr: "GATA Haydarpaşa Eğitim Hastanesi, İstanbul", en: "GATA Haydarpaşa Training Hospital, Istanbul" } },
      { y: "2015–2016", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon" }, s: { tr: "Aksaz Asker Hastanesi, Muğla", en: "Aksaz Military Hospital, Muğla" } },
      { y: "2016–2017", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon" }, s: { tr: "Marmaris Devlet Hastanesi", en: "Marmaris State Hospital" } },
      { y: "2019–2021", t: { tr: "Doktor Öğretim Üyesi", en: "Assistant Professor" }, s: { tr: "Yakın Doğu Üniversitesi Tıp Fakültesi, Lefkoşa", en: "Near East University Faculty of Medicine, Nicosia" } },
      { y: "2021–2026", t: { tr: "Doçent", en: "Associate Professor" }, s: { tr: "Yakın Doğu Üniversitesi Tıp Fakültesi, Lefkoşa", en: "Near East University Faculty of Medicine, Nicosia" } },
      { y: "2026–", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and trauma surgeon" }, s: { tr: "Girne Üniversitesi, Dr. Suat Günsel Hastanesi", en: "University of Kyrenia, Dr. Suat Günsel Hospital" } },
    ],
    academic: {
      tr: "Hakemli dergilerde 20’den fazla makale ve olgu sunumu. Çalışmaları diz artroskopisi ve bağ yaralanmaları, kırık iyileşmesi, pelvis görüntülemesi ve hasta bilgilendirme kaynaklarının niteliği üzerinedir.",
      en: "More than 20 articles and case reports in peer-reviewed journals, on knee arthroscopy and ligament injury, fracture healing, pelvic imaging and the quality of patient information sources.",
    },
    pubs: [
      { a: "Sarı E, Yalçınozan M, Polat B, Özkayalar H.", t: "The effects of cryopreserved human amniotic membrane on fracture healing: animal study.", j: "Acta Orthop Traumatol Turc. 2019;53(6):485-489.", doi: "10.1016/j.aott.2019.08.004" },
      { a: "Polat AE, Polat B, Gürpınar T, Sarı E, Çarkçı E, Erler K.", t: "Tibial tubercle–trochlear groove (TT-TG) distance is a reliable measurement of increased rotational laxity in the knee with an anterior cruciate ligament injury.", j: "Knee. 2020;27(5):1601-1607.", doi: "10.1016/j.knee.2020.08.014" },
      { a: "Aydın D, Sarı E, Erler K.", t: "Computerised tomography analysis of pelvic inlet and outlet fluoroscopic view angles.", j: "Indian J Orthop. 2020;54(5):687-694.", doi: "10.1007/s43465-020-00169-5" },
      { a: "Sarı E, Umur FL.", t: "Quality analysis of hallux valgus videos on YouTube.", j: "J Am Podiatr Med Assoc. 2021;111(5).", doi: "10.7547/20-191" },
      { a: "Umur FL, Sarı E, Orhan S, Sürücü S, Yıldırım C.", t: "Dilemma of supra- or infrapatellar tibial nailing: anterior knee pain vs. intra-articular damage.", j: "Int J Clin Pract. 2022;2022:8220030.", doi: "10.1155/2022/8220030" },
    ],
    books: {
      tr: [
        "Arthroscopic-Assisted Surgery of the Distal Humeral Fractures. Intraarticular Fractures: Minimally Invasive Surgery, Arthroscopy. Springer; 2019.",
        "Ortopedik Onkolojide Hatalar ve İpuçları. Ortopedi ve Travmatoloji. Güneş Tıp Kitabevleri; 2022.",
        "Halluks Valgus. Erişkinlerde Ayak ve Ayak Bileği Hastalıkları Tanı ve Tedavisinde Güncel Yaklaşımlar. Akademisyen Kitabevi; 2021.",
        "Primer Kalça Osteoartriti. Erişkinlerde Kalça Hastalıkları ve Tedavisinde Güncel Yaklaşımlar. Akademisyen Kitabevi; 2020.",
      ],
      en: [
        "Arthroscopic-Assisted Surgery of the Distal Humeral Fractures. In: Intraarticular Fractures: Minimally Invasive Surgery, Arthroscopy. Springer; 2019.",
        "Pitfalls and tips in orthopaedic oncology. In: Ortopedi ve Travmatoloji. Güneş Tıp Kitabevleri; 2022 (Turkish).",
        "Hallux valgus. In: Current Approaches to Adult Foot and Ankle Disorders. Akademisyen Kitabevi; 2021 (Turkish).",
        "Primary hip osteoarthritis. In: Current Approaches to Adult Hip Disorders. Akademisyen Kitabevi; 2020 (Turkish).",
      ],
    },
    memberships: {
      tr: ["TOTEK Yeterlik Belgesi (TOTBİD–TOTEK, Ekim 2017 yeterlik sınavı)"],
      en: ["TOTEK board certification (Turkish Board of Orthopaedics and Traumatology, October 2017 examination)"],
    },
    links: [{ label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/?term=Sari+Enes%5BAuthor%5D" }],
    sameAs: [],
  },
  {
    id: "gurhan",
    slug: "utku-gurhan",
    name: "Utku Gürhan",
    short: "Gürhan",
    title: { tr: "Yrd. Doç. Dr.", en: "Asst. Prof. Dr." },
    role: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and Trauma Surgeon" },
    line: { tr: "Uzmanlık: Ankara Şehir Hastanesi, 2020", en: "Specialist training: Ankara City Hospital, 2020" },
    photo: "/img/portrait.jpg",
    summary: {
      tr: [
        "Yrd. Doç. Dr. Utku Gürhan, 2013 yılında Ankara Üniversitesi Tıp Fakültesi’nden mezun oldu. Ortopedi ve Travmatoloji uzmanlık eğitimini Ankara Numune Eğitim ve Araştırma Hastanesi ile Ankara Şehir Hastanesi’nde tamamlayarak 2020 yılında uzman oldu; ardından Silopi Devlet Hastanesi’nde çalıştı. Türk Ortopedi ve Travmatoloji Eğitim Konseyi (TOTEK) yeterlik belgesine sahiptir.",
        "2021 yılından bu yana Dr. Suat Günsel Girne Üniversitesi Hastanesi’nde görev yapmakta, 2023 yılından itibaren Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nda öğretim üyesi olarak ders vermektedir.",
      ],
      en: [
        "Dr. Utku Gürhan graduated from Ankara University Faculty of Medicine in 2013. He completed his residency in Orthopaedics and Traumatology at Ankara Numune Training and Research Hospital and Ankara City Hospital, qualifying as a specialist in 2020, and then worked at Silopi State Hospital. He is board certified by the Turkish Board of Orthopaedics and Traumatology (TOTEK).",
        "He has practised at Dr. Suat Günsel University of Kyrenia Hospital since 2021 and has been a faculty member of the University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology, since 2023.",
      ],
    },
    focus: {
      tr: ["El cerrahisi ve mikrocerrahi", "Replantasyon, sinir ve tendon onarımı", "Flep ile rekonstrüksiyon", "Ortopedik travma"],
      en: ["Hand surgery and microsurgery", "Replantation, nerve and tendon repair", "Flap reconstruction", "Orthopaedic trauma"],
    },
    path: [
      { y: "2013", t: { tr: "Tıp Doktoru", en: "Doctor of Medicine" }, s: { tr: "Ankara Üniversitesi Tıp Fakültesi", en: "Ankara University Faculty of Medicine" } },
      { y: "2013–2014", t: { tr: "Pratisyen hekim, çocuk acil", en: "General practitioner, paediatric emergency" }, s: { tr: "Gaziantep Çocuk Hastanesi", en: "Gaziantep Children’s Hospital" } },
      { y: "2014–2020", t: { tr: "Ortopedi ve Travmatoloji uzmanlık eğitimi", en: "Residency in Orthopaedics and Traumatology" }, s: { tr: "Ankara Numune EAH, Ankara Şehir Hastanesi", en: "Ankara Numune Hospital, Ankara City Hospital" } },
      { y: "2020–2021", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Consultant orthopaedic surgeon" }, s: { tr: "Silopi Devlet Hastanesi, Şırnak", en: "Silopi State Hospital, Şırnak" } },
      { y: "2021–", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and trauma surgeon" }, s: { tr: "Dr. Suat Günsel Girne Üniversitesi Hastanesi", en: "Dr. Suat Günsel University of Kyrenia Hospital" } },
      { y: "2023–", t: { tr: "Yardımcı Doçent", en: "Assistant Professor" }, s: { tr: "Girne Üniversitesi Tıp Fakültesi", en: "University of Kyrenia Faculty of Medicine" } },
    ],
    academic: {
      tr: "Hakemli dergilerde 22 makale. Araştırma alanları üst ekstremite travması, yapay zekânın ortopedi pratiği ve eğitimindeki kullanımı ve Türk ortopedi literatürünün bibliyometrik analizidir. Sık Görülen El Travmalarına Yaklaşım (BİDGE, 2026) kitabının editörüdür.",
      en: "22 articles in peer-reviewed journals. Research interests are upper-limb trauma, the use of artificial intelligence in orthopaedic practice and education, and bibliometric analysis of the Turkish orthopaedic literature. Editor of Sık Görülen El Travmalarına Yaklaşım (Approach to Common Hand Injuries; BİDGE, 2026).",
    },
    pubs: [
      { a: "Gürhan U, Kahve Y, Sarı E, Umur FL.", t: "Composite graft survival in Allen zone II fingertip amputations: independent predictors of graft failure.", j: "Injury. 2026;57(10):113587.", doi: "10.1016/j.injury.2026.113587" },
      { a: "Kahve Y, Gürhan U, Ünal KO, Yavuz İA, Intizam M, Akıncı M.", t: "Four-corner arthrodesis in SNAC wrist: biomechanical and functional comparison of two fixation techniques.", j: "Arch Orthop Trauma Surg. 2025;145(1):387.", doi: "10.1007/s00402-025-05999-2" },
      { a: "Gürhan U, Kahve Y, Yavuz İA, Varol A, Erler K.", t: "Does electrocauterization of the matrix after the wedge resection of the toe-nail affect recurrence in discrete age groups differently?", j: "J Foot Ankle Surg. 2023;62(2):291-294.", doi: "10.1053/j.jfas.2022.08.002" },
      { a: "Gürhan U, Kahve Y, Evran M, Bingöl O, Yaşar NE, Erler K.", t: "The self-assessment of newly graduated orthopedic surgeons on essential surgical procedures.", j: "Acta Orthop Traumatol Turc. 2022;56(3):217-221.", doi: "10.5152/j.aott.2022.22023" },
      { a: "Yavuz İA, Öken ÖF, Yıldırım AÖ, İnci F, Ceyhan E, Gürhan U.", t: "No effect of vancomycin powder to prevent infection in primary total knee arthroplasty: a retrospective review of 976 cases.", j: "Knee Surg Sports Traumatol Arthrosc. 2020;28(9):3055-3060.", doi: "10.1007/s00167-019-05778-8" },
    ],
    memberships: {
      tr: ["TOTEK Yeterlik Belgesi (2021)", "Türk Ortopedi ve Travmatoloji Eğitim Konseyi (TOTEK) üyesi", "Kıbrıs Türk Tabipleri Odası üyesi"],
      en: ["TOTEK board certification (2021)", "Member, Turkish Board of Orthopaedics and Traumatology (TOTEK)", "Member, Cyprus Turkish Medical Chamber"],
    },
    langs: { tr: "Türkçe, İngilizce", en: "Turkish, English" },
    links: [
      { label: "ORCID", href: "https://orcid.org/0000-0002-4721-8854" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_7y8apUAAAAJ" },
    ],
    site: "https://utkugurhan.com",
    sameAs: ["https://utkugurhan.com", "https://orcid.org/0000-0002-4721-8854", "https://scholar.google.com/citations?user=_7y8apUAAAAJ"],
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
