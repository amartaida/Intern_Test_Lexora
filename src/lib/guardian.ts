/**
 * The Guardian Content API helper
 * Docs: https://open-platform.theguardian.com/documentation/
 *
 * Free developer key: https://open-platform.theguardian.com/access/
 * Test key (limited): "test"
 */

import type { GuardianSearchResponse, NewsCardData } from "@/types/news";

const BASE_URL =
  process.env.NEXT_PUBLIC_GUARDIAN_API_BASE ||
  "https://content.guardianapis.com";

const API_KEY =
  process.env.NEXT_PUBLIC_GUARDIAN_API_KEY || "test"; // fallback for local dev

/**
 * Format ISO date to "DD MMM YYYY" (e.g. 24 May 2025)
 */
export function formatGuardianDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/**
 * Fetch latest articles suitable for the News Carousel.
 * Requests thumbnail + trailText (excerpt).
 */
export async function fetchNewsArticles(
  pageSize = 8
): Promise<NewsCardData[]> {
  const params = new URLSearchParams({
    "api-key": API_KEY,
    "page-size": String(pageSize),
    "order-by": "newest",
    "show-fields": "thumbnail,trailText,headline",
  });

  const url = `${BASE_URL}/search?${params.toString()}`;

  const res = await fetch(url, {
    next: { revalidate: 300 }, // cache 5 min on server
  });

  if (!res.ok) {
    throw new Error(`Guardian API error: ${res.status} ${res.statusText}`);
  }

  const data: GuardianSearchResponse = await res.json();

  if (data.response.status !== "ok") {
    throw new Error("Guardian API returned non-ok status");
  }

  return data.response.results.map((article) => ({
    id: article.id,
    title: article.webTitle,
    excerpt: article.fields?.trailText?.replace(/<[^>]+>/g, "") || "",
    date: formatGuardianDate(article.webPublicationDate),
    imageUrl: article.fields?.thumbnail || null,
    url: article.webUrl,
  }));
}
