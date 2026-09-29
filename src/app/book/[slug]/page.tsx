import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_BOOKS, getBookBySlug, getAllBookSlugs } from "@/data/books";
import { BookOpen, ShieldCheck, CheckCircle2, FileText, ArrowLeft, Building2, User, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Book Not Found | Sara Book Publication" };

  return {
    title: `${book.title} | ISBN: ${book.isbn} - Sara Book Publication`,
    description: book.synopsis ? book.synopsis.slice(0, 160) : `${book.title} published by Sara Book Publication`,
    openGraph: {
      title: `${book.title} - ${book.author}`,
      description: book.synopsis || book.title,
      type: "book",
      isbn: book.isbn,
    }
  };
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "isbn": book.isbn,
    "bookFormat": "https://schema.org/Paperback",
    "numberOfPages": book.pages || 250,
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
        "name": book.authorAffiliation || "Academic Faculty & Research Scholar"
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
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navy Navigation Breadcrumb */}
      <nav className="bg-[#0A1628] text-white py-3.5 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <Link href="/bookshelf" className="inline-flex items-center gap-1.5 font-medium text-slate-300 hover:text-white transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Scholarly Bookshelf
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono bg-white/10 text-sky-200 px-2.5 py-0.5 rounded-full border border-white/10 font-bold">
              ISBN: {book.isbn}
            </span>
            <span className="text-[11px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> UGC API Valid
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Book Preview Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm sticky top-6">
              
              {/* Cover Container */}
              <div className="relative aspect-[1/1.45] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200 shadow-md flex items-center justify-center">
                <img
                  src={book.coverImage || "/books/default-cover.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-xs bg-[#0D3B66]/90 backdrop-blur-xs text-[10px] font-mono text-white uppercase font-bold">
                  {book.categoryLabel}
                </div>
              </div>

              {/* Monograph Metadata List */}
              <div className="mt-6 space-y-2.5 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Price:</span>
                  <span className="font-extrabold text-[#0D3B66] text-xl">₹{book.priceINR}</span>
                </div>
                {book.pages && (
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Extent:</span>
                    <span className="font-semibold text-slate-800">{book.pages} Pages</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Language:</span>
                  <span className="font-semibold text-slate-800">{book.language}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Publication Year:</span>
                  <span className="font-semibold text-slate-800">{book.year}</span>
                </div>
                {book.subSubject && (
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Discipline:</span>
                    <span className="font-semibold text-slate-800">{book.subSubject}</span>
                  </div>
                )}
              </div>

              <a
                href={`mailto:editor@sarapublication.com?subject=Order Inquiry: ${encodeURIComponent(book.title)} (ISBN: ${book.isbn})`}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#1658b3] hover:bg-[#124690] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-sm hover:shadow transition"
              >
                <BookOpen className="w-4 h-4 text-[#FFAE00]" />
                Order Physical Monograph
              </a>

              <div className="mt-3 text-[11px] text-center text-slate-400 font-mono">
                Ships in 2-3 business days across India
              </div>
            </div>
          </div>

          {/* Right Column: Details, Abstract, Author Bio, Citation (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold font-mono text-[#1658b3] uppercase tracking-wider block">
                Academic Research Monograph • {book.categoryLabel}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#0D3B66] mt-2 leading-snug">
                {book.title}
              </h1>

              {/* Author Card */}
              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
                {book.authorImage ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-white shadow-2xs">
                    <img
                      src={book.authorImage}
                      alt={book.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-[#1658b3]" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-slate-900">{book.author}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{book.authorAffiliation || "Author / Research Scholar"}</p>
                </div>
              </div>

              {/* Author Bio (if available from SQL) */}
              {book.authorBio && (
                <div className="mt-6 p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D3B66] flex items-center gap-1.5 mb-2 font-mono">
                    <User className="w-3.5 h-3.5 text-[#1658b3]" />
                    About the Author(s)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {book.authorBio}
                  </p>
                </div>
              )}

              {/* Synopsis */}
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0D3B66] mb-3 pb-2 border-b border-slate-100">
                  Synopsis & Scholarly Abstract
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {book.synopsis || "Full monograph chapters and index references are available in the physical volume."}
                </p>
              </div>

              {book.tableOfContents && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0D3B66] mb-3">
                    Table of Contents
                  </h3>
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

            {/* Academic Citation Box */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#0D3B66] flex items-center gap-1.5 font-mono">
                  <FileText className="w-4 h-4 text-[#1658b3]" />
                  APA 7th Academic Citation
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Indexed for UGC / Google Scholar</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-xs text-slate-700 leading-relaxed select-all">
                {book.citation}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
