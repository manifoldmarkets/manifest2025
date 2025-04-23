import { useEffect, useState } from 'react'

 //Fetches a multiple-choice market by slug and returns the % probability for only the specified answer IDs.

export function useAnswerProbabilities(
  marketSlug: string,
  answerIds: string[]
): Record<string, number> | null {
  const [probs, setProbs] = useState<Record<string, number> | null>(null)

  useEffect(() => {
    if (!marketSlug || answerIds.length === 0) return

    fetch(`https://api.manifold.markets/v0/slug/${marketSlug}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<{
          answers?: { id: string; probability: number }[]
        }>
      })
      .then(({ answers }) => {
        if (!answers) throw new Error('No answers on market')
        const mapping: Record<string, number> = {}
        for (const ans of answers) {
          if (answerIds.includes(ans.id)) {
            mapping[ans.id] = Math.round(ans.probability * 100)
          }
        }
        setProbs(mapping)
      })
      .catch((err) => {
        console.error('Failed to fetch market answers:', err)
        setProbs(null)
      })
  }, [marketSlug, answerIds.join(',')])

  return probs
}