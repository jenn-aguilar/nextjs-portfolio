"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { experienceConfig } from "@/lib/config/experience";
import { matchesRole } from "@/lib/roles";
import { useRole } from "./role-context";

export function HomeExperiencePreview() {
  const { role } = useRole();

  const filtered = experienceConfig.experience.filter((e) => matchesRole(e.roles, role));
  const recent = filtered.slice(0, 3);

  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Recent experience</p>
            <h2 className="h-section mt-2">Where I&apos;ve been lately.</h2>
          </div>
          <Link
            href="/experience"
            className="hidden items-center gap-1 text-sm text-ink-muted hover:text-accent sm:inline-flex"
          >
            Full career <ArrowRight size={14} />
          </Link>
        </div>

        {recent.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {recent.map((entry) => {
              const relevantPositions = entry.positions.filter((p) => matchesRole(p.roles, role));
              const currentPosition = relevantPositions[0] ?? entry.positions[0];
              return (
                <Link
                  key={entry.company}
                  href="/experience"
                  className="card group block p-6"
                >
                  <div className="flex items-center gap-1 text-xs text-ink-faint">
                    <MapPin size={11} className="text-accent" />
                    {entry.location.split("(")[0].trim()}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-accent">
                    {entry.company}
                  </h3>
                  <p className="mt-1 text-sm text-ink">{currentPosition.title}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">{currentPosition.dates}</p>
                  {entry.summary ? (
                    <p className="mt-3 line-clamp-3 text-sm text-ink-muted">{entry.summary}</p>
                  ) : (
                    <p className="mt-3 line-clamp-3 text-sm text-ink-muted">
                      {currentPosition.bullets[0]}
                    </p>
                  )}
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {entry.tags.slice(0, 3).map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-6 sm:hidden">
          <Link
            href="/experience"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent"
          >
            Full career <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="card mt-8 p-6 text-sm text-ink-muted">
      No matching roles — but the{" "}
      <Link href="/experience" className="link-underline text-accent">
        full career page
      </Link>{" "}
      has the complete story.
    </div>
  );
}
