import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PRECISE — See Where Every Dollar Goes",
  description: "Stop paying for garbage data. Real-time segment scoring, cryptographic proof, and waste elimination for programmatic advertising.",
  keywords: ["programmatic", "advertising", "transparency", "DSP", "agency", "media buying", "waste audit", "segment scoring"],
  authors: [{ name: "Precise" }],
  openGraph: {
    title: "PRECISE — See Where Every Dollar Goes",
    description: "Stop paying for garbage data. Real-time segment scoring, cryptographic proof, and waste elimination.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRECISE — See Where Every Dollar Goes",
    description: "Stop paying for garbage data. Real-time segment scoring, cryptographic proof, and waste elimination.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
