"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Award } from "lucide-react";
import { experienceConfig } from "@/lib/config/experience";
import { matchesRole } from "@/lib/roles";
import { useRole } from "./role-context";

export function HomeEducation() {
  const { role } = useRole();
  const { education, certifications } = experienceConfig;

  const filteredCerts = certifications.filter((c) => matchesRole(c.roles, role));
  const topCerts = filteredCerts.slice(0, 4);
  const extra = filteredCerts.length - topCerts.length;

  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">
              Education & training
            </p>
            <h2 className="h-section mt-2">Credentials.</h2>
          </div>
          <Link
            href="/experience"
            className="hidden items-center gap-1 text-sm text-ink-muted hover:text-accent sm:inline-flex"
          >
            Full list <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link href="/experience" className="card group block p-6 md:p-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-accent">
              <GraduationCap size={14} />
              Education
            </div>
            <div className="mt-4 space-y-3">
              {education.map((ed) => (
                <div key={ed.school}>
                  <div className="font-display text-lg font-semibold text-ink group-hover:text-accent">
                    {ed.degree}
                  </div>
                  <div className="text-sm text-ink-muted">{ed.school}</div>
                  <div className="text-xs text-ink-faint">
                    {ed.location} · {ed.dates}
                  </div>
                </div>
              ))}
            </div>
          </Link>

          <Link href="/experience" className="card group block p-6 md:p-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-accent">
              <Award size={14} />
              Certifications & training
            </div>
            {topCerts.length === 0 ? (
              <p className="mt-4 text-sm text-ink-muted">
                No certifications tagged for this role.
              </p>
            ) : (
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {topCerts.map((c) => (
                  <li
                    key={c.name}
                    className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/60"
                  >
                    {c.name}
                  </li>
                ))}
                {extra > 0 && (
                  <li className="pl-4 text-xs text-ink-faint">+ {extra} more</li>
                )}
              </ul>
            )}
          </Link>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/experience"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent"
          >
            Full list <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
