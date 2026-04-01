'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden">

        {/* Imagen de fondo → guarda tu foto como: public/hero.jpg */}
        <div
          className="absolute inset-0 bg-stone-600 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        {/* Overlay oscuro para que el texto se lea bien */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold mb-6 leading-tight">
            La borda del tío Nicolás
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-white/85 leading-relaxed">
            Una casa rural en pleno Pirineo Navarro,<br className="hidden md:block" />
            a orillas del río y junto a la Selva de Irati
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/galeria"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-stone-800 transition-all duration-300 text-base font-medium tracking-wide"
            >
              Galería de fotos
            </Link>
            <Link
              href="/reserva"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white transition-all duration-300 text-base font-medium tracking-wide"
            >
              ¡Reserva ya!
            </Link>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
          <span>Descubre</span>
          <div className="w-px h-10 bg-white/30 animate-bounce" />
        </div>
      </section>

      {/* ── LA CASA ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Texto */}
            <div className="fade-up">
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                La casa
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-stone-800 mt-3 mb-6 leading-snug">
                Comodidad en plena naturaleza
              </h2>
              <p className="text-stone-600 leading-relaxed text-base">
                Encontrándose en pleno ambiente rural, la casa dispone de todas las
                comodidades para una placentera estancia: agua caliente y calefacción
                específicas para la casa, ésta última con programación para cada planta;
                chimenea; mesas para comer, para estudiar o trabajar, o para leer en la
                terraza; cómodas camas; armarios para guardar la ropa; plancha;
                lavadora-secadora, microondas, wifi de máxima capacidad; smart-tv;
                cafetera Nespresso; secadores de pelo; juegos de mesa; libros de
                literatura; folletos de información turística, hamacas para colgar en la
                orilla del río; garaje cerrado y cubierto para motos y bicis con toma
                para carga de las eléctricas…
              </p>
              <Link
                href="/la-casa"
                className="inline-block mt-8 text-amber-600 font-medium hover:text-amber-700 border-b border-amber-600 hover:border-amber-700 pb-0.5 transition-colors"
              >
                Ver más sobre la casa →
              </Link>
            </div>

            {/* Imagen → guarda tu foto como: public/casa.jpg */}
            <div className="fade-up delay-200">
              <div
                className="w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-lg"
                style={{ backgroundImage: "url('/casa.jpg')" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── UBICACIÓN ─────────────────────────────────────────── */}
      <section className="relative py-40 flex items-center justify-center text-white text-center overflow-hidden">

        {/* Vídeo de fondo → guarda tu vídeo como: public/ubicacion.mp4
            Si no tienes vídeo, usa una imagen: public/ubicacion.jpg        */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/ubicacion.jpg"
        >
          <source src="https://pub-610b72cfb35845f5881e0761e7934301.r2.dev/ubicacion.mp4" type="video/mp4" />
        </video>
        {/* Si no tienes vídeo, comenta el <video> de arriba y descomenta esto:
        <div
          className="absolute inset-0 bg-green-900 bg-cover bg-center"
          style={{ backgroundImage: "url('/ubicacion.jpg')" }}
        /> */}

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 fade-up">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">
            Aribe, Navarra
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mt-3 mb-4">
            Descubre el entorno
          </h2>
          <p className="text-white/75 text-lg max-w-lg mx-auto mb-10">
            En el corazón del Pirineo Navarro, rodeados de ríos, montañas
            y la majestuosa Selva de Irati.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/que-hacer"
              className="px-7 py-3 bg-white text-stone-800 hover:bg-amber-50 font-medium transition-all duration-300"
            >
              ¿Qué hacer?
            </Link>
            <Link
              href="/donde-comer"
              className="px-7 py-3 bg-white text-stone-800 hover:bg-amber-50 font-medium transition-all duration-300"
            >
              ¿Dónde comer?
            </Link>
            <Link
              href="/como-llegar"
              className="px-7 py-3 border-2 border-white text-white hover:bg-white hover:text-stone-800 font-medium transition-all duration-300"
            >
              ¿Cómo llegar?
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
