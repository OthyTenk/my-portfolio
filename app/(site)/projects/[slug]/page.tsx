import { ProjectType } from "@/app/types";
import { client } from "@/app/utils/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import { Budge, PageHeader } from "../../components";
import Link from "next/link";

const getProjectDetails = async ({
  slug,
}: {
  slug: string;
}): Promise<ProjectType> => {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        title,
        slug,
        categories[]->,
        "related": *[_type == "project" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
          title,
          slug
        },
        overview,
        _id,
        link,
        "imageUrl":image.asset->url
      }`,
    { slug }
  );
};
export const revalidate = 10;

const page = async ({ params }: { params: { slug: string } }) => {
  const project = await getProjectDetails({ slug: params?.slug });
  const { title, imageUrl, link, overview, categories, related } = project;

  if (!project) {
    return (
      <article className="mx-auto px-40 flex flex-col item-center justify-center">
        <h6 className="text-xl font-normal">Oops!, Some thing went wrong</h6>
        <Link href="/" className="mt-20 font-semibold text-orange-500">
          Go back
        </Link>
      </article>
    );
  }

  return (
    <article className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader title={title} />

      <div className="h-96 w-full relative overflow-hidden rounded-3xl">
        <Image
          fill
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row my-10 pt-10">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pe-20">
          <div className="font-thin gap-2">
            Project URL:
            <a
              href={link}
              target="_blank"
              className="ml-2 hover:underline text-orange-500"
            >
              {link}
            </a>
          </div>

          <p className="py-4">{overview}</p>
        </div>

        {/* Right side content */}
        <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:ps-10 xl:ps-0 xl:w-1/3">
          <h5 className="text-xl font-medium mb-4">
            Tech Stacks ({categories?.length || 0})
          </h5>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <Budge key={index} title={cat.title} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h5 className="text-xl font-medium mt-8 mb-4">
          Related Projects ({related?.length || 0})
        </h5>

        {related &&
          related.map((r, index) => (
            <div key={index}>
              -
              <a
                href={r.slug.current}
                className="hover:underline hover:text-orange-500 ml-2"
              >
                {r.title}
              </a>
            </div>
          ))}
      </div>
    </article>
  );
};

export default page;
