'use client'

import { useState } from 'react'

const fotos = [
  { src: '/hero.jpg', alt: 'La borda exterior' },
  { src: '/casa.jpg', alt: 'La casa' },
  { src: '/casa2.jpg', alt: 'La casa' },
  { src: '/salon-inferior.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior-2.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior-3.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior-4.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior-5.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior-6.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior-7.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior-8.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior-9.jpg', alt: 'Salón inferior' },
  { src: '/salon-inferior2.jpg', alt: 'Salón inferior' },
  { src: '/salon-superior.jpg', alt: 'Salón superior' },
  { src: '/salon-superior-2.jpg', alt: 'Salón superior' },
  { src: '/salon-superior-3.jpg', alt: 'Salón superior' },
  { src: '/salon-superior-4.jpg', alt: 'Salón superior' },
  { src: '/cocina.jpg', alt: 'Cocina' },
  { src: '/habitacion-rio.jpg', alt: 'Habitación con vistas al río' },
  { src: '/habitacion-rio-2.jpg', alt: 'Habitación con vistas al río' },
  { src: '/habitacion-balcon.jpg', alt: 'Habitación con balcón' },
  { src: '/habitacion-balcon-2.jpg', alt: 'Habitación con balcón' },
  { src: '/habitacion-ventana.jpg', alt: 'Habitación con ventana' },
  { src: '/habitacion-ventana-2.jpg', alt: 'Habitación con ventana' },
  { src: '/habitacion-ventana-3.jpg', alt: 'Habitación con ventana' },
  { src: '/bano-1.jpg', alt: 'Baño 1' },
  { src: '/bano-1-2.jpg', alt: 'Baño 1' },
  { src: '/bano-1-3.jpg', alt: 'Baño 1' },
  { src: '/bano-2.jpg', alt: 'Baño 2' },
  { src: '/bano-2-2.jpg', alt: 'Baño 2' },
  { src: '/bano-2-3.jpg', alt: 'Baño 2' },
  { src: '/bano-3.jpg', alt: 'Baño 3' },
  { src: '/bano-4.jpg', alt: 'Baño' },
  { src: '/terraza.jpg', alt: 'Terraza cubierta' },
  { src: '/terraza-2.jpg', alt: 'Terraza cubierta' },
  { src: '/terraza-3.jpg', alt: 'Terraza cubierta' },
  { src: '/terraza-4.jpg', alt: 'Terraza cubierta' },
  { src: '/historia-1.jpg', alt: 'Historia' },
  { src: '/historia-2.jpg', alt: 'Historia' },
  { src: '/historia-3.jpg', alt: 'Historia' },
  { src: '/reserva-info.jpg', alt: 'La borda' },
  { src: '/reserva-precios.jpg', alt: 'La borda' },
]

export default function Galeria() {
  const [selected, setSelected] = useState(null)

  const prev = () => setSelected((i) => (i - 1 + fotos.length) % fotos.length)
  const next = () => setSelected((i) => (i + 1) % fotos.length)

  return (
    <main>
      <section className="relative h-[50vh] flex items-end pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-stone-700 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">La borda del tío Nicolás</span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">Galería</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {fotos.map((foto, i) => (
              <button key={i} onClick={() => setSelected(i)} className="group aspect-square overflow-hidden bg-stone-200 focus:outline-none">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${foto.src}')` }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div
            className="relative max-w-5xl w-full max-h-[85vh] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${fotos[selected].src}')`, aspectRatio: '4/3' }}
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none" aria-label="Cerrar">✕</button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl transition-colors" aria-label="Anterior">‹</button>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl transition-colors" aria-label="Siguiente">›</button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">{selected + 1} / {fotos.length}</p>
        </div>
      )}
    </main>
  )
}
