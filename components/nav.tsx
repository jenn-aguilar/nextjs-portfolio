"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20 text-accent">
            {siteConfig.monogram}
          </span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-accent-soft text-accent"
                    : "text-ink-muted hover:bg-bg-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="/cv.pdf"
            className="btn-primary"
            aria-label="Download CV as PDF"
          >
            <Download size={14} />
            CV
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line/60 bg-bg md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-ink hover:bg-bg-soft"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <a href="/cv.pdf" className="btn-primary flex-1" onClick={() => setOpen(false)}>
                <Download size={14} /> Download CV
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
