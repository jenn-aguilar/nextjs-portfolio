"use client";

import { RoleProvider, useRole } from "@/components/role-context";
import { RoleSelector } from "@/components/role-selector";
import { ContentGrid } from "@/components/content-grid";
import { contentConfig } from "@/lib/config/content";
import { matchesRole } from "@/lib/roles";

export function ContentFiltered() {
  return (
    <RoleProvider>
      <RoleSelector compact />
      <FilteredGrid />
    </RoleProvider>
  );
}

function FilteredGrid() {
  const { role } = useRole();
  const posts = [...contentConfig.posts]
    .filter((p) => matchesRole(p.roles, role))
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  if (posts.length === 0) {
    return (
      <div className="card p-8 text-center text-ink-muted">
        Fresh content dropping soon.
      </div>
    );
  }

  return <ContentGrid items={posts} />;
}
