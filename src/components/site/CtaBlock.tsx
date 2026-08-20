import { Link } from "@tanstack/react-router";

export function CtaBlock() {
  return (
    <section aria-labelledby="cta-final" className="px-5 py-24 sm:px-8">
      <div className="surface-ink mx-auto max-w-6xl rounded-2xl px-6 py-16 text-center sm:px-14">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-ink-foreground/60 uppercase">
          Participar
        </p>
        <h2
          id="cta-final"
          className="mx-auto mt-4 max-w-2xl text-3xl text-balance text-ink-foreground sm:text-4xl"
        >
          No necesitas tener las respuestas.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-foreground/75">
          Puedes llegar con una fe profunda, una duda, una pregunta, una contradicción o
          simplemente curiosidad.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/participar"
            className="inline-flex min-h-11 items-center rounded-full bg-ink-foreground px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            Quiero participar
          </Link>
          <Link
            to="/reuniones"
            className="inline-flex min-h-11 items-center rounded-full border border-ink-foreground/35 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            Conocer una reunión
          </Link>
        </div>
      </div>
    </section>
  );
}
