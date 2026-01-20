// import { createImageUrlBuilder } from "@sanity/image-url/signed";
import { createImageUrlBuilder } from "@sanity/image-url";
import { Image } from "sanity";

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source).auto("format").fit("max");
};
