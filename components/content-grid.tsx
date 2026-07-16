import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Post } from "@/lib/config/content";

const platformBadge: Record<string, string> = {
  TikTok: "TT",
  Instagram: "IG",
  YouTube: "YT",
  X: "X",
  LinkedIn: "in",
  Threads: "T",
  Other: "•",
};

export function ContentGrid({ items }: { items: readonly Post[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((data) => {
        const inner = (
          <div className="card group h-full overflow-hidden">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-accent/20 via-bg-soft to-bg-card">
              {data.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.cover}
                  alt={data.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="grid h-full w-full place-items-center text-accent/60">
                  <Sparkles size={48} />
                </div>
              )}
              {data.platform && (
                <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-bg/80 text-xs font-bold text-accent backdrop-blur">
                  {platformBadge[data.platform] ?? "•"}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-ink group-hover:text-accent">
                  {data.title}
                </h3>
                <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-ink-faint group-hover:text-accent" />
              </div>
              {data.summary && (
                <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{data.summary}</p>
              )}
              {data.tags && data.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {data.tags.slice(0, 3).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
        return data.url ? (
          <a key={data.slug} href={data.url} target="_blank" rel="noreferrer noopener" className="block">
            {inner}
          </a>
        ) : (
          <div key={data.slug}>{inner}</div>
        );
      })}
    </div>
  );
}
