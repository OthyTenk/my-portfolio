import Image from "next/image";
import { urlForImage } from "./image";

const SampleImageComponent = ({ value }: { value: any }) => {
  return (
    <div className="relative w-full aspect-video my-8 overflow-hidden rounded-2xl">
      <Image
        src={urlForImage(value?.asset).url()}
        alt={value?.alt || "Project Image"}
        fill
        className="object-contain"
      />
    </div>
  );
};

export const myPortableTextComponents = {
  types: {
    image: SampleImageComponent,
    alt: SampleImageComponent,
  },
};
