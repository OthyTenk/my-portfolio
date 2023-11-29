import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "./(site)/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio: OkDo",
  description: "OkDo's portfolio site",
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
      </body>
    </html>
  );
}
