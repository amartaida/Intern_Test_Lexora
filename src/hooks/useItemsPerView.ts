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
  if (window.matchMedia(DESKTOP).matches) return 3;
  if (window.matchMedia(TABLET).matches) return 2;
  return 1;
}

/** Cards visible at once: 3 (≥1280px), 2 (768–1279px), 1 (<768px). Mirrors the CSS in NewsCarousel. */
export function useItemsPerView() {
  return useSyncExternalStore(subscribe, getSnapshot, () => 3);
}
