"use client";

import { ChevronDown } from "lucide-react";
import { ROLES, ROLE_LABELS, ROLE_DESCRIPTIONS, type Role } from "@/lib/roles";
import { useRole } from "./role-context";

type Props = {
  /** Hide the "Filter the site..." heading + dynamic description. Used on all pages except home. */
  compact?: boolean;
};

export function RoleSelector({ compact = false }: Props) {
  const { role, setRole } = useRole();

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
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Roles</p>
            {!compact && (
              <>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  Filter the site by what you&apos;re hiring for.
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  {ROLE_DESCRIPTIONS[role]}
                </p>
              </>
            )}
          </div>

          <MobileDropdown role={role} setRole={setRole} />

          <div
            role="tablist"
            aria-label="Filter by role"
            className="hidden md:flex flex-wrap gap-1.5 rounded-full border border-line bg-bg-card/60 p-1 backdrop-blur"
          >
            {ROLES.map((r) => (
              <RolePill key={r} value={r} current={role} onSelect={setRole} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileDropdown({
  role,
  setRole,
}: {
  role: Role;
  setRole: (r: Role) => void;
}) {
  return (
    <div className="md:hidden">
      <label className="sr-only" htmlFor="role-select">
        Filter by role
      </label>
      <div className="relative">
        <select
          id="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="w-full appearance-none rounded-full border border-line bg-bg-card/80 px-4 py-2.5 pr-10 text-sm font-medium text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          {ROLES.map((r) => (
            <option key={r} value={r} className="bg-bg-card text-ink">
              {ROLE_LABELS[r]}
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

function RolePill({
  value,
  current,
  onSelect,
}: {
  value: Role;
  current: Role;
  onSelect: (r: Role) => void;
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
      {ROLE_LABELS[value]}
    </button>
  );
}
