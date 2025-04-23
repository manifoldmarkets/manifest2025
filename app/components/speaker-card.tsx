'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface SpeakerCardProps {
  name: string
  bio: string
  image?: string  
  marketSlug: string
}

export default function SpeakerCard({ name, bio, image, marketSlug }: SpeakerCardProps) {
  const [odds, setOdds] = useState<number | null>(null)

  useEffect(() => {
    if (!marketSlug) return

    fetch(`https://api.manifold.markets/v0/slug/${marketSlug}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data: { probability?: number }) => {
        if (typeof data.probability === 'number') {
          setOdds(Math.round(data.probability * 100))
        } else {
          console.error('Expected data.probability, got:', data)
        }
      })
      .catch(err => console.error(`Failed to fetch ${marketSlug}:`, err))
  }, [marketSlug])

  return (
    <a
      href={`https://manifold.markets/${marketSlug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-xl p-4 hover:shadow-md transition"
    >
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
      <div className="text-xs text-center text-gray-500 mb-1">
        {odds === null ? 'Loading odds…' : `Current Odds: ${odds}%`}
      </div>
      <h3 className="text-md font-semibold text-center">{name}</h3>
      <p className="text-xs text-center text-ink-600">{bio}</p>
    </a>
  )
}