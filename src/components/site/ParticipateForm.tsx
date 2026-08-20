import { useState, type FormEvent, type ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormState = {
  name: string;
  email: string;
  location: string;
  interest: string;
  meetingPreference: string;
  tradition: string;
};

const initial: FormState = {
  name: "",
  email: "",
  location: "",
  interest: "",
  meetingPreference: "",
  tradition: "",
};

export function ParticipateForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!values.meetingPreference) {
      return;
    }
    // Prepared for later Supabase wiring — for now confirm locally.
    console.info("Participar (pendiente de backend):", values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-cream px-6 py-10 text-center"
      >
        <p className="font-display text-2xl text-foreground">Gracias por tu interés.</p>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Hemos recibido tu mensaje. Pronto podrás conectar con una reunión. Mientras tanto,
          puedes seguir explorando el sitio.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setValues(initial);
          }}
          className="mt-6 inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field>
          <Label htmlFor="nombre">Nombre o seudónimo</Label>
          <Input
            id="nombre"
            name="name"
            required
            autoComplete="nickname"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Cómo quieres que te llamemos"
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="tu@email.com"
          />
        </Field>
      </div>

      <Field>
        <Label htmlFor="ubicacion">Ciudad / país</Label>
        <Input
          id="ubicacion"
          name="location"
          required
          autoComplete="address-level2"
          value={values.location}
          onChange={(e) => update("location", e.target.value)}
          placeholder="Ciudad, país"
        />
      </Field>

      <Field>
        <Label htmlFor="interes">¿Qué te interesa explorar?</Label>
        <Textarea
          id="interes"
          name="interest"
          required
          rows={4}
          value={values.interest}
          onChange={(e) => update("interest", e.target.value)}
          placeholder="Una duda, una pregunta, una tradición, o simplemente curiosidad…"
          className="resize-y"
        />
      </Field>

      <Field>
        <Label htmlFor="preferencia">Preferencia de reuniones</Label>
        <Select value={values.meetingPreference} onValueChange={(v) => update("meetingPreference", v)}>
          <SelectTrigger id="preferencia" className="w-full" aria-required="true">
            <SelectValue placeholder="Elige una opción" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="presenciales">Presenciales</SelectItem>
            <SelectItem value="virtuales">Virtuales</SelectItem>
            <SelectItem value="ambas">Ambas</SelectItem>
          </SelectContent>
        </Select>
        {!values.meetingPreference ? (
          <p className="text-xs text-muted-foreground">Selecciona una preferencia para enviar.</p>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="tradicion">
          Tradición o perspectiva espiritual{" "}
          <span className="font-normal text-muted-foreground">(opcional)</span>
        </Label>
        <Select value={values.tradition} onValueChange={(v) => update("tradition", v)}>
          <SelectTrigger id="tradicion" className="w-full">
            <SelectValue placeholder="Prefiero no decirlo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prefiero-no-decirlo">Prefiero no decirlo</SelectItem>
            <SelectItem value="judia">Judía</SelectItem>
            <SelectItem value="cristiana">Cristiana</SelectItem>
            <SelectItem value="musulmana">Musulmana</SelectItem>
            <SelectItem value="budista">Budista</SelectItem>
            <SelectItem value="hinduista">Hinduista</SelectItem>
            <SelectItem value="otra-tradicion">Otra tradición</SelectItem>
            <SelectItem value="espiritual-sin-religion">Espiritual sin religión</SelectItem>
            <SelectItem value="agnostica">Agnóstica</SelectItem>
            <SelectItem value="atea">Ateas / ateos</SelectItem>
            <SelectItem value="filosofica">Filosóficamente indecisa</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <p className="text-xs leading-relaxed text-muted-foreground">
        No pedimos afiliación religiosa. Cualquier dato sobre tu perspectiva es voluntario y no
        condiciona tu participación.
      </p>

      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        Quiero participar
      </button>
    </form>
  );
}

function Field({ children }: { children: ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}
