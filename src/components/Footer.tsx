import Image from "next/image";
import { FOOTER_LINKS } from "@/data/navigation";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate text-mist md:h-[350px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-[27px] md:pt-[60px]">
        <Image src="/images/logo.webp" alt="Lexora Law Partners" width={221} height={90} />
        <nav aria-label="Footer" className="mt-[33px]">
          {/* Separator follows each link, so a wrapped line ends with "|" (as in the mobile mockup) */}
          <ul className="flex flex-wrap justify-center gap-y-[11px]">
            {FOOTER_LINKS.map((link, i) => (
              <li key={link.label} className="flex items-center">
                <a href={link.href} className="text-[16px] uppercase leading-[24px] tracking-[0.02em] transition-colors hover:text-gold">
                  {link.label}
                </a>
                {i < FOOTER_LINKS.length - 1 && <span aria-hidden="true" className="mx-[14px] h-[17px] w-px bg-mist md:mx-[22px]" />}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-[28px] border-t border-mist/25 md:mt-[63px]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[10px] px-[30px] pb-[30px] pt-[26px] text-center text-[13px] leading-5 text-mist/50 md:flex-row md:justify-between md:px-[60px] md:pb-0 md:pt-[31px] md:text-left md:text-[14px]">
          <p className="max-w-[210px] md:max-w-none">&copy; Copyright {new Date().getFullYear()} The Lexora of Singapore. All rights reserved</p>
          <p>Latest update 26 June 2025</p>
        </div>
      </div>
    </footer>
  );
}
