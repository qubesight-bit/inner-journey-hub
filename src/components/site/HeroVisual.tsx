/** Abstract contemplative mark: converging paths and meeting circles. */
export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 640 420" className="h-full w-full" fill="none">
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="48%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.03" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pathFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="45%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="640" height="420" fill="url(#heroGlow)" />

        <path
          d="M40 300 C160 240, 220 200, 320 210"
          stroke="url(#pathFade)"
          strokeWidth="1.25"
          className="animate-path-draw"
        />
        <path
          d="M600 300 C480 240, 420 200, 320 210"
          stroke="url(#pathFade)"
          strokeWidth="1.25"
          className="animate-path-draw"
          style={{ animationDelay: "0.35s" }}
        />

        <g className="animate-soft-float origin-center">
          <circle
            cx="250"
            cy="190"
            r="78"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.45"
          />
          <circle
            cx="390"
            cy="190"
            r="78"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.28"
          />
          <circle cx="320" cy="190" r="4" fill="currentColor" opacity="0.75" />
          <circle
            cx="320"
            cy="190"
            r="18"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.2"
            className="animate-soft-pulse"
          />
        </g>

        <g opacity="0.35" stroke="currentColor" strokeWidth="1">
          <line x1="120" y1="90" x2="160" y2="90" />
          <line x1="480" y1="90" x2="520" y2="90" />
          <line x1="140" y1="340" x2="180" y2="340" />
          <line x1="460" y1="340" x2="500" y2="340" />
        </g>
      </svg>
    </div>
  );
}
