const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * ISO timestamp -> "DD MMM YYYY" (e.g. "24 May 2025").
 * Uses UTC and a manual lookup so the output is identical on server and client
 * (toLocaleDateString varies by ICU version, e.g. "Sept" vs "Sep").
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${day} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
