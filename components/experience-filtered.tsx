"use client";

import { Timeline } from "@/components/timeline";
import { ModeProvider } from "@/components/mode-context";
import { ModeSelector } from "@/components/mode-selector";
import { useMode } from "@/components/mode-context";
import { experienceConfig } from "@/lib/config/experience";
import { matchesMode } from "@/lib/modes";

export function ExperienceFiltered() {
  return (
    <ModeProvider>
      <ModeSelector compact />
      <FilteredBody />
    </ModeProvider>
  );
}

function FilteredBody() {
  const { mode } = useMode();
  const { experience, skills, education, certifications, otherActivities } = experienceConfig;

  const filteredEntries = experience.filter(
    (e) => matchesMode(e.modes, mode) || e.roles.some((r) => matchesMode(r.modes, mode))
  );
  const filteredSkills = skills.filter((g) => matchesMode(g.modes, mode));
  const filteredCerts = certifications.filter((c) => matchesMode(c.modes, mode));
  const filteredOther = otherActivities.filter((a) => matchesMode(a.modes, mode));

  return (
    <>
      {filteredEntries.length === 0 ? (
        <div className="card p-8 text-center text-ink-muted">
          No roles match this mode — try another.
        </div>
      ) : (
        <Timeline items={filteredEntries} />
      )}

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <section className="card p-6 md:p-8">
          <h2 className="font-display text-xl font-semibold">Skills</h2>
          {filteredSkills.length === 0 ? (
            <p className="mt-4 text-sm text-ink-muted">
              No skill groups tagged for this mode.
            </p>
          ) : (
            <div className="mt-4 space-y-4 text-sm">
              {filteredSkills.map((group) => (
                <div key={group.name}>
                  <div className="text-xs uppercase tracking-wider text-ink-faint">
                    {group.name}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="card p-6 md:p-8">
          <h2 className="font-display text-xl font-semibold">Education</h2>
          <div className="mt-4 space-y-3 text-sm">
            {education.map((ed) => (
              <div key={ed.school}>
                <div className="font-medium text-ink">{ed.degree}</div>
                <div className="text-ink-muted">{ed.school}</div>
                <div className="text-xs text-ink-faint">
                  {ed.location} · {ed.dates}
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-8 font-display text-xl font-semibold">
            Certifications & training
          </h2>
          {filteredCerts.length === 0 ? (
            <p className="mt-4 text-sm text-ink-muted">
              No certifications tagged for this mode.
            </p>
          ) : (
            <ul className="mt-4 space-y-1.5 text-sm text-ink-muted">
              {filteredCerts.map((c) => (
                <li
                  key={c.name}
                  className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/60"
                >
                  {c.name}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {filteredOther.length > 0 && (
        <section className="mt-16">
          <h2 className="h-section">Other professional activities</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredOther.map((a) => (
              <div key={a.org} className="card p-6">
                <div className="font-medium text-ink">{a.role}</div>
                <div className="text-sm text-ink-muted">{a.org}</div>
                <div className="text-xs text-ink-faint">{a.dates}</div>
                <p className="mt-3 text-sm text-ink-muted">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
