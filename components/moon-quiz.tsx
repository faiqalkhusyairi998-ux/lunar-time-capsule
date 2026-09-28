'use client'

import { useState } from 'react'
import { Check, RotateCcw, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { QUIZ } from '@/lib/lunar-data'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

export function MoonQuiz() {
  const [index, setIndex] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = QUIZ[index]
  const answered = choice !== null
  const isLast = index === QUIZ.length - 1

  const pick = (i: number) => {
    if (answered) return
    setChoice(i)
    if (i === question.answerIndex) setScore((s) => s + 1)
  }

  const next = () => {
    if (isLast) {
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setChoice(null)
  }

  const restart = () => {
    setIndex(0)
    setChoice(null)
    setScore(0)
    setFinished(false)
  }

  return (
    <section aria-labelledby="quiz-heading" id="quiz" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        id="quiz-heading"
        eyebrow="05 · Test yourself"
        title="Lunar leftovers quiz"
        description="Five questions based on what you just explored. Every answer comes from the NASA sources listed below."
      />

      <div className="mt-10 max-w-2xl rounded-xl border border-border bg-card p-6 sm:p-8">
        {finished ? (
          <div className="flex flex-col items-start gap-4" aria-live="polite">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Result</p>
            <p className="text-4xl font-semibold">
              {score} / {QUIZ.length}
            </p>
            <p className="text-muted-foreground">
              {score === QUIZ.length
                ? 'Perfect score. You are ready for mission control.'
                : score >= 3
                  ? 'Great work. Revisit the map to fill in the gaps.'
                  : 'Good start. Explore the objects above and try again.'}
            </p>
            <Button onClick={restart} className="mt-2">
              <RotateCcw data-icon="inline-start" />
              Try again
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-xs text-muted-foreground">
                Question {index + 1} of {QUIZ.length}
              </p>
              <p className="font-mono text-xs text-muted-foreground">Score: {score}</p>
            </div>
            <div
              className="mt-3 h-1 overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-label="Quiz progress"
              aria-valuemin={0}
              aria-valuemax={QUIZ.length}
              aria-valuenow={index + (answered ? 1 : 0)}
            >
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${((index + (answered ? 1 : 0)) / QUIZ.length) * 100}%` }}
              />
            </div>

            <fieldset className="mt-6">
              <legend className="text-pretty text-lg font-medium leading-snug">{question.question}</legend>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {question.options.map((option, i) => {
                  const correct = i === question.answerIndex
                  const picked = i === choice
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => pick(i)}
                      disabled={answered}
                      aria-pressed={picked}
                      className={cn(
                        'flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left transition-colors disabled:cursor-default',
                        !answered && 'border-border hover:border-primary/60 hover:bg-secondary',
                        answered && correct && 'border-success bg-success/10',
                        answered && picked && !correct && 'border-destructive bg-destructive/10',
                        answered && !picked && !correct && 'border-border opacity-60',
                      )}
                    >
                      {option}
                      {answered && correct && <Check className="size-4 text-success" aria-label="Correct answer" />}
                      {answered && picked && !correct && <X className="size-4 text-destructive" aria-label="Your answer, incorrect" />}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <div aria-live="polite">
              {answered && (
                <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className={cn('font-medium', choice === question.answerIndex ? 'text-success' : 'text-destructive')}>
                      {choice === question.answerIndex ? 'Correct. ' : 'Not quite. '}
                    </span>
                    {question.explanation}
                  </p>
                  <Button onClick={next} className="shrink-0">
                    {isLast ? 'See results' : 'Next question'}
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
