"use client";
import { useEffect, useRef, useState } from "react";

/**
 * A silent loop that is fetched and played only while it is on screen, so it costs nothing until then.
 * Where the browser will not start it by itself (reduced motion, a phone in low-power mode), a play button appears instead and a tap starts it.
 */
export default function LazyVideo({ src, poster, label, play, className }: { src: string; poster: string; label: string; play: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onPlay = () => setIdle(false);
    v.addEventListener("playing", onPlay);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setIdle(true); return () => v.removeEventListener("playing", onPlay); }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => setIdle(true)); else v.pause();
    }, { threshold: 0.35 });
    io.observe(v);
    return () => { io.disconnect(); v.removeEventListener("playing", onPlay); };
  }, []);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" loading="lazy" decoding="async" className={`absolute inset-0 ${className ?? ""}`} />
      <video ref={ref} className={`absolute inset-0 ${className ?? ""}`} muted loop playsInline preload="none" aria-label={label}>
        <source src={src} type="video/mp4" />
      </video>
      {idle && (
        <button type="button" className="reel-toggle" aria-label={`${play}: ${label}`} onClick={() => ref.current?.play().catch(() => {})}>
          <span aria-hidden className="reel-glyph" data-on="1"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg></span>
        </button>
      )}
    </>
  );
}
