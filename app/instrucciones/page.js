export default function Instrucciones() {
  return (
    <main>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] flex items-end pb-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-700 bg-cover bg-center"
          style={{ backgroundImage: "url('/instrucciones-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">
            La borda del tío Nicolás
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">
            Instrucciones
          </h1>
        </div>
      </section>

      {/* ── CONTENIDO ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
            Información para huéspedes
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-3 mb-6">
            Guía de la casa
          </h2>
          <p className="text-stone-600 leading-relaxed mb-10">
            Aquí encontrarás toda la información necesaria para tu estancia: cómo acceder
            a la casa, normas, recomendaciones de restaurantes y actividades, y todo lo
            que necesitas saber para disfrutar al máximo de tu visita.
          </p>
          <a
            href="https://pub-610b72cfb35845f5881e0761e7934301.r2.dev/instrucciones_borda.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors text-base"
          >
            Descargar instrucciones →
          </a>
        </div>
      </section>

    </main>
  )
}
