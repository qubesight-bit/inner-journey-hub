import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Lead } from "@/components/site/Primitives";
import { CtaBlock } from "@/components/site/CtaBlock";
import { meetings } from "@/data/meetings";

export const Route = createFileRoute("/reuniones")({
  component: ReunionesPage,
  head: () => ({
    meta: [
      { title: "Reuniones — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "Exploración, compartir, estudio, encuentros interreligiosos, diálogos comparativos y espacios de experiencia.",
      },
    ],
  }),
});

function ReunionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reuniones"
        title="Cómo son las reuniones"
        lead="Distintos formatos para explorar con profundidad y encontrarnos sin imponer. Ninguno exige adhesión a una doctrina."
      />

      <Section className="!pt-0">
        <ul className="grid gap-5 md:grid-cols-2">
          {meetings.map((m) => (
            <li
              key={m.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <h2 className="font-display text-2xl">{m.title}</h2>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{m.body}</p>
            </li>
          ))}
        </ul>
        <Lead className="mt-12">
          Puedes llegar con una pregunta, una duda, una fe profunda o simplemente curiosidad. No
          necesitas haber recorrido los Pasos para sentarte y participar.
        </Lead>
        <div className="mt-8">
          <Link
            to="/participar"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Quiero conocer una reunión
          </Link>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
