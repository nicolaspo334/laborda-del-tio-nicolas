'use client'

import { useState } from 'react'

function Carousel({ images }) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-stone-200 shadow-md">
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

function Expandable({ label, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-stone-200 mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-stone-700 font-medium hover:text-amber-600 transition-colors"
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
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? '2000px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="pb-8">{children}</div>
      </div>
    </div>
  )
}

export default function LaCasa() {
  return (
    <main>

      {/* ── HERO ───────────────────────────────────────────────── */}
      {/* Imagen de fondo → public/la-casa-hero.jpg */}
      <section className="relative h-[65vh] flex items-end pb-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-700 bg-cover bg-center"
          style={{ backgroundImage: "url('/la-casa-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">
            Aribe, Navarra
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">
            La casa
          </h1>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <p className="text-stone-600 text-lg leading-relaxed">
            La casa fue rehabilitada conservando su espíritu, y adaptándose a su nueva
            finalidad. Así, el aska (abrevadero del ganado) que estaba en el lado oeste
            de la borda fue desmontado y su piedra utilizada para cubrir la pared de la
            chimenea. De igual manera, la estructura del tejado se conservó completamente
            de madera y guardando las proporciones de la zona, para que la nieve se
            deslice por las tejas, que son, como los finales de sus aristas, tradicionales
            de origen francés. El suelo es, en la parte superior, de tarima de roble del
            lugar, como las ventanas. Los sanitarios son también de ambiente rústico,
            recreando los utilizados anteriormente en la zona.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            La decoración ha pretendido congeniar la tradición con la modernidad y la
            comodidad. Así, coexisten muebles antiguos de madera maciza, como el
            escritorio y los armarios, la mesa y las sillas del salón, con los modernos
            sofás, la chaisse-longue y diferentes pequeños detalles.
          </p>
        </div>
      </section>

      {/* ── SALÓN INFERIOR ─────────────────────────────────────── */}
      {/* Imagen → public/salon-inferior.jpg */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                Planta inferior
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">
                Salón inferior
              </h2>
              <p className="text-stone-600 leading-relaxed">
                El salón de la planta inferior tiene unos grandes ventanales al río Irati,
                una chimenea, una mesa para 8 comensales, además de los sofás, la Smart-tv
                con acceso a cuentas personales de suministradores de contenidos en
                streaming, y wifi de máxima capacidad operativa en toda la casa.
              </p>
            </div>
            <div
              className="w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-md"
              style={{ backgroundImage: "url('/salon-inferior.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ── SALÓN SUPERIOR ─────────────────────────────────────── */}
      {/* Imagen → public/salon-superior.jpg */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div
              className="w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-md order-2 md:order-1"
              style={{ backgroundImage: "url('/salon-superior.jpg')" }}
            />
            <div className="order-1 md:order-2">
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                Planta superior
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">
                Salón superior
              </h2>
              <p className="text-stone-600 leading-relaxed">
                El salón de la planta superior hace la función de distribución entre las
                habitaciones, el baño y la terraza, y en él hay una mesa de trabajo, con
                conexión adyacente ethernet además de wifi, una chaisse longue y un
                antiguo escritorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COCINA ─────────────────────────────────────────────── */}
      {/* Imagen → public/cocina.jpg */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                Equipamiento
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">
                La cocina
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Separada del salón pero con una ventana practicable que comunica ambas
                dependencias, dispone de cocina vitrocerámica, horno, microondas,
                lavavajillas, lavadora-secadora, frigorífico, batidora, tostadora y una
                cafetera Nespresso.
              </p>
            </div>
            <div
              className="w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-md"
              style={{ backgroundImage: "url('/cocina.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ── HABITACIONES ───────────────────────────────────────── */}
      {/* Imágenes → public/habitacion-rio.jpg | public/habitacion-balcon.jpg | public/habitacion-ventana.jpg */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                Descanso
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">
                Habitaciones
              </h2>
              <p className="text-stone-600 leading-relaxed">
                La planta superior acoge a las tres habitaciones, una de ellas con cama de
                matrimonio, baño propio y vistas al río Irati. Las otras dos están
                orientadas a la calle y disponen de dos camas de 1.05m y de una de
                matrimonio, respectivamente.
              </p>

              <Expandable label="Ver las habitaciones más a fondo">
                <div className="space-y-10 mt-2">
                  {[
                    {
                      img: '/habitacion-rio.jpg',
                      title: 'Habitación con vistas al río',
                      desc: 'Dispone de una cama grande y un armario ropero. También se encuentran en ella dos camas supletorias individuales.',
                    },
                    {
                      img: '/habitacion-balcon.jpg',
                      title: 'Habitación con pequeño balcón a la calle',
                      desc: 'Dispone de una cama grande y dos armarios roperos.',
                    },
                    {
                      img: '/habitacion-ventana.jpg',
                      title: 'Habitación con ventana a la calle',
                      desc: 'Dispone de dos camas individuales.',
                    },
                  ].map((h) => (
                    <div key={h.title} className="grid sm:grid-cols-2 gap-5 items-center">
                      <div
                        className="w-full aspect-[4/3] bg-stone-200 bg-cover bg-center rounded-sm"
                        style={{ backgroundImage: `url('${h.img}')` }}
                      />
                      <div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-lg text-stone-800 mb-2">
                          {h.title}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Expandable>
            </div>

            <div className="sticky top-28">
              <Carousel
                images={['/habitacion-rio.jpg', '/habitacion-balcon.jpg', '/habitacion-ventana.jpg']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BAÑOS ──────────────────────────────────────────────── */}
      {/* Imágenes → public/bano-1.jpg | public/bano-2.jpg | public/bano-3.jpg */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div className="sticky top-28">
              <Carousel images={['/bano-1.jpg', '/bano-2.jpg', '/bano-3.jpg']} />
            </div>

            <div>
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                Confort
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">
                Baños
              </h2>
              <p className="text-stone-600 leading-relaxed">
                La casa cuenta con tres baños completos, cada uno equipado con secador,
                jabón de manos, crema de manos y gel-champú.
              </p>

              <Expandable label="Ver los baños más a fondo">
                <div className="space-y-10 mt-2">
                  {[
                    {
                      img: '/bano-1.jpg',
                      title: 'Baño 1',
                      desc: 'Exclusivo para la habitación con vistas al río, tiene una ducha y disfruta de una gran ventana al cauce. Hay secador, jabón de manos, crema de manos y gel-champú.',
                    },
                    {
                      img: '/bano-2.jpg',
                      title: 'Baño 2',
                      desc: 'En la planta de arriba y con acceso desde el salón, tiene bañera y una ventana claraboya (velux) con vistas a la peña de Aribe. Hay secador, jabón de manos, crema de manos y gel-champú.',
                    },
                    {
                      img: '/bano-3.jpg',
                      title: 'Baño 3',
                      desc: 'En la planta inferior, dispone de ducha. Hay secador, jabón de manos, crema de manos y gel-champú.',
                    },
                  ].map((b) => (
                    <div key={b.title} className="grid sm:grid-cols-2 gap-5 items-center">
                      <div
                        className="w-full aspect-[4/3] bg-stone-200 bg-cover bg-center rounded-sm"
                        style={{ backgroundImage: `url('${b.img}')` }}
                      />
                      <div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-lg text-stone-800 mb-2">
                          {b.title}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Expandable>
            </div>
          </div>
        </div>
      </section>

      {/* ── TERRAZA ────────────────────────────────────────────── */}
      {/* Imagen → public/terraza.jpg */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                Exterior
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">
                Terraza cubierta
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Ubicada en la orilla del río Irati, goza de vistas sobre el cauce, la
                zona de esparcimiento en la orilla y el puente románico. Dispone de una
                mesa junto con sillas para disfrutar de un desayuno al sol o de una cena
                a la luz de los faroles.
              </p>
            </div>
            <div
              className="w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-md"
              style={{ backgroundImage: "url('/terraza.jpg')" }}
            />
          </div>
        </div>
      </section>

    </main>
  )
}
