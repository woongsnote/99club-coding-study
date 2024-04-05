import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
        <main className="min-h-screen pt-14 p-2 max-w-5xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
