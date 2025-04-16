import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "Arun Kumar | Software Engineer",
  description: "A software engineer building websites that you'd like to use.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Arun Kumar's Portfolio",
    description: "A software engineer building websites that you'd like to use.",
    url: "https://ar-k.vercel.app/",
    images: [
      {
        url: "https://imgur.com/zd9c5Ib.png",
        width: 1200,
        height: 630,
        alt: "Arun Kumar's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Kumar's Portfolio",
    description: "A software engineer building websites that you'd like to use.",
    images: ["https://imgur.com/zd9c5Ib.png"],
  },
};
