import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Lead } from "@/components/site/Primitives";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CtaBlock } from "@/components/site/CtaBlock";
import { faq } from "@/data/faq";

export const Route = createFileRoute("/preguntas-frecuentes")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "¿Es una religión? ¿Hay que creer en Dios? ¿Quién dirige espiritualmente? Respuestas claras sobre el Ateneo.",
      },
    ],
  }),
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Preguntas frecuentes"
        title="Respuestas claras, sin letra pequeña doctrinal"
        lead="Si algo no está aquí, escríbenos desde Participar. Preferimos la claridad a la ambigüedad piadosa."
      />

      <Section className="!pt-0">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faq} />
        </div>
        <Lead className="mt-12">
          Privacidad: usamos tus datos de contacto solo para responderte y orientarte hacia una
          reunión. No los compartimos con terceros ni los usamos para proselitismo.
        </Lead>
        <div className="mt-6">
          <Link
            to="/participar"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Ir a Participar
          </Link>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
