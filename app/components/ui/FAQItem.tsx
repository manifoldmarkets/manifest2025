'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string | React.ReactNode
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-2">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-primary-600">{isOpen ? '−' : '+'}</span>
        <span className="text-ink-900">{question}</span>
      </div>
      <div className={`text-ink-600 pl-6 font-serif ${isOpen ? 'block' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  )
} 