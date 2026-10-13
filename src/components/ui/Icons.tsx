type IconProps = { className?: string };

/** Dotted-dash arrow used on every CTA in the mockup. */
export function Arrow({ className = "" }: IconProps) {
  return (
    <svg width="36" height="12" viewBox="0 0 36 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true" className={className}>
      <path d="M1 6h1M6 6h1M11 6h23M29 1.500 34.500 6 29 10.500" />
    </svg>
  );
}

export function Facebook({ className = "" }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.500 22v-8.500h3l.5-3.500h-3.500V7.800c0-1 .300-1.700 1.800-1.700H17V3a21 21 0 0 0-2.600-.100C11.800 2.900 10 4.500 10 7.400V10H7v3.500h3V22z" />
    </svg>
  );
}

export function Instagram({ className = "" }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.500" cy="6.500" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Linkedin({ className = "" }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M3 9h4v12H3zM5 3a2.200 2.200 0 1 1 0 4.400A2.200 2.200 0 0 1 5 3zM10 9h3.800v1.700h.1c.5-1 1.800-2 3.800-2 4 0 4.700 2.600 4.700 6V21h-4v-5.500c0-1.300 0-3-1.900-3s-2.100 1.400-2.100 2.900V21h-4z" />
    </svg>
  );
}

export function Quote({ className = "" }: IconProps) {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M0 16V9.500C0 4 3 .6 8 0v3C5.500 3.600 4.400 5 4.300 7H8v9zM12 16V9.500C12 4 15 .6 20 0v3c-2.500.6-3.600 2-3.700 4H20v9z" />
    </svg>
  );
}

export function Briefcase({ className = "" }: IconProps) {
  return (
    <svg width="40" height="36" viewBox="0 0 40 36" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 0h12a2 2 0 0 1 2 2v4h-3V3H15v3h-3V2a2 2 0 0 1 2-2zM2 8h36a2 2 0 0 1 2 2v9H0v-9a2 2 0 0 1 2-2zM0 21h16v3h8v-3h16v13a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" />
    </svg>
  );
}

export function Building({ className = "" }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path d="M4 21V3h12v18M16 9h4v12M4 21h16M8 7h4M8 11h4M8 15h4" />
    </svg>
  );
}

export function Landmark({ className = "" }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path d="M3 9 12 3l9 6zM5 11v8M10 11v8M14 11v8M19 11v8M3 21h18" />
    </svg>
  );
}

export function Gavel({ className = "" }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path d="m14 13-8.500 8.500a2.100 2.100 0 0 1-3-3L11 10M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8" />
    </svg>
  );
}

export function PlayTriangle({ className = "" }: IconProps) {
  return (
    <svg width="16" height="26" viewBox="0 0 16 26" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16 13 0 26V0z" />
    </svg>
  );
}
