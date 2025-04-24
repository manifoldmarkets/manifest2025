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
  const probs = answerId && marketSlug ? useAnswerProbabilities(marketSlug, [answerId]) : null
  const odds = probs && answerId ? probs[answerId] : null

  return (
    <div className="w-56 flex-shrink-0 border rounded-xl p-4">
      <div className="flex justify-center mb-3">
        {image ? (
          <div className="w-20 h-20 relative overflow-hidden rounded-full">
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
        <div className="text-xs text-center text-gray-500 mb-1">
          {odds === null ? 'Loading odds…' : `Current Odds: ${odds}%`}
        </div>
      )}
      <h3 className="text-md font-semibold text-center">{name}</h3>
      <p className="text-xs text-center text-ink-600">{bio}</p>
      {email && <p className="text-xs text-center text-ink-600 mt-1">{email}</p>}
    </div>
  )
}