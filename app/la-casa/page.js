'use client'

import { useState } from 'react'

function Lightbox({ src, onClose }) {
  if (!src) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="max-w-5xl w-full max-h-[90vh] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${src}')`, aspectRatio: '4/3' }}
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none" aria-label="Cerrar">✕</button>
    </div>
  )
}

function Carousel({ images, onZoom }) {
  const [current, setCurrent] = useState(0)
  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length) }
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length) }
  return (
    <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-stone-200 shadow-md cursor-zoom-in" onClick={() => onZoom && onZoom(images[current])}>
      {images.map((img, i) => (
        <div key={i} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url('${img}')` }} />
      ))}
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl transition-colors" aria-label="Anterior">‹</button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl transition-colors" aria-label="Siguiente">›</button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i) }} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`} aria-label={`Imagen ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function CarouselWide({ images }) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)
  return (
    <div className="relative overflow-hidden rounded-sm aspect-[16/9] bg-stone-200 shadow-md">
      {images.map((img, i) => (
        <div key={i} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url('${img}')` }} />
      ))}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl transition-colors" aria-label="Anterior">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl transition-colors" aria-label="Siguiente">›</button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`} aria-label={`Imagen ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

function ClickableImage({ src, onZoom }) {
  return (
    <div className="w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-md cursor-zoom-in" style={{ backgroundImage: `url('${src}')` }} onClick={() => onZoom && onZoom(src)} />
  )
}

function Expandable({ label, open, onToggle, children }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-6 py-4 font-medium text-white transition-colors duration-300 ${open ? 'bg-amber-600' : 'bg-stone-800 hover:bg-stone-700'}`}
      >
        <span>{label}</span>
        <span className="text-lg inline-block transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
      </button>
      <div className="overflow-hidden transition-all duration-700 border-x border-b border-stone-200 bg-white" style={{ maxHeight: open ? '12000px' : '0px' }}>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  )
}

function SubExpandable({ label, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-stone-200 mt-8">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left text-stone-700 font-medium hover:text-amber-600 transition-colors">
        <span>{label}</span>
        <span className="text-lg inline-block transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
      </button>
      <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: open ? '4000px' : '0px', opacity: open ? 1 : 0 }}>
        <div className="pb-8">{children}</div>
      </div>
    </div>
  )
}

export default function LaCasa() {
  const [lightbox, setLightbox] = useState(null)
  const [openSection, setOpenSection] = useState(null)
  const toggle = (s) => setOpenSection((prev) => (prev === s ? null : s))

  return (
    <main>
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative h-[65vh] flex items-end pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-stone-700 bg-cover bg-center" style={{ backgroundImage: "url('/la-casa-hero.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">Aribe, Navarra</span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">La casa</h1>
        </div>
      </section>

      {/* ── INTRO + BOTONES ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <p className="text-stone-600 text-lg leading-relaxed">
            La casa fue rehabilitada conservando su espíritu, y adaptándose a su nueva finalidad. Así, el aska (abrevadero del ganado) que estaba en el lado oeste de la borda fue desmontado y su piedra utilizada para cubrir la pared de la chimenea. De igual manera, la estructura del tejado se conservó completamente de madera y guardando las proporciones de la zona, para que la nieve se deslice por las tejas, que son, como los finales de sus aristas, tradicionales de origen francés. El suelo es, en la parte superior, de tarima de roble del lugar, como las ventanas. Los sanitarios son también de ambiente rústico, recreando los utilizados anteriormente en la zona.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            La decoración ha pretendido congeniar la tradición con la modernidad y la comodidad. Así, coexisten muebles antiguos de madera maciza, como el escritorio y los armarios, la mesa y las sillas del salón, con los modernos sofás, la chaisse-longue y diferentes pequeños detalles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => toggle('casa')}
              className={`px-6 py-3 font-medium transition-colors text-sm ${openSection === 'casa' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-white hover:bg-stone-700'}`}
            >
              Ver la casa ↓
            </button>
            <button
              onClick={() => toggle('historia')}
              className={`px-6 py-3 font-medium transition-colors text-sm ${openSection === 'historia' ? 'bg-amber-600 text-white' : 'border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'}`}
            >
              Historia ↓
            </button>
          </div>
        </div>
      </section>

      {/* ── DESPLEGABLES ───────────────────────────────────────── */}
      <section className="bg-stone-50 pb-16">
        <div className="max-w-6xl mx-auto px-6 space-y-4">

          {/* VER LA CASA */}
          <Expandable label="Ver la casa" open={openSection === 'casa'} onToggle={() => toggle('casa')}>

            {/* Salón inferior */}
            <div className="grid md:grid-cols-2 gap-14 items-center py-10 border-b border-stone-100">
              <div>
                <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">Planta inferior</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">Salón inferior</h2>
                <p className="text-stone-600 leading-relaxed">El salón de la planta inferior tiene unos grandes ventanales al río Irati, una chimenea, una mesa para 8 comensales, además de los sofás, la Smart-tv con acceso a cuentas personales de suministradores de contenidos en streaming, y wifi de máxima capacidad operativa en toda la casa.</p>
              </div>
              <Carousel images={['/salon-inferior.jpg','/salon-inferior-2.jpg','/salon-inferior-3.jpg','/salon-inferior-4.jpg','/salon-inferior-5.jpg','/salon-inferior-6.jpg','/salon-inferior-7.jpg','/salon-inferior-8.jpg','/salon-inferior-9.jpg','/salon-inferior2.jpg']} onZoom={setLightbox} />
            </div>

            {/* Salón superior */}
            <div className="grid md:grid-cols-2 gap-14 items-center py-10 border-b border-stone-100">
              <Carousel images={['/salon-superior.jpg','/salon-superior-2.jpg','/salon-superior-3.jpg','/salon-superior-4.jpg']} onZoom={setLightbox} />
              <div>
                <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">Planta superior</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">Salón superior</h2>
                <p className="text-stone-600 leading-relaxed">El salón de la planta superior hace la función de distribución entre las habitaciones, el baño y la terraza, y en él hay un sofá cama, una mesa de trabajo, con conexión ethernet además de wifi y un antiguo escritorio.</p>
              </div>
            </div>

            {/* Cocina */}
            <div className="grid md:grid-cols-2 gap-14 items-center py-10 border-b border-stone-100">
              <div>
                <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">Equipamiento</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">La cocina</h2>
                <p className="text-stone-600 leading-relaxed">Separada del salón pero con una ventana practicable que comunica ambas dependencias, dispone de cocina vitrocerámica, horno, microondas, lavavajillas, lavadora-secadora, frigorífico, batidora, tostadora y una cafetera Nespresso.</p>
              </div>
              <ClickableImage src="/cocina.jpg" onZoom={setLightbox} />
            </div>

            {/* Habitaciones */}
            <div className="py-10 border-b border-stone-100">
              <div className="grid md:grid-cols-2 gap-14 items-start">
                <div>
                  <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">Descanso</span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">Habitaciones</h2>
                  <p className="text-stone-600 leading-relaxed">La planta superior acoge a las tres habitaciones, una de ellas con cama de matrimonio, baño propio y vistas al río Irati. Las otras dos están orientadas a la calle y disponen de dos camas de 1.05m y de una de matrimonio, respectivamente.</p>
                  <SubExpandable label="Ver las habitaciones más a fondo">
                    <div className="space-y-10 mt-2">
                      {[
                        { images: ['/habitacion-rio.jpg', '/habitacion-rio-2.jpg'], title: 'Habitación con vistas al río', desc: 'Dispone de una cama grande y un armario ropero. También se encuentran en ella dos camas supletorias individuales.' },
                        { images: ['/habitacion-balcon.jpg', '/habitacion-balcon-2.jpg'], title: 'Habitación con pequeño balcón a la calle', desc: 'Dispone de una cama grande y dos armarios roperos.' },
                        { images: ['/habitacion-ventana.jpg', '/habitacion-ventana-2.jpg', '/habitacion-ventana-3.jpg'], title: 'Habitación con ventana a la calle', desc: 'Dispone de dos camas individuales.' },
                      ].map((h) => (
                        <div key={h.title} className="grid sm:grid-cols-2 gap-5 items-center">
                          <Carousel images={h.images} onZoom={setLightbox} />
                          <div>
                            <h3 className="font-[family-name:var(--font-playfair)] text-lg text-stone-800 mb-2">{h.title}</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">{h.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SubExpandable>
                </div>
                <div className="sticky top-28">
                  <Carousel images={['/habitacion-rio.jpg','/habitacion-rio-2.jpg','/habitacion-balcon.jpg','/habitacion-balcon-2.jpg','/habitacion-ventana.jpg','/habitacion-ventana-2.jpg','/habitacion-ventana-3.jpg']} onZoom={setLightbox} />
                </div>
              </div>
            </div>

            {/* Baños */}
            <div className="py-10 border-b border-stone-100">
              <div className="grid md:grid-cols-2 gap-14 items-start">
                <div className="sticky top-28">
                  <Carousel images={['/bano-1.jpg','/bano-1-2.jpg','/bano-1-3.jpg','/bano-2.jpg','/bano-2-2.jpg','/bano-2-3.jpg','/bano-3.jpg']} onZoom={setLightbox} />
                </div>
                <div>
                  <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">Confort</span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">Baños</h2>
                  <p className="text-stone-600 leading-relaxed">La casa cuenta con tres baños completos, cada uno equipado con secador, jabón de manos, crema de manos y gel-champú.</p>
                  <SubExpandable label="Ver los baños más a fondo">
                    <div className="space-y-10 mt-2">
                      {[
                        { images: ['/bano-1.jpg', '/bano-1-2.jpg', '/bano-1-3.jpg'], title: 'Baño 1', desc: 'Exclusivo para la habitación con vistas al río, tiene una ducha y disfruta de una gran ventana al cauce. Hay secador, jabón de manos, crema de manos y gel-champú.' },
                        { images: ['/bano-2.jpg', '/bano-2-2.jpg', '/bano-2-3.jpg'], title: 'Baño 2', desc: 'En la planta de arriba y con acceso desde el salón, tiene bañera y una ventana claraboya (velux) con vistas a la peña de Aribe. Hay secador, jabón de manos, crema de manos y gel-champú.' },
                        { images: ['/bano-3.jpg'], title: 'Baño 3', desc: 'En la planta inferior, dispone de ducha. Hay jabón de manos, crema de manos y gel-champú.' },
                      ].map((b) => (
                        <div key={b.title} className="grid sm:grid-cols-2 gap-5 items-center">
                          <Carousel images={b.images} onZoom={setLightbox} />
                          <div>
                            <h3 className="font-[family-name:var(--font-playfair)] text-lg text-stone-800 mb-2">{b.title}</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">{b.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SubExpandable>
                </div>
              </div>
            </div>

            {/* Terraza */}
            <div className="grid md:grid-cols-2 gap-14 items-center py-10">
              <div>
                <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">Exterior</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">Terraza cubierta</h2>
                <p className="text-stone-600 leading-relaxed">Ubicada en la orilla del río Irati, goza de vistas sobre el cauce, la zona de esparcimiento en la orilla y el puente románico. Dispone de una mesa junto con sillas para disfrutar de un desayuno al sol o de una cena a la luz de los faroles.</p>
              </div>
              <Carousel images={['/terraza.jpg', '/terraza-2.jpg', '/terraza-3.jpg', '/terraza-4.jpg']} onZoom={setLightbox} />
            </div>

          </Expandable>

          {/* HISTORIA */}
          <Expandable label="Historia" open={openSection === 'historia'} onToggle={() => toggle('historia')}>
            <div className="max-w-3xl mx-auto py-6 space-y-6">
              <p className="text-stone-600 text-lg leading-relaxed">
                La casa fue originalmente construida en <span className="text-stone-800 font-medium">1789</span>. En el pasado fue la borda de la familia Remondegui, casa Botoa, donde se guardaban los animales que, en los años de posguerra, abastecían el negocio familiar que se desarrollaba en la fonda, en la casa Ibai ondo.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Posteriormente, <span className="text-stone-800 font-medium">Nicolás Remondegui</span>, que había regresado de Canadá, a donde tuvo que emigrar como muchos vecinos de la zona, la rehabilitó parcialmente y convirtió en su taller de carpintería, lugar donde hacía muchos de sus muebles, a la vez que creó y gestionó la gasolinera del pueblo.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Así fue durante muchos años hasta que en <span className="text-stone-800 font-medium">2000</span>, nosotros sus sobrinos decidimos restaurarla completamente respetando los materiales y arquitectura del lugar. Para ello tuvimos la gran ayuda de nuestro tío Nicolás, y por ello la borda debía tener su nombre.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed italic border-l-2 border-amber-500 pl-5">
                Un pequeño recuerdo a un gran hombre.
              </p>
              <div className="pt-4">
                <CarouselWide images={['/historia-1.jpg', '/historia-2.jpg', '/historia-3.jpg']} />
              </div>
            </div>
          </Expandable>

        </div>
      </section>

    </main>
  )
}
