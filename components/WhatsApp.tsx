"use client";
import { useEffect, useRef, useState } from "react";

export type WaText = { open: string; title: string; sub: string; hello: string; placeholder: string; send: string; close: string; note: string; fallback: string };

/**
 * WhatsApp button that opens into a small message box. The visitor writes here; pressing Send opens WhatsApp
 * with the message already typed, where one tap sends it. Nothing is sent from the page itself.
 * The icon is a plain speech bubble; the word carries the meaning.
 */
export default function WhatsApp({ number, t, source }: { number: string; t: WaText; source: string }) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const box = useRef<HTMLTextAreaElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    box.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const send = () => {
    const body = msg.trim() ? `${msg.trim()}\n\n(${source})` : t.fallback;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    setOpen(false); setMsg("");
  };

  return (
    <>
      {open && (
        <div className="wa-panel" role="dialog" aria-label={t.title} data-lenis-prevent>
          <div className="wa-head">
            <div>
              <p className="wa-title">{t.title}</p>
              <p className="wa-sub">{t.sub}</p>
            </div>
            <button type="button" className="wa-x" onClick={() => { setOpen(false); toggle.current?.focus(); }} aria-label={t.close}>×</button>
          </div>
          <div className="wa-body">
            <p className="wa-hello">{t.hello}</p>
          </div>
          <form className="wa-form" onSubmit={(e) => { e.preventDefault(); send(); }}>
            <textarea ref={box} className="wa-input" dir="auto" rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder={t.placeholder} aria-label={t.placeholder}
              onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); send(); } }} />
            <button type="submit" className="wa-send">{t.send}</button>
          </form>
          <p className="wa-note">{t.note}</p>
        </div>
      )}
      <button ref={toggle} type="button" className="wa" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={t.open} title={t.open}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 3c-5.1 0-9 3.6-9 8.2 0 1.8.6 3.5 1.7 4.8L3.6 21l5.3-1.4c1 .3 2 .5 3.1.5 5.1 0 9-3.6 9-8.4S17.1 3 12 3z" /></svg>
        <span>WhatsApp</span>
      </button>
    </>
  );
}
