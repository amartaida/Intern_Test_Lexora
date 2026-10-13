/**
 * The Guardian Content API helper (server-only — imported by /api/news).
 * Docs: https://open-platform.theguardian.com/documentation/
 */
import type { GuardianSearchResponse, NewsCardData } from "@/types/news";
import { formatDate } from "./formatDate";

const BASE_URL = process.env.GUARDIAN_API_BASE || "https://content.guardianapis.com";
// Server-side only (no NEXT_PUBLIC_ prefix) so the key never reaches the browser.
const API_KEY = process.env.GUARDIAN_API_KEY || "test";

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

/** trailText arrives as HTML ("<strong>…</strong> &amp; …") — reduce it to plain text. */
function toPlainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&[a-z]+;|&#39;/gi, (entity) => ENTITIES[entity.toLowerCase()] ?? entity)
    .replace(/\s+/g, " ")
    .trim();
}

export class GuardianError extends Error {}

/**
 * Latest articles from the Guardian's Law section (fits a law-society site).
 * Asks for more than the 6 the brief requires so the carousel has room to scroll,
 * and drops entries that are missing a title or link.
 */
export async function fetchNewsArticles(pageSize = 10): Promise<NewsCardData[]> {
  const params = new URLSearchParams({
    "api-key": API_KEY,
    section: "law",
    "order-by": "newest",
    "page-size": String(pageSize),
    "show-fields": "thumbnail,trailText",
  });

  const res = await fetch(`${BASE_URL}/search?${params}`, {
    next: { revalidate: 300 }, // cache 5 min on the server, also protects the rate limit
  });
  if (!res.ok) throw new GuardianError(`Guardian API responded ${res.status}`);

  const data: GuardianSearchResponse = await res.json();
  if (data.response?.status !== "ok") throw new GuardianError("Guardian API returned a non-ok status");

  return data.response.results
    .filter((a) => a.webTitle && a.webUrl)
    .map((a) => ({
      id: a.id,
      title: a.webTitle,
      excerpt: toPlainText(a.fields?.trailText ?? ""),
      category: a.sectionName,
      date: formatDate(a.webPublicationDate),
      imageUrl: a.fields?.thumbnail ?? null,
      url: a.webUrl,
    }));
}
