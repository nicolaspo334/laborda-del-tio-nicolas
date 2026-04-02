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
          className="hidden"
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
    texto: 'Pardix Jatetxea es un restaurante de estilo tradicional que ofrece una cocina casera y variada, con platos como carnes, arroces, ensaladas y postres artesanos. Destaca por su ambiente acogedor y propuestas sencillas elaboradas con ingredientes locales, ideal para quienes buscan una experiencia gastronómica auténtica en la zona.',
    direccion: '31670 Orbaiceta, Navarra',
  },
  {
    img: '/skola-taberna.jpg',
    nombre: 'Eskola Taberna',
    texto: 'Este restaurante ofrece un completo menú del día basado en la cocina tradicional navarra, con platos caseros como migas, alubias, carnes guisadas y pescado. Destacan también sus postres artesanos. Es una opción ideal para disfrutar de una comida abundante, auténtica y de calidad en un ambiente cercano.',
    direccion: 'Pl. Pablo Eguinoa, 31671 Orbara, Navarra',
  },
  {
    img: '/betolegi.jpg',
    nombre: 'Betolegi',
    texto: 'Bar Restaurante Betolegi ofrece cocina tradicional con platos contundentes y sabores de siempre, como alubias, pochas, carnes a la brasa y guisos caseros.',
    direccion: 'Ctra. Orbaitzeta, KM 2,5, Orbara',
  },
  {
    img: '/herriko-etxea.jpg',
    nombre: 'Herriko Etxea',
    texto: 'Su carta combina opciones variadas y menús del día, destacando los postres caseros. Es un lugar sencillo y familiar, ideal para disfrutar de comida local a buen precio.',
    direccion: 'C. Petra Machín, 8, 31693 Garralda, Navarra',
  },
  {
    img: '/errotaberri.jpg',
    nombre: 'Errotaberri',
    texto: 'Errotaberri Taberna Asador es un bar-asador de ambiente informal que combina cocina casera con opciones variadas como hamburguesas, raciones, ensaladas y carnes a la parrilla. Destaca por su trato cercano y buena relación calidad-precio, siendo una opción agradable para comidas informales o cenas en grupo.',
    direccion: 'C. Antonio Aróstegui, s/n, 31693 Garralda, Navarra',
  },
]

const elaborada = [
  {
    img: '/aritza.jpg',
    nombre: 'Aritza',
    texto: 'Este restaurante ofrece una cocina tradicional con productos de calidad, donde destacan los platos navarros y las carnes a la parrilla. Su carta combina entrantes clásicos, pescados y especialidades de cordero, junto a postres caseros. Es una opción ideal para quienes buscan una experiencia gastronómica auténtica y cuidada.',
    direccion: 'C. Kanaleburua, 6, 31640 Burguete, Navarra',
  },
  {
    img: '/txiki-polit.jpg',
    nombre: 'Txiki Polit',
    texto: 'Este restaurante ofrece un completo menú del día con cocina tradicional navarra, basado en platos caseros y abundantes. Destacan guisos, carnes, pescados y recetas típicas acompañadas de postres artesanos. Es una opción muy recomendable para disfrutar de una comida de calidad, con buena relación calidad-precio y sabor auténtico.',
    direccion: 'C. Dorrekoa, 31640 Burguete, Navarra',
  },
  {
    img: '/casa-sabina.jpg',
    nombre: 'Casa Sabina',
    texto: 'Este restaurante combina cocina tradicional con una oferta variada que incluye menús del día, raciones, bocadillos y platos combinados. Destacan las recetas caseras, carnes, pescados y postres elaborados. Es un lugar versátil y acogedor, ideal tanto para comidas completas como para opciones más informales en cualquier momento del día.',
    direccion: 'Carretera Francia, s/n, 31650 Orreaga-Roncesvalles, Navarra',
  },
  {
    img: '/posada-roncesvalles.jpg',
    nombre: 'Posada de Roncesvalles',
    texto: 'Este restaurante ofrece un menú de temporada basado en cocina tradicional navarra con un toque actual, combinando platos como pochas, carnes, pescados y elaboraciones con productos locales. Destaca por su variedad y calidad, con opciones cuidadas tanto en entrantes como en principales y postres caseros, en un entorno tranquilo y agradable.',
    direccion: 'Calle Ntra. Sra. de Roncesvalles, 2, 31650 Roncesvalles, Navarra',
  },
  {
    img: '/ibarretxea.jpg',
    nombre: 'Ibarretxea',
    texto: 'En Garaioa, a 3 km, en Ibarretxea la comida se reconoce como arraigada en la zona con toques modernos.',
    direccion: 'Calle Txikirrin, 20, 31692 Garayoa, Navarra',
  },
  {
    img: '/restaurante_roncesvalles.jpg',
    nombre: 'Restaurante Roncesvalles',
    texto: 'El restaurante del Hotel Roncesvalles ofrece una cocina tradicional navarra basada en productos de temporada y de proximidad. Su propuesta es sencilla y auténtica, con menús del día, platos combinados, ensaladas y postres caseros, además de opciones más informales como raciones y bocadillos en un entorno acogedor.',
    direccion: 'Calle Ntra. Sra. de Roncesvalles, 14, 31650 Roncesvalles, Navarra',
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
