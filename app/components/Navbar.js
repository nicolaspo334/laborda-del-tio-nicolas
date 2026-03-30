'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/la-casa', label: 'La casa' },
  { href: '/historia', label: 'Historia' },
  { href: '/que-hacer', label: '¿Qué hacer?' },
  { href: '/donde-comer', label: '¿Dónde comer?' },
  { href: '/reserva', label: '¡Reserva ya!' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? 'text-stone-700' : 'text-white'
  const hoverColor = 'hover:text-amber-600'

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-black/30 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / nombre */}
        <Link
          href="/"
          className={`text-base font-semibold tracking-wide ${textColor} ${hoverColor} transition-colors`}
        >
          La Borda del Tío Nicolás
        </Link>

        {/* Links escritorio */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Email escritorio */}
        <a
          href="mailto:bordadeltionicolas@gmail.com"
          className={`hidden md:block text-sm ${scrolled ? 'text-stone-400' : 'text-white/70'} ${hoverColor} transition-colors`}
        >
          bordadeltionicolas@gmail.com
        </a>

        {/* Botón menú móvil */}
        <button
          className={`md:hidden text-2xl leading-none ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-stone-700 font-medium hover:text-amber-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:bordadeltionicolas@gmail.com"
            className="text-stone-400 text-sm hover:text-amber-600 transition-colors"
          >
            bordadeltionicolas@gmail.com
          </a>
        </div>
      )}
    </header>
  )
}
