import { ProjectType } from "@/app/types";
import { url } from "@/app/utils/constants";
import { myPortableTextComponents } from "@/app/utils/portableText";
import { client } from "@/app/utils/sanity.client";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge, PageHeader } from "../../components";

const getProjectDetails = async ({
  slug,
}: {
  slug: string;
}): Promise<ProjectType> => {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        title,
        slug,
        categories[]->,
        "related": *[_type == "project" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
          title,
          slug
        },
        overview,
        description,
        _id,
        link,
        "imageUrl":image.asset->url
      }`,
    { slug },
  );
};
export const revalidate = 10;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectDetails({ slug });

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = project.title || "Project Details";
  const description =
    project.overview || "Explore this project in my portfolio.";
  const projectImage = project.imageUrl || "/og-image.png";

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: `${url}/projects/${project.slug.current}`,
      siteName: "Odonbaatar Portfolio",
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: `${url}/projects/${project.slug.current}`,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [projectImage],
    },
  };
}

const page: FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const project = await getProjectDetails({ slug });

  if (!project) {
    return (
      <article className="mx-auto max-w-2xl text-center py-20 px-6 animate-fade-in">
        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25"
        >
          <svg
            className="w-5 h-5 rotate-180"
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
          Back to Projects
        </Link>
      </article>
    );
  }

  const { title, imageUrl, link, overview, categories, related, description } =
    project;

  return (
    <article className="animate-fade-in space-y-12">
      <header className="space-y-6">
        <Link
          href="/projects"
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
          Back to Projects
        </Link>
        <PageHeader title={title} />
      </header>

      {/* Featured Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-2xl animate-slide-up">
        {imageUrl ? (
          <Image
            fill
            src={imageUrl}
            alt={title}
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
            No Image Available
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8 animate-slide-up [animation-delay:100ms]">
          {overview && (
            <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
              {!description && (
                <h2 className="text-2xl font-display font-bold">Overview</h2>
              )}
              <p className="leading-relaxed">{overview}</p>
            </div>
          )}

          {description && (
            <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
              <PortableText
                value={description}
                components={myPortableTextComponents}
              />
            </div>
          )}

          {link && (
            <div className="p-1 px-1 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 text-white rounded-2xl font-semibold hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/25 active:scale-95"
              >
                Visit Live Site
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <span className="text-sm text-slate-400 dark:text-slate-500 truncate max-w-xs">
                {link}
              </span>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-10 animate-slide-up [animation-delay:200ms]">
          {/* Tech Stacks */}
          <div className="glass p-8 rounded-3xl space-y-4">
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Tech Stacks
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories?.map((cat, index) => (
                <Link key={index} href={`/tech-stacks/${cat.slug.current}`}>
                  <Badge title={cat.title} />
                </Link>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {related && related.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white px-2">
                Related Projects
              </h3>
              <div className="space-y-4">
                {related.map((r, index) => (
                  <Link
                    key={index}
                    href={`/projects/${r.slug.current}`}
                    className="group flex flex-col p-4 rounded-2xl glass hover:border-primary-500/50 transition-all"
                  >
                    <span className="text-slate-900 dark:text-white font-medium group-hover:text-primary-500 transition-colors">
                      {r.title}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                      View details
                      <svg
                        className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
};

export default page;
