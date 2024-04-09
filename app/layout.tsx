import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/app/components";

export const revalidate = 3600;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "99Club",
  description: "Coding Study in 99Club to solve programmers question",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main className="min-h-screen pt-14 p-2 mx-auto container lg:max-w-5xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
