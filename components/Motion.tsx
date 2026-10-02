"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Motion() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("motion-off");
      return;
    }
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href*='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.pathname !== location.pathname) return;
      const el = document.querySelector(url.hash);
      if (el) { e.preventDefault(); lenis.scrollTo(el as HTMLElement, { offset: -72 }); }
    };
    document.addEventListener("click", onClick);
    const header = document.querySelector<HTMLElement>("[data-header]");
    const onScroll = () => header?.classList.toggle("is-stuck", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ctx = gsap.context(() => {
      // photographs open like a blind, once
      document.querySelectorAll<HTMLElement>("[data-clip]").forEach((el, i) => {
        gsap.to(el, { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power3.out", delay: (Number(el.dataset.clip) || 0) * 0.12, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
      // slow drift inside framed photographs
      document.querySelectorAll<HTMLElement>("[data-drift]").forEach((el) => {
        gsap.fromTo(el, { yPercent: -7 }, { yPercent: 7, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });
      // the seal settles as the hero leaves
      const seal = document.querySelector("[data-seal]");
      if (seal) gsap.to(seal, { rotate: 8, yPercent: 10, ease: "none", scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true } });
    });
    return () => { ctx.revert(); document.removeEventListener("click", onClick); window.removeEventListener("scroll", onScroll); gsap.ticker.remove(tick); lenis.destroy(); };
  }, [path]);
  return null;
}
