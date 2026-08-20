/** Abstract identity mark: two circles meeting, an open path between them. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      role="img"
      aria-label="Ateneo de la Vida Interior"
      className={className}
      fill="none"
    >
      <circle cx="18" cy="16" r="11" stroke="currentColor" strokeWidth="1.25" opacity="0.85" />
      <circle cx="30" cy="16" r="11" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
      <circle cx="24" cy="16" r="2" fill="currentColor" opacity="0.9" />
    </svg>
  );
}