import { PortableTextBlock } from "sanity";

export type ProjectType = {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
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
