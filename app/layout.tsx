import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "./(site)/components";
import "./globals.css";
import { url } from "@/app/utils/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Odonbaatar | Full Stack Developer",
    template: "%s | Odonbaatar",
  },
  description:
    "Full Stack Developer specializing in modern web technologies. Explore my projects built with Next.js, React, TypeScript, and more. Based in Mongolia.",
  keywords: [
    "Odonbaatar",
    "OthyTenk",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "C#",
    ".NET",
    "Sanity CMS",
    "Software Engineer",
    "Mongolia",
  ],
  authors: [{ name: "Odonbaatar", url: "https://github.com/OthyTenk" }],
  creator: "Odonbaatar",
  publisher: "Odonbaatar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: url,
    title: "Odonbaatar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies. Explore my projects and skills.",
    siteName: "Odonbaatar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Odonbaatar Portfolio Preview",
      },
    ],
  },
  alternates: {
    canonical: url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Odonbaatar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies. Explore my projects and skills.",
    creator: "@othytenk",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-[#1f1f1f] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800`}
        suppressHydrationWarning
      >
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
