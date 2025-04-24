'use client'

import Image from 'next/image'
import { useAnswerProbabilities } from '../hooks/use-answer-probabilities'

interface SpeakerCardProps {
  name: string
  bio: string
  image?: string
  marketSlug?: string
  answerId?: string
  email?: string
}

export default function SpeakerCard({
  name,
  bio,
  image,
  marketSlug,
  answerId,
  email,
}: SpeakerCardProps) {
  const probs =
    answerId && marketSlug
      ? useAnswerProbabilities(marketSlug, [answerId])
      : null
  const odds = probs && answerId ? probs[answerId] : null

  return (
    <div
      className="
        w-full
        border
        rounded-xl
        p-3 sm:p-4           /* equal top & bottom padding */
        h-[190px]
        grid
        grid-rows-[auto_auto_auto_1fr_auto]  /* avatar, odds, name, bio⇾fill, email */
        gap-y-1             /* vertical gaps between rows */
      "
    >
      <div className="flex justify-center">
        {image ? (
          <div className="w-20 h-20 rounded-full overflow-hidden relative">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300" />
        )}
      </div>

      {answerId && (
        <div className="text-xs text-center text-gray-500">
          {odds == null ? 'Loading odds…' : `Current Odds: ${odds}%`}
        </div>
      )}

      <h3 className="text-md font-semibold text-center">{name}</h3>

      <div className="overflow-hidden">
        <p className="text-xs text-center text-ink-600 line-clamp-2">
          {bio}
        </p>
      </div>

      {email && (
        <p className="text-xs text-center text-ink-600">
          {email}
        </p>
      )}
    </div>
  )
}