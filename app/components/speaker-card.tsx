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
    <div className="flex w-full flex-col rounded-xl border border-gray-200">
      <div className="flex flex-1 flex-col gap-1 p-3 sm:p-4">
        <div className="flex justify-center">
          {image ? (
            <div className="relative h-28 w-28 overflow-hidden rounded-full">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          ) : (
            <div className="h-28 w-28 rounded-full bg-gray-300" />
          )}
        </div>

        <h3 className="text-md mt-2 text-center font-semibold">{name}</h3>

        <div className="min-h-10 flex-1">
          <p className="text-ink-600 line-clamp-2 text-center text-xs leading-relaxed">
            {bio}
          </p>
        </div>

        {email && <p className="text-ink-600 text-center text-xs">{email}</p>}
      </div>

      {answerId && (
        <div className="">
          {odds != null && (
            <div className="relative h-6 w-full overflow-hidden rounded-b-xl bg-gray-200">
              <div
                className="absolute inset-0 flex items-center justify-center text-xs text-gray-900 transition-all duration-300"
                style={{
                  width: `${odds}%`,
                  // background: 'linear-gradient(to right, #93c5fd, #3b82f6)',
                  background: '#93c5fd',
                }}
              >
                {odds}%
              </div>
            </div>
          )}
          {odds == null && (
            <div className="text-center text-xs text-gray-500">
              Loading odds…
            </div>
          )}
        </div>
      )}
    </div>
  )
}
