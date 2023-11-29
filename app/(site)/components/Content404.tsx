import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content404 = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-8 pt-5 sm:pb-10 lg:px-8">
      <div className="max-w-2xl text-center mx-auto">
        <Image
          src={"/images/404.webp"}
          width={750}
          height={500}
          loading="lazy"
          alt="404"
          className="w-auto mx-auto"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="text-sm font-semibold leading-7 text-orange-500 hover:text-orange-500/40"
          >
            <span className="me-2 rtl:rotate-180" aria-hidden="true">
              &larr;
            </span>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Content404;
