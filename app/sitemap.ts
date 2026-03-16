import { MetadataRoute } from "next";
import { url } from "@/app/utils/constants";
import { client } from "./utils/sanity.client";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await client.fetch(
    groq`*[_type == "project"]{ "slug": slug.current, _updatedAt }`,
  );

  const projectUrls = projects.map((project: any) => ({
    url: `${url}/projects/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const routes = ["", "/projects", "/contact", "/tech-stacks"].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes, ...projectUrls];
}

