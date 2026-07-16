import type { Metadata } from "next";
import { papersConfig } from "@/lib/config/papers";
import { PapersFiltered } from "@/components/papers-filtered";

export const metadata: Metadata = {
  title: "Research & writing",
  description: "Research papers and technical writing.",
};

export default function PapersPage() {
  return (
    <div className="container-x section">
      <header className="mb-4 max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent">Research & writing</p>
        <h1 className="h-section mt-2">{papersConfig.heading}</h1>
        <p className="mt-4 text-lg text-ink-muted">{papersConfig.intro}</p>
      </header>

      <PapersFiltered />
    </div>
  );
}
