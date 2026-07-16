import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { homeConfig } from "@/lib/config/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-card/60 px-3 py-1 text-xs text-ink-muted">
            <MapPin size={12} className="text-accent" />
            {siteConfig.location} · {siteConfig.status}
          </span>
        </div>

        <h1 className="h-display mt-6 animate-fadeUp">{siteConfig.name}</h1>

        <p className="mt-4 font-display text-xl text-accent md:text-2xl animate-fadeUp">
          {siteConfig.roles.join(" · ")}
        </p>

        <p className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl animate-fadeUp">
          {homeConfig.hero.headline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 animate-fadeUp">
          {homeConfig.hero.ctas.map((cta) => {
            const cls = cta.variant === "primary" ? "btn-primary" : "btn-outline";
            const isDownload = "download" in cta && cta.download === true;
            const trailIcon =
              cta.variant === "primary" ? <ArrowRight size={14} /> : null;
            const leadIcon = isDownload ? <Download size={14} /> : null;

            return isDownload ? (
              <a key={cta.label} href={cta.href} className={cls}>
                {leadIcon}
                {cta.label}
              </a>
            ) : (
              <Link key={cta.label} href={cta.href} className={cls}>
                {cta.label}
                {trailIcon}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
