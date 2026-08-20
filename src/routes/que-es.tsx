import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Quote, Section, Lead } from "@/components/site/Primitives";
import { CtaBlock } from "@/components/site/CtaBlock";

export const Route = createFileRoute("/que-es")({
  component: QueEsPage,
  head: () => ({
    meta: [
      { title: "Qué es el Ateneo — Ateneo de la Vida Interior" },
      {
        name: "description",
        content:
          "El Ateneo no es una religión. Es una comunidad plural para explorar espiritualidad, filosofía y diálogo interreligioso sin doctrina prefabricada.",
      },
    ],
  }),
});

function QueEsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qué es el Ateneo"
        title="No venimos a recibir una espiritualidad prefabricada."
        lead="Venimos a explorar la nuestra, acompañados por personas que también están buscando."
      />

      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              El Ateneo de la Vida Interior no es una nueva religión ni promueve una doctrina
              espiritual específica. Es una comunidad de exploración espiritual, existencial e
              interreligiosa.
            </p>
            <p>
              Personas religiosas, espirituales, agnósticas, ateas y filosóficamente diversas
              pueden explorar sus creencias, hablar de dudas existenciales, estudiar religiones y
              filosofías, y madurar su propia espiritualidad — incluida su comprensión personal de
              un Poder Superior, si ese concepto les resulta útil.
            </p>
            <p>
              También pueden cuestionar lo que creen, escuchar perspectivas distintas, participar
              en diálogo interreligioso e interconviccional, y llevar esas capacidades a su vida
              cotidiana.
            </p>
          </div>
          <div className="space-y-6">
            <Quote>Ideas abiertas al examen. Personas protegidas del desprecio.</Quote>
            <Quote>
              Comprender no significa adoptar. Respetar no significa estar de acuerdo. Cuestionar
              no significa despreciar.
            </Quote>
            <Quote>
              El Ateneo no busca eliminar nuestras diferencias. Busca enseñarnos a encontrarnos a
              través de ellas.
            </Quote>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <h2 className="font-display text-3xl sm:text-4xl">Dos movimientos a la vez</h2>
        <Lead>
          La identidad del Ateneo une exploración interior con encuentro real entre perspectivas
          distintas.
        </Lead>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-background p-8">
            <h3 className="font-display text-2xl">Hacia dentro</h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li>Comprender qué creo y por qué lo creo</li>
              <li>Nombrar dudas y experiencias formativas</li>
              <li>Explorar mi comprensión de un Poder Superior</li>
              <li>Dejar abiertas las preguntas que aún no responden</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-background p-8">
            <h3 className="font-display text-2xl">Hacia el encuentro</h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li>Escuchar otras religiones y cosmovisiones</li>
              <li>Comprender antes de juzgar</li>
              <li>Representar justamente lo ajeno</li>
              <li>Convivir con diferencias profundas</li>
            </ul>
          </article>
        </div>
        <p className="mt-10 text-center font-display text-xl sm:text-2xl">
          Exploración interior + encuentro con el otro
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/como-funciona"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Cómo funciona
          </Link>
          <Link
            to="/dialogo"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium"
          >
            Diálogo interreligioso
          </Link>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
