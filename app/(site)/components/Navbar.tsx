"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  const pathname = usePathname() || "/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 transition-all duration-300"
    >
      {({ open }) => (
        <div className="mx-4 mt-4">
          <div className="max-w-6xl mx-auto glass rounded-2xl shadow-lg shadow-black/5">
            <div className="flex justify-between h-16 px-4 sm:px-6">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/" className="group flex items-center gap-1">
                    <div className="text-2xl font-display font-bold tracking-tight">
                      ver
                      <span className="text-primary-500 group-hover:text-primary-600 transition-colors">
                        41
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-4 sm:items-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch
                      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg h-10 flex items-center ${
                        pathname === link.href
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 rounded-full scale-x-75" />
                      )}
                    </Link>
                  ))}

                  <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2" />
                  <ThemeSwitcher />
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden space-x-2">
                <ThemeSwitcher />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-all">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mt-2">
            <div className="glass rounded-2xl p-2 shadow-xl shadow-black/5 animate-slide-up">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    pathname === link.href
                      ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};
