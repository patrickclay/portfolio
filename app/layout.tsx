import type { Metadata } from "next";
import { Outfit, DM_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patrick Boggs — Product & Technology Leader | AI-Accelerated Product Development",
  description:
    "27+ years building digital products. AI-powered SaaS, enterprise AI systems, and full-stack platforms. Director of Product Management at Credit Acceptance.",
  openGraph: {
    title: "Patrick Boggs — Product & Technology Leader",
    description:
      "27+ years building digital products. AI-powered SaaS, enterprise AI systems, and full-stack platforms.",
    type: "website",
    // OG image: use Vercel OG or add a static image to public/og.png later.
    // For now, LinkedIn previews will show title + description without an image.
    // images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmMono.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
