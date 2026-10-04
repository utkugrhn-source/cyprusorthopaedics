"use client";
import { useEffect, useRef, useState } from "react";

export type Paper = { text: string; doi: string; journal: string; year: string; cover?: string };

/**
 * One publication at a time: it fades out slowly and the next fades in.
 * All of them are in the page (stacked in one grid cell), so the block keeps the height of the longest and nothing jumps.
 * Beside each sits the journal's cover where the clinic has supplied one, otherwise a small tile naming the journal.
 * Rotation waits while the pointer or keyboard focus is on it, and does not run with reduced motion.
 */
export default function Papers({ items, every = 11000 }: { items: Paper[]; every?: number }) {
  const [i, setI] = useState(0);
  const hold = useRef(false);
  useEffect(() => {
    if (items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => { if (!hold.current && !document.hidden) setI((n) => (n + 1) % items.length); }, every);
    return () => window.clearInterval(id);
  }, [items.length, every]);
  return (
    <div dir="ltr" lang="en" className="grid grid-cols-[minmax(0,1fr)]" onMouseEnter={() => { hold.current = true; }} onMouseLeave={() => { hold.current = false; }} onFocus={() => { hold.current = true; }} onBlur={() => { hold.current = false; }}>
      {items.map((p, n) => (
        <div key={p.doi} className="paper flex min-w-0 items-start gap-4 md:gap-5" style={{ gridArea: "1 / 1" }} data-on={n === i ? "1" : "0"} aria-hidden={n !== i}>
          {p.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="jcover" src={p.cover} alt={p.journal} width={84} height={112} loading="lazy" decoding="async" />
          ) : (
            <span className="jtile" aria-hidden="true">
              <span className="jtile-name">{p.journal}</span>
              <span className="jtile-year">{p.year}</span>
            </span>
          )}
          <p className="min-w-0 max-w-[36em] text-[1rem] leading-relaxed text-white/90 [overflow-wrap:anywhere]" style={{ fontWeight: 400 }}>
            {p.text}{" "}
            <a className="underline decoration-turq underline-offset-4 hover:text-turq" href={`https://doi.org/${p.doi}`} tabIndex={n === i ? 0 : -1}>doi:{p.doi}</a>
          </p>
        </div>
      ))}
    </div>
  );
}
