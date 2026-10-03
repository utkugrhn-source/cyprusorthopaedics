"use client";
import { useEffect, useRef } from "react";

/** A silent loop that is fetched and played only while it is on screen, so it costs nothing until then. */
export default function LazyVideo({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }, { threshold: 0.35 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" loading="lazy" decoding="async" className={`absolute inset-0 ${className ?? ""}`} />
      <video ref={ref} className={`absolute inset-0 ${className ?? ""}`} muted loop playsInline preload="none" aria-label={label}>
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
