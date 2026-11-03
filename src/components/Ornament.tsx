// Thin gold divider with a small lotus-bud centre, echoing the card's border.
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      className={`mx-auto h-6 w-48 text-gold ${className}`}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M0 12h96M144 12h96" strokeWidth="0.75" />
      <path d="M100 12c6-7 14-7 20 0-6 7-14 7-20 0zM120 12c6-7 14-7 20 0-6 7-14 7-20 0z" strokeWidth="0.9" />
      <circle cx="120" cy="12" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="92" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="148" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  titleHi,
}: {
  eyebrow?: string;
  title: string;
  titleHi?: string;
}) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      )}
      {titleHi && (
        <p lang="hi" className="font-hindi text-2xl text-rani sm:text-3xl">
          {titleHi}
        </p>
      )}
      <h2 className="font-script text-4xl text-ink/80 sm:text-5xl">{title}</h2>
      <Ornament className="mt-4" />
    </div>
  );
}
