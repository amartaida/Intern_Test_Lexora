"use client";

import { useSyncExternalStore } from "react";

const DESKTOP = "(min-width: 1280px)";
const TABLET = "(min-width: 768px)";

function subscribe(onChange: () => void) {
  const queries = [window.matchMedia(DESKTOP), window.matchMedia(TABLET)];
  queries.forEach((q) => q.addEventListener("change", onChange));
  return () => queries.forEach((q) => q.removeEventListener("change", onChange));
}

function getSnapshot() {
  if (window.matchMedia(DESKTOP).matches) return 2;
  if (window.matchMedia(TABLET).matches) return 2;
  return 1;
}

/** Fully visible cards: 2 (≥768px, plus a peeking third on desktop), 1 (<768px, plus a peek). Mirrors the CSS in NewsCarousel. */
export function useItemsPerView() {
  return useSyncExternalStore(subscribe, getSnapshot, () => 2);
}

function subscribeDesktop(onChange: () => void) {
  const q = window.matchMedia(DESKTOP);
  q.addEventListener("change", onChange);
  return () => q.removeEventListener("change", onChange);
}

/** True when a partially visible next card is shown (mobile and desktop). */
export function useHasPeek() {
  const perView = useItemsPerView();
  const desktop = useSyncExternalStore(subscribeDesktop, () => window.matchMedia(DESKTOP).matches, () => true);
  return perView === 1 || desktop;
}
