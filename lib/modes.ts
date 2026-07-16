export const MODES = ["all", "engineer", "analyst", "designer", "lead"] as const;
export type Mode = (typeof MODES)[number];

export const MODE_LABELS: Record<Mode, string> = {
  all: "All",
  engineer: "Engineer",
  analyst: "Analyst",
  designer: "Designer",
  lead: "Lead",
};

export const MODE_DESCRIPTIONS: Record<Mode, string> = {
  all: "Everything I do — engineering, data, design, leadership.",
  engineer: "Building software: full-stack, AI, e-commerce, tooling.",
  analyst: "Data science, systems analysis, dashboards, reporting.",
  designer: "Product & storefront design, UI, brand.",
  lead: "Engineering leadership, mentorship, hiring, delivery.",
};

export const DEFAULT_MODE: Mode = "engineer";

/**
 * An item matches the current mode when:
 *  - mode is "all"
 *  - the item has no mode tags (universal)
 *  - the item explicitly includes the current mode in its tags
 */
export function matchesMode(itemModes: readonly Mode[] | undefined, current: Mode): boolean {
  if (current === "all") return true;
  if (!itemModes || itemModes.length === 0) return true;
  return itemModes.includes(current);
}
