import { NextResponse } from "next/server";
import { fetchNewsArticles } from "@/lib/guardian";

export async function GET() {
  try {
    const articles = await fetchNewsArticles(10);
    return NextResponse.json(
      { articles },
      { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } },
    );
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json(
      { error: "The news feed is unavailable right now." },
      { status: 502 },
    );
  }
}
