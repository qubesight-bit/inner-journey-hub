import { Link } from "@tanstack/react-router";
import { Mark } from "./Mark";

const links = [
  { label: "Sobre el Ateneo", to: "/que-es" },
  { label: "Premisas", to: "/pasos" },
  { label: "Tradiciones", to: "/tradiciones" },
  { label: "Principios", to: "/principios" },
  { label: "Reuniones", to: "/reuniones" },
  { label: "Código de convivencia", to: "/como-funciona" },
  { label: "Privacidad", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/participar" },
];

export function Footer() {
  return (
    <footer className="surface-ink mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Mark className="h-8 w-12 text-ink-foreground/70" />
            <p className="mt-5 font-display text-2xl text-ink-foreground">
              Ateneo de la Vida Interior
            </p>
            <p className="mt-2 text-sm text-ink-foreground/70">
              Exploración espiritual · Diálogo interreligioso · Ayuda mutua
            </p>
          </div>
          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-ink-foreground/75 underline-offset-4 transition-colors hover:text-ink-foreground hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-14 max-w-2xl border-t border-ink-foreground/15 pt-6 text-xs leading-relaxed text-ink-foreground/60">
          El Ateneo de la Vida Interior no representa oficialmente a ninguna religión, denominación
          o corriente filosófica.
        </p>
      </div>
    </footer>
  );
}
