"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { DEFAULT_ROLE, type Role } from "@/lib/roles";

type Ctx = {
  role: Role;
  setRole: (r: Role) => void;
};

const RoleContext = createContext<Ctx | null>(null);

export function RoleProvider({
  children,
  initial = DEFAULT_ROLE,
}: {
  children: ReactNode;
  initial?: Role;
}) {
  const [role, setRole] = useState<Role>(initial);
  return (
    <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
  );
}

export function useRole(): Ctx {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used within <RoleProvider>");
  return ctx;
}
