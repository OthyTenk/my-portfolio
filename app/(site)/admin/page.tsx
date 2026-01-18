"use client";

import Link from "next/link";
import { PageHeader } from "../components";

const page = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader title="Sanity Studio" />

      <div className="flex items-center justify-center gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:gap-10 pt-20">
        <Link
          href="/studio"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default page;
