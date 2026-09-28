'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ERA_DOT } from '@/lib/era-styles'
import {
  ERAS,
  LUNAR_OBJECTS,
  MISSIONS,
  type MissionId,
} from '@/lib/lunar-data'
import { ObjectDetails } from '@/components/object-details'
import { SectionHeading } from '@/components/section-heading'

const SITES = MISSIONS.flatMap((mission) => {
  const objects = LUNAR_OBJECTS.filter((o) => o.missionId === mission.id)
  if (objects.length === 0) return []
  return [{ mission, objects, lat: objects[0].lat, lon: objects[0].lon }]
})

const DEFAULT_SITE = SITES.find((s) => s.mission.id === 'apollo-11') ?? SITES[0]

const toPercent = (lat: number, lon: number) => ({
  left: `${((lon + 180) / 360) * 100}%`,
  top: `${((90 - lat) / 180) * 100}%`,
})

export function MoonMap() {
  const [missionId, setMissionId] = useState<MissionId>(DEFAULT_SITE.mission.id)
  const [objectId, setObjectId] = useState(DEFAULT_SITE.objects[0].id)

  const site = SITES.find((s) => s.mission.id === missionId) ?? SITES[0]
  const object = site.objects.find((o) => o.id === objectId) ?? site.objects[0]

  const selectSite = (id: MissionId) => {
    const next = SITES.find((s) => s.mission.id === id)
    if (!next) return
    setMissionId(id)
    setObjectId(next.objects[0].id)
  }

  return (
    <section aria-labelledby="map-heading" id="map" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        id="map-heading"
        eyebrow="01 · Interactive map"
        title="Where the objects rest"
        description="Every marker is a real landing or impact site, placed using NASA coordinates on a map of the whole Moon. The near side (the face we see from Earth) sits in the middle. Select a site to see what was left there."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_24rem]">
        <div>
          <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src="/images/moon-map.jpg"
              alt="Color map of the entire lunar surface in equirectangular projection."
              fill
              sizes="(min-width: 1024px) 44rem, 100vw"
              className="object-cover brightness-[0.55] contrast-125 saturate-50"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-y-0 left-1/4 border-l border-dashed border-white/15" />
              <div className="absolute inset-y-0 left-3/4 border-l border-dashed border-white/15" />
              <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/10" />
              <span className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-white/60">
                Near side
              </span>
              <span className="absolute top-2 left-[12.5%] -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                Far side
              </span>
              <span className="absolute top-2 left-[87.5%] -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                Far side
              </span>
            </div>

            <ul className="absolute inset-0">
              {SITES.map((s) => {
                const active = s.mission.id === missionId
                return (
                  <li
                    key={s.mission.id}
                    className={cn('absolute', active ? 'z-20' : 'z-10 hover:z-30')}
                    style={toPercent(s.lat, s.lon)}
                  >
                    <button
                      type="button"
                      onClick={() => selectSite(s.mission.id)}
                      aria-pressed={active}
                      aria-label={`${s.mission.name}, ${s.mission.year}: ${s.objects.length} object${s.objects.length > 1 ? 's' : ''}`}
                      className="group relative -translate-x-1/2 -translate-y-1/2 p-2"
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-2 rounded-full',
                          ERA_DOT[s.mission.era],
                          active && 'animate-marker-pulse',
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className={cn(
                          'relative block size-3 rounded-full ring-2 ring-background transition-transform group-hover:scale-125 sm:size-3.5',
                          ERA_DOT[s.mission.era],
                          active && 'scale-125 ring-white',
                        )}
                      />
                      <span
                        className={cn(
                          'pointer-events-none absolute top-full left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-background/90 px-1.5 py-0.5 font-mono text-[10px] sm:block',
                          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100',
                        )}
                      >
                        {s.mission.name}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {ERAS.map((era) => (
              <span key={era.id} className="flex items-center gap-2">
                <span aria-hidden="true" className={cn('size-2.5 rounded-full', ERA_DOT[era.id])} />
                {era.label} ({era.range})
              </span>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs text-muted-foreground">Or choose a site from the list</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SITES.map((s) => (
                <button
                  key={s.mission.id}
                  type="button"
                  onClick={() => selectSite(s.mission.id)}
                  aria-pressed={s.mission.id === missionId}
                  className={cn(
                    'flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors',
                    s.mission.id === missionId
                      ? 'border-primary bg-accent text-foreground'
                      : 'border-border text-muted-foreground hover:bg-secondary hover:text-foreground',
                  )}
                >
                  <span aria-hidden="true" className={cn('size-2 rounded-full', ERA_DOT[s.mission.era])} />
                  {s.mission.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside
          aria-live="polite"
          aria-label="Selected site details"
          className="rounded-xl border border-border bg-card p-5"
        >
          <p className="font-mono text-xs text-muted-foreground">
            {site.mission.type} · {site.mission.date}
          </p>
          <h3 className="mt-1 text-xl font-semibold">{site.mission.name}</h3>

          {site.objects.length > 1 && (
            <div role="group" aria-label="Objects at this site" className="mt-4 flex flex-wrap gap-2">
              {site.objects.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setObjectId(o.id)}
                  aria-pressed={o.id === object.id}
                  className={cn(
                    'rounded-md border px-2.5 py-1 text-xs transition-colors',
                    o.id === object.id
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground hover:text-foreground',
                  )}
                >
                  {o.name}
                </button>
              ))}
            </div>
          )}

          <h4 className="mt-4 font-medium">{object.name}</h4>
          <div className="mt-3">
            <ObjectDetails object={object} />
          </div>
        </aside>
      </div>
    </section>
  )
}
