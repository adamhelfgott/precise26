import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Precise.ai — Eliminate 35–47% Programmatic Data Waste & Prove ROAS",
  description: "Remove 35–47% of programmatic data waste in real time. Get Valence-signed proof of every dollar saved and ROAS lift. Free waste audit in 48 hours.",
  keywords: ["programmatic", "advertising", "transparency", "DSP", "agency", "media buying", "waste audit", "segment scoring", "ROAS", "data waste"],
  authors: [{ name: "Precise.ai" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://website-eta-wine-40.vercel.app/",
  },
  openGraph: {
    title: "Precise.ai — Eliminate 35–47% Programmatic Data Waste & Prove ROAS",
    description: "Remove 35–47% of programmatic data waste in real time. Get Valence-signed proof of every dollar saved and ROAS lift. Free waste audit in 48 hours.",
    type: "website",
    locale: "en_US",
    url: "https://website-eta-wine-40.vercel.app/",
    siteName: "Precise.ai",
    images: [
      {
        url: "https://website-eta-wine-40.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Precise.ai - Eliminate Programmatic Data Waste",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precise.ai — Eliminate 35–47% Programmatic Data Waste & Prove ROAS",
    description: "Remove 35–47% of programmatic data waste in real time. Get Valence-signed proof of every dollar saved and ROAS lift. Free waste audit in 48 hours.",
    images: ["https://website-eta-wine-40.vercel.app/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Precise.ai",
  "description": "Eliminate 35–47% programmatic data waste in real time and get Valence-signed proof of every dollar saved and ROAS lift.",
  "url": "https://precise.ai",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "url": "https://website-eta-wine-40.vercel.app/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
