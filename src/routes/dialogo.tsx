import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Quote, Section, Lead, Eyebrow, SectionTitle } from "@/components/site/Primitives";
import { DialogueFlow } from "@/components/site/DialogueFlow";
import { CtaBlock } from "@/components/site/CtaBlock";
import { higherPowerStances, participants } from "@/data/meetings";

export const Route = createFileRoute("/dialogo")({
  component: DialogoPage,
  head: () => ({
    meta: [
      { title: "Diálogo interreligioso — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "Diferentes respuestas. Una conversación. Pluralidad de participantes sin syncretismo doctrinal ni autoridad espiritual.",
      },
    ],
  }),
});

function DialogoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diálogo interreligioso e interconviccional"
        title="Diferentes respuestas. Una conversación."
        lead="El objetivo no es disolver las diferencias ni afirmar que todas las tradiciones dicen lo mismo. Es aprender a encontrarnos a través de ellas."
      />

      <Section className="!pt-0" tone="cream">
        <Eyebrow>Quiénes participan</Eyebrow>
        <SectionTitle>Pluralidad de personas, no equivalencia doctrinal</SectionTitle>
        <Lead>
          Pueden participar personas de tradiciones muy distintas — y también quienes no se
          identifican con ninguna. Mostramos pluralidad de participantes, no una lista de doctrinas
          equivalentes.
        </Lead>
        <ul className="mt-10 flex flex-wrap gap-2">
          {participants.map((p) => (
            <li
              key={p}
              className="rounded-full border border-border bg-background px-4 py-1.5 text-sm"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <Quote>Comprender no significa adoptar.</Quote>
            <Quote>Respetar no significa estar de acuerdo.</Quote>
            <Quote>Cuestionar no significa despreciar.</Quote>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="mb-6 text-center text-sm tracking-wide text-muted-foreground uppercase">
              El movimiento del diálogo
            </p>
            <DialogueFlow />
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="poder-dialogo">
        <Eyebrow>Poder Superior</Eyebrow>
        <SectionTitle id="poder-dialogo">Sin definición institucional</SectionTitle>
        <Lead>
          El Ateneo acompaña la exploración de cada comprensión personal — creo, dudo, no creo, no
          sé, mi comprensión está cambiando — sin establecer cuál debe ser el resultado.
        </Lead>
        <ul className="mt-10 flex flex-wrap gap-3">
          {higherPowerStances.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-background px-5 py-2.5 font-display"
            >
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock />
    </>
  );
}
