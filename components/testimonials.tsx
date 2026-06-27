import Image from "next/image"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Resolvieron un conflicto societario que arrastrábamos hace años. Profesionales, claros y siempre disponibles.",
    name: "María Fernández",
    role: "Directora, Grupo Andina",
    avatar: "/images/avatar-1.png",
  },
  {
    quote:
      "Su asesoramiento tributario nos ahorró tiempo y dinero. Confío plenamente en su criterio.",
    name: "Jorge Beltrán",
    role: "Fundador, Beltrán & Cía",
    avatar: "/images/avatar-2.png",
  },
  {
    quote:
      "Acompañaron a mi startup desde el día uno. Contratos, laboral, todo bajo control para poder crecer tranquilo.",
    name: "Diego Sosa",
    role: "CEO, Nube Labs",
    avatar: "/images/avatar-3.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="relative isolate overflow-hidden py-20 md:py-28">
      <Image
        src="/images/library.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/92" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonios
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            La confianza de quienes ya trabajaron con nosotros
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="size-8 text-secondary" aria-hidden="true" />
              <div className="mt-3 flex gap-0.5" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-secondary text-secondary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
