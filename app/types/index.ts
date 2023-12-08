import { PortableTextBlock } from "sanity";

export type RelatedType = {
  title: string;
  slug: {
    current: string;
  };
};

export type ProjectType = {
  title: string;
  slug: {
    current: string;
  };
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
  categories: CategoryType[];
  related: RelatedType[];
};

export type ProfileType = {
  _id: string;
  fullname: string;
  headline: string;
  image: {
    alt: string;
    src: string;
  };
  fullBio: PortableTextBlock[];
  email: string;
  socialLinks: {
    github: string;
    twitter: string;
    linkedin: string;
  };
};

export type CategoryType = {
  _id: string;
  title: string;
  imageUrl: string;
  parent: {
    _ref: string;
  };
};
