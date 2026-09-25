import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Sparkles, BookOpen, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Author Guidelines | Sara Book Publication",
  description: "Official manuscript formatting, style guide, ISBN allocation, and publishing process for academic authors.",
};

export default function GuidelinesPage() {
  const requirements = [
    {
      title: "Manuscript Format & Dimensions",
      desc: "All manuscripts must be prepared in Microsoft Word (.doc / .docx) format in A4 paper size. Maintain 1.5 line spacing with at least 1-inch (2.54 cm) margins on all sides. Font size must be 12pt (Times New Roman or Calibri recommended).",
    },
    {
      title: "File Submission Policy",
      desc: "Submit a single, consolidated Word file that includes the title page, author biography & affiliations, abstract, full chapters, figures, tables, and APA reference list. Password-protected files cannot be processed.",
    },
    {
      title: "Supported Languages",
      desc: "Sara Book Publication accepts and publishes works in English, Gujarati, and Hindi. Multilingual scholarly dictionaries or glossaries are welcomed with editorial review.",
    },
    {
      title: "Tables & Embedded Figures",
      desc: "All images, charts, and diagrams must be embedded directly within the Word document with high clarity (minimum 300 DPI for print viability). Number all figures and tables sequentially (e.g., Table 1, Figure 2).",
    },
    {
      title: "References & Citations (APA Style)",
      desc: "All scholarly references must follow standard American Psychological Association (APA 7th Edition) format. In-text citations should match the bibliography at the end of the monograph.",
    },
    {
      title: "UGC-Approved ISBN Allocation",
      desc: "Every published edition and reprint receives an authentic 13-digit International Standard Book Number (ISBN) valid for UGC Career Advancement Scheme (CAS) and academic performance indicators (API).",
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Manuscript Submission", time: "Day 1", desc: "Upload your completed Word manuscript via our web portal or email editor@sarapublication.com." },
    { step: "02", title: "Editorial Assessment", time: "2-3 Days", desc: "Our editorial board reviews academic rigor, structural viability, and formatting compliance." },
    { step: "03", title: "ISBN & Legal Registration", time: "3 Working Days", desc: "13-digit ISBN is registered with UGC compliance and author contract executed." },
    { step: "04", title: "Typesetting & Proofing", time: "5-7 Days", desc: "InDesign layout formatting, bespoke cover design, and author digital proof review." },
    { step: "05", title: "Global Release & Distribution", time: "15 Days Total", desc: "Paperback printing, eCommerce cataloging (Amazon, Flipkart, Sara Store), and complimentary copies dispatch." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
                Author Portal & Submission Standards
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Author Guidelines & Publication Standards
              </h1>
            </div>
            <Link
              href="/publish"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#e31e24] hover:bg-[#c4151a] text-white font-bold text-sm tracking-wide transition-all shadow-sm rounded-none"
            >
              Submit Manuscript Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Mission Statement */}
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#e31e24]" />
                Editorial Vision
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Since our inception in <strong>2011</strong>, Sara Book Publication (SBP) has served as an egalitarian gateway for distinguished scholars, emerging researchers, and poets to bring their intellectual works to fruition. Maintaining paramount academic and production standards is our foremost commitment.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As an independent scholarly press, we embrace innovative research across interdisciplinary fields, ensuring that worthy manuscripts receive expedited peer feedback and global dissemination without prohibitive barriers.
              </p>
            </div>

            {/* Formatting Guidelines */}
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Formatting & Manuscript Style Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((item, idx) => (
                  <div key={idx} className="border border-slate-100 bg-slate-50/50 p-5 rounded">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication Timeline */}
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Expedited 15-Day Publication Process
              </h2>
              <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-8">
                {workflowSteps.map((w, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                      {w.step}
                    </span>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-slate-900 text-base">{w.title}</h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-semibold">
                        {w.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Submission Box */}
            <div className="bg-slate-900 text-white p-6 shadow-sm border border-slate-800">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#e31e24] font-bold mb-2">
                Fast-Track Channel
              </div>
              <h3 className="text-lg font-bold mb-3">Direct Editorial Submission</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                You can directly transmit your draft manuscript (.doc / .docx) to Dr. S. Menon (Chief Editor) for prompt viability evaluation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-slate-800/80 rounded border border-slate-700">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Chief Editor Email</div>
                  <a href="mailto:editor@sarapublication.com" className="text-sm font-mono font-bold text-white hover:text-amber-300">
                    editor@sarapublication.com
                  </a>
                </div>
                <div className="p-3 bg-slate-800/80 rounded border border-slate-700">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Direct Helpline</div>
                  <a href="tel:+918866003636" className="text-sm font-mono font-bold text-white hover:text-amber-300">
                    +91 88 66 00 3636
                  </a>
                </div>
              </div>
              <Link
                href="/publish"
                className="w-full block text-center py-3 bg-[#e31e24] hover:bg-[#c4151a] text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Go to Upload Form
              </Link>
            </div>

            {/* Royalty & Rights Notice */}
            <div className="bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Royalty & Intellectual Rights
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Authors retain complete proprietary rights over their creative intellectual property. For eligible packages (Diamond & Platinum), authors receive up to <strong>15% bi-annual royalties</strong> on physical and eCommerce copies sold.
              </p>
              <Link
                href="/packages"
                className="text-xs font-mono font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                View Royalty Breakdown in Packages &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
