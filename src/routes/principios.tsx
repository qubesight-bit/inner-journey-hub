import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Lead } from "@/components/site/Primitives";
import { ExpandableCard } from "@/components/site/Expandable";
import { CtaBlock } from "@/components/site/CtaBlock";
import { principles, principlesNote } from "@/data/principles";

export const Route = createFileRoute("/principios")({
  component: PrincipiosPage,
  head: () => ({
    meta: [
      { title: "Principios — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "Honestidad, apertura, curiosidad, humildad epistemológica y más: herramientas para explorar y encontrarnos, no dogmas.",
      },
    ],
  }),
});

function PrincipiosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Principios espirituales"
        title="Herramientas para la exploración y el encuentro"
        lead={principlesNote}
      />

      <Section className="!pt-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <ExpandableCard
              key={p.title}
              item={{
                id: `principio-page-${p.title}`,
                title: p.title,
                body: p.body,
              }}
            />
          ))}
        </div>
        <Lead className="mt-12">
          Estos principios orientan la manera de estar juntos. No sustituyen tu tradición, tu
          filosofía ni tu conciencia.
        </Lead>
      </Section>

      <CtaBlock />
    </>
  );
}
