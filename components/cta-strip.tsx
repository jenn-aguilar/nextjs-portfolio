import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeConfig } from "@/lib/config/home";

export function CtaStrip() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h3 className="h-section">{homeConfig.ctaStrip.heading}</h3>
            <p className="mt-2 text-ink-muted">{homeConfig.ctaStrip.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get in touch <ArrowRight size={14} />
            </Link>
            <a href="/cv.pdf" className="btn-outline">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
