"use client";

import { useCallback, useEffect, useState } from "react";
import type { NewsCardData } from "@/types/news";

export type NewsState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; articles: NewsCardData[] };

/** Loads articles from our /api/news route. `retry` re-runs the request. */
export function useNews() {
  const [state, setState] = useState<NewsState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/news", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ articles: NewsCardData[] }>;
      })
      .then(({ articles }) => setState({ status: "success", articles }))
      .catch((err) => {
        if (err.name !== "AbortError") setState({ status: "error" });
      });
    return () => controller.abort();
  }, [attempt]);

  const retry = useCallback(() => {
    setState({ status: "loading" });
    setAttempt((n) => n + 1);
  }, []);

  return { state, retry };
}
