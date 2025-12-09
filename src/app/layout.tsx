import type { Metadata } from "next";
import { Urbanist, Lora } from "next/font/google";

import "./globals.css";
import { Footer, Navbar } from "@/components";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenshop Store",
  description: "Zenshop Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} ${lora.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
