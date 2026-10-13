"use client";

import { useState } from "react";
import Image from "next/image";
import { ROADMAP } from "@/data/content";
import SectionLabel from "./ui/SectionLabel";

export default function RoadTo2027() {
  const [index, setIndex] = useState(0);
  const current = ROADMAP[index];

  return (
    <section id="road-to-2027" aria-labelledby="road-title" className="relative px-[30px] pb-[54px] pt-[70px] md:px-[60px] xl:pt-[86px]">
      <div className="relative mx-auto max-w-[1320px]">
        <div data-reveal>
        <SectionLabel>Road to 2027</SectionLabel>
        <h2 id="road-title" className="mt-[18px] font-heading text-[24px] font-normal uppercase leading-[37px] md:text-[40px] md:leading-[60px] xl:text-[54px] xl:leading-[81px]">
          Celebrating a legacy,
          <br />
          journeying to the future
        </h2>
        </div>
        <hr className="mt-[48px] border-0 border-t border-[#cfd1d4] xl:mt-[49px]" />

        <div className="mt-[30px] flex flex-col xl:mt-[50px] xl:flex-row xl:gap-[50px]">
          <Image
            data-reveal
            src="/images/handshake.webp"
            alt="Two professionals shaking hands beside a brass scale of justice"
            width={649}
            height={400}
            sizes="(min-width: 1280px) 649px, 100vw"
            className="order-2 mt-[34px] aspect-[649/400] h-auto w-full shrink-0 object-cover md:max-w-[649px] xl:order-none xl:mt-0 xl:h-[400px] xl:w-[649px]"
          />

          <div className="contents xl:relative xl:block xl:h-[400px] xl:flex-1">
            <div role="tablist" aria-label="Roadmap years" className="order-1 flex items-center gap-[4.7vw] xl:absolute xl:right-0 xl:top-[-13px] xl:gap-[27px]">
              {ROADMAP.map((item, i) => (
                <span key={item.year} className="flex items-center gap-[4.7vw] xl:gap-[27px]">
                  {i > 0 && <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-gold/30" />}
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    onClick={() => setIndex(i)}
                    className={`font-heading text-[10.9vw] font-normal leading-[1.2] transition-colors duration-300 md:text-[54px] md:leading-[64.8px] ${i === index ? "text-gold" : "text-gold/30 hover:text-gold/60"}`}
                  >
                    {item.year}
                  </button>
                </span>
              ))}
            </div>

            <div role="tabpanel" data-reveal data-reveal-delay="150" className="order-3 mt-[50px] md:max-w-[570px] xl:absolute xl:bottom-0 xl:left-0 xl:mt-0 xl:w-[570px]">
              <h3 className="mb-[17px] text-[18px] font-semibold leading-[22px] xl:mb-[19px] xl:text-[20px] xl:leading-[30px]">{current.heading}</h3>
              <p className="text-[16px] leading-[25px] xl:text-[18px] xl:leading-[30.6px]">{current.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
