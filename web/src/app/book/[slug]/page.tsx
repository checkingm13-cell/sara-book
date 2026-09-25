import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURED_BOOKS, Book } from "@/data/books";
import { BookOpen, ShieldCheck, CheckCircle2, Copy, FileText, ArrowLeft, Building2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const book = FEATURED_BOOKS.find((b) => b.slug === slug);
  if (!book) return { title: "Book Not Found | Sara Book Publication" };

  return {
    title: `${book.title} | ISBN: ${book.isbn} - Sara Book Publication`,
    description: book.synopsis.slice(0, 160),
    openGraph: {
      title: `${book.title} - ${book.author}`,
      description: book.synopsis,
      type: "book",
      isbn: book.isbn
    }
  };
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = FEATURED_BOOKS.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "isbn": book.isbn,
    "bookFormat": "https://schema.org/Paperback",
    "numberOfPages": book.pages,
    "inLanguage": book.language === "English" ? "en" : book.language === "Hindi" ? "hi" : "gu",
    "datePublished": `${book.year}-01-01`,
    "publisher": {
      "@type": "Organization",
      "name": "Sara Book Publication",
      "url": "https://sarapublication.com"
    },
    "author": {
      "@type": "Person",
      "name": book.author,
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": book.authorAffiliation || "Academic Faculty"
      }
    },
    "description": book.synopsis,
    "offers": {
      "@type": "Offer",
      "price": book.priceINR,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="bg-white border-b border-slate-200 py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Book Catalog
          </Link>
          <span className="text-xs font-mono bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100 font-bold">
            Valid ISBN: {book.isbn}
          </span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Book Preview */}
          <div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs sticky top-8">
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-tr from-slate-800 to-indigo-950 text-white p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-indigo-300 block">
                    {book.categoryLabel}
                  </span>
                  <h2 className="text-xl font-extrabold mt-3 leading-tight">{book.title}</h2>
                </div>
                <div>
                  <p className="text-xs text-indigo-200 font-medium">{book.author}</p>
                  <p className="text-[10px] font-mono text-slate-400 mt-2">ISBN {book.isbn}</p>
                  <div className="mt-4 pt-3 border-t border-indigo-900/60 text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    UGC API Score Validated
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center text-sm py-2 border-b border-slate-100">
                  <span className="text-slate-500">Price:</span>
                  <span className="font-bold text-slate-900 text-lg">₹{book.priceINR}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-slate-100">
                  <span className="text-slate-500">Pages:</span>
                  <span className="font-medium text-slate-900">{book.pages} Pages</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-slate-100">
                  <span className="text-slate-500">Language:</span>
                  <span className="font-medium text-slate-900">{book.language}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-slate-100">
                  <span className="text-slate-500">Year:</span>
                  <span className="font-medium text-slate-900">{book.year}</span>
                </div>
              </div>

              <a
                href={`mailto:editor@sarapublication.com?subject=Order Inquiry: ${encodeURIComponent(book.title)}`}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-3 rounded-xl shadow-xs transition"
              >
                <BookOpen className="w-4 h-4" />
                Order Physical Volume
              </a>
            </div>
          </div>

          {/* Right Column: Details, Abstract, Citation */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block">
                Academic Research Monograph
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 leading-snug">
                {book.title}
              </h1>

              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{book.author}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{book.authorAffiliation || "Academic Faculty & Research Scholar"}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-base font-bold text-slate-900 mb-3">Book Synopsis & Research Overview</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {book.synopsis}
                </p>
              </div>

              {book.tableOfContents && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-base font-bold text-slate-900 mb-3">Table of Contents</h3>
                  <ul className="space-y-2">
                    {book.tableOfContents.map((chap, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{chap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Citation Box for Academic Authors */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  Academic Citation (APA Format)
                </span>
                <span className="text-[10px] text-slate-400">Indexed for Google Scholar</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 leading-relaxed select-all">
                {book.citation}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
