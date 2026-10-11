/** Types for The Guardian Content API responses */

export interface GuardianFields {
  thumbnail?: string;
  trailText?: string;
  headline?: string;
  body?: string;
  byline?: string;
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
  isHosted?: boolean;
  pillarId?: string;
  pillarName?: string;
}

export interface GuardianSearchResponse {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: GuardianArticle[];
  };
}

/** Normalized card data used by the News Carousel */
export interface NewsCardData {
  id: string;
  title: string;
  excerpt: string;
  date: string; // formatted as DD MMM YYYY
  imageUrl: string | null;
  url: string;
}
