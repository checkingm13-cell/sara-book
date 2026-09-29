import booksData from "./books.json";

export interface Book {
  id: string;
  legacyId?: string;
  slug: string;
  title: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  authorAffiliation?: string;
  isbn: string;
  category: "LIFE_SCIENCES" | "MEDICAL_SCIENCE" | "SCIENCES_AND_ENGINEERING" | "SOCIAL_SCIENCE_AND_HUMANITIES" | string;
  categoryLabel: string;
  subSubject?: string;
  pages?: number;
  year: number;
  language: "English" | "Hindi" | "Gujarati" | string;
  priceINR: number;
  coverImage: string;
  synopsis: string;
  tableOfContents?: string[];
  ugcCompliant: boolean;
  citation: string;
}

export const CATEGORIES = [
  { id: "LIFE_SCIENCES", label: "Life Sciences", count: 10, icon: "Dna" },
  { id: "MEDICAL_SCIENCE", label: "Medical Science", count: 38, icon: "Stethoscope" },
  { id: "SCIENCES_AND_ENGINEERING", label: "Sciences & Engineering", count: 19, icon: "Cpu" },
  { id: "SOCIAL_SCIENCE_AND_HUMANITIES", label: "Social Science & Humanities", count: 35, icon: "GraduationCap" }
] as const;

// Helper to convert remote URLs to local static assets
function resolveLocalPath(url: string | undefined, folder: "books_img" | "author_img"): string {
  if (!url) return "";
  if (url.includes(`/${folder}/`)) {
    const filename = url.split(`/${folder}/`).pop();
    return `/img/${folder}/${filename}`;
  }
  return url;
}

export const ALL_BOOKS: Book[] = (booksData as Book[]).map((book) => ({
  ...book,
  coverImage: resolveLocalPath(book.coverImage, "books_img") || "/books/default-cover.svg",
  authorImage: resolveLocalPath(book.authorImage, "author_img"),
}));

export const FEATURED_BOOKS: Book[] = ALL_BOOKS.slice(0, 12);

export function getBookBySlug(slug: string): Book | undefined {
  return ALL_BOOKS.find((b) => b.slug === slug);
}

export function getAllBookSlugs(): string[] {
  return ALL_BOOKS.map((b) => b.slug);
}
