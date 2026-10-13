import { NextResponse } from "next/server";
import { fetchNewsArticles } from "@/lib/guardian";

export async function GET() {
  try {
    const articles = await fetchNewsArticles(8);
    return NextResponse.json({ articles });
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news articles. Please try again later." },
      { status: 500 }
    );
  }
}
