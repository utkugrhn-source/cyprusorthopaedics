"use client";
import { useEffect, useRef, useState } from "react";

/**
 * A vertical YouTube video that costs nothing until it is asked for: the page ships a local poster and a play button,
 * and only a click puts the youtube-nocookie.com frame in. Without JavaScript the link under it opens the video on YouTube.
 */
export default function VideoEmbed({ id, title, poster, play, length }: { id: string; title: string; poster: string; play: string; length: string }) {
  const [on, setOn] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  useEffect(() => { if (on) frame.current?.focus(); }, [on]);
  return (
    <div className="vid">
      {on ? (
        <iframe
          ref={frame}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" className="vid-play" aria-label={`${play}: ${title}`} onClick={() => setOn(true)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" loading="lazy" decoding="async" width={720} height={1280} className="absolute inset-0 h-full w-full object-cover" />
          <span aria-hidden className="vid-bar">
            <span className="vid-glyph"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg></span>
            <span>{play}</span>
            <span className="ms-auto">{length}</span>
          </span>
        </button>
      )}
    </div>
  );
}
