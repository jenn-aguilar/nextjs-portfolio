"use client";

import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { RoleProvider, useRole } from "@/components/role-context";
import { RoleSelector } from "@/components/role-selector";
import { papersConfig } from "@/lib/config/papers";
import { matchesRole } from "@/lib/roles";

export function PapersFiltered() {
  return (
    <RoleProvider>
      <RoleSelector compact />
      <FilteredList />
    </RoleProvider>
  );
}

function FilteredList() {
  const { role } = useRole();
  const papers = [...papersConfig.papers]
    .filter((p) => matchesRole(p.roles, role))
    .sort((a, b) => Number(b.year ?? 0) - Number(a.year ?? 0));

  if (papers.length === 0) {
    return (
      <div className="card p-8 text-center text-ink-muted">
        No papers tagged for this role.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {papers.map((data) => (
        <Link
          key={data.slug}
          href={`/papers/${data.slug}`}
          className="card group flex items-start justify-between gap-6 p-6 md:p-8"
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-ink-faint">
              <FileText size={12} className="text-accent" />
              {data.venue && <span>{data.venue}</span>}
              {data.year && <span>· {data.year}</span>}
            </div>
            <h2 className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-accent md:text-2xl">
              {data.title}
            </h2>
            {data.authors && data.authors.length > 0 && (
              <p className="mt-1 text-sm text-ink-muted">{data.authors.join(", ")}</p>
            )}
            {data.abstract && (
              <p className="mt-3 line-clamp-3 text-sm text-ink-muted">{data.abstract}</p>
            )}
          </div>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-ink-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </Link>
      ))}
    </div>
  );
}
