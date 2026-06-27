import { Briefcase, CalendarClock, Handshake, Users } from "lucide-react"

const stats = [
  { icon: Briefcase, value: "+200", label: "Casos resueltos" },
  { icon: CalendarClock, value: "15 años", label: "De experiencia" },
  { icon: Handshake, value: "98%", label: "Éxito en mediaciones" },
  { icon: Users, value: "+500", label: "Clientes satisfechos" },
]

export function StatsStrip() {
  return (
    <section className="border-y border-secondary/30 bg-primary">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 md:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-4 px-2 py-8 md:px-6"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
              <s.icon className="size-6" aria-hidden="true" />
            </span>
            <div>
              <div className="font-serif text-2xl font-semibold text-primary-foreground md:text-3xl">
                {s.value}
              </div>
              <div className="text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
