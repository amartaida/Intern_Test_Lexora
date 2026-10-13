"use client";

import { useState } from "react";
import Image from "next/image";
import { ROADMAP } from "@/data/content";
import SectionLabel from "./ui/SectionLabel";

export default function RoadTo2027() {
  const [index, setIndex] = useState(0);
  const current = ROADMAP[index];

  return (
    <section id="road-to-2027" aria-labelledby="road-title" className="relative px-[60px] pb-[54px] pt-[86px]">
      <div className="relative mx-auto max-w-[1320px]">
        <SectionLabel>Road to 2027</SectionLabel>
        <h2 id="road-title" className="mt-[18px] font-heading text-[54px] font-normal uppercase leading-[81px]">
          Celebrating a legacy,
          <br />
          journeying to the future
        </h2>
        <hr className="mt-[49px] border-0 border-t border-[#cfd1d4]" />

        <div className="mt-[50px] flex gap-[50px]">
          <Image
            src="/images/handshake.webp"
            alt="Two professionals shaking hands beside a brass scale of justice"
            width={649}
            height={400}
            sizes="649px"
            className="h-[400px] w-[649px] shrink-0 object-cover"
          />

          <div className="relative h-[400px] flex-1">
            <div role="tablist" aria-label="Roadmap years" className="absolute right-0 top-[-13px] flex items-center gap-[27px]">
              {ROADMAP.map((item, i) => (
                <span key={item.year} className="flex items-center gap-[27px]">
                  {i > 0 && <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-gold/30" />}
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    onClick={() => setIndex(i)}
                    className={`font-heading text-[54px] font-normal leading-[64.8px] transition-colors duration-300 ${i === index ? "text-gold" : "text-gold/30 hover:text-gold/60"}`}
                  >
                    {item.year}
                  </button>
                </span>
              ))}
            </div>

            <div role="tabpanel" className="absolute bottom-0 left-0 w-[570px]">
              <h3 className="mb-[19px] text-[20px] font-semibold leading-[30px]">{current.heading}</h3>
              <p className="text-[18px] leading-[30.6px]">{current.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
