"use client";

import Image from "next/image";
import { FC } from "react";
import { ProjectType } from "@/app/types";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group relative flex flex-col h-full rounded-3xl overflow-hidden glass hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-2">
      <div className="aspect-video w-full relative overflow-hidden">
        {project.imageUrl ? (
          <Image
            fill
            src={project.imageUrl}
            alt={project.title}
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link
            href={`/projects/${project.slug.current}`}
            className="px-4 py-2 bg-white text-slate-900 rounded-xl font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/projects/${project.slug.current}`}>
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary-500 transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="line-clamp-2 mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow">
          {project.overview}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug.current}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
          >
            Read Story
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
          </Link>
        </div>
      </div>
    </article>
  );
};
