import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ERA_DOT, ERA_TEXT } from '@/lib/era-styles'
import { ERAS, LUNAR_OBJECTS, MISSIONS } from '@/lib/lunar-data'
import { SectionHeading } from '@/components/section-heading'

export function MissionTimeline() {
  return (
    <section aria-labelledby="timeline-heading" id="timeline" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        id="timeline-heading"
        eyebrow="03 · Mission timeline"
        title="Fifty years of footprints"
        description="From the first robotic scouts to crewed landings and modern science missions, each step left something behind."
      />

      <div className="mt-12 flex flex-col gap-14">
        {ERAS.map((era) => {
          const missions = MISSIONS.filter((m) => m.era === era.id)
          return (
            <div key={era.id}>
              <h3 className={cn('flex items-center gap-3 font-mono text-sm uppercase tracking-widest', ERA_TEXT[era.id])}>
                <span aria-hidden="true" className={cn('size-2.5 rounded-full', ERA_DOT[era.id])} />
                {era.label}
                <span className="text-muted-foreground">{era.range}</span>
              </h3>

              <ol className="mt-6 border-l border-border">
                {missions.map((m) => {
                  const objects = LUNAR_OBJECTS.filter((o) => o.missionId === m.id)
                  return (
                    <li key={m.id} className="relative pb-8 pl-6 last:pb-0 sm:pl-8">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute top-1.5 -left-[5px] size-2.5 rounded-full ring-4 ring-background',
                          ERA_DOT[m.era],
                        )}
                      />
                      <div className="grid gap-4 md:grid-cols-[10rem_1fr]">
                        <div>
                          <p className="font-mono text-2xl font-medium">{m.year}</p>
                          <p className="text-xs text-muted-foreground">{m.date}</p>
                        </div>
                        <div className="rounded-xl border border-border bg-card p-5">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h4 className="text-lg font-semibold">{m.name}</h4>
                            <span className="text-xs text-muted-foreground">{m.type}</span>
                          </div>
                          {m.crew && (
                            <p className="mt-1 text-sm text-muted-foreground">Crew: {m.crew}</p>
                          )}
                          <p className="mt-3 text-pretty leading-relaxed">{m.summary}</p>
                          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
                            {m.highlights.map((h) => (
                              <li key={h} className="flex gap-2">
                                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                            <p className="text-xs text-muted-foreground">
                              Left behind:{' '}
                              <span className="text-foreground">{objects.map((o) => o.name).join(', ')}</span>
                            </p>
                            <a
                              href={m.source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-primary underline-offset-4 hover:underline"
                            >
                              {m.source.label}
                              <ExternalLink className="size-3" aria-hidden="true" />
                              <span className="sr-only">(opens in a new tab)</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          )
        })}
      </div>
    </section>
  )
}
