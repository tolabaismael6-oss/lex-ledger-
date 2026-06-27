import {
  Scale,
  MapPin,
  Clock,
  Phone,
  Mail,
  Globe,
  AtSign,
  Share2,
} from "lucide-react"

const areas = [
  "Derecho Comercial",
  "Derecho Laboral",
  "Derecho Civil",
  "Derecho Tributario",
]

const hours = [
  { day: "Lunes a Viernes", time: "9:00 – 18:00" },
  { day: "Sábados", time: "9:00 – 13:00" },
  { day: "Domingos", time: "Cerrado" },
]

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                <Scale className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold">
                Lex <span className="text-secondary">&amp;</span> Ledger
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Estudio jurídico de confianza para empresas y personas. Más de 15
              años defendiendo tus intereses.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-secondary" aria-hidden="true" />
                <a href="tel:+541143210000" className="hover:text-secondary">
                  +54 11 4321 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-secondary" aria-hidden="true" />
                <a
                  href="mailto:contacto@lexledger.com"
                  className="hover:text-secondary"
                >
                  contacto@lexledger.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                <span className="text-primary-foreground/80">
                  Av. Corrientes 1234, Piso 8
                  <br />
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Áreas</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {areas.map((a) => (
                <li key={a}>
                  <a
                    href="#areas"
                    className="text-primary-foreground/70 hover:text-secondary"
                  >
                    {a}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Clock className="size-4 text-secondary" aria-hidden="true" />
              Horarios
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-primary-foreground/70">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground"
              >
                <Globe className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground"
              >
                <AtSign className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Compartir"
                className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground"
              >
                <Share2 className="size-4" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Cómo llegar</h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-primary-foreground/15">
              <iframe
                title="Ubicación de Lex & Ledger en el mapa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-58.385%2C-34.606%2C-58.375%2C-34.601&layer=mapnik&marker=-34.6036%2C-58.3805"
                className="h-48 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Lex &amp; Ledger. Todos los derechos reservados.</p>
          <p>Matrícula CPACF · Tomo 00 Folio 000</p>
        </div>
      </div>
    </footer>
  )
}
