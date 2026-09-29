import Link from "next/link";
import { ArrowLeft, Download, FileText, Shield, FileCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Author Downloads & Legal Agreements | Sara Book Publication",
  description: "Official downloadable publishing agreement templates, copyright assignment declarations, manuscript submission templates, and author checklists.",
};

export default function DownloadPage() {
  const documents = [
    {
      title: "Author Publishing Agreement (MOU)",
      category: "Legal Contract",
      format: "PDF Document",
      size: "184 KB",
      desc: "Standard copyright non-exclusive publishing memorandum of understanding between the primary author and Sara Book Publication.",
      filename: "Sara_Author_Publishing_Agreement.pdf",
    },
    {
      title: "Manuscript Template (APA 7th Standard)",
      category: "Preparation Template",
      format: "DOCX File",
      size: "92 KB",
      desc: "Pre-formatted Microsoft Word template with correct 1.5 margins, 12pt typography, header hierarchy, and APA bibliographic formatting.",
      filename: "Sara_Manuscript_Format_Template.docx",
    },
    {
      title: "Copyright & Plagiarism Assignment Form",
      category: "Compliance",
      format: "PDF Document",
      size: "142 KB",
      desc: "Author self-declaration verifying manuscript originality, lack of copyright infringement, and absence of undisclosed AI synthesis.",
      filename: "Copyright_Declaration_Form.pdf",
    },
    {
      title: "Author Guidelines & Style Manual",
      category: "Documentation",
      format: "PDF Document",
      size: "320 KB",
      desc: "Complete 2026 handbook covering proofreading symbols, figure numbering, citation protocols, and post-publication sales royalty ledger.",
      filename: "Sara_Author_Guidelines_Manual_2026.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (Consistent Navy #0A1628 Theme)
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] text-white py-10 sm:py-14 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Store
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1658b3]/30 text-sky-300 border border-sky-400/20 text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
              <Download className="w-3 h-3 text-[#FFAE00]" /> Author Resource Hub
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
              Author Downloads & Official Templates
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Download verified legal templates, manuscript styling formats, and copyright declarations directly to prepare your submission.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DOWNLOADS LIST
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-4 mb-12">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-[#1658b3]">
                  <FileText className="w-5 h-5 text-[#1658b3]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-50 text-[#1658b3] rounded-md uppercase font-semibold">
                      {doc.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {doc.format} &bull; {doc.size}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0D3B66] mb-1">{doc.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xl">{doc.desc}</p>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={`#${doc.filename}`}
                  download={doc.filename}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1658b3] hover:bg-[#124690] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-[#FFAE00]" /> Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions Callout */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-sm font-bold text-[#0D3B66] uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Instructions for Submitting Forms
          </h2>
          <ol className="list-decimal list-inside text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>Download the <strong>Manuscript Template (.docx)</strong> and paste your unformatted chapter draft into the respective sections.</li>
            <li>Fill out and sign the <strong>Author Publishing Agreement</strong> and scan/export as PDF.</li>
            <li>Submit both documents simultaneously via our <Link href="/publish" className="text-[#1658b3] font-bold hover:underline">Online Submission Portal</Link> or email to <a href="mailto:editor@sarapublication.com" className="text-[#0D3B66] font-bold font-mono">editor@sarapublication.com</a>.</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
