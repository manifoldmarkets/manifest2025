import type { Metadata } from "next";
import {  Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manifest",
  description: "A festival for forecasting, markets, AI, and novel ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
