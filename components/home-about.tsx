import { homeConfig } from "@/lib/config/home";

/** Small inline markdown: only supports **bold** since that's all we use. */
function renderInline(md: string) {
  const parts = md.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function HomeAbout() {
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <h2 className="h-section">{homeConfig.about.heading}</h2>
        <div className="mt-6 space-y-4 text-lg text-ink-muted">
          {homeConfig.about.paragraphs.map((p, i) => (
            <p key={i}>{renderInline(p)}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
