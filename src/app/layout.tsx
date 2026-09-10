import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edenwayschool.in"),
  title: {
    default: "Edenway High School, Banavasi | Official Website",
    template: "%s | Edenway High School, Banavasi",
  },
  description:
    "Edenway English Medium High School, Banavasi — A co-educational institution nurturing young minds since 2008. LKG to 10th Standard. State-level SSLC results.",
  keywords: [
    "Edenway High School",
    "Banavasi school",
    "English medium school Banavasi",
    "school in Uttara Kannada",
    "SSLC results Banavasi",
    "best school Banavasi",
    "Edenway school admissions",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Edenway High School, Banavasi",
    title: "Edenway High School, Banavasi | Official Website",
    description:
      "A co-educational English medium school nurturing young minds since 2008 in the historic town of Banavasi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edenway High School, Banavasi",
    description:
      "A co-educational English medium school nurturing young minds since 2008.",
  },
  authors: [{ name: "Chinmay Choudhari" }],
  creator: "Chinmay Choudhari",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
