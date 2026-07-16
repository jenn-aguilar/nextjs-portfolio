import { homeConfig } from "@/lib/config/home";

export function HighlightStats() {
  return (
    <section className="border-y border-line/60 bg-bg-soft/40">
      <div className="container-x grid grid-cols-2 gap-4 py-10 md:grid-cols-4">
        {homeConfig.highlights.map((h) => (
          <div key={h.label}>
            <div className="font-display text-3xl font-bold text-accent md:text-4xl">
              {h.value}
            </div>
            <div className="mt-1 text-sm text-ink-muted">{h.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
