import { Compass, FlaskConical, Landmark, Radar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const REASONS = [
  {
    icon: Radar,
    title: 'Science that is still running',
    body: 'Laser retroreflectors left by Apollo 11, 14, and 15 are still targeted by observatories on Earth. The measurements test theories of gravity and show the Moon slowly drifting away from us.',
  },
  {
    icon: FlaskConical,
    title: 'A natural laboratory',
    body: 'When Apollo 12 returned parts of Surveyor 3, engineers could study how materials hold up after years of radiation, extreme temperatures, and vacuum. That knowledge helps design future hardware.',
  },
  {
    icon: Compass,
    title: 'A map for the next explorers',
    body: 'Discoveries like water detected by LCROSS near the south pole help guide where future missions, including NASA’s Artemis program, want to explore and possibly use local resources.',
  },
  {
    icon: Landmark,
    title: 'Heritage worth protecting',
    body: 'These sites are a record of humanity’s first steps beyond Earth. NASA has published recommendations to help future missions avoid disturbing historic Apollo sites and artifacts.',
  },
]

export function WhyItMatters() {
  return (
    <section aria-labelledby="why-heading" id="why" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          id="why-heading"
          eyebrow="04 · Why it matters"
          title="More than leftovers"
          description="The objects on the Moon are not just trash. Many are still doing science, and all of them tell the story of how we learned to explore another world."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <li key={reason.title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                <reason.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{reason.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
