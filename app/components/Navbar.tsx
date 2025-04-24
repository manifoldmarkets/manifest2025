'use client'

import { useState, useEffect } from "react";
import { HiExternalLink, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#speakers", label: "Speakers" },
    { href: "/#sponsors", label: "Sponsors" },
    { href: "/#testimonials", label: "Rave Reviews" },
    { href: "/#contact", label: "Contact" },
    { href: "/schedule", label: "Schedule" },
    { 
      href: "https://www.havenbookings.space/festival-season",
      label: "Buy Tickets",
      external: true
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-canvas-0/80 backdrop-blur-sm border-b">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/manifold-logo.svg" 
              alt="Manifold" 
              width={24} 
              height={24}
            />
            <span className="font-semibold">Manifest 2025</span>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          <div className="hidden md:flex justify-center gap-8 text-sm">
            {links.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className={`hover:underline ${link.external ? 'inline-flex items-center gap-0.5' : ''}`}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
                {link.external && <HiExternalLink />}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-ink-600">Sponsored by</span>
            <Image 
              src="/images/polymarket-logo-black.svg" 
              alt="Polymarket" 
              width={80} 
              height={20}
            />
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-canvas-0/95 backdrop-blur-sm pt-20">
          <div className="flex flex-col items-center gap-6 p-6 h-full overflow-y-auto">
            {links.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className={`text-sm hover:underline ${link.external ? 'inline-flex items-center gap-0.5' : ''}`}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {link.external && <HiExternalLink />}
              </Link>
            ))}
            
            <div className="mt-auto pt-4 border-t w-full flex flex-col items-center gap-2">
              <span className="text-sm text-ink-600">Sponsored by</span>
              <Image 
                src="/images/polymarket-logo-black.svg" 
                alt="Polymarket" 
                width={80} 
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[60px]" />
    </>
  );
}