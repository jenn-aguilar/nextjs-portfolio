import type { Metadata } from "next";
import { contentConfig } from "@/lib/config/content";
import { ContentFiltered } from "@/components/content-filtered";

export const metadata: Metadata = {
  title: "Content & AI",
  description:
    "Social media and AI-generated content — the side hustle. TikTok, Instagram, YouTube, and more.",
};

export default function ContentPage() {
  return (
    <div className="container-x section">
      <header className="mb-4 max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent">Content & AI</p>
        <h1 className="h-section mt-2">{contentConfig.heading}</h1>
        <p className="mt-4 text-lg text-ink-muted">{contentConfig.intro}</p>
      </header>

      <ContentFiltered />
    </div>
  );
}
