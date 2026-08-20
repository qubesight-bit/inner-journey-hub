import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Quote, Section, Lead } from "@/components/site/Primitives";
import { ExpandableCard } from "@/components/site/Expandable";
import { CtaBlock } from "@/components/site/CtaBlock";
import { traditions, traditionsIntro } from "@/data/traditions";

export const Route = createFileRoute("/tradiciones")({
  component: TradicionesPage,
  head: () => ({
    meta: [
      { title: "Las Doce Tradiciones — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "Las Tradiciones protegen el espacio de búsqueda: libertad de conciencia, soberanía comunitaria y ausencia de autoridad espiritual institucional.",
      },
    ],
  }),
});

function TradicionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Doce Tradiciones"
        title="Protegen el espacio donde la búsqueda puede ocurrir"
        lead={traditionsIntro}
      />

      <Section className="!pt-0">
        <div className="mb-12 space-y-5">
          <Quote>La responsabilidad puede delegarse. La soberanía no.</Quote>
          <Quote>
            Autoridad suficiente para servir, pero nunca soberanía suficiente para dominar.
          </Quote>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {traditions.map((t) => (
            <ExpandableCard
              key={t.number}
              item={{
                id: `tradicion-page-${t.number}`,
                label: String(t.number).padStart(2, "0"),
                title: t.title,
                body: t.body,
              }}
            />
          ))}
        </div>
        <Lead className="mt-12">
          Ni siquiera los fundadores poseen autoridad espiritual permanente sobre la comunidad. Los
          cargos y responsabilidades son servicios limitados, temporales y rotativos.
        </Lead>
      </Section>

      <CtaBlock />
    </>
  );
}
