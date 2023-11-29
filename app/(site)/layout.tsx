import type { Metadata } from "next";
import "../globals.css";
import { Footer, Navbar } from "./components";

export const metadata: Metadata = {
  title: "Portfolio: OkDo",
  description: "OkDo's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
