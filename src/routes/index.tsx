import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { HeroLogo3D } from "@/components/site/HeroLogo3DLazy";
import { CtaBlock } from "@/components/site/CtaBlock";
import { ExpandableCard } from "@/components/site/Expandable";
import { DialogueFlow } from "@/components/site/DialogueFlow";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { Eyebrow, Lead, Quote, Section, SectionTitle } from "@/components/site/Primitives";
import { steps, stepsClosing } from "@/data/steps";
import { traditions, traditionsIntro } from "@/data/traditions";
import { principles, principlesNote } from "@/data/principles";
import {
  bigQuestions,
  growthIndicators,
  higherPowerStances,
  lifeContexts,
  meetings,
  notAllowed,
  notThis,
  participants,
} from "@/data/meetings";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Ateneo de la Vida Interior — Exploración espiritual y diálogo",
      },
      {
        name: "description",
        content:
          "Explora profundamente lo que crees sin que intenten convertirte. Diálogo interreligioso, pensamiento crítico y libertad de conciencia.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <WhatIs />
      <BigQuestions />
      <HigherPower />
      <Dialogue />
      <StepsPreview />
      <TraditionsPreview />
      <PrinciplesPreview />
      <MeetingsPreview />
      <SafeSpace />
      <Laboratory />
      <NotThis />
      <Growth />
      <CtaBlock />
    </>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[min(92vh,860px)] overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 70% at 78% 38%, color-mix(in oklab, var(--cream) 92%, transparent), transparent), linear-gradient(165deg, color-mix(in oklab, var(--muted) 70%, transparent), transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="hero-depth-grid pointer-events-none absolute inset-0 opacity-[0.35]"
      />

      <HeroLogo3D className="pointer-events-auto absolute top-[8%] right-[-4%] hidden h-[min(78vh,640px)] w-[58%] max-w-3xl lg:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:min-h-[min(92vh,860px)]">
        <div className="animate-fade-up max-w-2xl lg:max-w-xl">
          <p className="font-display text-xl text-accent sm:text-2xl">Ateneo de la Vida Interior</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Comunidad de exploración espiritual, diálogo interreligioso y ayuda mutua.
          </p>
          <h1
            id="hero-title"
            className="mt-8 font-display text-4xl leading-[1.12] text-balance sm:text-5xl md:text-[3.35rem]"
          >
            Explora profundamente.
            <br />
            Escucha honestamente.
            <br />
            Continúa buscando.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Una comunidad para explorar espiritualidad, religión, filosofía y las grandes
            preguntas de la existencia junto a personas que pueden creer de manera diferente.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/que-es"
              className="btn-lift inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              Conoce el Ateneo
            </Link>
            <Link
              to="/reuniones"
              className="btn-lift inline-flex min-h-11 items-center rounded-full border border-border bg-card/80 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-secondary"
            >
              Cómo son las reuniones
            </Link>
          </div>
          <p className="mt-10 max-w-lg border-l-2 border-accent/45 pl-5 font-display text-lg leading-snug text-foreground/90 sm:text-xl">
            No venimos a recibir una espiritualidad prefabricada. Venimos a explorar la nuestra.
          </p>
        </div>

        <HeroLogo3D className="mx-auto h-64 w-full max-w-md lg:hidden" />
      </div>
    </section>
  );
}

function WhatIs() {
  return (
    <Section id="que-es" labelledBy="que-es-title" tone="cream">
      <Reveal>
        <Eyebrow>Qué es el Ateneo</Eyebrow>
        <SectionTitle id="que-es-title">Exploración interior y encuentro con el otro</SectionTitle>
        <Lead>
          No somos una religión ni promovemos una doctrina espiritual específica. Somos una
          comunidad plural de ayuda mutua donde personas religiosas, espirituales, agnósticas, ateas
          y filosóficamente diversas exploran juntas.
        </Lead>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal delay={80}>
          <TiltCard className="h-full rounded-2xl border border-border/80 bg-background/80 p-7 sm:p-9">
            <h3 className="font-display text-2xl">Hacia dentro</h3>
            <p className="mt-2 text-sm text-muted-foreground">Comprender:</p>
            <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-foreground/90">
              {[
                "qué creo",
                "por qué lo creo",
                "qué dudas tengo",
                "qué experiencias han formado mi espiritualidad",
                "cómo comprendo un Poder Superior",
                "qué preguntas siguen abiertas",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>
        <Reveal delay={160}>
          <TiltCard className="h-full rounded-2xl border border-border/80 bg-background/80 p-7 sm:p-9">
            <h3 className="font-display text-2xl">Hacia el encuentro</h3>
            <p className="mt-2 text-sm text-muted-foreground">Aprender a:</p>
            <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-foreground/90">
              {[
                "escuchar otras religiones",
                "comprender antes de juzgar",
                "representar justamente las creencias ajenas",
                "expresar desacuerdos respetuosamente",
                "recibir cuestionamientos",
                "convivir con diferencias profundas",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <p className="mt-10 text-center font-display text-xl text-foreground sm:text-2xl">
          Exploración interior + encuentro con el otro
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/que-es"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Leer más sobre el Ateneo
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}

function BigQuestions() {
  return (
    <Section labelledBy="preguntas-title">
      <Reveal>
        <Eyebrow>Grandes preguntas</Eyebrow>
        <SectionTitle id="preguntas-title">Un espacio para las preguntas que importan</SectionTitle>
        <Lead>No necesitas tener una respuesta para participar.</Lead>
      </Reveal>
      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {bigQuestions.map((q, i) => (
          <li key={q}>
            <Reveal delay={Math.min(i * 40, 280)} depth={false}>
              <TiltCard maxTilt={4}>
                <button
                  type="button"
                  className="group flex min-h-16 w-full items-center rounded-xl border border-border bg-card px-5 py-4 text-left font-display text-base leading-snug transition-all hover:border-accent/45 hover:shadow-soft focus-visible:border-accent sm:text-lg"
                >
                  <span className="text-foreground transition-colors group-hover:text-primary">
                    {q}
                  </span>
                </button>
              </TiltCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function HigherPower() {
  return (
    <Section tone="muted" labelledBy="poder-title">
      <Eyebrow>Poder Superior</Eyebrow>
      <SectionTitle id="poder-title">Sin definición institucional</SectionTitle>
      <Lead>
        El Ateneo no define qué es un Poder Superior. Acompaña a cada persona en la exploración
        de su propia comprensión —incluida la de quienes no encuentran útil ese concepto— sin
        establecer cuál debe ser el resultado.
      </Lead>
      <ul className="mt-12 flex flex-wrap gap-3">
        {higherPowerStances.map((stance) => (
          <li
            key={stance}
            className="rounded-full border border-border bg-background px-5 py-2.5 font-display text-base text-foreground"
          >
            {stance}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-muted-foreground">
        Todas estas posiciones pueden formar parte de una búsqueda honesta.
      </p>
    </Section>
  );
}

function Dialogue() {
  return (
    <Section tone="ink" labelledBy="dialogo-title" className="!py-24 sm:!py-28">
      <Reveal>
        <Eyebrow className="text-ink-foreground/55">Diálogo interreligioso e interconviccional</Eyebrow>
        <SectionTitle id="dialogo-title" className="text-ink-foreground">
          Diferentes respuestas. Una conversación.
        </SectionTitle>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
          Pueden participar personas judías, cristianas, musulmanas, budistas, hinduistas,
          pertenecientes a otras tradiciones, espirituales sin religión, agnósticas, ateas o
          filosóficamente indecisas. No presentamos estas categorías como equivalentes
          doctrinalmente: mostramos la pluralidad de quienes llegan.
        </p>
      </Reveal>

      <ul className="mt-10 flex flex-wrap gap-2">
        {participants.map((p) => (
          <li
            key={p}
            className="rounded-full border border-ink-foreground/20 px-4 py-1.5 text-sm text-ink-foreground/85 transition-transform hover:-translate-y-0.5"
          >
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <Reveal delay={100}>
          <div className="space-y-6">
            {[
              "Comprender no significa adoptar.",
              "Respetar no significa estar de acuerdo.",
              "Cuestionar no significa despreciar.",
            ].map((line) => (
              <p key={line} className="font-display text-2xl text-ink-foreground sm:text-[1.65rem]">
                {line}
              </p>
            ))}
            <p className="pt-2 text-ink-foreground/70">
              El Ateneo no busca eliminar nuestras diferencias. Busca enseñarnos a encontrarnos a
              través de ellas.
            </p>
            <Link
              to="/dialogo"
              className="inline-flex text-sm font-medium text-ink-foreground underline-offset-4 hover:underline"
            >
              Profundizar en el diálogo
            </Link>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <TiltCard className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 sm:p-8">
            <DialogueFlow />
          </TiltCard>
        </Reveal>
      </div>
    </Section>
  );
}

function StepsPreview() {
  return (
    <Section labelledBy="pasos-title">
      <Eyebrow>Doce Pasos</Eyebrow>
      <SectionTitle id="pasos-title">Los Doce Pasos de Exploración y Encuentro</SectionTitle>
      <Lead>
        Una guía para desarrollar una espiritualidad examinada y aprender a encontrarse con
        perspectivas diferentes — no un sistema coercitivo ni un requisito de pertenencia.
      </Lead>
      <div className="mt-12 grid gap-3 md:grid-cols-2">
        {steps.map((step) => (
          <ExpandableCard
            key={step.number}
            item={{
              id: `paso-${step.number}`,
              label: String(step.number).padStart(2, "0"),
              title: step.title,
              body: step.body,
            }}
          />
        ))}
      </div>
      <Quote className="mt-12">{stepsClosing}</Quote>
      <div className="mt-8">
        <Link to="/pasos" className="text-sm font-medium text-accent underline-offset-4 hover:underline">
          Ver los Pasos en detalle
        </Link>
      </div>
    </Section>
  );
}

function TraditionsPreview() {
  return (
    <Section tone="cream" labelledBy="tradiciones-title">
      <Eyebrow>Doce Tradiciones</Eyebrow>
      <SectionTitle id="tradiciones-title">Protegen el espacio de la búsqueda</SectionTitle>
      <Lead>{traditionsIntro}</Lead>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {traditions.map((t) => (
          <ExpandableCard
            key={t.number}
            item={{
              id: `tradicion-${t.number}`,
              label: String(t.number).padStart(2, "0"),
              title: t.title,
              body: t.body,
            }}
          />
        ))}
      </div>
      <div className="mt-12 space-y-4">
        <Quote>La responsabilidad puede delegarse. La soberanía no.</Quote>
        <Quote>Autoridad suficiente para servir, pero nunca soberanía suficiente para dominar.</Quote>
      </div>
      <p className="mt-8 max-w-2xl text-muted-foreground">
        Ni siquiera los fundadores poseen autoridad espiritual permanente sobre la comunidad. Los
        cargos son servicios limitados, temporales y rotativos.
      </p>
      <div className="mt-6">
        <Link
          to="/tradiciones"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Leer las Tradiciones
        </Link>
      </div>
    </Section>
  );
}

function PrinciplesPreview() {
  return (
    <Section labelledBy="principios-title">
      <Eyebrow>Principios espirituales</Eyebrow>
      <SectionTitle id="principios-title">Herramientas, no dogmas</SectionTitle>
      <Lead>{principlesNote}</Lead>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p) => (
          <ExpandableCard
            key={p.title}
            item={{
              id: `principio-${p.title}`,
              title: p.title,
              body: p.body,
            }}
          />
        ))}
      </div>
      <div className="mt-8">
        <Link
          to="/principios"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Ver todos los principios
        </Link>
      </div>
    </Section>
  );
}

function MeetingsPreview() {
  return (
    <Section tone="muted" labelledBy="reuniones-title">
      <Reveal>
        <Eyebrow>Reuniones</Eyebrow>
        <SectionTitle id="reuniones-title">Cómo son las reuniones</SectionTitle>
        <Lead>
          Distintos formatos, un mismo propósito: explorar con profundidad y encontrarnos sin
          imponer.
        </Lead>
      </Reveal>
      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {meetings.map((m, i) => (
          <li key={m.title}>
            <Reveal delay={i * 50}>
              <TiltCard className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                <h3 className="font-display text-xl">{m.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </TiltCard>
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          to="/reuniones"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Conocer las reuniones
        </Link>
      </div>
    </Section>
  );
}

function SafeSpace() {
  return (
    <Section labelledBy="seguro-title">
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
            className="rounded-lg border border-border/80 bg-card px-4 py-3 text-sm text-foreground/90"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          to="/como-funciona"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Cómo funciona el espacio
        </Link>
      </div>
    </Section>
  );
}

function Laboratory() {
  return (
    <Section tone="cream" labelledBy="lab-title">
      <Eyebrow>Laboratorio de convivencia</Eyebrow>
      <SectionTitle id="lab-title">Lo practicamos aquí para vivirlo afuera.</SectionTitle>
      <Lead>
        Buscamos desarrollar personas capaces de mantener relaciones humanas significativas incluso
        cuando existen diferencias religiosas o filosóficas profundas.
      </Lead>
      <ul className="mt-12 flex flex-wrap gap-3">
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
  );
}

function NotThis() {
  return (
    <Section labelledBy="no-somos-title">
      <Eyebrow>Claridad</Eyebrow>
      <SectionTitle id="no-somos-title">Lo que no somos</SectionTitle>
      <Lead>Para evitar malentendidos desde el primer momento.</Lead>
      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {notThis.map((item) => (
          <li key={item} className="flex gap-3 border-b border-border py-3 text-foreground/90">
            <span className="text-accent" aria-hidden>
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Growth() {
  return (
    <Section tone="muted" labelledBy="crecimiento-title">
      <Eyebrow>Indicadores</Eyebrow>
      <SectionTitle id="crecimiento-title">¿Cómo sabemos que estamos creciendo?</SectionTitle>
      <Lead>
        No medimos el crecimiento por que todos terminen creyendo lo mismo.
      </Lead>
      <ul className="mt-12 space-y-3">
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
    </Section>
  );
}
