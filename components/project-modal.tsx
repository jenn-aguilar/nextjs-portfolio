"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Project } from "@/lib/config/projects";
import { ProjectDetailContent } from "./project-detail-content";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const body = document.body;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [onClose]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative my-8 w-full max-w-3xl rounded-2xl border border-line bg-bg-card p-6 shadow-2xl focus:outline-none sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg text-ink-muted transition hover:border-accent hover:text-accent"
        >
          <X size={16} />
        </button>

        <div id="project-modal-title" className="sr-only">
          {project.title}
        </div>

        <ProjectDetailContent project={project} />
      </div>
    </div>,
    document.body
  );
}
