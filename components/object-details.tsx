import Image from 'next/image'
import { ExternalLink, Lightbulb, MapPin } from 'lucide-react'
import { formatCoordinates, getMission, type LunarObject } from '@/lib/lunar-data'

export function ObjectDetails({ object }: { object: LunarObject }) {
  const mission = getMission(object.missionId)

  return (
    <article className="flex flex-col gap-4">
      <figure className="overflow-hidden rounded-lg border border-border bg-muted">
        <div className="relative aspect-[4/3]">
          <Image
            src={object.image}
            alt={object.imageAlt}
            fill
            sizes="(min-width: 768px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="px-3 py-2 font-mono text-[11px] text-muted-foreground">
          {object.imageCredit}
        </figcaption>
      </figure>

      <dl className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-xs text-muted-foreground">Mission</dt>
          <dd className="font-medium">{mission.name}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Date</dt>
          <dd className="font-medium">{object.date}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-xs text-muted-foreground">Location</dt>
          <dd className="flex items-start gap-1.5 font-medium">
            <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {object.site}
              <span className="block font-mono text-xs font-normal text-muted-foreground">
                {formatCoordinates(object.lat, object.lon)}
              </span>
            </span>
          </dd>
        </div>
      </dl>

      <div>
        <h4 className="text-xs text-muted-foreground">Purpose</h4>
        <p className="mt-1 text-pretty leading-relaxed">{object.purpose}</p>
      </div>

      <div className="flex gap-3 rounded-lg bg-accent p-3">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-sm leading-relaxed">
          <span className="font-medium">Did you know? </span>
          {object.fact}
        </p>
      </div>

      <a
        href={object.source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-start text-sm text-primary underline-offset-4 hover:underline"
      >
        Source: {object.source.label}
        <ExternalLink className="size-3.5" aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </article>
  )
}
