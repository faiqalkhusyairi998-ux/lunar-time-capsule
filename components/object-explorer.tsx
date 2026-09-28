'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ERA_DOT } from '@/lib/era-styles'
import {
  ERAS,
  LUNAR_OBJECTS,
  MISSIONS,
  getMission,
  type Era,
  type LunarObject,
} from '@/lib/lunar-data'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ObjectDetails } from '@/components/object-details'
import { SectionHeading } from '@/components/section-heading'

type EraFilter = Era | 'all'

export function ObjectExplorer() {
  const [era, setEra] = useState<EraFilter>('all')
  const [missionId, setMissionId] = useState<string>('all')
  const [selected, setSelected] = useState<LunarObject | null>(null)

  const missionOptions = MISSIONS.filter((m) => era === 'all' || m.era === era)

  const results = useMemo(
    () =>
      LUNAR_OBJECTS.filter((o) => {
        const mission = getMission(o.missionId)
        if (era !== 'all' && mission.era !== era) return false
        if (missionId !== 'all' && o.missionId !== missionId) return false
        return true
      }),
    [era, missionId],
  )

  const changeEra = (next: EraFilter) => {
    setEra(next)
    setMissionId('all')
  }

  const eraFilters: { id: EraFilter; label: string }[] = [
    { id: 'all', label: 'All eras' },
    ...ERAS.map((e) => ({ id: e.id, label: `${e.label} · ${e.range}` })),
  ]

  return (
    <section aria-labelledby="objects-heading" id="objects" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          id="objects-heading"
          eyebrow="02 · Object explorer"
          title="The lunar collection"
          description="Science instruments, vehicles, landers, memorials, and impact sites. Filter by era or mission, then open any object to learn its story."
        />

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div role="group" aria-label="Filter by era" className="flex flex-wrap gap-2">
            {eraFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => changeEra(f.id)}
                aria-pressed={era === f.id}
                className={cn(
                  'flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors',
                  era === f.id
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {f.id !== 'all' && (
                  <span aria-hidden="true" className={cn('size-2 rounded-full', ERA_DOT[f.id])} />
                )}
                {f.label}
              </button>
            ))}
          </div>

          <label className="flex flex-col gap-1.5 text-xs text-muted-foreground">
            Mission
            <select
              value={missionId}
              onChange={(e) => setMissionId(e.target.value)}
              className="h-10 min-w-48 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <option value="all">All missions</option>
              {missionOptions.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.year})
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          Showing {results.length} of {LUNAR_OBJECTS.length} objects
        </p>

        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((o) => {
            const mission = getMission(o.missionId)
            return (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => setSelected(o)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={o.image}
                      alt={o.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium backdrop-blur">
                      {o.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <span aria-hidden="true" className={cn('size-2 rounded-full', ERA_DOT[mission.era])} />
                      {mission.name} · {o.year}
                    </p>
                    <h3 className="mt-2 font-semibold leading-snug">{o.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {o.purpose}
                    </p>
                    <span className="mt-auto pt-4 text-sm font-medium text-primary">
                      View details
                    </span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="pr-8 text-lg font-semibold">{selected.name}</DialogTitle>
                <DialogDescription>{selected.category}</DialogDescription>
              </DialogHeader>
              <ObjectDetails object={selected} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
