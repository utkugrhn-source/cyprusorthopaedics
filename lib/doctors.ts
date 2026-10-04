import type { Lang } from "./site";

type L = Record<Lang, string>;
export type Pub = { a: string; t: string; j: string; doi: string };
export type Doctor = {
  id: string;
  slug: string;
  name: string;
  names: { ru: string; fa: string }; // the name in Cyrillic and in Persian script
  short: string;
  title: L;
  role: L;
  school: L; // medical school and graduation year, shown above the specialty line on cards
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

/** The doctor's name as the page's language writes it; Turkish and English keep the Latin spelling. */
export const docName = (d: Doctor, lang: Lang) => (lang === "ru" || lang === "fa" ? d.names[lang] : d.name);
/** Academic title followed by the name. */
export const docFull = (d: Doctor, lang: Lang) => `${d.title[lang]} ${docName(d, lang)}`;

// Order: seniority by year of graduation from medical school (decided by Dr. Gürhan, 3 Oct 2026). Sources: each doctor's own CV (YÖKSİS export, Sept–Oct 2026), checked against PubMed.
export const doctors: Doctor[] = [
  {
    id: "umur",
    slug: "fazli-levent-umur",
    name: "Fazlı Levent Umur",
    names: { ru: "Фазлы Левент Умур", fa: "فضلی لونت اومور" },
    short: "Umur",
    title: { tr: "Doç. Dr.", en: "Assoc. Prof. Dr.", ru: "Доц., д-р", fa: "دکتر" },
    role: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and Trauma Surgeon", ru: "Ортопед-травматолог", fa: "دانشیار، متخصص ارتوپدی و تروماتولوژی" },
    school: { tr: "Tıp fakültesi: GATA Askeri Tıp Fakültesi, 2002", en: "Medical school: GATA Faculty of Medicine, 2002", ru: "Медицинское образование: военно-медицинский факультет GATA, 2002", fa: "تحصیل پزشکی: دانشکدهٔ پزشکی نظامی GATA\u200F، ۲۰۰۲" },
    line: { tr: "Uzmanlık: GATA Haydarpaşa, 2015", en: "Specialist training: GATA Haydarpaşa, 2015", ru: "Специализация: GATA Хайдарпаша, 2015", fa: "تخصص: حیدرپاشا (GATA)\u200F، ۲۰۱۵" },
    photo: "/img/umur.jpg", // theatre profile, cut from the clinic's own clip at full resolution (chosen by Dr. Gürhan, 4 Oct 2026)
    summary: {
      tr: [
        "Doç. Dr. Fazlı Levent Umur, 2002 yılında Gülhane Askeri Tıp Akademisi Askeri Tıp Fakültesi’nden mezun oldu. 2003–2010 yılları arasında Deniz Kuvvetleri’nde gemi tabibi ve dalış tabibi olarak görev yaptı; 2007’de ABD Deniz Kuvvetleri’nin dalış tıbbı ve hiperbarik tıp kursunu tamamladı. Ortopedi ve Travmatoloji uzmanlık eğitimini GATA Haydarpaşa Eğitim Hastanesi’nde 2015 yılında tamamladı.",
        "Çorlu Asker Hastanesi, Sultan Abdülhamid Han Eğitim ve Araştırma Hastanesi ve Acıbadem Kadıköy Hastanesi’nde uzman olarak çalıştı. Nisan 2022’den bu yana Dr. Suat Günsel Girne Üniversitesi Hastanesi’nde görev yapmaktadır. Aralık 2022’den itibaren Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nda doçenttir.",
      ],
      en: [
        "Dr. Fazlı Levent Umur graduated from the Gülhane Military Medical Academy Faculty of Medicine in 2002. From 2003 to 2010 he served in the Turkish Navy as a ship’s medical officer and diving medical officer, completing the US Navy Diving Medical Officer and Hyperbaric Medicine course in 2007. He completed his residency in Orthopaedics and Traumatology at GATA Haydarpaşa Training Hospital in 2015.",
        "He worked as a specialist at Çorlu Military Hospital, Sultan Abdülhamid Han Training and Research Hospital and Acıbadem Kadıköy Hospital. He has practised at Dr. Suat Günsel University of Kyrenia Hospital since April 2022 and has been an associate professor in the University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology, since December 2022.",
      ],
      ru: [
        "Доц., д-р Фазлы Левент Умур в 2002 году окончил военно-медицинский факультет Военно-медицинской академии Гюльхане (GATA). В 2003–2010 годах служил в Военно-морских силах Турции корабельным врачом и водолазным врачом; в 2007 году прошёл курс водолазной и гипербарической медицины Военно-морских сил США. Ординатуру по ортопедии и травматологии окончил в 2015 году в Учебном госпитале GATA Хайдарпаша.",
        "Работал врачом-специалистом в Военном госпитале Чорлу, Учебно-исследовательской больнице имени султана Абдул-Хамида и больнице «Аджибадем Кадыкёй». С апреля 2022 года работает в Университетской больнице им. д-ра Суата Гюнселя (Кирения). С декабря 2022 года — доцент кафедры ортопедии и травматологии медицинского факультета Университета Кирении.",
      ],
      fa: [
        "دکتر فضلی لونت اومور، دانشیار ارتوپدی و تروماتولوژی، در سال ۲۰۰۲ از دانشکدهٔ پزشکی نظامی آکادمی پزشکی نظامی گولهانه (GATA) فارغ‌التحصیل شد. از ۲۰۰۳ تا ۲۰۱۰ در نیروی دریایی ترکیه به‌عنوان پزشک کشتی و پزشک غواصی خدمت کرد؛ در سال ۲۰۰۷ دورهٔ پزشکی غواصی و طب هایپرباریک نیروی دریایی ایالات متحده را گذراند. دورهٔ تخصص ارتوپدی و تروماتولوژی را در سال ۲۰۱۵ در بیمارستان آموزشی حیدرپاشا (GATA) به پایان رساند.",
        "به‌عنوان متخصص در بیمارستان نظامی چورلو، بیمارستان آموزشی و پژوهشی سلطان عبدالحمید خان و بیمارستان آجی‌بادم کادیکوی کار کرد. از آوریل ۲۰۲۲ در بیمارستان دانشگاهی دکتر سوات گونسل، گیرنه مشغول به کار است. از دسامبر ۲۰۲۲ دانشیار گروه ارتوپدی و تروماتولوژی دانشکدهٔ پزشکی دانشگاه گیرنه است.",
      ],
    },
    path: [
      { y: "2002", t: { tr: "Tıp Doktoru", en: "Doctor of Medicine", ru: "Врач", fa: "دکترای پزشکی" }, s: { tr: "Gülhane Askeri Tıp Akademisi, Askeri Tıp Fakültesi", en: "Gülhane Military Medical Academy, Faculty of Medicine", ru: "Военно-медицинская академия Гюльхане (GATA), военно-медицинский факультет", fa: "آکادمی پزشکی نظامی گولهانه (GATA)، دانشکدهٔ پزشکی نظامی" } },
      { y: "2003–2010", t: { tr: "Gemi tabibi ve dalış tabibi", en: "Ship’s medical officer and diving medical officer", ru: "Корабельный врач и водолазный врач", fa: "پزشک کشتی و پزشک غواصی" }, s: { tr: "Deniz Kuvvetleri Komutanlığı", en: "Turkish Naval Forces", ru: "Командование Военно-морских сил Турции", fa: "فرماندهی نیروی دریایی ترکیه" } },
      { y: "2010–2015", t: { tr: "Ortopedi ve Travmatoloji uzmanlık eğitimi", en: "Residency in Orthopaedics and Traumatology", ru: "Ординатура по ортопедии и травматологии", fa: "دورهٔ تخصص ارتوپدی و تروماتولوژی" }, s: { tr: "GATA Haydarpaşa Eğitim Hastanesi, İstanbul", en: "GATA Haydarpaşa Training Hospital, Istanbul", ru: "Учебный госпиталь GATA Хайдарпаша, Стамбул", fa: "بیمارستان آموزشی حیدرپاشا (GATA)، استانبول" } },
      { y: "2015–2016", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Çorlu Asker Hastanesi", en: "Çorlu Military Hospital", ru: "Военный госпиталь Чорлу", fa: "بیمارستان نظامی چورلو" } },
      { y: "2016–2019", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Sultan Abdülhamid Han Eğitim ve Araştırma Hastanesi, İstanbul", en: "Sultan Abdülhamid Han Training and Research Hospital, Istanbul", ru: "Учебно-исследовательская больница имени султана Абдул-Хамида, Стамбул", fa: "بیمارستان آموزشی و پژوهشی سلطان عبدالحمید خان، استانبول" } },
      { y: "2019–2022", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Acıbadem Kadıköy Hastanesi, İstanbul", en: "Acıbadem Kadıköy Hospital, Istanbul", ru: "Больница «Аджибадем Кадыкёй», Стамбул", fa: "بیمارستان آجی‌بادم کادیکوی، استانبول" } },
      { y: "2022–", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and trauma surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Dr. Suat Günsel Girne Üniversitesi Hastanesi", en: "Dr. Suat Günsel University of Kyrenia Hospital", ru: "Университетская больница им. д-ра Суата Гюнселя (Кирения)", fa: "بیمارستان دانشگاهی دکتر سوات گونسل، گیرنه" } },
      { y: "2022–", t: { tr: "Doçent", en: "Associate Professor", ru: "Доцент", fa: "دانشیار" }, s: { tr: "Girne Üniversitesi Tıp Fakültesi", en: "University of Kyrenia Faculty of Medicine", ru: "Медицинский факультет Университета Кирении", fa: "دانشکدهٔ پزشکی دانشگاه گیرنه" } },
    ],
    academic: {
      tr: "Hakemli dergilerde 19 makale ve olgu sunumu. Çalışmaları kırık cerrahisi, çocuk kırıkları, kalça kırığı ve hasta bilgilendirme kaynaklarının niteliği üzerinedir. Springer’dan çıkan Knots in Orthopedic Surgery kitabı dahil dört kitapta bölüm yazarıdır; iki ortopedi başvuru kitabının Türkçe çevirisinde 12 bölümü çevirmiştir.",
      en: "19 articles and case reports in peer-reviewed journals, on fracture surgery, children’s fractures, hip fracture and the quality of patient information sources. Chapter author in four books, including Knots in Orthopedic Surgery (Springer), and translator of 12 chapters in the Turkish editions of two orthopaedic reference books.",
      ru: "19 статей и описаний клинических случаев в рецензируемых журналах. Работы посвящены хирургии переломов, переломам у детей, переломам проксимального отдела бедренной кости и качеству источников информации для пациентов. Автор глав в четырёх книгах, включая Knots in Orthopedic Surgery (Springer); перевёл 12 глав для турецких изданий двух справочных руководств по ортопедии.",
      fa: "۱۹ مقاله و گزارش مورد در مجلات داوری‌شده. پژوهش‌های او دربارهٔ جراحی شکستگی، شکستگی‌های کودکان، شکستگی لگن (هیپ) و کیفیت منابع اطلاع‌رسانی به بیماران است. نویسندهٔ فصل در چهار کتاب، از جمله Knots in Orthopedic Surgery (انتشارات Springer)، است و ۱۲ فصل از ترجمهٔ ترکی دو کتاب مرجع ارتوپدی را ترجمه کرده است.",
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
      ru: [
        "Курс по патологии опорно-двигательного аппарата (опухоли костей и мягких тканей), Институт Риццоли, Болонья, 2019",
        "Симпозиум по спортивной ортопедии, Эстепона, Испания, 2021",
        "Базовый курс по эндопротезированию суставов, Анкара, 2018",
        "Курсы по артроскопии коленного и голеностопного суставов, Анталья, 2018",
        "Учебная встреча ASAMI по деформациям, Стамбул, 2016",
        "Базовый курс по хирургии кисти, Анкара, 2015",
        "Курс водолазной и гипербарической медицины Военно-морских сил США, 2007",
      ],
      fa: [
        "دورهٔ آسیب‌شناسی دستگاه اسکلتی‌عضلانی (تومورهای استخوان و بافت نرم)، مؤسسهٔ ریتزولی، بولونیا، ۲۰۱۹",
        "سمپوزیوم ارتوپدی ورزشی، استپونا، اسپانیا، ۲۰۲۱",
        "دورهٔ پایهٔ آرتروپلاستی (تعویض مفصل)، آنکارا، ۲۰۱۸",
        "دوره‌های آرتروسکوپی زانو و مچ پا، آنتالیا، ۲۰۱۸",
        "نشست آموزشی دفورمیتی ASAMI، استانبول، ۲۰۱۶",
        "دورهٔ پایهٔ جراحی دست، آنکارا، ۲۰۱۵",
        "دورهٔ پزشکی غواصی و طب هایپرباریک نیروی دریایی ایالات متحده، ۲۰۰۷",
      ],
    },
    memberships: {
      tr: ["Türk Ortopedi ve Travmatoloji Birliği Derneği (TOTBİD)", "TOTBİD Ortopedik Travma Şubesi"],
      en: ["Turkish Society of Orthopaedics and Traumatology (TOTBİD)", "TOTBİD Orthopaedic Trauma Section"],
      ru: ["Турецкое общество ортопедии и травматологии (TOTBİD)", "Секция ортопедической травмы TOTBİD"],
      fa: ["انجمن ارتوپدی و تروماتولوژی ترکیه (TOTBİD)", "شاخهٔ ترومای ارتوپدی TOTBİD"],
    },
    // stated by Dr. Gürhan for the department on 4 Oct 2026 ("all of them"): the clinic's full range, in the site's own terms
    focus: {
      tr: ["Kırık ve travma", "Kalça ve diz protezi", "Artroskopik cerrahi", "Omuz ve dirsek", "El ve el bileği", "Ayak ve ayak bileği", "Çocuk ortopedisi", "Kemik ve yumuşak doku tümörleri"],
      en: ["Fractures and trauma", "Hip and knee replacement", "Arthroscopic surgery", "Shoulder and elbow", "Hand and wrist", "Foot and ankle", "Children’s orthopaedics", "Bone and soft tissue tumours"],
      ru: ["Переломы и травмы", "Эндопротезирование тазобедренного и коленного суставов", "Артроскопическая хирургия", "Плечевой и локтевой суставы", "Кисть и запястье", "Стопа и голеностопный сустав", "Детская ортопедия", "Опухоли костей и мягких тканей"],
      fa: ["شکستگی و تروما", "تعویض مفصل لگن و زانو", "جراحی آرتروسکوپی", "شانه و آرنج", "دست و مچ دست", "پا و مچ پا", "ارتوپدی کودکان", "تومورهای استخوان و بافت نرم"],
    },
    links: [{ label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/?term=Umur+FL%5BAuthor%5D+OR+Umur+LF%5BAuthor%5D" }],
    sameAs: ["https://hospital.kyrenia.edu.tr/doktor/fazli-levent-umur/", "https://orcid.org/0000-0003-4961-4508"],
  },
  {
    id: "sari",
    slug: "enes-sari",
    name: "Enes Sarı",
    names: { ru: "Энес Сары", fa: "انس ساری" },
    short: "Sarı",
    title: { tr: "Doç. Dr.", en: "Assoc. Prof. Dr.", ru: "Доц., д-р", fa: "دکتر" },
    role: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and Trauma Surgeon", ru: "Ортопед-травматолог", fa: "دانشیار، متخصص ارتوپدی و تروماتولوژی" },
    school: { tr: "Tıp fakültesi: GATA Askeri Tıp Fakültesi, 2007", en: "Medical school: GATA Faculty of Medicine, 2007", ru: "Медицинское образование: военно-медицинский факультет GATA, 2007", fa: "تحصیل پزشکی: دانشکدهٔ پزشکی نظامی GATA\u200F، ۲۰۰۷" },
    line: { tr: "Uzmanlık: GATA Haydarpaşa, 2015", en: "Specialist training: GATA Haydarpaşa, 2015", ru: "Специализация: GATA Хайдарпаша, 2015", fa: "تخصص: حیدرپاشا (GATA)\u200F، ۲۰۱۵" },
    photo: "/img/sari.jpg",
    summary: {
      tr: [
        "Doç. Dr. Enes Sarı, 2007 yılında Gülhane Askeri Tıp Akademisi Askeri Tıp Fakültesi’nden mezun oldu ve 2008–2010 yıllarında Deniz Kuvvetleri’nde tabip subay olarak görev yaptı. Ortopedi ve Travmatoloji uzmanlık eğitimini GATA Haydarpaşa Eğitim Hastanesi’nde 2015 yılında tamamladı. Türk Ortopedi ve Travmatoloji Eğitim Konseyi (TOTEK) yeterlik belgesine sahiptir.",
        "Aksaz Asker Hastanesi ve Marmaris Devlet Hastanesi’nde uzman olarak çalıştı. 2019’dan itibaren Yakın Doğu Üniversitesi Tıp Fakültesi’nde öğretim üyesi olarak görev yaptı ve 2021’de doçent oldu. Eylül 2026’dan bu yana Girne Üniversitesi’nde çalışmaktadır.",
      ],
      en: [
        "Dr. Enes Sarı graduated from the Gülhane Military Medical Academy Faculty of Medicine in 2007 and served as a naval medical officer from 2008 to 2010. He completed his residency in Orthopaedics and Traumatology at GATA Haydarpaşa Training Hospital in 2015. He is board certified by the Turkish Board of Orthopaedics and Traumatology (TOTEK).",
        "He worked as a specialist at Aksaz Military Hospital and Marmaris State Hospital. From 2019 he was a faculty member at Near East University Faculty of Medicine, becoming associate professor in 2021. He has worked at the University of Kyrenia since September 2026.",
      ],
      ru: [
        "Доц., д-р Энес Сары в 2007 году окончил военно-медицинский факультет Военно-медицинской академии Гюльхане (GATA) и в 2008–2010 годах служил в Военно-морских силах Турции офицером медицинской службы. Ординатуру по ортопедии и травматологии окончил в 2015 году в Учебном госпитале GATA Хайдарпаша. Сертифицирован Турецким советом по ортопедии и травматологии (TOTEK).",
        "Работал врачом-специалистом в Военном госпитале Аксаз и Государственной больнице Мармариса. С 2019 года работал в профессорско-преподавательском составе медицинского факультета Ближневосточного университета (Near East University), в 2021 году получил звание доцента. С сентября 2026 года работает в Университете Кирении.",
      ],
      fa: [
        "دکتر انس ساری، دانشیار ارتوپدی و تروماتولوژی، در سال ۲۰۰۷ از دانشکدهٔ پزشکی نظامی آکادمی پزشکی نظامی گولهانه (GATA) فارغ‌التحصیل شد و در سال‌های ۲۰۰۸ تا ۲۰۱۰ به‌عنوان افسر پزشک در نیروی دریایی ترکیه خدمت کرد. دورهٔ تخصص ارتوپدی و تروماتولوژی را در سال ۲۰۱۵ در بیمارستان آموزشی حیدرپاشا (GATA) به پایان رساند. دارای گواهی بورد ارتوپدی و تروماتولوژی ترکیه (TOTEK) است.",
        "به‌عنوان متخصص در بیمارستان نظامی آکساز و بیمارستان دولتی مارماریس کار کرد. از سال ۲۰۱۹ عضو هیئت علمی دانشکدهٔ پزشکی دانشگاه خاور نزدیک بود و در سال ۲۰۲۱ دانشیار شد. از سپتامبر ۲۰۲۶ در دانشگاه گیرنه مشغول به کار است.",
      ],
    },
    path: [
      { y: "2007", t: { tr: "Tıp Doktoru", en: "Doctor of Medicine", ru: "Врач", fa: "دکترای پزشکی" }, s: { tr: "Gülhane Askeri Tıp Akademisi, Askeri Tıp Fakültesi", en: "Gülhane Military Medical Academy, Faculty of Medicine", ru: "Военно-медицинская академия Гюльхане (GATA), военно-медицинский факультет", fa: "آکادمی پزشکی نظامی گولهانه (GATA)، دانشکدهٔ پزشکی نظامی" } },
      { y: "2008–2010", t: { tr: "Tabip subay", en: "Naval medical officer", ru: "Офицер медицинской службы", fa: "افسر پزشک" }, s: { tr: "TCG Akar, Deniz Kuvvetleri Komutanlığı", en: "TCG Akar, Turkish Naval Forces", ru: "Корабль TCG Akar, Командование Военно-морских сил Турции", fa: "کشتی TCG Akar، فرماندهی نیروی دریایی ترکیه" } },
      { y: "2010–2015", t: { tr: "Ortopedi ve Travmatoloji uzmanlık eğitimi", en: "Residency in Orthopaedics and Traumatology", ru: "Ординатура по ортопедии и травматологии", fa: "دورهٔ تخصص ارتوپدی و تروماتولوژی" }, s: { tr: "GATA Haydarpaşa Eğitim Hastanesi, İstanbul", en: "GATA Haydarpaşa Training Hospital, Istanbul", ru: "Учебный госпиталь GATA Хайдарпаша, Стамбул", fa: "بیمارستان آموزشی حیدرپاشا (GATA)، استانبول" } },
      { y: "2015–2016", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Aksaz Asker Hastanesi, Muğla", en: "Aksaz Military Hospital, Muğla", ru: "Военный госпиталь Аксаз, Мугла", fa: "بیمارستان نظامی آکساز، موغلا" } },
      { y: "2016–2017", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Specialist orthopaedic surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Marmaris Devlet Hastanesi", en: "Marmaris State Hospital", ru: "Государственная больница Мармариса", fa: "بیمارستان دولتی مارماریس" } },
      { y: "2019–2021", t: { tr: "Doktor Öğretim Üyesi", en: "Assistant Professor", ru: "Ассистент-профессор", fa: "استادیار" }, s: { tr: "Yakın Doğu Üniversitesi Tıp Fakültesi, Lefkoşa", en: "Near East University Faculty of Medicine, Nicosia", ru: "Медицинский факультет Ближневосточного университета (Near East University), Никосия", fa: "دانشکدهٔ پزشکی دانشگاه خاور نزدیک، نیکوزیا" } },
      { y: "2021–2026", t: { tr: "Doçent", en: "Associate Professor", ru: "Доцент", fa: "دانشیار" }, s: { tr: "Yakın Doğu Üniversitesi Tıp Fakültesi, Lefkoşa", en: "Near East University Faculty of Medicine, Nicosia", ru: "Медицинский факультет Ближневосточного университета (Near East University), Никосия", fa: "دانشکدهٔ پزشکی دانشگاه خاور نزدیک، نیکوزیا" } },
      { y: "2026–", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and trauma surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Girne Üniversitesi, Dr. Suat Günsel Hastanesi", en: "University of Kyrenia, Dr. Suat Günsel Hospital", ru: "Университет Кирении, больница им. д-ра Суата Гюнселя", fa: "دانشگاه گیرنه، بیمارستان دکتر سوات گونسل" } },
    ],
    academic: {
      tr: "Hakemli dergilerde 20’den fazla makale ve olgu sunumu. Çalışmaları diz artroskopisi ve bağ yaralanmaları, kırık iyileşmesi, pelvis görüntülemesi ve hasta bilgilendirme kaynaklarının niteliği üzerinedir.",
      en: "More than 20 articles and case reports in peer-reviewed journals, on knee arthroscopy and ligament injury, fracture healing, pelvic imaging and the quality of patient information sources.",
      ru: "Более 20 статей и описаний клинических случаев в рецензируемых журналах. Работы посвящены артроскопии коленного сустава и повреждениям связок, сращению переломов, визуализации таза и качеству источников информации для пациентов.",
      fa: "بیش از ۲۰ مقاله و گزارش مورد در مجلات داوری‌شده. پژوهش‌های او دربارهٔ آرتروسکوپی زانو و آسیب‌های رباط، جوش‌خوردن شکستگی، تصویربرداری لگن و کیفیت منابع اطلاع‌رسانی به بیماران است.",
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
      ru: [
        "Arthroscopic-Assisted Surgery of the Distal Humeral Fractures. В кн.: Intraarticular Fractures: Minimally Invasive Surgery, Arthroscopy. Springer; 2019.",
        "Ortopedik Onkolojide Hatalar ve İpuçları (ошибки и советы в ортопедической онкологии). В кн.: Ortopedi ve Travmatoloji. Güneş Tıp Kitabevleri; 2022 (на турецком языке).",
        "Halluks Valgus (вальгусная деформация первого пальца стопы). В кн.: Erişkinlerde Ayak ve Ayak Bileği Hastalıkları Tanı ve Tedavisinde Güncel Yaklaşımlar (современные подходы к диагностике и лечению заболеваний стопы и голеностопного сустава у взрослых). Akademisyen Kitabevi; 2021 (на турецком языке).",
        "Primer Kalça Osteoartriti (первичный остеоартрит тазобедренного сустава). В кн.: Erişkinlerde Kalça Hastalıkları ve Tedavisinde Güncel Yaklaşımlar (современные подходы к заболеваниям тазобедренного сустава у взрослых и их лечению). Akademisyen Kitabevi; 2020 (на турецком языке).",
      ],
      fa: [
        "Arthroscopic-Assisted Surgery of the Distal Humeral Fractures. در کتاب: Intraarticular Fractures: Minimally Invasive Surgery, Arthroscopy. Springer; 2019.",
        "Ortopedik Onkolojide Hatalar ve İpuçları (خطاها و نکته‌ها در انکولوژی ارتوپدی). در کتاب: Ortopedi ve Travmatoloji. Güneş Tıp Kitabevleri; 2022 (به زبان ترکی).",
        "Halluks Valgus (هالوکس والگوس). در کتاب: Erişkinlerde Ayak ve Ayak Bileği Hastalıkları Tanı ve Tedavisinde Güncel Yaklaşımlar (رویکردهای روز در تشخیص و درمان بیماری‌های پا و مچ پا در بزرگسالان). Akademisyen Kitabevi; 2021 (به زبان ترکی).",
        "Primer Kalça Osteoartriti (آرتروز اولیهٔ مفصل لگن). در کتاب: Erişkinlerde Kalça Hastalıkları ve Tedavisinde Güncel Yaklaşımlar (رویکردهای روز در بیماری‌های مفصل لگن در بزرگسالان و درمان آن‌ها). Akademisyen Kitabevi; 2020 (به زبان ترکی).",
      ],
    },
    memberships: {
      tr: ["TOTEK Yeterlik Belgesi (TOTBİD–TOTEK, Ekim 2017 yeterlik sınavı)"],
      en: ["TOTEK board certification (Turkish Board of Orthopaedics and Traumatology, October 2017 examination)"],
      ru: ["Сертификат Турецкого совета по ортопедии и травматологии (TOTBİD–TOTEK, квалификационный экзамен, октябрь 2017 г.)"],
      fa: ["گواهی بورد ارتوپدی و تروماتولوژی ترکیه (TOTBİD–TOTEK، آزمون بورد اکتبر ۲۰۱۷)"],
    },
    // stated by Dr. Gürhan for the department on 4 Oct 2026 ("all of them"): the clinic's full range, in the site's own terms
    focus: {
      tr: ["Kırık ve travma", "Kalça ve diz protezi", "Artroskopik cerrahi", "Omuz ve dirsek", "El ve el bileği", "Ayak ve ayak bileği", "Çocuk ortopedisi", "Kemik ve yumuşak doku tümörleri"],
      en: ["Fractures and trauma", "Hip and knee replacement", "Arthroscopic surgery", "Shoulder and elbow", "Hand and wrist", "Foot and ankle", "Children’s orthopaedics", "Bone and soft tissue tumours"],
      ru: ["Переломы и травмы", "Эндопротезирование тазобедренного и коленного суставов", "Артроскопическая хирургия", "Плечевой и локтевой суставы", "Кисть и запястье", "Стопа и голеностопный сустав", "Детская ортопедия", "Опухоли костей и мягких тканей"],
      fa: ["شکستگی و تروما", "تعویض مفصل لگن و زانو", "جراحی آرتروسکوپی", "شانه و آرنج", "دست و مچ دست", "پا و مچ پا", "ارتوپدی کودکان", "تومورهای استخوان و بافت نرم"],
    },
    links: [{ label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/?term=Sari+Enes%5BAuthor%5D" }],
    sameAs: ["https://orcid.org/0000-0003-2385-1732"],
  },
  {
    id: "gurhan",
    slug: "utku-gurhan",
    name: "Utku Gürhan",
    names: { ru: "Утку Гюрхан", fa: "اوتکو گورهان" },
    short: "Gürhan",
    title: { tr: "Yrd. Doç. Dr.", en: "Asst. Prof. Dr.", ru: "Асс. проф., д-р", fa: "دکتر" },
    role: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and Trauma Surgeon", ru: "Ортопед-травматолог", fa: "استادیار، متخصص ارتوپدی و تروماتولوژی" },
    school: { tr: "Tıp fakültesi: Ankara Üniversitesi, 2013", en: "Medical school: Ankara University, 2013", ru: "Медицинское образование: Анкарский университет, 2013", fa: "تحصیل پزشکی: دانشگاه آنکارا، ۲۰۱۳" },
    line: { tr: "Uzmanlık: Ankara Şehir Hastanesi, 2020", en: "Specialist training: Ankara City Hospital, 2020", ru: "Специализация: Городская больница Анкары, 2020", fa: "تخصص: بیمارستان شهر آنکارا، ۲۰۲۰" },
    photo: "/img/gurhan.jpg",
    summary: {
      tr: [
        "Yrd. Doç. Dr. Utku Gürhan, 2013 yılında Ankara Üniversitesi Tıp Fakültesi’nden mezun oldu. Ortopedi ve Travmatoloji uzmanlık eğitimini Ankara Numune Eğitim ve Araştırma Hastanesi ile Ankara Şehir Hastanesi’nde tamamlayarak 2020 yılında uzman oldu; ardından Silopi Devlet Hastanesi’nde çalıştı. Türk Ortopedi ve Travmatoloji Eğitim Konseyi (TOTEK) yeterlik belgesine sahiptir.",
        "2021 yılından bu yana Dr. Suat Günsel Girne Üniversitesi Hastanesi’nde görev yapmakta, 2023 yılından itibaren Girne Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nda öğretim üyesi olarak ders vermektedir.",
      ],
      en: [
        "Dr. Utku Gürhan graduated from Ankara University Faculty of Medicine in 2013. He completed his residency in Orthopaedics and Traumatology at Ankara Numune Training and Research Hospital and Ankara City Hospital, qualifying as a specialist in 2020, and then worked at Silopi State Hospital. He is board certified by the Turkish Board of Orthopaedics and Traumatology (TOTEK).",
        "He has practised at Dr. Suat Günsel University of Kyrenia Hospital since 2021 and has been a faculty member of the University of Kyrenia Faculty of Medicine, Department of Orthopaedics and Traumatology, since 2023.",
      ],
      ru: [
        "Асс. проф., д-р Утку Гюрхан в 2013 году окончил медицинский факультет Анкарского университета. Ординатуру по ортопедии и травматологии прошёл в Учебно-исследовательской больнице Анкара Нумуне и Городской больнице Анкары и в 2020 году получил специальность; затем работал в Государственной больнице Силопи. Сертифицирован Турецким советом по ортопедии и травматологии (TOTEK).",
        "С 2021 года работает в Университетской больнице им. д-ра Суата Гюнселя (Кирения), с 2023 года как член профессорско-преподавательского состава преподаёт на кафедре ортопедии и травматологии медицинского факультета Университета Кирении.",
      ],
      fa: [
        "دکتر اوتکو گورهان، استادیار ارتوپدی و تروماتولوژی، در سال ۲۰۱۳ از دانشکدهٔ پزشکی دانشگاه آنکارا فارغ‌التحصیل شد. دورهٔ تخصص ارتوپدی و تروماتولوژی را در بیمارستان آموزشی و پژوهشی نومونهٔ آنکارا و بیمارستان شهر آنکارا گذراند و در سال ۲۰۲۰ متخصص شد؛ سپس در بیمارستان دولتی سیلوپی کار کرد. دارای گواهی بورد ارتوپدی و تروماتولوژی ترکیه (TOTEK) است.",
        "از سال ۲۰۲۱ در بیمارستان دانشگاهی دکتر سوات گونسل، گیرنه مشغول به کار است و از سال ۲۰۲۳ به‌عنوان عضو هیئت علمی در گروه ارتوپدی و تروماتولوژی دانشکدهٔ پزشکی دانشگاه گیرنه تدریس می‌کند.",
      ],
    },
    focus: {
      tr: ["El cerrahisi ve mikrocerrahi", "Replantasyon, sinir ve tendon onarımı", "Flep ile rekonstrüksiyon", "Ortopedik travma"],
      en: ["Hand surgery and microsurgery", "Replantation, nerve and tendon repair", "Flap reconstruction", "Orthopaedic trauma"],
      ru: ["Хирургия кисти и микрохирургия", "Реплантация, восстановление нервов и сухожилий", "Реконструкция лоскутами", "Ортопедическая травматология"],
      fa: ["جراحی دست و میکروجراحی", "پیوند مجدد، ترمیم عصب و تاندون", "بازسازی با فلپ", "ترومای ارتوپدی"],
    },
    path: [
      { y: "2013", t: { tr: "Tıp Doktoru", en: "Doctor of Medicine", ru: "Врач", fa: "دکترای پزشکی" }, s: { tr: "Ankara Üniversitesi Tıp Fakültesi", en: "Ankara University Faculty of Medicine", ru: "Медицинский факультет Анкарского университета", fa: "دانشکدهٔ پزشکی دانشگاه آنکارا" } },
      { y: "2013–2014", t: { tr: "Pratisyen hekim, çocuk acil", en: "General practitioner, paediatric emergency", ru: "Врач общей практики, детская неотложная помощь", fa: "پزشک عمومی، اورژانس کودکان" }, s: { tr: "Gaziantep Çocuk Hastanesi", en: "Gaziantep Children’s Hospital", ru: "Детская больница Газиантепа", fa: "بیمارستان کودکان غازی‌عنتاب" } },
      { y: "2014–2020", t: { tr: "Ortopedi ve Travmatoloji uzmanlık eğitimi", en: "Residency in Orthopaedics and Traumatology", ru: "Ординатура по ортопедии и травматологии", fa: "دورهٔ تخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Ankara Numune EAH, Ankara Şehir Hastanesi", en: "Ankara Numune Hospital, Ankara City Hospital", ru: "Учебно-исследовательская больница Анкара Нумуне, Городская больница Анкары", fa: "بیمارستان آموزشی و پژوهشی نومونهٔ آنکارا، بیمارستان شهر آنکارا" } },
      { y: "2020–2021", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Consultant orthopaedic surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Silopi Devlet Hastanesi, Şırnak", en: "Silopi State Hospital, Şırnak", ru: "Государственная больница Силопи, Ширнак", fa: "بیمارستان دولتی سیلوپی، شیرناک" } },
      { y: "2021–", t: { tr: "Ortopedi ve Travmatoloji Uzmanı", en: "Orthopaedic and trauma surgeon", ru: "Ортопед-травматолог", fa: "متخصص ارتوپدی و تروماتولوژی" }, s: { tr: "Dr. Suat Günsel Girne Üniversitesi Hastanesi", en: "Dr. Suat Günsel University of Kyrenia Hospital", ru: "Университетская больница им. д-ра Суата Гюнселя (Кирения)", fa: "بیمارستان دانشگاهی دکتر سوات گونسل، گیرنه" } },
      { y: "2023–", t: { tr: "Yardımcı Doçent", en: "Assistant Professor", ru: "Ассистент-профессор", fa: "استادیار" }, s: { tr: "Girne Üniversitesi Tıp Fakültesi", en: "University of Kyrenia Faculty of Medicine", ru: "Медицинский факультет Университета Кирении", fa: "دانشکدهٔ پزشکی دانشگاه گیرنه" } },
    ],
    academic: {
      tr: "Hakemli dergilerde 22 makale. Araştırma alanları üst ekstremite travması, yapay zekânın ortopedi pratiği ve eğitimindeki kullanımı ve Türk ortopedi literatürünün bibliyometrik analizidir. Sık Görülen El Travmalarına Yaklaşım (BİDGE, 2026) kitabının editörüdür.",
      en: "22 articles in peer-reviewed journals. Research interests are upper-limb trauma, the use of artificial intelligence in orthopaedic practice and education, and bibliometric analysis of the Turkish orthopaedic literature. Editor of Sık Görülen El Travmalarına Yaklaşım (Approach to Common Hand Injuries; BİDGE, 2026).",
      ru: "22 статьи в рецензируемых журналах. Области исследований: травмы верхней конечности, применение искусственного интеллекта в ортопедической практике и образовании, библиометрический анализ турецкой ортопедической литературы. Редактор книги Sık Görülen El Travmalarına Yaklaşım («Подход к частым травмам кисти»; BİDGE, 2026).",
      fa: "۲۲ مقاله در مجلات داوری‌شده. زمینه‌های پژوهشی او آسیب‌های اندام فوقانی، کاربرد هوش مصنوعی در طبابت و آموزش ارتوپدی و تحلیل کتاب‌سنجی متون ارتوپدی ترکیه است. ویراستار کتاب Sık Görülen El Travmalarına Yaklaşım («رویکرد به آسیب‌های شایع دست»؛ BİDGE\u200F، ۲۰۲۶) است.",
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
      ru: ["Сертификат TOTEK (2021)", "Член Турецкого совета по ортопедии и травматологии (TOTEK)", "Член Кипрско-турецкой медицинской ассоциации"],
      fa: ["گواهی بورد TOTEK\u200F (۲۰۲۱)", "عضو بورد ارتوپدی و تروماتولوژی ترکیه (TOTEK)", "عضو انجمن پزشکی ترک‌های قبرس"],
    },
    langs: { tr: "Türkçe, İngilizce", en: "Turkish, English", ru: "турецкий, английский", fa: "ترکی، انگلیسی" },
    links: [
      { label: "ORCID", href: "https://orcid.org/0000-0002-4721-8854" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_7y8apUAAAAJ" },
    ],
    site: "https://utkugurhan.com",
    sameAs: ["https://utkugurhan.com", "https://orcid.org/0000-0002-4721-8854", "https://scholar.google.com/citations?user=_7y8apUAAAAJ"],
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
