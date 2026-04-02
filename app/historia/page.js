'use client'

import { useState } from 'react'

function Carousel({ images }) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="relative overflow-hidden rounded-sm aspect-[16/9] bg-stone-200 shadow-md">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl transition-colors"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl transition-colors"
        aria-label="Siguiente"
      >
        ›
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Historia() {
  return (
    <main>

      {/* ── HERO ───────────────────────────────────────────────── */}
      {/* Imagen de fondo → public/historia-hero.jpg */}
      <section className="relative h-[65vh] flex items-end pb-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-700 bg-cover bg-center"
          style={{ backgroundImage: "url('/historia-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">
            Desde 1789
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">
            Historia
          </h1>
        </div>
      </section>

      {/* ── TEXTO ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-stone-600 text-lg leading-relaxed">
            La casa fue originalmente construida en <span className="text-stone-800 font-medium">1789</span>.
            En el pasado fue la borda de la familia Remondegui, casa Botoa, donde se guardaban los animales
            que, en los años de posguerra, abastecían el negocio familiar que se desarrollaba en la fonda,
            en la casa Ibai ondo.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed mt-6">
            Posteriormente, <span className="text-stone-800 font-medium">Nicolás Remondegui</span>, que
            había regresado de Canadá, a donde tuvo que emigrar como muchos vecinos de la zona, la
            rehabilitó parcialmente y convirtió en su taller de carpintería, lugar donde hacía muchos de
            sus muebles, a la vez que creó y gestionó la gasolinera del pueblo.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed mt-6">
            Así fue durante muchos años hasta que en <span className="text-stone-800 font-medium">2000</span>,
            nosotros sus sobrinos decidimos restaurarla completamente respetando los
            materiales y arquitectura del lugar. Para ello tuvimos la gran ayuda de nuestro tío Nicolás,
            y por ello la borda debía tener su nombre.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed mt-6 italic border-l-2 border-amber-500 pl-5">
            Un pequeño recuerdo a un gran hombre.
          </p>
        </div>
      </section>

      {/* ── GALERÍA ────────────────────────────────────────────── */}
      {/* Imágenes → public/historia-1.jpg | historia-2.jpg | historia-3.jpg */}
      <section className="py-10 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Carousel images={['/historia-1.jpg', '/historia-2.jpg', '/historia-3.jpg']} />
        </div>
      </section>

    </main>
  )
}
