"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experienceConfig } from "@/lib/config/experience";
import { matchesRole } from "@/lib/roles";
import { useRole } from "./role-context";

export function HomeSkillsPreview() {
  const { role } = useRole();
  const groups = experienceConfig.skills.filter((g) => matchesRole(g.roles, role));

  if (groups.length === 0) return null;

  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Key skills</p>
            <h2 className="h-section mt-2">What I work with.</h2>
          </div>
          <Link
            href="/experience"
            className="hidden items-center gap-1 text-sm text-ink-muted hover:text-accent sm:inline-flex"
          >
            Full breakdown <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <Link key={group.name} href="/experience" className="card group block p-6">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider text-accent">{group.name}</div>
                <ArrowRight
                  size={14}
                  className="text-ink-faint transition group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/experience"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent"
          >
            Full breakdown <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
