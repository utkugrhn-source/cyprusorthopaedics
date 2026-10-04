import type { Doctor } from "@/lib/doctors";

/** Portrait frame; shows a marked placeholder until the doctor's photograph is supplied. */
export default function Portrait({ d, name, pending, priority, delay = 0 }: { d: Doctor; name?: string; pending: string; priority?: boolean; delay?: number }) {
  return (
    <div className="zoom r-media relative aspect-[4/5] overflow-hidden bg-mist" data-clip={delay}>
      {d.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={d.photo} alt={name ?? d.name} loading={priority ? "eager" : "lazy"} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 border border-dashed border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mark-160.png" alt="" width={120} height={120} className="h-28 w-28 opacity-40" />
          <span className="small text-slate">{pending}</span>
        </div>
      )}
    </div>
  );
}
