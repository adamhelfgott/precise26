import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Precise for CDPs — Turn Clean Audiences Into Proven ROAS",
  description: "Add Precise as your governance layer. Veto waste after activation, deliver Valence-signed proof of lift, win more deals. 15-min partner demo.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://website-eta-wine-40.vercel.app/cdp",
  },
  openGraph: {
    title: "Precise for CDPs — Turn Clean Audiences Into Proven ROAS",
    description: "Add Precise as your governance layer. Veto waste after activation, deliver Valence-signed proof of lift, win more deals. 15-min partner demo.",
    type: "website",
    locale: "en_US",
    url: "https://website-eta-wine-40.vercel.app/cdp",
    siteName: "Precise.ai",
    images: [
      {
        url: "https://website-eta-wine-40.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Precise for CDPs - Turn Clean Audiences Into Proven ROAS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precise for CDPs — Turn Clean Audiences Into Proven ROAS",
    description: "Add Precise as your governance layer. Veto waste after activation, deliver Valence-signed proof of lift, win more deals. 15-min partner demo.",
    images: ["https://website-eta-wine-40.vercel.app/og.png"],
  },
};

export default function CDPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
