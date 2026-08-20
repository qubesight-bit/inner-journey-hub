import { lazy, Suspense } from "react";
import { cn } from "@/lib/utils";

const HeroLogo3DInner = lazy(() =>
  import("./HeroLogo3D").then((m) => ({ default: m.HeroLogo3D })),
);

function FallbackMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-[70%] w-[70%] animate-soft-float text-primary/70">
        <circle
          cx="78"
          cy="100"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.85"
        />
        <circle
          cx="122"
          cy="100"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.45"
        />
        <circle cx="100" cy="100" r="7" fill="#4a6d8c" />
        <circle
          cx="100"
          cy="100"
          r="18"
          fill="none"
          stroke="#4a6d8c"
          strokeWidth="1.5"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

/** Lazy wrapper so Three.js only loads with the hero canvas. */
export function HeroLogo3D({ className = "" }: { className?: string }) {
  return (
    <Suspense fallback={<FallbackMark className={className} />}>
      <HeroLogo3DInner className={className} />
    </Suspense>
  );
}
