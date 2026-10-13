/** Types for The Guardian Content API responses */

export interface GuardianFields {
  thumbnail?: string;
  trailText?: string;
  headline?: string;
}

export interface GuardianArticle {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields?: GuardianFields;
}

export interface GuardianSearchResponse {
  response: {
    status: string;
    total: number;
    pageSize: number;
    results: GuardianArticle[];
  };
}

/** Normalised card data used by the News carousel (returned by /api/news). */
export interface NewsCardData {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  /** Formatted as DD MMM YYYY, e.g. "24 May 2025" */
  date: string;
  imageUrl: string | null;
  url: string;
}
