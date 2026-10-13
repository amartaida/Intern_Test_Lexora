"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MAIN_MENU } from "@/data/navigation";
import { Facebook, Instagram, Linkedin } from "./ui/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(MAIN_MENU[0].label);
  // Below lg the sub-links open inline under the tapped item (collapsed by default, as in the mobile mockup).
  const [expanded, setExpanded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const activeChildren = MAIN_MENU.find((m) => m.label === activeMenu)?.children ?? [];

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#what-we-do"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[860px] md:h-[960px] xl:h-[900px]">
        <div className="relative mx-auto h-full max-w-[1440px]">
          <a href="#top" className="pointer-events-auto absolute left-[30px] top-[30px] md:left-[60px] md:top-[60px]">
            <Image src="/images/logo.webp" alt="Lexora Law Partners — home" width={152} height={62} priority className="h-auto w-[162px] md:w-[152px]" />
          </a>

          <div className="pointer-events-auto absolute right-[198px] top-[76px] hidden h-8 items-center text-gold xl:flex">
            <ul className="flex items-center gap-[14px]">
              <li><a href="#" aria-label="Facebook" className="block p-px"><Facebook /></a></li>
              <li><a href="#" aria-label="Instagram" className="block p-px"><Instagram /></a></li>
              <li><a href="#" aria-label="LinkedIn" className="block p-px"><Linkedin /></a></li>
            </ul>
            <span aria-hidden="true" className="mx-[22px] h-[17px] w-px bg-gold" />
            <a href="#contact" className="text-[16px] font-semibold uppercase tracking-[0.02em] text-gold-ink">
              Contact us
            </a>
          </div>
        </div>

        {/* Dark side rail */}
        <div className="pointer-events-auto absolute right-0 top-0 h-full w-[105px] bg-slate md:w-[128px]">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
            className="absolute left-[32px] top-[48px] flex h-8 w-10 items-center justify-center text-white md:left-[44px] md:top-[75px]"
          >
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
              <path d="M0 1h24M0 8h16M0 15h24" />
            </svg>
          </button>

          <a href="#what-we-do" className="absolute bottom-[20px] left-0 flex w-full flex-col items-center gap-[10px] text-white md:bottom-[90px] xl:bottom-auto xl:top-[761px]">
            <span className="text-center text-[12px] uppercase leading-[14px]">
              Scroll<br />down
            </span>
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#73695d]">
              <svg width="8" height="5" viewBox="0 0 8 5" fill="currentColor" aria-hidden="true"><path d="M0 0h8L4 5z" /></svg>
            </span>
          </a>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {/* Left visual panel */}
        <div className="relative hidden w-1/3 bg-gray-900 lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/80 to-black/70" />
          <div className="absolute left-6 top-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-crimson opacity-90">
              <span className="text-lg font-bold text-white">L</span>
            </div>
          </div>
        </div>

        {/* Right menu panel */}
        <div className="relative flex flex-1 flex-col overflow-hidden bg-menu text-white">
          {/* Faint scales artwork behind the links (mobile / tablet mockup) */}
          <Image
            src="/images/menu-scales.webp"
            alt=""
            width={868}
            height={1100}
            aria-hidden="true"
            className="pointer-events-none absolute -right-[18%] bottom-0 h-[70%] w-auto max-w-none opacity-25 mix-blend-lighten lg:hidden"
          />
          <div className="relative flex items-center justify-between gap-6 px-[30px] pb-[47px] pt-[43px] md:px-10 lg:justify-end lg:py-5">
            <div className="flex items-center gap-3 text-white/80">
              <a href="#" aria-label="Facebook" className="block p-px hover:text-white"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="block p-px hover:text-white"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="block p-px hover:text-white"><Linkedin className="h-4 w-4" /></a>
              <span aria-hidden="true" className="mx-1 text-white/70">|</span>
              <a href="#contact" onClick={() => setOpen(false)} className="text-[14px] font-semibold uppercase tracking-wider text-white hover:text-white lg:text-xs">
                Contact us
              </a>
            </div>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-1 hover:text-white/70 lg:p-2"
            >
              <svg className="h-8 w-8 lg:h-6 lg:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative px-[30px] pb-[50px] md:px-10 lg:pb-8">
            <div className="flex max-w-md items-center gap-3 border-b border-white/30 pb-2 max-lg:max-w-none">
              <svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                aria-label="Search"
                placeholder="Search here"
                className="w-full bg-transparent text-sm text-white outline-none placeholder-white/50"
              />
            </div>
          </div>

          <div className="relative flex-1 overflow-y-auto px-[30px] pb-10 md:px-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
              <nav aria-label="Main" className="min-w-[180px] space-y-1 lg:space-y-1">
                {MAIN_MENU.map((item) => {
                  const isActive = activeMenu === item.label;
                  const cls = `block py-1.5 text-left font-heading text-[28px] font-normal uppercase leading-[1.6] tracking-normal transition-colors lg:font-body lg:text-xl lg:font-semibold lg:normal-case lg:tracking-wide ${
                    isActive ? "text-gold-light max-lg:underline max-lg:underline-offset-[6px]" : "text-white hover:text-gold-light"
                  }`;
                  return (
                    <div key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          onClick={() => {
                            setActiveMenu(item.label);
                            setOpen(false);
                          }}
                          className={cls}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <button
                          type="button"
                          aria-expanded={item.children.length > 0 ? isActive && expanded : undefined}
                          onClick={() => {
                            setExpanded(isActive ? !expanded : true);
                            setActiveMenu(item.label);
                          }}
                          className={cls}
                        >
                          {item.label}
                        </button>
                      )}
                      {isActive && expanded && item.children.length > 0 && (
                        <ul className="mb-3 space-y-1 border-l border-white/20 pl-4 lg:hidden">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block py-1 text-[15px] text-white/75 transition-colors hover:text-white"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </nav>

              {activeChildren.length > 0 && (
                <nav aria-label={activeMenu} className="hidden space-y-2 pt-1 lg:block">
                  {activeChildren.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block py-0.5 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {child.label}
                    </a>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
