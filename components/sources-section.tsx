import { ExternalLink } from 'lucide-react'
import { SOURCES } from '@/lib/lunar-data'
import { SectionHeading } from '@/components/section-heading'

export function SourcesSection() {
  return (
    <section aria-labelledby="sources-heading" id="sources" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          id="sources-heading"
          eyebrow="06 · Sources"
          title="Built on official NASA data"
          description="Every fact, coordinate, and image on this site comes from NASA. Follow these links to dig deeper."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {SOURCES.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-col divide-y divide-border">
                {group.links.map((link) => (
                  <li key={link.url} className="py-3">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:text-primary hover:underline"
                    >
                      {link.label}
                      <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{link.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <p>Lunar Time Capsule · A NASA Space Apps Challenge 2026 project.</p>
          <p>Images courtesy of NASA. Not an official NASA website.</p>
        </div>
      </footer>
    </section>
  )
}
