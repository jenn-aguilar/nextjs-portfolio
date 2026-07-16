"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { DEFAULT_MODE, type Mode } from "@/lib/modes";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
};

const ModeContext = createContext<Ctx | null>(null);

export function ModeProvider({
  children,
  initial = DEFAULT_MODE,
}: {
  children: ReactNode;
  initial?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initial);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>
  );
}

export function useMode(): Ctx {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within <ModeProvider>");
  return ctx;
}
