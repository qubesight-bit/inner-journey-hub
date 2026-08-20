import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "default",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "cream" | "ink" | "muted";
  labelledBy?: string;
}) {
  const tones = {
    default: "bg-background",
    cream: "bg-cream",
    muted: "bg-muted",
    ink: "surface-ink",
  } as const;
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("px-5 py-20 sm:px-8 sm:py-28", tones[tone], className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[0.7rem] font-semibold tracking-[0.22em] text-accent uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  id,
  className,
  as: As = "h2",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <As
      id={id}
      className={cn(
        "mt-4 max-w-3xl text-3xl leading-[1.15] text-balance sm:text-4xl md:text-[2.75rem]",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function Quote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-accent/50 pl-6 font-display text-xl leading-relaxed text-balance sm:text-2xl",
        className,
      )}
    >
      {children}
    </blockquote>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-70"
        style={{ backgroundImage: "var(--gradient-veil)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle as="h1" className="text-4xl sm:text-5xl md:text-[3.25rem]">
          {title}
        </SectionTitle>
        {lead ? <Lead>{lead}</Lead> : null}
      </div>
    </section>
  );
}
