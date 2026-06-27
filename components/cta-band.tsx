import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center md:px-6">
        <div>
          <h2 className="text-balance font-serif text-2xl font-semibold leading-tight text-secondary-foreground md:text-3xl">
            ¿Tenés un caso que necesita atención legal?
          </h2>
          <p className="mt-2 text-secondary-foreground/80">
            La primera consulta es sin cargo. Conversemos sobre tu situación.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <a href="#contacto">
            Agendar ahora
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}
