import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-office.png"
        alt="Sala de reuniones de un estudio jurídico moderno con vista a la ciudad"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* dark green overlay for legibility */}
      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 md:px-6 md:py-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-primary/40 px-4 py-1.5 text-sm font-medium text-secondary">
          <span className="size-1.5 rounded-full bg-secondary" />
          Estudio jurídico · Desde 2009
        </span>

        <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl">
          Defendemos tus intereses con{" "}
          <span className="text-secondary">rigor y estrategia</span>
        </h1>

        <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Asesoría legal integral para empresas y personas. Combinamos
          experiencia, cercanía y resultados medibles en cada caso que tomamos.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <a href="#contacto">
              Agendar consulta
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="tel:+541143210000">
              <Phone className="size-4" />
              +54 11 4321 0000
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
