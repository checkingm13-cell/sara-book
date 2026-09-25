import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Explicit Mobile SEO Viewport Configuration (Google Mobile-First Requirement)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#1658b3",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sarapublication.com"),
  title: {
    default: "Sara Book Publication | UGC Valid ISBN Academic Publisher Ahmedabad",
    template: "%s | Sara Book Publication",
  },
  description:
    "Official academic book publisher in Ahmedabad offering authentic 13-digit UGC-CARE and NAAC compliant ISBN allocation, fast-track peer review, and worldwide author distribution.",
  keywords: [
    "academic book publisher Ahmedabad",
    "UGC valid ISBN publisher",
    "publish book with ISBN Gujarat",
    "Sara Book Publication",
    "faculty API score books",
    "monograph publishing India",
  ],
  authors: [{ name: "Sara Book Publication", url: "https://sarapublication.com" }],
  creator: "Sara Book Publication",
  publisher: "Sara Book Publication",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sarapublication.com",
    siteName: "Sara Book Publication",
    title: "Sara Book Publication | UGC Valid ISBN Academic Publisher",
    description:
      "Allotted authentic 13-digit ISBNs through Raja Rammohun Roy National Agency. Peer-reviewed monographs, textbooks, and research volumes.",
  },
  alternates: {
    canonical: "https://sarapublication.com",
  },
};

import SaraOriginalHeader from "@/components/SaraOriginalHeader";
import SaraFooter from "@/components/SaraFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden selection:bg-amber-100 selection:text-amber-900 bg-[#FAF9F6]">
        <SaraOriginalHeader />
        <main className="flex-1 w-full">
          {children}
        </main>
        <SaraFooter />
      </body>
    </html>
  );
}
