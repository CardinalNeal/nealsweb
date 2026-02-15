import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Neal's Portfolio",
  description: "Senior Frontend Engineer & UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 在这里添加背景色和文字颜色的类名 */}
      <body className={`${inter.className} bg-white dark:bg-[#1d1e20] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">
             {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
