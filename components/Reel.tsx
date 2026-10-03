"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type ReelItem = { id: string; label: string; href?: string };
type Labels = { prev: string; next: string; play: string; pause: string };

/**
 * A strip of short, silent, vertical clips that scrolls sideways.
 * A clip is fetched and played only while its card is on screen; with reduced motion nothing plays until asked.
 */
export default function Reel({ items, labels, tone = "light" }: { items: ReelItem[]; labels: Labels; tone?: "light" | "deep" }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [still, setStill] = useState(false);
  const [held, setHeld] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setStill(reduce);
    const onScroll = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    let io: IntersectionObserver | undefined;
    if (!reduce) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting && v.dataset.held !== "1") v.play().catch(() => {});
          else v.pause();
        });
      }, { threshold: 0.55 });
      el.querySelectorAll("video").forEach((v) => io!.observe(v));
    }
    return () => { el.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); io?.disconnect(); };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 16 : 280;
    el.scrollBy({ left: dir * w * 2, behavior: "smooth" });
  };

  const toggle = (id: string, v: HTMLVideoElement | null) => {
    if (!v) return;
    if (v.paused) { v.dataset.held = "0"; v.play().catch(() => {}); setHeld((h) => ({ ...h, [id]: false })); }
    else { v.dataset.held = "1"; v.pause(); setHeld((h) => ({ ...h, [id]: true })); }
  };

  const deep = tone === "deep";
  return (
    <div className="reel relative">
      <ul ref={track} className="reel-track" tabIndex={0}>
        {items.map((it, i) => {
          const paused = still ? held[it.id] !== false : !!held[it.id];
          return (
            <li key={it.id} className="reel-card">
              <div className={`r-media relative aspect-[9/16] overflow-hidden ${deep ? "bg-black/30" : "bg-deep"}`} data-clip={Math.min(i, 5)}>
                <video id={`reel-${it.id}`} className="absolute inset-0 h-full w-full object-cover" muted loop playsInline preload="none" poster={`/video/reel/${it.id}.jpg`} aria-label={it.label}>
                  <source src={`/video/reel/${it.id}.mp4`} type="video/mp4" />
                </video>
                <button type="button" className="reel-toggle" aria-label={`${paused ? labels.play : labels.pause}: ${it.label}`} onClick={(e) => toggle(it.id, (e.currentTarget.previousElementSibling as HTMLVideoElement) ?? null)}>
                  <span aria-hidden className="reel-glyph" data-on={paused ? "1" : "0"}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
                  </span>
                </button>
              </div>
              <p className="mt-4 flex items-baseline gap-3 text-[1rem]" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>
                <span className={`text-[0.82rem] tabular-nums tracking-[0.04em] ${deep ? "text-turq" : "text-tide"}`}>{String(i + 1).padStart(2, "0")}</span>
                {it.href ? (
                  <Link href={it.href} className="group/l underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-turq">{it.label} <span aria-hidden className="inline-block text-turq transition-transform duration-300 group-hover/l:translate-x-1">→</span></Link>
                ) : it.label}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="wrap mt-8 hidden justify-end gap-3 md:flex">
        <button type="button" className="reel-nav" onClick={() => step(-1)} disabled={edge.start} aria-label={labels.prev}><span aria-hidden>←</span></button>
        <button type="button" className="reel-nav" onClick={() => step(1)} disabled={edge.end} aria-label={labels.next}><span aria-hidden>→</span></button>
      </div>
    </div>
  );
}
