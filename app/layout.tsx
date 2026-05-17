import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { personalInfo } from "@/lib/data";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreyas Joshi | AI/ML Developer & Data Science Engineer",
  description:
    "Portfolio of Shreyas Pralhad Joshi — Final-year CSE student specializing in AI, RAG systems, NLP, and machine learning. Based in Bangalore, India.",
  keywords: [
    "AI developer",
    "ML engineer",
    "RAG systems",
    "Python developer",
    "data science",
    "Bangalore",
    "fresher portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: "Shreyas Joshi | AI/ML Developer & Data Science Engineer",
    description: personalInfo.bio.slice(0, 160),
    type: "website",
    locale: "en_US",
    siteName: "Shreyas Joshi Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyas Joshi | AI/ML Developer",
    description: personalInfo.shortBio,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
