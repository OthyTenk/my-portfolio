import { groq } from "next-sanity";
import { ProjectType } from "@/app/types";
import { client } from "@/app/utils/sanity.client";
import { PageHeader, ProjectCard } from "../components";
import { Metadata } from "next";
import { url } from "@/app/utils/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my latest projects built with modern technologies like React, Next.js, and TypeScript.",
  openGraph: {
    title: "Projects | Odonbaatar Portfolio",
    description:
      "Explore my latest projects built with modern technologies like React, Next.js, and TypeScript.",
    url: `${url}/projects`,
    siteName: "Odonbaatar Portfolio",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Projects | Odonbaatar Portfolio",
    description:
      "Explore my latest projects built with modern technologies like React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${url}/projects`,
  },
};

const getProjects = async (): Promise<ProjectType[]> => {
  return client.fetch(
    groq`*[_type == "project" ]{
        title,
        slug,
        overview,
        _id,
        link,
        "imageUrl":image.asset->url
      }`,
  );
};
export const revalidate = 10;

const page = async () => {
  const projects = await getProjects();

  return (
    <div className="space-y-12 animate-fade-in">
      <PageHeader
        title="Projects"
        description="A selection of my recent work, featuring full-stack applications, interactive UI designs, and technical experiments."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
