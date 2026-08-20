import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type ExpandableItem = {
  id: string;
  label?: string;
  title: string;
  body: string;
};

export function ExpandableCard({
  item,
  className,
}: {
  item: ExpandableItem;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `panel-${item.id}`;
  return (
    <div
      className={cn(
        "group rounded-xl border border-border bg-card transition-colors hover:border-accent/40",
        open && "border-accent/50 shadow-soft",
        className,
      )}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start gap-4 px-5 py-5 text-left"
        >
          {item.label ? (
            <span className="font-display text-sm text-accent tabular-nums">{item.label}</span>
          ) : null}
          <span className="flex-1 font-display text-lg leading-snug">{item.title}</span>
          <span
            aria-hidden="true"
            className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent/50 group-hover:text-accent"
          >
            {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
          </span>
        </button>
      </h3>
      <div id={panelId} hidden={!open} className="px-5 pb-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      </div>
    </div>
  );
}
