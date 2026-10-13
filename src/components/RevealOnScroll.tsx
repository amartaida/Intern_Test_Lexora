"use client";

import { useEffect } from "react";

/*
 * Scroll-triggered entrance animations. Any element with `data-reveal` ("up" by default, or "fade")
 * is hidden just before it scrolls into view and eased in when it arrives. Optional `data-reveal-delay`
 * (ms) staggers siblings. The styles live in globals.css (.reveal-pending).
 *
 * Progressive by design: the server HTML is fully visible, so with JavaScript off, or for people who
 * prefer reduced motion, nothing is ever hidden. Elements already on screen at load are left alone.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => {
      // Already visible (or scrolled past) on load: skip so nothing flashes.
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.style.transitionDelay = `${el.dataset.revealDelay ?? 0}ms`;
      el.classList.add("reveal-pending");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      // Never leave anything hidden if the component unmounts mid-way.
      targets.forEach((el) => el.classList.remove("reveal-pending"));
    };
  }, []);

  return null;
}
