import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  variable: "--font-tiro-devanagari",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

// Placeholder until the groom-side site has its own domain.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";
const TITLE = "Pavan & Neha · Wedding Invitation";
const DESCRIPTION =
  "With the blessings of Shri Vinayak ji and Kuldevi Jamuvay Maa, the Shekhawat family warmly invites you to the wedding of Kunwar Pavan Singh and Neha Kanwar · 16–21 November 2026 · Ghatwa (Didwana-Kuchaman).";
const OG_IMAGE = { url: "/og.jpg", width: 1200, height: 630, alt: "Pavan & Neha · 21 November 2026 · Ghatwa" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pavan & Neha · मंगल परिणयोत्सव",
  description: DESCRIPTION,
  applicationName: "Pavan & Neha",
  authors: [{ name: "bpss", url: "https://bpss.in" }],
  creator: "bpss.in",
  keywords: [
    "Pavan weds Neha",
    "Pavan Singh Shekhawat",
    "Neha Kanwar",
    "wedding invitation",
    "शुभ विवाह",
    "Ghatwa",
    "Didwana",
    "Shekhawat",
    "Rajasthan wedding",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Pavan & Neha",
    locale: "en_IN",
    title: TITLE,
    description: "16–21 November 2026 · Ghatwa, Didwana-Kuchaman",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "16–21 November 2026 · Ghatwa, Didwana-Kuchaman",
    images: [OG_IMAGE],
  },
  appleWebApp: { title: "Pavan & Neha", statusBarStyle: "default" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fffafb",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${tiroDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
