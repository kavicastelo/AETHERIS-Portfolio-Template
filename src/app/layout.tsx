import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/styles/globals.css";
import { config } from "@/data/config";
import { PersonSchema, WebsiteSchema } from "@/components/seo/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const viewport: Viewport = {
  themeColor: config.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  keywords: config.keywords,
  authors: config.author.map(name => ({ name })),
  creator: config.author[0],
  publisher: config.author[0],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.siteUrl,
    siteName: config.title,
    images: [{ url: config.ogImage, width: 1200, height: 630, alt: config.title }],
    type: "website",
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: [config.ogImage],
    creator: '@kavicastelo', // Placeholder or add to config
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: config.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <PersonSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <div className="grid-background min-h-screen relative">
          <div className="scanline" />
          {children}
        </div>
      </body>
    </html>
  );
}
