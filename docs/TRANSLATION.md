# Cyprus Orthopaedics — Russian (ru) and Persian (fa) translation conventions

The clinic site (https://www.cyprusorthopaedics.com, project at /home/claude/cyprusorthopaedics) exists in Turkish (tr) and English (en). We are adding Russian (ru) and Persian/Farsi (fa). Readers are patients and relatives with no medical training: Russian speakers living in or travelling to North Cyprus, and Persian speakers (mostly from Iran). The Turkish text is the original; the English is a faithful version of it. Translate from the Turkish, using the English to resolve ambiguity. The result must read as if written in that language, not as a word-for-word rendering.

## What must not change
- Meaning, level of detail, order of sentences, and every hedge ("may", "usually", "can be considered"). Do not add facts, numbers, advice, reassurance or marketing. Do not drop anything.
- Citation markers such as [1] or [3][5]: keep them exactly, ASCII digits in square brackets, attached to the same statements.
- Latin-script names that stay as they are: "Cyprus Orthopaedics", journal titles, article titles in reference lists, URLs, e-mail addresses, street address "Şehit Yahya Bakır Sokak, Karakum", abbreviations such as NICE, NHS, AAOS, TOTEK, TOTBİD, MRI/CT when used as acronyms (see below), drug class names are translated but no brand names appear.
- Phone numbers stay in ASCII digits: +90 392 444 99 39.
- Voice: neutral, factual, institutional. No slogans, no superlatives, no promises of outcomes.
- Consultations are held in Turkish and English only. Never state or imply that consultations are available in Russian or Persian.
- Spinal surgery is not offered; do not introduce it.

## Russian
- Standard modern Russian for patient information. Address the reader as «вы» (lower case). Use «ё» where it is normally written (отёк, приём, её).
- Punctuation: «ёлочки» for quotes, em dash with spaces, no English-style title case.
- Common terms: МРТ, КТ, рентген; артроскопия; эндопротезирование (тазобедренного/коленного сустава); остеоартрит/артроз (use «артроз» as the everyday word and give «остеоартрит» once in brackets where the Turkish gives the medical term); перелом; вывих; связка; сухожилие; мениск; передняя крестообразная связка (ПКС); вращательная манжета плеча; запястный (карпальный) канал; физиотерапия / лечебная физкультура as fits; отделение неотложной помощи for "acil servis".
- Section heading for the warning-signs section: «Когда обращаться без промедления».
- Names: Yrd. Doç. Dr. Utku Gürhan → «асс. проф., д-р Утку Гюрхан»; Doç. Dr. Fazlı Levent Umur → «доц., д-р Фазлы Левент Умур»; Doç. Dr. Enes Sarı → «доц., д-р Энес Сары». At the start of a sentence capitalise the first word.
- Places and institutions: Girne/Kyrenia → «Кирения» (first mention on a page may be «Кирения (Гирне)»); North Cyprus → «Северный Кипр»; Dr. Suat Günsel Girne Üniversitesi Hastanesi → «Университетская больница им. д-ра Суата Гюнселя (Кирения)»; Girne Üniversitesi Tıp Fakültesi → «медицинский факультет Университета Кирении»; Ortopedi ve Travmatoloji Anabilim Dalı → «кафедра ортопедии и травматологии»; Ercan Havalimanı → «аэропорт Эрджан»; hastane santrali → «справочная больницы»; Ankara Üniversitesi → «Анкарский университет»; GATA → «Военно-медицинская академия Гюльхане (GATA)».

## Persian
- Contemporary Iranian Persian for patient information, polite and plain. Use the zero-width non-joiner (نیم‌فاصله, U+200C) correctly (می‌شود، شکستگی‌ها، به‌طور). Persian punctuation: ، ؛ ؟ and «گیومه».
- Digits: Persian digits (۰۱۲۳۴۵۶۷۸۹) in running prose; ASCII digits inside citation brackets [1], in phone numbers, URLs and in data fields that are plainly codes or years in a table column.
- Common terms: ام‌آرآی، سی‌تی‌اسکن، عکس رادیولوژی؛ آرتروسکوپی (جراحی بستهٔ مفصل)؛ تعویض مفصل (لگن/زانو)؛ آرتروز (استئوآرتریت)؛ شکستگی؛ دررفتگی؛ رباط؛ تاندون؛ منیسک؛ رباط صلیبی قدامی (ACL)؛ روتاتور کاف؛ سندرم تونل کارپ؛ فیزیوتراپی؛ اورژانس.
- Section heading for the warning-signs section: «چه زمانی نباید منتظر ماند».
- Names: in Persian the title before the name is always «دکتر» and the academic rank is given separately: «دکتر اوتکو گورهان» (استادیار), «دکتر فضلی لونت اومور» (دانشیار), «دکتر انس ساری» (دانشیار). In running text write e.g. «دکتر انس ساری، دانشیار ارتوپدی و تروماتولوژی».
- Places and institutions: Girne/Kyrenia → «گیرنه» (first mention on a page may be «گیرنه (کایرنیا)»); North Cyprus → «قبرس شمالی»; hospital → «بیمارستان دانشگاهی دکتر سوات گونسل، گیرنه»; faculty → «دانشکدهٔ پزشکی دانشگاه گیرنه»; department → «گروه ارتوپدی و تروماتولوژی»; Ercan → «فرودگاه ارجان»; switchboard → «تلفن مرکزی بیمارستان»; Ankara Üniversitesi → «دانشگاه آنکارا»; GATA → «آکادمی پزشکی نظامی گولهانه (GATA)».

## Slugs
URL slugs are lowercase ASCII with hyphens, in both languages: a readable transliteration of the title's key words (ru e.g. "perelom-lodyzhki", "artroz-kolennogo-sustava"; fa e.g. "shekastegi-mach-pa", "artroz-zanoo"). No Cyrillic or Arabic letters in slugs. Slugs must be unique within their language across the whole site.

## Titles and descriptions
- "title": the natural equivalent of the Turkish title; keep it informative, not longer than the Turkish by much.
- "description": at most 160 characters (count characters, not bytes), phrased around what a patient would type into a search box in that language.

## Reference
Established wording already published on the doctor's personal site can be consulted for consistency: /home/claude/utkugurhan/lib/i18n-extra.ts (interface text in ru and fa) and /home/claude/utkugurhan/content/blog/*.json (articles with ru and fa versions). Where that wording differs from this file, this file wins.
