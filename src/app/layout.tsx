import type { Metadata } from "next";
import { Bangers, Space_Grotesk, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RevealObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
