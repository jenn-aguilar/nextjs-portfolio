import type { ExperienceEntry } from "@/lib/config/experience";
import { MapPin } from "lucide-react";

export function Timeline({ items }: { items: readonly ExperienceEntry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-2 h-full w-px bg-line md:left-4" aria-hidden />
      <div className="space-y-12">
        {items.map((entry) => (
          <div key={entry.company} className="relative pl-10 md:pl-14">
            <div className="absolute left-0 top-1.5 grid h-7 w-7 place-items-center rounded-full border border-line bg-bg md:left-0.5 md:h-8 md:w-8">
              <div className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <div className="card p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                  {entry.company}
                </h3>
                <span className="text-xs text-ink-faint">{entry.dates}</span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs text-ink-muted">
                <MapPin size={11} />
                {entry.location}
              </div>
              {entry.summary && (
                <p className="mt-3 text-sm text-ink-muted">{entry.summary}</p>
              )}

              <div className="mt-6 space-y-6">
                {entry.positions.map((position) => (
                  <div key={position.title} className="border-l border-line pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-medium text-ink">{position.title}</h4>
                      <span className="text-xs text-ink-faint">{position.dates}</span>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
                      {position.bullets.map((b, i) => (
                        <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/60">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {entry.tags && entry.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {entry.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
