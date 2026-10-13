import Image from "next/image";
import { FOOTER_LINKS } from "@/data/navigation";

export default function Footer() {
  return (
    <footer id="contact" className="h-[350px] bg-slate text-mist">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center pt-[60px]">
        <Image src="/images/logo.webp" alt="Lexora Law Partners" width={221} height={90} />
        <nav aria-label="Footer" className="mt-[33px]">
          <ul className="flex items-center">
            {FOOTER_LINKS.map((link, i) => (
              <li key={link.label} className="flex items-center">
                {i > 0 && <span aria-hidden="true" className="mx-[22px] h-[17px] w-px bg-mist" />}
                <a href={link.href} className="text-[16px] uppercase leading-[24px] tracking-[0.02em] transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-[63px] border-t border-mist/25">
        <div className="mx-auto flex max-w-[1440px] justify-between px-[60px] pt-[31px] text-[14px] leading-5 text-mist/50">
          <p>&copy; {new Date().getFullYear()} The Lexora of Singapore. All rights reserved</p>
          <p>Latest update 26 June 2025</p>
        </div>
      </div>
    </footer>
  );
}
