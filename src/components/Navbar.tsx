"use client";

import { useState } from "react";
import Link from "next/link";

const mainMenu = [
  {
    label: "ABOUT US",
    children: [
      "What We Do",
      "Council 2025",
      "Executive Committee 2025",
      "Presidents & Honorary Members",
      "Award Recipients",
      "Secretariat 2025",
      "Standing Committees 2025",
      "Practice Areas",
      "Support Schemes",
      "Membership Privileges",
    ],
  },
  { label: "LAWYERS", children: [] },
  { label: "PUBLIC", children: [] },
  { label: "ADMISSIONS", children: [] },
  { label: "MEDIA", children: [] },
  { label: "CPD", children: [] },
  { label: "MEMBER LOGIN", children: [] },
  { label: "MEMBERSHIP", children: [] },
  { label: "CAREERS", children: [] },
  { label: "ADVERTISE", children: [] },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("ABOUT US");

  const activeChildren =
    mainMenu.find((m) => m.label === activeMenu)?.children || [];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-sm">
                <img src="/images/logo.png" alt="Lexora" className="w-full h-full object-cover object-left" />
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="block text-[11px] font-bold tracking-wider text-gray-800 uppercase">
                  LEXORA
                </span>
                <span className="block text-[9px] text-gray-500 tracking-wide">
                  OF SINGAPORE
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4 lg:gap-6">
              <div className="hidden md:flex items-center gap-3 text-gray-600">
                <a href="#" aria-label="Facebook" className="hover:text-[#AA0433] text-sm font-medium">f</a>
                <a href="#" aria-label="Instagram" className="hover:text-[#AA0433] text-sm font-medium">ig</a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#AA0433] text-sm font-medium">in</a>
                <span className="text-gray-300 mx-1">|</span>
                <a href="#contact" className="text-xs font-semibold tracking-wider text-gray-700 hover:text-[#AA0433] uppercase">
                  CONTACT US
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-2 text-gray-700 hover:text-[#AA0433]"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="hidden lg:block w-1/3 relative bg-gray-900">
            <div className="absolute inset-0 bg-gradient-to-br from-[#AA0433]/80 to-black/70" />
            <div className="absolute top-6 left-6">
              <div className="w-12 h-12 bg-[#AA0433] flex items-center justify-center rounded-sm opacity-90">
                <span className="text-white font-bold text-lg">L</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[#3A3A3A] text-white flex flex-col">
            <div className="flex items-center justify-end gap-6 px-6 lg:px-10 py-5">
              <div className="hidden sm:flex items-center gap-3 text-white/80 text-sm">
                <a href="#" className="hover:text-white">f</a>
                <a href="#" className="hover:text-white">ig</a>
                <a href="#" className="hover:text-white">in</a>
                <span className="text-white/40">|</span>
                <a href="#contact" className="text-xs font-semibold tracking-wider uppercase hover:text-white">
                  CONTACT US
                </a>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 hover:text-white/70"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 lg:px-10 pb-8">
              <div className="flex items-center gap-3 border-b border-white/30 pb-2 max-w-md">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search here"
                  className="bg-transparent text-white placeholder-white/50 outline-none w-full text-sm"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 lg:px-10 pb-10">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                <nav className="space-y-1 min-w-[180px]">
                  {mainMenu.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveMenu(item.label)}
                      className={`block text-left text-lg lg:text-xl font-semibold tracking-wide py-1.5 transition-colors ${
                        activeMenu === item.label
                          ? "text-[#C4A35A]"
                          : "text-white hover:text-[#C4A35A]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {activeChildren.length > 0 && (
                  <nav className="space-y-2 pt-1">
                    {activeChildren.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block text-sm text-white/70 hover:text-white transition-colors py-0.5"
                        onClick={() => setIsOpen(false)}
                      >
                        {child}
                      </a>
                    ))}
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
