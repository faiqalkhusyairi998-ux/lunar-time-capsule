import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { LUNAR_OBJECTS, MISSIONS } from '@/lib/lunar-data'

const STATS = [
  { value: String(LUNAR_OBJECTS.length), label: 'objects featured' },
  { value: String(MISSIONS.length), label: 'NASA missions' },
  { value: '1964–2014', label: 'years covered' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-moon.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-right opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          NASA Space Apps Challenge 2026
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          What have we left on the Moon?
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Rovers, reflectors, plaques, and even golf balls. Explore the human-made
          objects resting on the lunar surface, the missions that brought them, and
          why they still matter today.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#map"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore the map
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#quiz"
            className="inline-flex h-11 items-center rounded-lg border border-border bg-secondary/60 px-5 font-medium transition-colors hover:bg-secondary"
          >
            Take the quiz
          </a>
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs text-muted-foreground">{stat.label}</dt>
              <dd className="mt-1 font-mono text-xl font-medium sm:text-2xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
