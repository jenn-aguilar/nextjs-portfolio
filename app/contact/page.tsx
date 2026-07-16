import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jennifer Aguilar.",
};

export default function ContactPage() {
  const c = siteConfig.contact;
  return (
    <div className="container-x section">
      <header className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent">Contact</p>
        <h1 className="h-section mt-2">{c.heading}</h1>
        <p className="mt-4 text-lg text-ink-muted">{c.intro}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6 md:p-8">
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <MapPin size={14} className="text-accent" />
            {siteConfig.location} · {siteConfig.status}
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-ink-faint">Email</div>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <a href={`mailto:${siteConfig.email}`} className="link-underline text-ink">
                  {siteConfig.email}
                </a>
                <CopyButton value={siteConfig.email} label="Copy email" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                <Mail size={14} /> Send email
              </a>
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-outline"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              )}
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-outline"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="card p-6 md:p-8">
          <h2 className="font-display text-lg font-semibold">What I&apos;m looking for</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {c.lookingFor.map((item) => (
              <li
                key={item}
                className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/60"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-line/60 bg-bg-soft/60 p-4 text-sm text-ink-muted">
            <strong className="text-ink">Timezone note:</strong> {c.timezoneNote}
          </div>
        </div>
      </div>
    </div>
  );
}
