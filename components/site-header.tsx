"use client"

import { useState } from "react"
import { Scale, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <span className="flex size-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <Scale className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">
            Lex <span className="text-secondary">&amp;</span> Ledger
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <a href="#contacto">Consulta gratuita</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-primary-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Móvil">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <a href="#contacto" onClick={() => setOpen(false)}>
                Consulta gratuita
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
