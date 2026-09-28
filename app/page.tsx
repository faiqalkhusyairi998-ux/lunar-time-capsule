import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MoonMap } from '@/components/moon-map'
import { ObjectExplorer } from '@/components/object-explorer'
import { MissionTimeline } from '@/components/mission-timeline'
import { WhyItMatters } from '@/components/why-it-matters'
import { MoonQuiz } from '@/components/moon-quiz'
import { SourcesSection } from '@/components/sources-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MoonMap />
        <ObjectExplorer />
        <MissionTimeline />
        <WhyItMatters />
        <MoonQuiz />
        <SourcesSection />
      </main>
    </>
  )
}
