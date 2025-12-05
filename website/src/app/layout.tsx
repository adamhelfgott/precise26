import type { Metadata } from "next";
import { Outfit, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PRECISE | The Control Layer for Programmatic",
  description: "Take control of your programmatic spend. Real-time veto power over auto-appended segments. Proof that wins reviews. Performance that speaks for itself.",
  keywords: ["programmatic advertising", "DSP", "agency", "media buying", "ad tech", "CTV", "performance marketing"],
  authors: [{ name: "Precise.ai" }],
  openGraph: {
    title: "PRECISE | The Control Layer for Programmatic",
    description: "Take control of your programmatic spend. Real-time veto power over auto-appended segments.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRECISE | The Control Layer for Programmatic",
    description: "Take control of your programmatic spend.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
