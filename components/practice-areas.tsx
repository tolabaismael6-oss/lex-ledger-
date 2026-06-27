import { Building2, Briefcase, Users, Receipt, ArrowUpRight } from "lucide-react"

const areas = [
  {
    icon: Building2,
    title: "Derecho Comercial",
    description:
      "Constitución de sociedades, contratos, fusiones y asesoría corporativa continua para tu negocio.",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description:
      "Defensa de empleadores y trabajadores, despidos, convenios y prevención de conflictos.",
  },
  {
    icon: Users,
    title: "Derecho Civil",
    description:
      "Sucesiones, familia, daños y contratos entre particulares con acompañamiento humano.",
  },
  {
    icon: Receipt,
    title: "Derecho Tributario",
    description:
      "Planificación fiscal, defensa ante AFIP y optimización impositiva dentro del marco legal.",
  },
]

export function PracticeAreas() {
  return (
    <section id="areas" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-secondary/15 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-secondary">
            Áreas de práctica
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl">
            Soluciones legales para cada necesidad
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/75">
            Cubrimos las principales ramas del derecho con equipos
            especializados en cada materia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <div
              key={a.title}
              className="group relative flex flex-col rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-colors hover:border-secondary/50"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <a.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary-foreground">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-foreground/70">
                {a.description}
              </p>
              <a
                href="#contacto"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
              >
                Conocer más
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
