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
    default: "OkDo - Full Stack Developer & Portfolio",
    template: "%s | OkDo Portfolio"
  },
  description: "Full Stack Developer specializing in modern web technologies. Explore my projects built with Next.js, React, TypeScript, and more. Based in Mongolia.",
  keywords: ["OkDo", "Portfolio", "Full Stack Developer", "Web Developer", "Next.js", "React", "TypeScript", "C#", "Sanity CMS", "WordPress", "Pothos", "Tailwind CSS", "Software Engineer"],
  authors: [{ name: "OkDo", url: "https://github.com/OthyTenk" }],
  creator: "OkDo",
  publisher: "OkDo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: url,
    title: "OkDo - Full Stack Developer & Portfolio",
    description: "Full Stack Developer specializing in modern web technologies. Explore my projects built with Next.js, React, TypeScript, and more.",
    siteName: "OkDo Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OkDo Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OkDo - Full Stack Developer & Portfolio",
    description: "Full Stack Developer specializing in modern web technologies. Explore my projects and skills.",
    creator: "@odkoo",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
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
      >
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
