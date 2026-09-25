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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
            Author Resource Hub
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Author Downloads & Official Templates
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Download verified legal templates, manuscript styling formats, and copyright declarations directly to prepare your submission.
          </p>
        </div>
      </div>

      {/* Downloads List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 mb-12">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-700">
                  <FileText className="w-6 h-6 text-[#e31e24]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded uppercase font-semibold">
                      {doc.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {doc.format} &bull; {doc.size}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{doc.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xl">{doc.desc}</p>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={`#${doc.filename}`}
                  download={doc.filename}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-[#e31e24] text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Template
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions callout */}
        <div className="bg-white border border-slate-200 p-8 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Instructions for Submitting Forms
          </h2>
          <ol className="list-decimal list-inside text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>Download the <strong>Manuscript Template (.docx)</strong> and paste your unformatted chapter draft into the respective sections.</li>
            <li>Fill out and sign the <strong>Author Publishing Agreement</strong> and scan/export as PDF.</li>
            <li>Submit both documents simultaneously via our <Link href="/publish" className="text-blue-600 font-bold hover:underline">Online Submission Portal</Link> or email to <a href="mailto:editor@sarapublication.com" className="text-slate-900 font-bold font-mono">editor@sarapublication.com</a>.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
