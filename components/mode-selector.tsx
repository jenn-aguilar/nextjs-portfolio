"use client";

import { ChevronDown } from "lucide-react";
import { MODES, MODE_LABELS, MODE_DESCRIPTIONS, type Mode } from "@/lib/modes";
import { useMode } from "./mode-context";

type Props = {
  /** Hide the "Filter the site..." heading + dynamic description. Used on all pages except home. */
  compact?: boolean;
};

export function ModeSelector({ compact = false }: Props) {
  const { mode, setMode } = useMode();

  return (
    <section
      className={
        compact
          ? "pt-2 pb-8 md:pt-2 md:pb-10"
          : "pt-8 pb-10 md:pt-12 md:pb-16"
      }
    >
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          {!compact && (
            <div>
              <p className="text-sm uppercase tracking-widest text-accent">Modes</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                Filter the site by what you&apos;re hiring for.
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                {MODE_DESCRIPTIONS[mode]}
              </p>
            </div>
          )}

          <MobileDropdown mode={mode} setMode={setMode} compact={compact} />

          <div
            role="tablist"
            aria-label="Portfolio mode"
            className="hidden md:flex flex-wrap gap-1.5 rounded-full border border-line bg-bg-card/60 p-1 backdrop-blur"
          >
            {MODES.map((m) => (
              <ModePill key={m} value={m} current={mode} onSelect={setMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileDropdown({
  mode,
  setMode,
  compact,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
  compact: boolean;
}) {
  return (
    <div className={`md:hidden ${compact ? "" : ""}`}>
      <label className="sr-only" htmlFor="mode-select">
        Filter mode
      </label>
      <div className="relative">
        <select
          id="mode-select"
          value={mode}
          onChange={(e) => setMode(e.target.value as Mode)}
          className="w-full appearance-none rounded-full border border-line bg-bg-card/80 px-4 py-2.5 pr-10 text-sm font-medium text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          {MODES.map((m) => (
            <option key={m} value={m} className="bg-bg-card text-ink">
              {MODE_LABELS[m]}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-accent"
        />
      </div>
    </div>
  );
}

function ModePill({
  value,
  current,
  onSelect,
}: {
  value: Mode;
  current: Mode;
  onSelect: (m: Mode) => void;
}) {
  const active = value === current;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => onSelect(value)}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
        active
          ? "bg-accent text-black shadow"
          : "text-ink-muted hover:bg-bg-soft hover:text-ink"
      }`}
    >
      {MODE_LABELS[value]}
    </button>
  );
}
