"use client";

import { useState } from "react";
import Image from "next/image";

const years = [
  {
    year: "2025",
    title: "A new beginning – Laying the groundwork for our future",
    body: "As we embark on our journey towards LawSoc's 60th anniversary, 2025 marks the beginning of our refreshed digital presence. This year, we're reimagining how we connect with members — through new digital tools, enhanced services, and stories from the legal community.",
  },
  {
    year: "2026",
    title: "Building momentum – Expanding our digital reach",
    body: "In 2026 we deepen member engagement with new platforms, expanded CPD programmes, and stronger regional partnerships. Our focus is on practical tools that support lawyers in their daily practice and lifelong learning.",
  },
  {
    year: "2027",
    title: "Celebrating 60 years – Looking ahead together",
    body: "2027 marks our 60th anniversary. We celebrate six decades of service while setting a clear path for the next generation of the profession — innovation, inclusion, and unwavering commitment to the rule of law.",
  },
];

export default function RoadTo2027() {
  const [active, setActive] = useState(0);
  const current = years[active];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <p className="text-[#AA0433] font-semibold tracking-wider uppercase text-sm mb-3 font-body">
          ROAD TO 2027
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-[42px] text-gray-900 mb-10 lg:mb-14 max-w-2xl">
          Celebrating a Legacy,
          <br />
          Journeying to the Future
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/handshake-scales.jpg"
              alt="Professional handshake with scales of justice"
              fill
              className="object-cover img-desaturate"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            {/* Clickable years */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              {years.map((y, i) => (
                <button
                  key={y.year}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`font-heading text-2xl sm:text-3xl transition-colors duration-300 ${
                    active === i
                      ? "text-[#927642]"
                      : "text-gray-300 hover:text-gray-500"
                  }`}
                >
                  {y.year}
                  {i < years.length - 1 && (
                    <span className="text-gray-300 ml-3 sm:ml-4 font-body text-xl">·</span>
                  )}
                </button>
              ))}
            </div>

            <h3 className="font-heading text-lg text-gray-900 mb-3 transition-opacity duration-300">
              {current.title}
            </h3>
            <p className="font-body text-sm text-gray-600 leading-relaxed transition-opacity duration-300">
              {current.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
