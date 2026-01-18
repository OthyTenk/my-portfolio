import {
  flatListToHierarchical,
  type CategoryProps,
} from "@/app/utils/flatListHierarchical";
import { client } from "@/app/utils/sanity.client";
import { groq } from "next-sanity";
import { Badge } from ".";
import Link from "next/link";

const getTechStacks = async (): Promise<CategoryProps[]> => {
  const techStacks = await client.fetch(
    groq`*[_type == "category"]{
        title,
        _id,
        slug,
        parent,
        "imageUrl":image.asset->url,
        "projectCount": count(*[_type == "project" && references(^._id)])
      }`,
  );

  return flatListToHierarchical(techStacks as CategoryProps[]);
};

export const revalidate = 10;

export const TechStacks = async () => {
  const techStacks = await getTechStacks();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {techStacks.map((techStack, index) => (
        <div
          key={index}
          className="space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/5 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            {techStack.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.children &&
              techStack.children.map((cat, index) => (
                <Link
                  key={index}
                  href={`/tech-stacks/${cat.slug?.current}`}
                  className="group"
                >
                  <Badge title={cat.title} count={cat.projectCount} />
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
