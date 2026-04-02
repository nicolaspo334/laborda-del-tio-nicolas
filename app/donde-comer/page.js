'use client'

import { useState } from 'react'

function mapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

function RestaurantCard({ img, nombre, texto, direccion, reverse = false }) {
  return (
    <div className="grid sm:grid-cols-2 gap-8 items-center py-8 border-b border-stone-100 last:border-0">
      <div
        className={`w-full aspect-[4/3] bg-stone-200 bg-cover bg-center rounded-sm ${reverse ? 'sm:order-2' : ''}`}
        style={{ backgroundImage: `url('${img}')` }}
      />
      <div className={reverse ? 'sm:order-1' : ''}>
        <h3 className="font-[family-name:var(--font-playfair)] text-xl text-stone-800 mb-3">{nombre}</h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">{texto}</p>
        {direccion && (
          <a
            href={mapsUrl(direccion)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-stone-300 text-stone-700 hover:border-amber-500 hover:text-amber-600 text-sm transition-colors"
          >
            Ver en Google Maps →
          </a>
        )}
      </div>
    </div>
  )
}

function Expandable({ id, label, open, onToggle, children }) {
  return (
    <div id={id}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-6 py-4 font-medium text-white transition-colors duration-300 ${
          open ? 'bg-amber-600' : 'bg-stone-800 hover:bg-stone-700'
        }`}
      >
        <span>{label}</span>
        <span
          className="text-lg inline-block transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ↓
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-700 border-x border-b border-stone-200 bg-white"
        style={{ maxHeight: open ? '9000px' : '0px' }}
      >
        <div className="px-6 py-2">{children}</div>
      </div>
    </div>
  )
}

const casera = [
  {
    img: '/pardix.jpg',
    nombre: 'Pardix',
    texto: '',
    direccion: '31670 Orbaiceta, Navarra',
  },
  {
    img: '/skola-taberna.jpg',
    nombre: 'Eskola Taberna',
    texto: '',
    direccion: 'Pl. Pablo Eguinoa, 31671 Orbara, Navarra',
    reverse: true,
  },
  {
    img: '/betolegi.jpg',
    nombre: 'Betolegi',
    texto: 'A 2 km, el restaurante Betolegi, al lado de un puente colgante sobre el río Irati, ofrece comida típica del lugar.',
    direccion: 'Ctra. Orbaitzeta, KM 2,5, Orbara',
  },
  {
    img: '/herriko-etxea.jpg',
    nombre: 'Herriko Etxea',
    texto: 'En Garralda, a 2 km, Herriko Etxea dispone de un barato menú servido en un porche.',
    direccion: 'C. Petra Machín, 8, 31693 Garralda, Navarra',
    reverse: true,
  },
  {
    img: '/errotaberri.jpg',
    nombre: 'Errotaberri',
    texto: '',
    direccion: 'C. Antonio Aróstegui, s/n, 31693 Garralda, Navarra',
  },
]

const elaborada = [
  {
    img: '/aritza.jpg',
    nombre: 'Aritza',
    texto: '',
    direccion: 'C. Kanaleburua, 6, 31640 Burguete, Navarra',
  },
  {
    img: '/txiki-polit.jpg',
    nombre: 'Txiki Polit',
    texto: '',
    direccion: 'C. Dorrekoa, 31640 Burguete, Navarra',
    reverse: true,
  },
  {
    img: '/casa-sabina.jpg',
    nombre: 'Casa Sabina',
    texto: '',
    direccion: 'Carretera Francia, s/n, 31650 Orreaga-Roncesvalles, Navarra',
  },
  {
    img: '/posada-roncesvalles.jpg',
    nombre: 'Posada de Roncesvalles',
    texto: '',
    direccion: 'Calle Ntra. Sra. de Roncesvalles, 2, 31650 Roncesvalles, Navarra',
    reverse: true,
  },
  {
    img: '/ibarreetxea.jpg',
    nombre: 'Ibarretxea',
    texto: 'En Garaioa, a 3 km, en Ibarretxea la comida se reconoce como arraigada en la zona con toques modernos.',
    direccion: 'Calle Txikirrin, 20, 31692 Garayoa, Navarra',
  },
]

export default function DondeComer() {
  const [openSection, setOpenSection] = useState(null)

  const toggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <main>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] flex items-end pb-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-700 bg-cover bg-center"
          style={{ backgroundImage: "url('/donde-comer-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">
            Gastronomía local
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">
            ¿Dónde comer?
          </h1>
        </div>
      </section>

      {/* ── INTRO + BOTONES ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            Cerca de la casa hay varios restaurantes en los que comer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => toggle('casera')}
              className={`px-6 py-3 font-medium transition-colors text-sm ${openSection === 'casera' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-white hover:bg-stone-700'}`}
            >
              Comida casera ↓
            </button>
            <button
              onClick={() => toggle('elaborada')}
              className={`px-6 py-3 font-medium transition-colors text-sm ${openSection === 'elaborada' ? 'bg-amber-600 text-white' : 'border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'}`}
            >
              Comida elaborada ↓
            </button>
          </div>
        </div>
      </section>

      {/* ── DESPLEGABLES ────────────────────────────────────────── */}
      <section className="bg-stone-50 pb-16">
        <div className="max-w-6xl mx-auto px-6 space-y-4">

          <Expandable id="casera" label="Comida casera" open={openSection === 'casera'} onToggle={() => toggle('casera')}>
            {casera.map((r, i) => (
              <RestaurantCard key={r.nombre} {...r} reverse={i % 2 !== 0} />
            ))}
          </Expandable>

          <Expandable id="elaborada" label="Comida elaborada" open={openSection === 'elaborada'} onToggle={() => toggle('elaborada')}>
            {elaborada.map((r, i) => (
              <RestaurantCard key={r.nombre} {...r} reverse={i % 2 !== 0} />
            ))}
          </Expandable>

        </div>
      </section>

    </main>
  )
}
