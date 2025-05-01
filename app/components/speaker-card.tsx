'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SpeakerCardProps {
  name: string
  bio: string
  image?: string
  marketSlug?: string
  answerId?: string
  email?: string
  probability?: number | null
  twitter?: string
  substack?: string
}

export default function SpeakerCard({
  name,
  bio,
  image,
  marketSlug,
  answerId,
  email,
  probability,
  twitter,
  substack,
}: SpeakerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(true)
  }

  const handleSocialClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, '_blank')
  }

  return (
    <>
      <div 
        className="flex w-full flex-col rounded-xl border border-gray-200 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex flex-1 flex-col gap-1 p-3 sm:p-4">
          <div className="flex justify-center">
            {image ? (
              <div className="relative h-28 w-28 overflow-hidden rounded-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="112px"
                />
              </div>
            ) : (
              <div className="h-28 w-28 rounded-full bg-gray-300" />
            )}
          </div>

          <p className="text-md mt-2 text-center font-bold tracking-tight">
            {name}
          </p>

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

      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-3">
              {image && (
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              )}
              <p className="text-lg font-bold tracking-tight">
                {name}
              </p>
              <p className="text-ink-600 text-center text-sm leading-relaxed">
                {bio}
              </p>
              {email && <p className="text-ink-600 text-sm">{email}</p>}
              <div className="flex gap-3 mt-2">
                {twitter && (
                  <button
                    onClick={(e) => handleSocialClick(e, `https://twitter.com/${twitter}`)}
                    className="rounded-full bg-blue-400 px-4 py-1.5 text-white hover:bg-blue-500 text-sm"
                  >
                    Twitter
                  </button>
                )}
                {substack && (
                  <button
                    onClick={(e) => handleSocialClick(e, substack)}
                    className="rounded-full bg-indigo-600 px-4 py-1.5 text-white hover:bg-indigo-700 text-sm"
                  >
                    Substack
                  </button>
                )}
              </div>
              {answerId && (
                <div className="w-full border-t border-gray-200 mt-4 pt-4">
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
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute right-2 top-2 rounded-full bg-white p-2 text-black shadow-lg hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
