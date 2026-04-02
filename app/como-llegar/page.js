export default function ComoLlegar() {
  return (
    <main>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative h-[40vh] flex items-end pb-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-700 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">
            Aribe, Navarra
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">
            ¿Cómo llegar?
          </h1>
        </div>
      </section>

      {/* ── DIRECCIÓN + MAPA ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
              Dirección
            </span>
            <p className="font-[family-name:var(--font-playfair)] text-2xl text-stone-800 mt-1">
              C. Sta. María, 60
            </p>
            <p className="text-stone-500 mt-1 mb-4">31671 Aribe, Navarra, España</p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Llegarás al aparcamiento situado en el centro del pueblo. Desde allí podrás
              ir andando hasta la casa cómodamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=42.944041,-1.263552"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors text-sm"
              >
                Cómo llegar al parking →
              </a>
              <a
                href="https://pub-610b72cfb35845f5881e0761e7934301.r2.dev/como_llegar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white font-medium transition-colors text-sm"
              >
                Cómo llegar del parking a la casa →
              </a>
            </div>
          </div>

          {/* Mapa embebido */}
          <div className="w-full rounded-sm overflow-hidden shadow-md" style={{ height: '480px' }}>
            <iframe
              title="Ubicación La Borda del Tío Nicolás"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.5!2d-1.1985!3d42.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd509b2e8e8e8e8e%3A0x0!2sC.+Sta.+Mar%C3%ADa%2C+60%2C+31671+Aribe%2C+Navarra!5e0!3m2!1ses!2ses!4v1"
            />
          </div>
        </div>
      </section>


      {/* ── FOTOS DE LA UBICACIÓN ───────────────────────────────── */}
      {/* Añade fotos con estos nombres: ubicacion-foto-1.jpg, ubicacion-foto-2.jpg, ubicacion-foto-3.jpg ... */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">El entorno</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-stone-800 mt-2 mb-8">Fotos de la ubicación</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-square bg-stone-200 bg-cover bg-center rounded-sm"
                style={{ backgroundImage: `url('/ubicacion-foto-${n}.jpg')` }}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
