import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Precise Local — Help Local Teams Beat National Plans With Proof",
  description: "Local CTV agencies using Precise took 100% of the auto budget from national TTD plans. Get your free local performance audit in 48 hours.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://website-eta-wine-40.vercel.app/local",
  },
  openGraph: {
    title: "Precise Local — Help Local Teams Beat National Plans With Proof",
    description: "Local CTV agencies using Precise took 100% of the auto budget from national TTD plans. Get your free local performance audit in 48 hours.",
    type: "website",
    locale: "en_US",
    url: "https://website-eta-wine-40.vercel.app/local",
    siteName: "Precise.ai",
    images: [
      {
        url: "https://website-eta-wine-40.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Precise Local - Beat National Plans With Proof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precise Local — Help Local Teams Beat National Plans With Proof",
    description: "Local CTV agencies using Precise took 100% of the auto budget from national TTD plans. Get your free local performance audit in 48 hours.",
    images: ["https://website-eta-wine-40.vercel.app/og.png"],
  },
};

export default function LocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
