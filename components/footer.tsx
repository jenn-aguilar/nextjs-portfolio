import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-sm text-ink">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-xs text-ink-faint">{siteConfig.location} · Built with Next.js + Tailwind</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
          </a>
          {siteConfig.socials.linkedin && (
            <a
              href={siteConfig.socials.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted hover:border-accent hover:text-accent"
            >
              <Linkedin size={16} />
            </a>
          )}
          {siteConfig.socials.github && (
            <a
              href={siteConfig.socials.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted hover:border-accent hover:text-accent"
            >
              <Github size={16} />
            </a>
          )}
          <Link href="/contact" className="link-underline text-sm text-ink-muted">
            Get in touch →
          </Link>
        </div>
      </div>
    </footer>
  );
}
