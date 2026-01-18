import "../globals.css";
import { Footer, Navbar } from "./components";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.variable} ${outfit.variable} font-sans min-h-screen relative`}
    >
      {/* Background Mesh */}
      <div className="fixed inset-0 -z-10 mesh-gradient opacity-60 dark:opacity-40" />

      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
