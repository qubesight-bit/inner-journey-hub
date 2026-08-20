import { dialogueFlow } from "@/data/meetings";
import { ArrowDown } from "lucide-react";

export function DialogueFlow() {
  return (
    <ol className="mx-auto flex max-w-md flex-col items-center gap-1">
      {dialogueFlow.map((step, i) => (
        <li key={step} className="flex w-full flex-col items-center">
          <div className="w-full rounded-xl border border-border bg-card px-5 py-4 text-center shadow-soft">
            <span className="font-display text-lg tracking-tight text-foreground">{step}</span>
          </div>
          {i < dialogueFlow.length - 1 ? (
            <ArrowDown
              className="my-2 h-4 w-4 text-accent/70"
              aria-hidden="true"
              strokeWidth={1.5}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
