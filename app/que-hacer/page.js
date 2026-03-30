'use client'

import { useState } from 'react'

function LinkBtn({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 border border-stone-300 text-stone-700 hover:border-amber-500 hover:text-amber-600 text-sm transition-colors"
    >
      {children} →
    </a>
  )
}

function PlaceCard({ img, title, text, href, reverse = false }) {
  return (
    <div className="grid sm:grid-cols-2 gap-8 items-center py-8 border-b border-stone-100 last:border-0">
      <div
        className={`w-full aspect-[4/3] bg-stone-200 bg-cover bg-center rounded-sm ${reverse ? 'sm:order-2' : ''}`}
        style={img ? { backgroundImage: `url('${img}')` } : {}}
      />
      <div className={reverse ? 'sm:order-1' : ''}>
        <h3 className="font-[family-name:var(--font-playfair)] text-xl text-stone-800 mb-3">{title}</h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">{text}</p>
        {href && <LinkBtn href={href}>Más información</LinkBtn>}
      </div>
    </div>
  )
}

function DirectionBlock({ title, children }) {
  return (
    <div className="mt-8 mb-2">
      <h3 className="font-[family-name:var(--font-playfair)] text-lg text-stone-700 pb-2 mb-2 border-b-2 border-amber-200">
        {title}
      </h3>
      {children}
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

export default function QueHacer() {
  const [openSection, setOpenSection] = useState(null)

  const toggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <main>

      {/* ── HERO ────────────────────────────────────────────────── */}
      {/* Imagen → public/que-hacer-hero.jpg */}
      <section className="relative h-[65vh] flex items-end pb-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-700 bg-cover bg-center"
          style={{ backgroundImage: "url('/que-hacer-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">
            Aribe y alrededores
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">
            ¿Qué hacer?
          </h1>
        </div>
      </section>

      {/* ── INTRO + BOTONES ─────────────────────────────────────── */}
      {/* Imagen → public/que-hacer-intro.jpg */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">Explorar</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-5">
                Un entorno lleno de posibilidades
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                La localización de la casa permite a sus residentes visitar un amplio número de lugares,
                ya sea andando o en coche.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => toggle('andando')}
                  className={`px-6 py-3 font-medium transition-colors text-sm ${openSection === 'andando' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-white hover:bg-stone-700'}`}
                >
                  Lugares cercanos andando ↓
                </button>
                <button
                  onClick={() => toggle('coche')}
                  className={`px-6 py-3 font-medium transition-colors text-sm ${openSection === 'coche' ? 'bg-amber-600 text-white' : 'border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'}`}
                >
                  Lugares cercanos en coche ↓
                </button>
              </div>
            </div>
            <div
              className="w-full aspect-[4/3] bg-stone-200 bg-cover bg-center rounded-sm shadow-md"
              style={{ backgroundImage: "url('/que-hacer-intro.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ── DESPLEGABLES ────────────────────────────────────────── */}
      <section className="bg-stone-50 pb-16">
        <div className="max-w-6xl mx-auto px-6 space-y-4">

          {/* ANDANDO */}
          {/* Imágenes → andando-puente.jpg | andando-zamariain.jpg | andando-ermita.jpg | andando-aizpea.jpg */}
          <Expandable id="andando" label="Lugares cercanos andando" open={openSection === 'andando'} onToggle={() => toggle('andando')}>
            <PlaceCard
              img="/andando-puente.jpg"
              title="El puente colgante"
              text="Desde el propio pueblo, cruzando el puente sobre la carretera y a través de un sendero siguiendo el cauce del río en dirección oeste se accede al antiguo balneario y, después, al puente colgante."
              href="https://selvadeirati.es/project/puente-colgante-de-aribe"
            />
            <PlaceCard
              img="/andando-zamariain.jpg"
              title="El mirador de Zamariain"
              text="Subiendo al alto de enfrente de la casa por un camino que surge de la carretera (camino Zirene) se puede llegar al mirador de Zamariain, hacia el este, y a Olaldea, hacia el Oeste."
              href="https://selvadeirati.es/project/mirador-de-zamariain"
              reverse
            />
            <PlaceCard
              img="/andando-ermita.jpg"
              title="Ermita de San Joaquín y mirador de Ariztokia"
              text="También se puede subir a la ermita de San Joaquín o al mirador de Ariztokia y disfrutar de las vistas panorámicas."
              href="https://valledeaezkoa.com/que-ver-y-hacer/miradores-de-la-naturaleza/"
            />
            <PlaceCard
              img="/andando-aizpea.jpg"
              title="Cueva de Aizpea y recorridos hacia Garralda y Garaioa"
              text="Además, hay recorridos hacia Garralda y Garaioa y rutas hacia la Cueva de Aizpea y el molino viejo."
              href="https://valledeaezkoa.com/que-ver-y-hacer/senderos-para-todos/"
              reverse
            />
          </Expandable>

          {/* EN COCHE */}
          {/* Imágenes → coche-abaurrea.jpg | coche-ezcaroz.jpg | coche-ochagavia.jpg | coche-isaba.jpg
                        coche-orbaizeta.jpg | coche-irati.jpg | coche-espinal.jpg | coche-sorogain.jpg | coche-nagore.jpg */}
          <Expandable id="coche" label="Lugares cercanos en coche" open={openSection === 'coche'} onToggle={() => toggle('coche')}>
            <p className="text-stone-600 leading-relaxed py-6">
              Aribe está ubicado en un cruce de caminos, que la convierten en la base ideal para disfrutar
              de los atractivos de tres Valles (Aezkoa, Arce, Roncal), la Selva de Irati y el Camino de Santiago.
            </p>

            <DirectionBlock title="En dirección Roncal, a través de la NA-140:">
              <PlaceCard
                img="/coche-abaurrea.jpg"
                title="A 14 km, en Abaurrea Alta…"
                text="Se encuentra el pueblo a mayor altitud de Navarra y el museo de las estelas."
                href="https://valledeaezkoa.com/que-ver-y-hacer/jardin-de-las-estelas-2/"
              />
              <PlaceCard
                img="/coche-ezcaroz.jpg"
                title="A 23 km está Ezcároz…"
                text="Se puede ver la nevera pirenaica y hacer el paseo circular de 5,4 km que lleva a las cascadas de Jasule, el barranco de Xoxo, la cueva de Axarxiloa o el mirador de Ezcároz."
                href="https://guiailustradadenavarra.com/portfolio-item/sendero-de-jasule/"
                reverse
              />
              <PlaceCard
                img="/coche-ochagavia.jpg"
                title="A 25 km está el precioso pueblo de Ochagavía…"
                text="A través del cual se puede subir a la ermita de la Virgen de las Nieves, entrada este a la Selva de Irati."
                href="https://viajeros30.com/2020/04/11/que-ver-en-ochagavia-navarra/"
              />
              <PlaceCard
                img="/coche-isaba.jpg"
                title="A 49 km está Isaba…"
                text="Se encuentra el acceso al parque natural de Belagua."
                href="https://vallederoncal.es/"
                reverse
              />
            </DirectionBlock>

            <DirectionBlock title="En dirección a la Selva de Irati, por la NA-2030:">
              <PlaceCard
                img="/coche-orbaizeta.jpg"
                title="A 6 km en dirección a Francia, en Orbaizeta…"
                text="Se encuentra la fábrica de armas de Orbaizeta implantada por Carlos III en 1784, en proceso de restauración."
                href="https://www.rutasnavarra.com/asp/asp_artic/2.asp"
              />
              <PlaceCard
                img="/coche-irati.jpg"
                title="Nada más pasar Orbaizeta…"
                text="Se encuentra la entrada este a la Selva de Irati, donde pueden hacerse multitud de recorridos, con fin en Francia, la torre romana de Urkulu o la Ermita de la Virgen de las Nieves, en Ochagavía."
                href="https://selvadeirati.es/"
                reverse
              />
            </DirectionBlock>

            <DirectionBlock title="En dirección a Erro, por la NA-140, y después la N-135 en dirección sur:">
              <PlaceCard
                img="/coche-espinal.jpg"
                title="En Espinal/Aurizberri, a 24 km…"
                text="Comienza una calzada romana que lleva a Nagore."
              />
              <PlaceCard
                img="/coche-sorogain.jpg"
                title="A 27 km, pasado Espinal…"
                text="Se accede al paraje de Sorogain."
                reverse
              />
            </DirectionBlock>

            <DirectionBlock title="En dirección a Aoiz, por la NA-2040:">
              <PlaceCard
                img="/coche-nagore.jpg"
                title="En Nagore y al lado de la ermita románica de Santa María de Arce, a 23 km…"
                text="Existen dos zonas de esparcimiento que circundan un embalse, donde está permitido el baño."
                href="https://www.valledearce.com/turismo/actividades-turisticas/turismo-de-navarra-organice-su-viaje-paseo-del-embalse-de-nagore/"
              />
              <PlaceCard
                img="/lugar-cercano.jpg"
                title="Otros lugares cercanos…"
                text="A 59 km al sur está la capital de la Comunidad Foral, Pamplona, a 95 km el Castillo de Olite, y a 149 km, el parque natural de las Bardenas Reales."
                reverse
              />
              <div className="pb-8">
                <a
                  href="https://www.visitnavarra.es/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-amber-600 text-white hover:bg-amber-500 text-sm font-medium transition-colors"
                >
                  Más información sobre el turismo en Navarra →
                </a>
              </div>
            </DirectionBlock>
          </Expandable>

        </div>
      </section>

      {/* ── SENDERISMO ──────────────────────────────────────────── */}
      {/* Imagen → public/senderismo.jpg */}
      <section>
        <div className="grid md:grid-cols-2">
          <div
            className="bg-stone-300 bg-cover bg-center min-h-[320px] md:min-h-0"
            style={{ backgroundImage: "url('/senderismo.jpg')" }}
          />
          <div className="bg-stone-700 text-white px-10 py-16 flex flex-col justify-center">
            <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">A pie</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl mt-2 mb-4">Senderismo</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-7">
              En los valles circundantes y en la Selva de Irati hay una red de senderos que comunica todos
              los pueblos, además de la opción de ascender a picos pirenaicos, como Berrendi, Orhi o Abodi.
              Se puede obtener información a través de los siguientes enlaces:
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Red de caminos Aezkoa', href: 'https://www.rutasnavarra.com/Rutas/Aezkoa-Red-de-caminos-A-20_Aezkoa-Garralda-Aribe-Garaioa-Abaurrepea-Abaurregaina-Hiriberri-Villanueva-Orbaizeta-Orbara-Aria_29002.html' },
                { label: 'Rutas selva de Irati', href: 'https://selvairati.com/rutas' },
                { label: 'Valles de Aezkoa y Salazar', href: 'https://www.rutaspirineos.org/rutas/valles-de-aezkoa-y-salazar' },
                { label: 'Recorrido desde Hiriberri', href: 'http://www.rutasnavarra.com/Rutas/Hiriberri-(Villanueva-de-Aezkoa)-Berrendi_Hiriberri-Collado-Zelane-Berrendi-GR-11-Hiriberri_9047.html' },
                { label: 'Pico de Orhi, Ochagavía', href: 'https://turismo.navarra.com/item/pico-de-orhi-ochagavia/' },
                { label: 'Sierra de Abodi', href: 'https://www.mendikat.net/com/mount/983' },
                { label: 'Senderos valle de Aezkoa', href: 'https://valledeaezkoa.com/que-ver-y-hacer/senderos-para-todos/' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 border border-white/30 text-white/85 hover:border-amber-400 hover:text-amber-400 text-sm transition-colors"
                >
                  › {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RUTAS EN BICI ───────────────────────────────────────── */}
      {/* Imagen → public/rutas-bici.jpg */}
      <section>
        <div className="grid md:grid-cols-2">
          <div className="bg-stone-700 text-white px-10 py-16 flex flex-col justify-center order-2 md:order-1">
            <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">En bici</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl mt-2 mb-4">Rutas en bici</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-7">
              Las rutas en bici son simplemente espectaculares y se puede encontrar información sobre estas
              mismas en los siguientes enlaces:
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'En el valle de Aezkoa', href: 'https://valledeaezkoa.com/que-ver-y-hacer/sobre-dos-ruedas/' },
                { label: 'En Irati', href: 'https://www.irati.org/centro-btt-irati/' },
                { label: 'Selva de Irati y los bosques de Roncesvalles', href: 'https://pirineos.bike/irati-roncesvalles-vuelta-en-bici-mtb.php' },
                { label: 'Ruta por el bosque de Irati', href: 'https://bicisenruta.com/ruta/bosque-irati-bicicleta/' },
                { label: '4 formas de recorrer la Selva de Irati', href: 'https://planesconhijos.com/salir-con-ninos/navarra/4-formas-recorrer-la-selva-irati/' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 border border-white/30 text-white/85 hover:border-amber-400 hover:text-amber-400 text-sm transition-colors"
                >
                  › {l.label}
                </a>
              ))}
            </div>
          </div>
          <div
            className="bg-stone-300 bg-cover bg-center min-h-[320px] md:min-h-0 order-1 md:order-2"
            style={{ backgroundImage: "url('/rutas-bici.jpg')" }}
          />
        </div>
      </section>

    </main>
  )
}
