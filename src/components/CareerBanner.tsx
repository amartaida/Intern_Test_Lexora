import Image from "next/image";
import ArrowLink from "./ui/ArrowLink";
import { Briefcase, Building, Gavel, Landmark } from "./ui/Icons";

const BADGE =
  "absolute flex h-[52px] w-[52px] items-center justify-center xl:h-[42px] xl:w-[42px] rounded-full border-[3px] border-[#d9c7a8] bg-paper text-crimson";

export default function CareerBanner() {
  return (
    <section id="careers" aria-label="Careers" className="relative z-10 h-[515px] bg-fog xl:h-[200px]">
      <div aria-hidden="true" className="absolute inset-0 bg-[url('/images/career-desk.webp')] bg-cover bg-center opacity-40" />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[145px] bg-crimson/85 xl:bottom-auto xl:left-auto xl:right-0 xl:top-0 xl:h-full xl:w-[747px] xl:[clip-path:polygon(0_0,100%_0,100%_100%,122px_100%)]"
      />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <div className="absolute left-[66px] top-[45px] md:left-[120px] xl:left-[209px] xl:top-[49px]">
          <Briefcase className="mb-[22px] text-gold xl:absolute xl:-left-[77px] xl:top-[33px] xl:mb-0" />
          <h2 className="font-heading text-[24px] font-normal leading-[32px] xl:text-[28px]">Support for your career growth</h2>
          <p className="mt-2 max-w-[200px] text-[16px] leading-[20px] md:max-w-[260px] xl:max-w-none xl:text-[18px] xl:leading-[28px]">
            A guidance on career and work related issues
          </p>
          <ArrowLink href="#careers" className="mt-[14px] xl:mt-2">
            Find career
          </ArrowLink>
        </div>
      </div>

      {/* Hand + phone — scaled down below xl; at xl it breaks out of the banner upwards */}
      <div className="absolute left-[calc(50%-94px)] top-[221px] h-[419px] w-[310px] origin-top-left scale-[0.8] [clip-path:inset(-300px_-300px_62px_-300px)] xl:left-auto xl:right-[156px] xl:top-[-157px] xl:scale-100">
        <Image src="/images/career-hand.webp" alt="" width={310} height={419} className="h-full w-full" />

        {/* Phone screen: the Featured Jobs screenshot from the mockup */}
        <div aria-hidden="true" className="absolute left-[66px] top-[58px] h-[230px] w-[107px] overflow-hidden rounded-[12px] bg-white">
          <Image src="/images/phone-jobs.webp" alt="" fill sizes="110px" className="object-cover object-top" />
        </div>

        <span className={`${BADGE} left-[-21px] top-[5px] xl:left-[-8px] xl:top-[32px]`}><Building /></span>
        <span className={`${BADGE} left-[231px] top-[57px] xl:left-[256px] xl:top-[135px]`}><Landmark /></span>
        <span className={`${BADGE} left-[-56px] top-[172px] xl:left-[-56px] xl:top-[218px]`}><Gavel /></span>
      </div>
    </section>
  );
}
