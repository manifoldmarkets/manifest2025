export async function getAnswerProbabilities(
  marketSlug: string,
  answerIds: string[]
): Promise<Record<string, number> | null> {
  try {
    const res = await fetch(
      `https://api.manifold.markets/v0/slug/${marketSlug}`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    )

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const { answers } = (await res.json()) as {
      answers?: { id: string; probability: number }[]
    }

    if (!answers) throw new Error('No answers on market')

    const mapping: Record<string, number> = {}
    for (const ans of answers) {
      if (answerIds.includes(ans.id)) {
        mapping[ans.id] = Math.round(ans.probability * 100)
      }
    }
    return mapping
  } catch (err) {
    console.error('Failed to fetch market answers:', err)
    return null
  }
}
