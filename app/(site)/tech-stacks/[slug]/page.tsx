import { groq } from "next-sanity";
import { ProjectType } from "@/app/types";
import { client } from "@/app/utils/sanity.client";
import { PageHeader, ProjectCard } from "@/app/(site)/components";
import { Metadata } from "next";
import { url } from "@/app/utils/constants";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

const getTechStackData = async (slug: string) => {
  return client.fetch(
    groq`*[_type == "category" && slug.current == $slug][0]{
      title,
      "projects": *[_type == "project" && references(^._id)]{
        _id,
        title,
        slug,
        overview,
        link,
        "imageUrl": image.asset->url
      }
    }`,
    { slug },
  );
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getTechStackData(slug);

  if (!data) {
    return {
      title: "Tech Stack Not Found",
    };
  }

  const title = `${data.title} Projects | Odonbaatar Portfolio`;
  const description = `Explore my projects built with ${data.title}. A showcase of modern web development and technical expertise.`;

  return {
    title: data.title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${url}/tech-stacks/${slug}`,
      siteName: "Odonbaatar Portfolio",
      type: "website",
    },
    twitter: {
      title: title,
      description: description,
    },
    alternates: {
      canonical: `${url}/tech-stacks/${slug}`,
    },
  };
}

export const revalidate = 10;

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const data = await getTechStackData(slug);

  if (!data) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
          Tech Stack not found
        </h2>
        <Link
          href="/tech-stacks"
          className="text-primary-500 hover:underline font-medium inline-block"
        >
          Back to Tech Stacks
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Link
          href="/tech-stacks"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary-500 transition-colors"
        >
          <svg
            className="w-4 h-4 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          Back to Tech Stacks
        </Link>
        <PageHeader
          title={`${data.title} Projects`}
          description={`A collection of my work developed using ${
            data.title
          }. Showing ${data.projects?.length || 0} projects.`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects && data.projects.length > 0 ? (
          data.projects.map((project: ProjectType, index: number) => (
            <div
              key={project._id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 glass rounded-[2.5rem] border-dashed">
            <p className="text-slate-500 dark:text-slate-400">
              No projects found for this tech stack yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
