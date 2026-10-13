import { Arrow } from "./Icons";

interface ArrowLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

/** Uppercase semibold CTA with the dotted arrow — "FIND LAWYER", "MORE DETAIL", … */
export default function ArrowLink({ href, children, className = "", ...rest }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-[14px] text-[18px] font-semibold uppercase leading-[28px] tracking-[0.02em] text-gold-ink ${className}`}
      {...rest}
    >
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
