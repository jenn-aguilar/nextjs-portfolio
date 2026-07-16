import Image from "next/image";
import type { Screenshot } from "@/lib/config/projects";

export function ScreenshotGallery({ screenshots }: { screenshots: readonly Screenshot[] }) {
  if (!screenshots.length) return null;
  return (
    <section className="mt-12">
      <h2 className="font-display text-lg font-semibold">Screenshots</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {screenshots.map((shot) => (
          <figure key={shot.src} className="card overflow-hidden">
            <div className="relative aspect-[16/10] w-full bg-bg-soft">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {shot.caption && (
              <figcaption className="px-4 py-3 text-sm text-ink-muted">{shot.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
