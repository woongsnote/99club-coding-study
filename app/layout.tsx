import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/app/components";

export const revalidate = 3600;

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "99Club",
  applicationName: "99Club",
  description: "A collection of problems solved during coding study at 99club",
  generator: "Next.js",
  keywords: ["Next.js", "React", "TypeScript"],
  authors: { name: "Jiwoong Moon", url: "https://woongsnote.dev" },
  creator: "Jiwoong Moon",
  metadataBase: new URL("https://99club-coding-study.vercel.app"),
  openGraph: {
    url: "https://99club-coding-study.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${sans.variable} bg-gray-50`}>
        <Header />
        <main className="min-h-screen pt-12 p-2 mx-auto container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
