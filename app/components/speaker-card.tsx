'use client'

import Image from 'next/image'

interface SpeakerCardProps {
  name: string
  bio: string
  image?: string
  marketSlug?: string
  answerId?: string
  email?: string
  probability?: number | null
}

export default function SpeakerCard({
  name,
  bio,
  image,
  marketSlug,
  answerId,
  email,
  probability,
}: SpeakerCardProps) {
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
        <div className="border-t border-gray-200">
          {probability != null && (
            <div className="relative h-6 w-full overflow-hidden rounded-b-xl bg-gradient-to-r from-blue-400/10 to-indigo-600/10">
              <div
                className="absolute inset-0 flex items-center justify-center bg-white text-xs font-bold text-ink-900 transition-all duration-300"
                style={{
                  width: `${100 - probability}%`,
                  left: `${probability}%`,
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-400/10 to-indigo-600/10 text-xs font-bold text-ink-900 transition-all duration-300"
                style={{
                  width: `${probability}%`,
                }}
              >
                {probability}%
              </div>
            </div>
          )}
          {probability == null && (
            <div className="text-center text-xs text-gray-500">
              Loading odds…
            </div>
          )}
        </div>
      )}
    </div>
  )
}
