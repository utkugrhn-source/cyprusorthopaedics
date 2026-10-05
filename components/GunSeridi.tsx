"use client";
import { useEffect, useState } from "react";
import { bugunKibris, gunBul, type Gun } from "@/lib/gunler";

/**
 * One-line strip shown on national, commemoration and religious days (list in lib/gunler.ts).
 * It is drawn only in the browser, from the visitor's clock read as North Cyprus time, so the static pages
 * stay identical on every other day. Fixed to the lower corner: it covers no content and moves nothing.
 * `?gun=YYYY-MM-DD` shows the strip of that date, for checking a day in advance.
 */
export default function GunSeridi() {
  const [gun, setGun] = useState<Gun | null>(null);
  const [key, setKey] = useState("");

  useEffect(() => {
    let iso = bugunKibris();
    let preview = false;
    try {
      const q = new URLSearchParams(window.location.search).get("gun");
      if (q && /^\d{4}-\d{2}-\d{2}$/.test(q)) { iso = q; preview = true; }
    } catch { /* no query string to read */ }
    const g = gunBul(iso);
    if (!g) return;
    const k = `gun-kapali-${iso}`;
    if (!preview) {
      try { if (window.localStorage.getItem(k)) return; } catch { /* storage unavailable: show the strip */ }
    }
    setKey(k);
    setGun(g);
  }, []);

  if (!gun) return null;

  const kapat = () => {
    try { window.localStorage.setItem(key, "1"); } catch { /* closed for this page view only */ }
    setGun(null);
  };

  return (
    <div className="gun" role="status" aria-live="polite" lang="tr" dir="ltr">
      <p className="gun-metin">{gun.mesaj}</p>
      <button type="button" className="gun-x" onClick={kapat} aria-label="Kapat">×</button>
    </div>
  );
}
