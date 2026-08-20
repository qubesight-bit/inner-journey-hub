import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Quote, Section, Lead, Eyebrow, SectionTitle } from "@/components/site/Primitives";
import { CtaBlock } from "@/components/site/CtaBlock";
import { growthIndicators, lifeContexts, notAllowed, notThis } from "@/data/meetings";

export const Route = createFileRoute("/como-funciona")({
  component: ComoFuncionaPage,
  head: () => ({
    meta: [
      { title: "Cómo funciona — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "Espacio seguro, laboratorio de convivencia e indicadores de crecimiento: cómo se protege la dignidad mientras las ideas se examinan.",
      },
    ],
  }),
});

function ComoFuncionaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cómo funciona"
        title="Un espacio para buscar sin ser convertido."
        lead="Aquí puedes explorar profundamente lo que crees, y aprender a dialogar con personas que creen diferente."
      />

      <Section className="!pt-0" labelledBy="seguro-title">
        <Eyebrow>Espacio seguro</Eyebrow>
        <SectionTitle id="seguro-title">
          Ideas abiertas al examen.
          <br />
          Personas protegidas del desprecio.
        </SectionTitle>
        <Lead>
          Un espacio seguro no significa que nuestras ideas nunca serán cuestionadas. Significa que
          nuestra dignidad está protegida mientras nuestras ideas permanecen abiertas al examen.
        </Lead>
        <p className="mt-10 text-sm font-medium tracking-wide text-muted-foreground uppercase">
          No se permite
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {notAllowed.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground/90"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" labelledBy="lab-title">
        <Eyebrow>Laboratorio de convivencia</Eyebrow>
        <SectionTitle id="lab-title">Lo practicamos aquí para vivirlo afuera.</SectionTitle>
        <Lead>
          Las reuniones preparan también para la vida cotidiana: familia, pareja, amistades,
          trabajo, universidad, comunidades religiosas y sociedad.
        </Lead>
        <ul className="mt-10 flex flex-wrap gap-3">
          {lifeContexts.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-background px-5 py-2.5 font-display text-base"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="no-somos-title">
        <Eyebrow>Claridad</Eyebrow>
        <SectionTitle id="no-somos-title">Lo que no somos</SectionTitle>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {notThis.map((item) => (
            <li key={item} className="flex gap-3 border-b border-border py-3">
              <span className="text-accent" aria-hidden>
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="crecimiento-title">
        <Eyebrow>Indicadores</Eyebrow>
        <SectionTitle id="crecimiento-title">¿Cómo sabemos que estamos creciendo?</SectionTitle>
        <Lead>No medimos el crecimiento por que todos terminen creyendo lo mismo.</Lead>
        <ul className="mt-10 space-y-3">
          {growthIndicators.map((item, i) => (
            <li
              key={item}
              className="flex gap-4 rounded-xl border border-border bg-background px-5 py-4"
            >
              <span className="font-display text-sm text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg leading-snug">{item}</span>
            </li>
          ))}
        </ul>
        <Quote className="mt-12">
          La libertad de conciencia se protege con Tradiciones, rotación de servicio y ausencia de
          autoridad espiritual institucional — no con silencio sobre las ideas.
        </Quote>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/tradiciones"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Ver las Tradiciones
          </Link>
          <Link
            to="/reuniones"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium"
          >
            Cómo son las reuniones
          </Link>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
