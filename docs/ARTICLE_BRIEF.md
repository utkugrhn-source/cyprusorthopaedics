# Cyprus Orthopaedics — brief for writing a patient-guide article

You are writing one new article for the patient guide of https://www.cyprusorthopaedics.com, the site of the orthopaedics and trauma clinic of the University of Kyrenia Faculty of Medicine (Dr. Suat Günsel University of Kyrenia Hospital, Kyrenia/Girne, North Cyprus). The project is at /home/claude/cyprusorthopaedics. The article is published in four languages at once: Turkish (the original), English, Russian and Persian.

The purpose of this batch: these topics are what people in Türkiye search for most in orthopaedics (measured with Google Trends and Google's own search suggestions) and the site has no page for them yet. The article should be the page a searcher is glad to land on: it answers the questions people actually type, in plain language, with sources. It is read by patients and relatives with no medical training, and it is also read by search engines and AI assistants that quote it, so every statement must be true, sourced and able to stand on its own.

## What you deliver

One new file: `/home/claude/cyprusorthopaedics/content/blog/<id>.json`. Do not edit any other file, do not run a build, do not run any git command that changes anything.

Other writers are working at the same time and share the scratchpad directory. Keep every script and working file of yours in a subfolder of the scratchpad named after your article id, and never run a script you did not write.

Read these first:
- `content/blog/plantar-fasciitis.json` and `content/blog/shoulder-calcific.json`: recent articles; copy their structure, tone, length and the way statements carry citations.
- `docs/TRANSLATION.md`: the Russian and Persian conventions. Follow it exactly.
- The existing articles named in your task as "related": your article must not contradict them. Where they already cover something in depth, summarise it in a sentence or two instead of repeating it.

### File format
JSON with 1-space indentation, UTF-8, non-ASCII characters written as themselves (`ensure_ascii=False`), no trailing newline. Top-level fields, in this order:

- `"id"`: given in your task
- `"area"`: given in your task
- `"updated"`: `"2026-10-04"`
- `"reviewer"`: `"gurhan"`
- `"reviewed"`: `false`
- `"sources"`: list of `{ "title", "publisher", "url", "year" }` (year as a string; `"n.d."` if the page shows none)
- `"i18n"`: object with keys `"tr"`, `"en"`, `"ru"`, `"fa"` in that order. Each has, in this order: `"slug"`, `"title"`, `"description"`, `"summary"`, `"sections"`, `"faq"`, `"note"`.

`sections` is a list of `{ "h": heading, "p": [paragraphs], "list": [items] }`; `list` is optional. `faq` is a list of exactly five `{ "q", "a" }`. All four languages have the same number of sections, the same paragraphs and list items in the same order, and the same citation markers on the same statements.

`note` is fixed:
- tr: `Bu yazı genel bir özettir; tanı ve tedavi kararı, sizi muayene eden hekimin değerlendirmesiyle verilir.`
- en: `This article is a general summary; diagnosis and treatment decisions are made by the doctor who examines you.`
- ru: `Этот текст — общий обзор; решение о диагнозе и лечении принимается на основании оценки врача, который вас осматривает.`
- fa: `این نوشته یک خلاصهٔ کلی است؛ تصمیم دربارهٔ تشخیص و درمان با ارزیابی پزشکی که شما را معاینه می‌کند گرفته می‌شود.`

### Shape of the article
- **Title**: opens with the phrase people search for, then says what the article answers, as a question or two short clauses (for example "Topuk dikeni ve plantar fasiit: topuk ağrısı neden olur, nasıl geçer?"). Aim for 70 characters or fewer in Turkish.
- **Description**: at most 160 characters in every language (count characters), built from the words a patient types.
- **Summary**: two or three sentences that give the answer itself, with citations. Someone who reads only this should leave with the main point.
- **Sections**: eight or nine. The last one is the warning-signs section and its heading is exactly `Beklemeden başvurmanız gerekenler` / `When not to wait` / `Когда обращаться без промедления` / `چه زمانی نباید منتظر ماند`. Headings are plain questions or labels a patient would recognise.
- **FAQ**: five questions taken from the real search questions listed in your task, each answered in one to three sentences with citations. Do not repeat a heading word for word.
- **Length**: Turkish summary plus sections between 6,000 and 7,500 characters.
- Your task lists the search phrases for the topic. Use the common everyday term as the main word and give the medical term once in brackets. Answer the listed questions somewhere in the article. Do not stuff phrases; each should appear where it is natural.

### Voice
Neutral, factual, institutional. No slogans, no superlatives, no promises of outcomes, no marketing of the clinic. Keep every hedge the source has ("may", "usually", "in most people"). Second person plural polite address in Turkish ("başvurun"), impersonal or passive for descriptions. The clinic speaks as "we" only if a related article does so in the same place; otherwise not at all.

### Things that must hold
- Spinal surgery is not offered at this clinic. If a neck or back problem belongs in the list of causes, name it and say it is assessed by the relevant specialty; do not describe spinal treatment and do not suggest the clinic treats it.
- No drug brand names, no doses, no prices, no named products or devices. Painkillers are mentioned as a class, with "a pharmacist or doctor can advise".
- People search for home remedies, creams and herbal cures. Answer what the sources say helps at home; do not list unproven remedies, and do not name any person or brand.
- Treatments whose evidence is weak or contested are described as such, with the source. Do not make a treatment sound better or worse than the source does.
- Consultations are held in Turkish and English only; never imply otherwise in the Russian or Persian text.

## Sources
Five to seven sources. Every factual statement carries a marker like `[2]` or `[1][3]`; every source is used at least once; the numbers follow the order of the `sources` list.

How to get them:
1. Find a page with WebSearch, then open that same URL with WebFetch. (WebFetch only opens URLs that came from a search result.) Ask WebFetch targeted questions and query a page two or three times; use only what comes back consistently.
2. For journal articles use the PubMed tools (load them with ToolSearch: `select:mcp__PubMed__search_articles,mcp__PubMed__get_article_metadata,mcp__PubMed__get_full_text_article`). Cite the PubMed URL `https://pubmed.ncbi.nlm.nih.gov/<PMID>/`.
3. Preferred publishers: NHS (nhs.uk), AAOS OrthoInfo (orthoinfo.org), NICE, Cochrane reviews, large trials and guidelines in major journals, national society patient pages (BSSH, BOFAS, APTA and the like).
4. Cite only what you actually opened and read in this session. If a site refuses the fetch (NICE often returns 403), choose another source. Do not try to reach a refused page by any other route (no curl, no cache, no mirror).
5. Numbers (percentages, durations, ages) appear only if a source you read states them, and are worded as the source words them.

## Russian and Persian
Translate from your Turkish; the result must read as if written in that language. `docs/TRANSLATION.md` is binding. Terms already fixed on this site: Persian frozen shoulder «شانهٔ یخ‌زده», De Quervain «دکورون», hip «لگن» / «مفصل لگن», MRI «ام‌آرآی», carpal tunnel «سندرم تونل کارپ»; Russian «МРТ», «лечебная физкультура» for exercise therapy, «артроз» as the everyday word with «остеоартрит» once in brackets. Persian uses Persian digits in prose and ASCII digits inside `[n]`. Slugs are lowercase ASCII with hyphens in all four languages and must not collide with any existing article's slug in the same language.

## Check before you finish
1. The file parses as JSON and has the field order above.
2. `python3 scripts/check_articles.py <id>` prints `ru OK` and `fa OK`.
3. Descriptions are 160 characters or fewer in all four languages; all four have the same number of sections and five FAQ items; English matches the Turkish paragraph for paragraph.
4. No slug collides with another file's slug in the same language (check tr and en yourself; the script checks ru and fa).

## Report back
Keep it short and factual:
1. Title, slug and description in the four languages.
2. The sources, each with one line on how you verified it and what it supports.
3. Anything you were unsure of, anything you left out because no source supported it, and any place where your article differs from a related article on the site.
