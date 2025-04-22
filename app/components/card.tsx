'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CardProps {
  name: string
  bio: string
  image?: string  
  marketSlug: string
}

export default function Card({ name, bio, image, marketSlug }: CardProps) {
  const [odds, setOdds] = useState<number | null>(null)

  // Load fallback from localStorage on first render
  useEffect(() => {
    if (!marketSlug) return
    console.log(`[🔍 Fetching] slug: ${marketSlug}`)
  
    fetch(`https://api.manifold.markets/v0/slug/${marketSlug}`)
      .then(res => {
        if (!res.ok) throw new Error(`Status ${res.status}`)
        return res.json()
      })
      .then(data => {
        console.log(`[✅ Fetched] ${marketSlug}`, data)
        if (typeof data.prob === 'number') {
          const newOdds = Math.round(data.prob * 100)
          setOdds(newOdds)
          localStorage.setItem(`odds-${marketSlug}`, String(newOdds))
        }
      })
      .catch(err => {
        console.error(`[❌ Fetch error] ${marketSlug}`, err)
      })
  }, [marketSlug, name])
  

  // Fetch live odds and update both state + cache
  useEffect(() => {
    if (!marketSlug) return
    fetch(`https://api.manifold.markets/v0/slug/${marketSlug}`)
      .then(res => res.json())
      .then(data => {
        if (typeof data.prob === 'number') {
          const newOdds = Math.round(data.prob * 100)
          setOdds(newOdds)
          localStorage.setItem(`odds-${marketSlug}`, String(newOdds))
        }
      })
      .catch(err => {
        console.error(`Failed to fetch market for ${name}:`, err)
      })
  }, [marketSlug, name])

  return (
    <a
      href={`https://manifold.markets/${marketSlug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-xl p-4 hover:shadow-md transition"
    >
      <div className="flex justify-center mb-3">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300" />
        )}
      </div>
      <div className="text-xs text-center text-gray-500 mb-1">
        {odds !== null ? `Current Odds: ${odds}%` : 'Loading odds...'}
      </div>
      <h3 className="text-md font-semibold text-center">{name}</h3>
      <p className="text-xs text-center text-ink-600">{bio}</p>
    </a>
  )
}


