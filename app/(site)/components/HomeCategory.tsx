import {
  flatListToHierarchical,
  type CategoryProps,
} from "@/app/utils/flatListHierarchical";
import { client } from "@/app/utils/sanity.client";
import { groq } from "next-sanity";

const getCategories = async (): Promise<CategoryProps[]> => {
  const categoriesData = await client.fetch(
    groq`*[_type == "category"]{
      _id,
      title,
      parent,
      "imageUrl":image.asset->url
    }`
  );

  return flatListToHierarchical(categoriesData as CategoryProps[]);
};

export const revalidate = 10;

export const HomeCategory = async () => {
  const categories = await getCategories();

  return (
    <article className="p-2">
      <h5 className="text-xl font-semibold my-4">Tech Stacks</h5>{" "}
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mt-4 flex flex-col lg:flex-row gap-2">
            <span className="text-lg font-semibold w-56 lg:text-right">
              {category.title} :
            </span>
            <div className="flex flex-row flex-wrap gap-2 items-center">
              {category.children &&
                category.children.map((cat, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap text-sm lg:text-base bg-slate-300/30 dark:bg-neutral-600 px-3 rounded-xl"
                  >
                    {cat.title}
                  </div>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
