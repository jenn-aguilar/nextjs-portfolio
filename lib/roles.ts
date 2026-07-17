export const ROLES = ["all", "engineer", "analyst", "designer", "lead"] as const;
export type Role = (typeof ROLES)[number];

export const ROLE_LABELS: Record<Role, string> = {
  all: "All",
  engineer: "Engineer",
  analyst: "Analyst",
  designer: "Designer",
  lead: "Lead",
};

export const ROLE_DESCRIPTIONS: Record<Role, string> = {
  all: "Everything I do — engineering, data, design, leadership.",
  engineer: "Building software: full-stack, AI, e-commerce, tooling.",
  analyst: "Data science, systems analysis, dashboards, reporting.",
  designer: "Product & storefront design, UI, brand.",
  lead: "Engineering leadership, mentorship, hiring, delivery.",
};

export const DEFAULT_ROLE: Role = "all";

/**
 * An item matches the current role when:
 *  - role is "all"
 *  - the item has no role tags (universal)
 *  - the item explicitly includes the current role in its tags
 */
export function matchesRole(itemRoles: readonly Role[] | undefined, current: Role): boolean {
  if (current === "all") return true;
  if (!itemRoles || itemRoles.length === 0) return true;
  return itemRoles.includes(current);
}
