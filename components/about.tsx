import Image from "next/image"
import { Check } from "lucide-react"

const points = [
  "Atención personalizada y directa con el abogado a cargo",
  "Honorarios transparentes, sin sorpresas",
  "Estrategias a medida para cada cliente",
]

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/about-lawyer.png"
              alt="Abogado revisando documentos legales en su escritorio"
              width={720}
              height={820}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-secondary px-6 py-5 text-secondary-foreground shadow-lg sm:block md:-right-6">
            <div className="font-serif text-3xl font-bold">15+</div>
            <div className="text-sm font-medium">años de trayectoria</div>
          </div>
        </div>

        <div>
          <span className="rounded-full bg-secondary/15 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-secondary-foreground">
            Sobre nosotros
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Un estudio que combina tradición jurídica con visión moderna
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            En Lex &amp; Ledger creemos que el mejor derecho es el que se
            anticipa a los problemas. Acompañamos a empresas y familias en cada
            decisión importante, traduciendo la complejidad legal en respuestas
            claras y accionables.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
