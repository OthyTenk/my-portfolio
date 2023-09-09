import Link from "next/link";
import { PageHeader } from "../components";

const page = async () => {
  
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader title="Sanity Studio" />

      <div className="grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        <Link href="/studio">login to dashboard</Link>
      </div>
    </div>
  );
};

export default page;
