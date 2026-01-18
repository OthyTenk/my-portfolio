"use client";

import Link from "next/link";

export const Footer = () => (
  <footer className="mt-20 border-t border-slate-200 dark:border-white/10">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
          >
            ver<span className="text-primary-500">41</span>
          </Link>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Building digital experiences that matter.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <small className="text-slate-500 dark:text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} All rights reserved.
          </small>
          <a
            href="https://github.com/OthyTenk/my-portfolio"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors"
          >
            Built with{" "}
            <span className="text-primary-500 animate-pulse">❤️</span> by{" "}
            <span className="font-bold">Odonbaatar</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
