'use client'

import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────
// PASO 1: Crea una cuenta en https://formspree.io
// PASO 2: Crea un nuevo form apuntando a bordadeltionicolas@gmail.com
// PASO 3: Sustituye XXXXXXXX por tu form ID (lo verás en el dashboard)
const FORMSPREE_ENDPOINT = 'https://formspree.io/bordadeltionicolas@gmail.com'
// ─────────────────────────────────────────────────────────────────

export default function Reserva() {
  const [form, setForm] = useState({ nombre: '', apellido: '', email: '', detalles: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Reserva de ${form.nombre} ${form.apellido}`,
          _replyto: form.email,
          Nombre: form.nombre,
          Apellido: form.apellido,
          Email: form.email,
          Detalles: form.detalles,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nombre: '', apellido: '', email: '', detalles: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>

      {/* ── HERO ────────────────────────────────────────────────── */}
      {/* Imagen → public/reserva-hero.jpg */}
      <section className="relative h-[65vh] flex items-end pb-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-700 bg-cover bg-center"
          style={{ backgroundImage: "url('/reserva-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">
            Aribe, Navarra
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mt-2 drop-shadow-lg">
            ¡Reserva ya!
          </h1>
        </div>
      </section>

      {/* ── INFO CASA ───────────────────────────────────────────── */}
      {/* Imagen → public/reserva-info.jpg */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                Información
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-6">
                ¡Reserva ya!
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  La casa se reserva completa, no hay posibilidad de reservar habitaciones
                  por separado.
                </p>
                <p>
                  Los huéspedes, al alquilar la casa en su integridad, disfrutarán de un
                  ambiente de tranquilidad sin tener que compartir espacios comunes con
                  otras personas.
                </p>
                <p>
                  La ocupación máxima es de <strong className="text-stone-800">8 personas</strong>,
                  habiendo camas para 6 y dos sillones-cama supletorios.
                </p>
                <p>
                  Para evitar perjuicios por posibles alergias a los sucesivos huéspedes,
                  no se permitirá el acceso de animales.
                </p>
              </div>
            </div>
            <div
              className="w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-md"
              style={{ backgroundImage: "url('/reserva-info.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ── PRECIOS Y CONDICIONES ───────────────────────────────── */}
      {/* Imagen → public/reserva-precios.jpg */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div
              className="w-full aspect-[4/3] bg-stone-300 bg-cover bg-center rounded-sm shadow-md md:order-1 order-2"
              style={{ backgroundImage: "url('/reserva-precios.jpg')" }}
            />
            <div className="md:order-2 order-1 space-y-8">
              <div>
                <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
                  Tarifas
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-stone-800 mt-2 mb-3">
                  Precios
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Los precios oscilan entre <strong className="text-stone-800">220 €</strong> y{' '}
                  <strong className="text-stone-800">380 € por día</strong>, dependiendo de la temporada.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-stone-800 mb-3">
                  Fianza
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Para confirmar la reserva, pediremos que se abone, mediante transferencia
                  o Bizum, una parte del importe total de la reserva. Si es cancelada con
                  20 días de antelación antes de llegar se reintegrará el importe
                  íntegramente. Con anterioridad al día décimo antes de la llegada, deberá
                  haberse abonado el importe íntegro bien por transferencia o Bizum.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-stone-800 mb-3">
                  Contacto
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Si deseas reservar o formular cualquier pregunta no dudes en mandar un
                  WhatsApp o llamarnos al{' '}
                  <a href="tel:650503168" className="text-amber-600 hover:text-amber-700 font-medium">
                    650 50 31 68
                  </a>
                  , o bien enviar un mensaje de correo electrónico (
                  <a
                    href="mailto:bordadeltionicolas@gmail.com"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    bordadeltionicolas@gmail.com
                  </a>
                  ), para lo que puedes usar el formulario inferior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-amber-600 font-medium text-xs tracking-widest uppercase">
            Formulario
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-stone-800 mt-2 mb-10">
            ¡Haz tu reserva!
          </h2>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-8 text-center rounded-sm">
              <p className="text-lg font-medium mb-1">¡Mensaje enviado!</p>
              <p className="text-sm">Nos pondremos en contacto contigo lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                    className="w-full border border-stone-300 px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="apellido"
                    required
                    value={form.apellido}
                    onChange={handleChange}
                    placeholder="Ingresa tu apellido"
                    className="w-full border border-stone-300 px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Ingresa tu email"
                className="w-full border border-stone-300 px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 transition-colors"
              />

              <textarea
                name="detalles"
                required
                rows={6}
                value={form.detalles}
                onChange={handleChange}
                placeholder="Escribe aquí los días en los que pretendes alojarte en la casa, número de personas, fechas..."
                className="w-full border border-stone-300 px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />

              {status === 'error' && (
                <p className="text-red-600 text-sm">
                  Ha ocurrido un error. Por favor, inténtalo de nuevo o escríbenos directamente.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 text-white font-medium transition-colors tracking-wide"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          )}
        </div>
      </section>

    </main>
  )
}
