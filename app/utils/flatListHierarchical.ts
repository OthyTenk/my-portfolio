import { CategoryType } from "../types";

export interface CategoryProps extends CategoryType {
  children: CategoryProps[];
}

export const flatListToHierarchical = (items: CategoryProps[]) => {
  const tree: CategoryProps[] = [];
  const mappedArr: { [id: string]: CategoryProps } = {};

  // Build a hash table and map items to objects
  items.forEach((item: CategoryProps) => {
    const id = item._id;
    if (!mappedArr.hasOwnProperty(id)) {
      // in case of duplicates
      mappedArr[id] = { ...item, children: [] };
    }
  });

  // Loop over hash table
  for (const id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      let mappedElem = mappedArr[id];

      // If the element is not at the root level, add it to its parent array of children. Note this will continue till we have only root level elements left
      if (mappedElem.parent && mappedElem.parent._ref) {
        const parentId = mappedElem.parent._ref;
        mappedArr[parentId].children.push(mappedElem);
      } else {
        tree.push(mappedElem);
      }
    }
  }

  return tree;
};
