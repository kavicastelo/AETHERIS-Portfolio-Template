import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { config } from "@/data/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.siteUrl,
    siteName: config.title,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
