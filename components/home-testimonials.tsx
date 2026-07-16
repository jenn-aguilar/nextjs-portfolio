"use client";

import { Quote } from "lucide-react";
import { homeConfig } from "@/lib/config/home";
import { matchesMode } from "@/lib/modes";
import { useMode } from "./mode-context";

export function HomeTestimonials() {
  const { mode } = useMode();
  const filtered = homeConfig.testimonials.items.filter((t) => matchesMode(t.modes, mode));

  if (filtered.length === 0) return null;

  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="h-section mt-2">{homeConfig.testimonials.heading}</h2>
          <p className="mt-4 text-ink-muted">{homeConfig.testimonials.subheading}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {filtered.map((t, i) => (
            <figure key={i} className="card flex h-full flex-col p-6 md:p-7">
              <Quote size={20} className="text-accent" aria-hidden />
              <blockquote className="mt-4 flex-1 text-ink-muted">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-line/60 pt-4">
                <div className="font-medium text-ink">{t.name}</div>
                <div className="text-sm text-ink-muted">
                  {t.title}
                  {t.company ? ` · ${t.company}` : ""}
                </div>
                {t.linkedin && (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block text-xs text-accent hover:underline"
                  >
                    LinkedIn recommendation →
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
