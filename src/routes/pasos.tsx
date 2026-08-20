import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Quote, Section } from "@/components/site/Primitives";
import { ExpandableCard } from "@/components/site/Expandable";
import { CtaBlock } from "@/components/site/CtaBlock";
import { steps, stepsClosing } from "@/data/steps";

export const Route = createFileRoute("/pasos")({
  component: PasosPage,
  head: () => ({
    meta: [
      { title: "Los Doce Pasos — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "Doce Pasos de Exploración y Encuentro: una guía para espiritualidad examinada y diálogo, no un sistema coercitivo.",
      },
    ],
  }),
});

function PasosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Doce Pasos"
        title="Los Doce Pasos de Exploración y Encuentro"
        lead="Ayudan a desarrollar una espiritualidad examinada y a encontrarse con perspectivas diferentes. No conducen a una conclusión predeterminada ni son requisito para participar."
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
          Los Pasos protegen y orientan la búsqueda personal.{" "}
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
