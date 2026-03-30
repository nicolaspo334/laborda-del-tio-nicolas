export default function DondeComer() {
  const restaurantes = [
    {
      img: '/betolegi.jpg',
      nombre: 'Restaurante Betolegi',
      texto:
        'A 2 km, el restaurante Betolegi, al lado de un puente colgante sobre el río Irati, ofrece comida típica del lugar.',
    },
    {
      img: '/herriko-etxea.jpg',
      nombre: 'Herriko Etxea',
      texto:
        'En Garralda, a 2 km, Herriko Etxea dispone de un barato menú servido en un porche.',
      reverse: true,
    },
    {
      img: '/ibarreetxea.jpg',
      nombre: 'Ibarreetxea',
      texto:
        'En Garaioa, a 3 km, en Ibarreetxea la comida se reconoce como arraigada en la zona con toques modernos.',
    },
  ]

  return (
    <main>

      {/* ── HERO ────────────────────────────────────────────────── */}
      {/* Imagen → public/donde-comer-hero.jpg */}
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

      {/* ── INTRO ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-stone-600 text-lg leading-relaxed">
            Cerca de la casa hay varios restaurantes en los que comer.
          </p>
        </div>
      </section>

      {/* ── RESTAURANTES ────────────────────────────────────────── */}
      {restaurantes.map((r, i) => (
        <section key={r.nombre} className={`py-20 ${i % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div
                className={`w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-md ${r.reverse ? 'md:order-2' : ''}`}
                style={{ backgroundImage: `url('${r.img}')` }}
              />
              <div className={r.reverse ? 'md:order-1' : ''}>
                <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                  Restaurante
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">
                  {r.nombre}
                </h2>
                <p className="text-stone-600 leading-relaxed">{r.texto}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

    </main>
  )
}
