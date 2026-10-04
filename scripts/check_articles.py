#!/usr/bin/env python3
"""Usage: check_articles.py id [id ...]  — validates ru/fa versions of the given article ids against tr."""
import json, re, sys, glob, os
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "content", "blog")
allf = {json.load(open(f))["id"]: json.load(open(f)) for f in glob.glob(D + "/*.json")}
ok = True
def cites(x): return re.findall(r"\[(\d+)\]", json.dumps(x, ensure_ascii=False))
for i in sys.argv[1:]:
    d = allf[i]; tr = d["i18n"]["tr"]
    for l in ("ru", "fa"):
        t = d["i18n"].get(l)
        if not t: print(i, l, "MISSING"); ok = False; continue
        errs = []
        if set(t.keys()) != set(tr.keys()): errs.append(f"keys differ: {sorted(set(t.keys()) ^ set(tr.keys()))}")
        if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", t.get("slug", "")): errs.append("slug not ascii-hyphen")
        if len(t.get("description", "")) > 160: errs.append(f"description {len(t['description'])} > 160")
        if len(t.get("sections", [])) != len(tr["sections"]): errs.append("section count differs")
        else:
            for a, b in zip(tr["sections"], t["sections"]):
                if len(a["p"]) != len(b["p"]) or len(a.get("list", [])) != len(b.get("list", [])): errs.append(f"shape differs in section '{a['h'][:30]}'")
                if cites(a) != cites(b): errs.append(f"citations differ in section '{a['h'][:30]}': {cites(a)} vs {cites(b)}")
        if len(t.get("faq", [])) != len(tr["faq"]): errs.append("faq count differs")
        elif [cites(x) for x in tr["faq"]] != [cites(x) for x in t["faq"]]: errs.append("faq citations differ")
        if cites(tr["summary"]) != cites(t.get("summary", "")): errs.append("summary citations differ")
        txt = json.dumps(t, ensure_ascii=False)
        if l == "ru" and len(re.findall(r"[А-Яа-яЁё]", txt)) < 1000: errs.append("too little Cyrillic")
        if l == "fa" and len(re.findall(r"[؀-ۿ]", txt)) < 1000: errs.append("too little Persian")
        if l == "fa" and re.search(r"[يك]", txt): errs.append("Arabic ي/ك used instead of Persian ی/ک")
        dup = [k for k, v in allf.items() if k != i and v["i18n"].get(l, {}).get("slug") == t.get("slug")]
        if dup: errs.append(f"slug collides with {dup}")
        print(i, l, "OK" if not errs else "ERRORS: " + "; ".join(errs)); ok = ok and not errs
sys.exit(0 if ok else 1)
