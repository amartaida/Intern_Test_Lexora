import { LEGAL_SUPPORT } from "@/data/content";
import { Arrow } from "./ui/Icons";
import ArrowLink from "./ui/ArrowLink";
import SectionLabel from "./ui/SectionLabel";

export default function LegalSupport() {
  return (
    <section id="legal-support" aria-labelledby="legal-title" className="relative px-[30px] pb-[32px] pt-[46px] md:px-[60px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-39px] top-0 h-[687px] w-[548px] bg-[url('/images/texture-wash.webp')] bg-[length:548px_767px] bg-[position:0_-80px] bg-no-repeat opacity-60 [mask-composite:intersect] [mask-image:linear-gradient(to_right,#000_40%,transparent_100%),linear-gradient(to_bottom,transparent_0,#000_18%,#000_72%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-[1320px]">
        <div data-reveal className="flex flex-col gap-[22px] xl:flex-row xl:items-baseline xl:justify-between">
          <SectionLabel>Legal support</SectionLabel>
          <h2 id="legal-title" className="max-w-[250px] font-heading text-[24px] font-normal uppercase leading-[36px] md:max-w-none md:text-[28px] xl:text-[32px] xl:leading-[43px]">
            Guiding you through every step
          </h2>
        </div>

        <ul className="mt-[54px] w-full space-y-[20px] xl:ml-[142px] xl:mt-[84px] xl:w-[1026px] xl:space-y-[30px]">
          {LEGAL_SUPPORT.map((item, i) => (
            <li key={item.title} data-reveal data-reveal-delay={i * 100} className="group flex h-[50px] gap-[15px] xl:h-[60px] xl:gap-[30px]">
              <span className="flex w-[75px] shrink-0 items-center justify-center bg-slate font-heading text-[16px] font-normal text-paper md:w-[105px] md:text-[22px]">
                {item.audience}
              </span>
              <a
                href="#legal-support"
                className="flex min-w-0 flex-1 items-center justify-between gap-3 bg-row pl-[15px] pr-[15px] text-[15px] transition-colors md:pl-[28px] md:pr-[30px] md:text-[18px] duration-300 group-hover:bg-gold group-hover:font-semibold group-hover:text-paper group-has-[:focus-visible]:bg-gold group-has-[:focus-visible]:font-semibold group-has-[:focus-visible]:text-paper"
              >
                <span className="truncate">{item.title}</span>
                <Arrow className="hidden shrink-0 opacity-0 md:block transition-opacity duration-300 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-[50px] flex justify-center xl:mt-[87px]">
          <ArrowLink href="#legal-support">Explore more support</ArrowLink>
        </div>
      </div>
    </section>
  );
}
