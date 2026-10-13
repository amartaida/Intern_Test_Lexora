/** Crimson underlined Oswald eyebrow — "WHAT WE DO", "ROAD TO 2027", … */
export default function SectionLabel({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <p
      id={id}
      className={`font-heading text-[16px] font-normal uppercase leading-[24px] text-crimson md:text-[24px] md:leading-[28px] underline decoration-1 underline-offset-[5px] ${className}`}
    >
      {children}
    </p>
  );
}
