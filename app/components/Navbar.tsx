'use client'

import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-canvas-0/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/images/manifold-logo.svg" 
            alt="Manifold" 
            width={24} 
            height={24}
          />
          <span className="font-semibold">Manifest 2025</span>
        </div>

        <div className="flex justify-center gap-8 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/#speakers" className="hover:underline">Speakers</Link>
          <Link href="/#sponsors" className="hover:underline">Sponsors</Link>
          <Link href="/#testimonials" className="hover:underline">Rave Reviews</Link>
          <Link href="/#contact" className="hover:underline">Contact</Link>
          <Link href="/schedule" className="hover:underline">Schedule</Link>
          <a 
            href="https://www.havenbookings.space/festival-season" 
            className="hover:underline inline-flex items-center gap-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Tickets
            <HiExternalLink />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-ink-600">Sponsored by</span>
          <Image 
            src="/images/polymarket-logo-black.svg" 
            alt="Polymarket" 
            width={80} 
            height={20}
          />
        </div>
      </nav>
    </div>
  );
}