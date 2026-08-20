import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Lead } from "@/components/site/Primitives";
import { ParticipateForm } from "@/components/site/ParticipateForm";

export const Route = createFileRoute("/participar")({
  component: ParticiparPage,
  head: () => ({
    meta: [
      { title: "Participar — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "No necesitas tener las respuestas. Llega con fe, duda, pregunta o curiosidad. Formulario para conocer una reunión.",
      },
    ],
  }),
});

function ParticiparPage() {
  return (
    <>
      <PageHeader
        eyebrow="Participar"
        title="No necesitas tener las respuestas."
        lead="Puedes llegar con una fe profunda, una duda, una pregunta, una contradicción o simplemente curiosidad."
      />

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl">Cómo empezar</h2>
            <Lead className="mt-4">
              Completa el formulario y te orientaremos hacia una reunión presencial o virtual
              según tu preferencia. No pedimos religión de forma obligatoria.
            </Lead>
            <ul className="mt-8 space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                No hay requisito de haber asimilado las Premisas.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                Puedes usar tu nombre o un seudónimo.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                Tu perspectiva espiritual, si la compartes, es opcional.
              </li>
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              ¿Prefieres primero entender el formato?{" "}
              <Link to="/reuniones" className="text-accent underline-offset-4 hover:underline">
                Conoce las reuniones
              </Link>
              .
            </p>
          </div>
          <ParticipateForm />
        </div>
      </Section>
    </>
  );
}
