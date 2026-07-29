"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { experienceConfig } from "@/lib/config/experience";
import { matchesRole } from "@/lib/roles";
import { useRole } from "./role-context";
import {
  CATEGORY_COLOR,
  SkillBracelet,
  monogram,
  type Charm,
} from "./skill-bracelet";

export function HomeSkillsPreview() {
  const { role } = useRole();
  const groups = experienceConfig.skills.filter((g) => matchesRole(g.roles, role));

  const charms = useMemo<Charm[]>(() => {
    return groups.flatMap((g) =>
      g.items.map((name) => ({
        name,
        category: g.name,
        color: CATEGORY_COLOR[g.name] ?? "#A78BFA",
        mono: monogram(name),
      }))
    );
  }, [groups]);

  if (charms.length === 0) return null;

  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Key skills</p>
            <h2 className="h-section mt-2">What I work with.</h2>
            <p className="mt-2 max-w-lg text-sm text-ink-muted">
              A little charm bracelet — every skill hangs off the chain. Scroll or hover to play with it.
            </p>
          </div>
          <Link
            href="/experience"
            className="hidden items-center gap-1 text-sm text-ink-muted hover:text-accent sm:inline-flex"
          >
            Full breakdown <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8">
          <SkillBracelet charms={charms} />
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
