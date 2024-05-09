import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header, Footer,  } from "@/app/components";
import { Providers } from "./components/Providers";

export const revalidate = 3600;

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 99Club",
    default: "99Club - A Coding Study Record in 99Club",
  },
  applicationName: "99Club",
  description: "A collection of problems solved during coding study at 99club",
  generator: "Next.js",
  keywords: ["Next.js", "React", "TypeScript"],
  authors: { name: "Jiwoong Moon", url: "https://woongsnote.dev" },
  creator: "Jiwoong Moon",
  metadataBase: new URL("https://99club-coding-study.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "99Club Coding Study",
    description:
      "A collection of problems solved during coding study at 99club",
    url: "https://99club-coding-study.vercel.app",
    siteName: "99Club",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${sans.variable}`}>
        <Providers>
          <Header />
          <main className="min-h-screen pt-12 p-2 mx-auto container bg-background">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
