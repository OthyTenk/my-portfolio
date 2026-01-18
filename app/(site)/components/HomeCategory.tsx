import {
  flatListToHierarchical,
  type CategoryProps,
} from "@/app/utils/flatListHierarchical";
import { client } from "@/app/utils/sanity.client";
import { groq } from "next-sanity";
import { Badge } from ".";

const getCategories = async (): Promise<CategoryProps[]> => {
  const categoriesData = await client.fetch(
    groq`*[_type == "category"]{
      _id,
      title,
      parent,
      "imageUrl":image.asset->url
    }`,
  );

  return flatListToHierarchical(categoriesData as CategoryProps[]);
};

export const revalidate = 10;

export const HomeCategory = async () => {
  const categories = await getCategories();

  return (
    <article className="py-12 border-t border-slate-200 dark:border-white/10">
      <h2 className="text-3xl font-display font-bold text-center mb-12 text-slate-900 dark:text-white">
        Tech Stacks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="space-y-4 p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.children &&
                category.children.map((cat, index) => (
                  <Badge key={index} title={cat.title} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
