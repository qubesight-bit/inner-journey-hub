import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Quote, Section } from "@/components/site/Primitives";
import { ExpandableCard } from "@/components/site/Expandable";
import { CtaBlock } from "@/components/site/CtaBlock";
import { steps, stepsClosing } from "@/data/steps";

export const Route = createFileRoute("/pasos")({
  component: PasosPage,
  head: () => ({
    meta: [
      { title: "Las 12 Premisas del Ateneo — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "Las 12 Premisas del Ateneo: ideas fundamentales que orientan la exploración espiritual, filosófica e interreligiosa, sin progresión obligatoria.",
      },
    ],
  }),
});

function PasosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Doce Premisas"
        title="Las 12 Premisas del Ateneo"
        lead="Ideas fundamentales que orientan permanentemente la exploración espiritual, filosófica e interreligiosa. Pueden practicarse simultáneamente y no existe una progresión obligatoria entre ellas."
      />

      <Section className="!pt-0">
        <div className="grid gap-3 md:grid-cols-2">
          {steps.map((step) => (
            <ExpandableCard
              key={step.number}
              item={{
                id: `paso-page-${step.number}`,
                label: String(step.number).padStart(2, "0"),
                title: step.title,
                body: step.body,
              }}
            />
          ))}
        </div>
        <Quote className="mt-14">{stepsClosing}</Quote>
        <p className="mt-8 max-w-2xl text-muted-foreground">
          Las Premisas orientan permanentemente la exploración personal.{" "}
          <Link to="/tradiciones" className="text-accent underline-offset-4 hover:underline">
            Las Tradiciones
          </Link>{" "}
          protegen el espacio donde esa búsqueda puede ocurrir.
        </p>
      </Section>

      <CtaBlock />
    </>
  );
}
