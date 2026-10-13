import Image from "next/image";
import ArrowLink from "./ui/ArrowLink";
import { Briefcase, Building, Gavel, Landmark } from "./ui/Icons";

const BADGE =
  "absolute flex h-[42px] w-[42px] items-center justify-center rounded-full border-[3px] border-[#d9c7a8] bg-paper text-crimson";

export default function CareerBanner() {
  return (
    <section id="careers" aria-label="Careers" className="relative z-10 h-[200px] bg-fog">
      <div aria-hidden="true" className="absolute inset-0 bg-[url('/images/career-desk.webp')] bg-cover bg-center opacity-40" />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-[747px] bg-crimson/85 [clip-path:polygon(0_0,100%_0,100%_100%,122px_100%)]"
      />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <Briefcase className="absolute left-[132px] top-[82px] text-gold" />
        <div className="absolute left-[209px] top-[49px]">
          <h2 className="font-heading text-[28px] font-normal leading-[32px]">Support for your career growth</h2>
          <p className="mt-2 text-[18px] leading-[28px]">A guidance on career and work related issues</p>
          <ArrowLink href="#careers" className="mt-2">
            Find career
          </ArrowLink>
        </div>
      </div>

      {/* Hand + phone — breaks out of the banner upwards */}
      <div className="absolute right-[156px] top-[-157px] h-[419px] w-[310px] [clip-path:inset(-300px_-300px_62px_-300px)]">
        <Image src="/images/career-hand.webp" alt="" width={310} height={419} className="h-full w-full" />

        {/* Phone screen (Lexora-branded stand-in for the third-party screenshot in the mockup) */}
        <div
          aria-hidden="true"
          className="absolute left-[66px] top-[58px] h-[230px] w-[107px] overflow-hidden rounded-[12px] bg-white px-[7px] pt-[9px] text-center"
        >
          <p className="text-left text-[4px] font-semibold">02:30</p>
          <p className="mt-[6px] font-serif text-[9px] font-bold leading-none">Featured Jobs</p>
          <div className="mt-[10px] rounded-[4px] bg-[#f4f4f5] p-[6px] text-left">
            <span className="inline-block rounded-[2px] bg-crimson px-[3px] py-px text-[3.500px] text-white">Practitioner</span>
            <p className="mt-[10px] font-heading text-[17px] font-medium leading-[1.05]">Lexora</p>
            <p className="font-heading text-[10px] font-light leading-none text-crimson">Law Partners</p>
            <p className="mt-[6px] text-[4px] font-semibold leading-tight">Legal Associate in Cross-Border Dispute Resolution Practice</p>
            <div className="mt-[5px] space-y-[3px]">
              <span className="block h-[2px] w-full bg-[#d4d4d8]" />
              <span className="block h-[2px] w-[85%] bg-[#d4d4d8]" />
              <span className="block h-[2px] w-[70%] bg-[#d4d4d8]" />
            </div>
          </div>
        </div>

        <span className={BADGE} style={{ left: -8, top: 32 }}><Building /></span>
        <span className={BADGE} style={{ left: 256, top: 135 }}><Landmark /></span>
        <span className={BADGE} style={{ left: -56, top: 218 }}><Gavel /></span>
      </div>
    </section>
  );
}
