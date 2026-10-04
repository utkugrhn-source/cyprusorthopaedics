"use client";
import { useEffect, useRef, useState } from "react";

export type Paper = { text: string; doi: string };

/**
 * One publication at a time: it fades out and the next fades in.
 * All of them are in the page (stacked in one grid cell), so the block keeps the height of the longest and nothing jumps.
 * Rotation waits while the pointer or keyboard focus is on it, and does not run with reduced motion.
 */
export default function Papers({ items, every = 6500 }: { items: Paper[]; every?: number }) {
  const [i, setI] = useState(0);
  const hold = useRef(false);
  useEffect(() => {
    if (items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => { if (!hold.current && !document.hidden) setI((n) => (n + 1) % items.length); }, every);
    return () => window.clearInterval(id);
  }, [items.length, every]);
  return (
    <div className="grid" onMouseEnter={() => { hold.current = true; }} onMouseLeave={() => { hold.current = false; }} onFocus={() => { hold.current = true; }} onBlur={() => { hold.current = false; }}>
      {items.map((p, n) => (
        <p key={p.doi} className="paper max-w-[38em] text-[1rem] leading-relaxed text-white/90" style={{ gridArea: "1 / 1", fontWeight: 400 }} data-on={n === i ? "1" : "0"} aria-hidden={n !== i}>
          {p.text}{" "}
          <a className="underline decoration-turq underline-offset-4 hover:text-turq" href={`https://doi.org/${p.doi}`} tabIndex={n === i ? 0 : -1}>doi:{p.doi}</a>
        </p>
      ))}
    </div>
  );
}
