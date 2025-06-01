import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from '@/components/Chatbot';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhaleCore Innovations | Expert IT Services & Consulting",
  description: "Transform your digital vision into reality with WhaleCore Innovations. We specialize in web development, mobile apps, UI/UX design, and strategic IT consulting.",
  keywords: "IT services, web development, mobile apps, UI/UX design, software development, tech consulting, WhaleCore Innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          <ClientProvider>{children}</ClientProvider>
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
