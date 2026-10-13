import { LEGAL_SUPPORT } from "@/data/content";
import { Arrow } from "./ui/Icons";
import ArrowLink from "./ui/ArrowLink";
import SectionLabel from "./ui/SectionLabel";

export default function LegalSupport() {
  return (
    <section id="legal-support" aria-labelledby="legal-title" className="relative px-[60px] pb-[32px] pt-[46px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-39px] top-0 h-[687px] w-[548px] bg-[url('/images/texture-wash.webp')] bg-[length:548px_767px] bg-[position:0_-80px] bg-no-repeat opacity-60 [mask-composite:intersect] [mask-image:linear-gradient(to_right,#000_40%,transparent_100%),linear-gradient(to_bottom,transparent_0,#000_18%,#000_72%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="flex items-baseline justify-between">
          <SectionLabel>Legal support</SectionLabel>
          <h2 id="legal-title" className="font-heading text-[32px] font-normal uppercase leading-[43px]">
            Guiding you through every step
          </h2>
        </div>

        <ul className="ml-[142px] mt-[84px] w-[1026px] space-y-[30px]">
          {LEGAL_SUPPORT.map((item) => (
            <li key={item.title} className="group flex h-[60px] gap-[30px]">
              <span className="flex w-[105px] shrink-0 items-center justify-center bg-slate font-heading text-[22px] font-normal text-paper">
                {item.audience}
              </span>
              <a
                href="#legal-support"
                className="flex flex-1 items-center justify-between bg-row pl-[28px] pr-[30px] text-[18px] transition-colors duration-300 group-hover:bg-gold group-hover:font-semibold group-hover:text-paper group-has-[:focus-visible]:bg-gold group-has-[:focus-visible]:font-semibold group-has-[:focus-visible]:text-paper"
              >
                {item.title}
                <Arrow className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-[87px] flex justify-center">
          <ArrowLink href="#legal-support">Explore more support</ArrowLink>
        </div>
      </div>
    </section>
  );
}
