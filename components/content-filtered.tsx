"use client";

import { ModeProvider, useMode } from "@/components/mode-context";
import { ModeSelector } from "@/components/mode-selector";
import { ContentGrid } from "@/components/content-grid";
import { contentConfig } from "@/lib/config/content";
import { matchesMode } from "@/lib/modes";

export function ContentFiltered() {
  return (
    <ModeProvider>
      <ModeSelector />
      <FilteredGrid />
    </ModeProvider>
  );
}

function FilteredGrid() {
  const { mode } = useMode();
  const posts = [...contentConfig.posts]
    .filter((p) => matchesMode(p.modes, mode))
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
