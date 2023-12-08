import {
  flatListToHierarchical,
  type CategoryProps,
} from "@/app/utils/flatListHierarchical";
import { client } from "@/app/utils/sanity.client";
import { groq } from "next-sanity";
import { Budge } from ".";

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
      <h5 className="flex justify-center text-2xl font-semibold my-10">
        Tech Stacks
      </h5>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mt-4 flex flex-col lg:flex-row gap-2">
            <span className="text-lg font-semibold w-56 lg:text-right">
              {category.title} :
            </span>
            <div className="flex flex-row flex-wrap gap-2 items-center">
              {category.children &&
                category.children.map((cat, index) => (
                  <Budge key={index} title={cat.title} />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
