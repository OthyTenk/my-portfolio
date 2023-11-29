"use client";

import Image from "next/image";
import { FC } from "react";
import { ProjectType } from "../../types";

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="mx-4 lg:mx-0 overflow-hidden dark:border-zinc-600 rounded-3xl hover:shadow-none border border-gray-100 bg-[#eeeeee] shadow-lg dark:bg-[#1a1a1a] dark:shadow-gray-700 shadow-orange-100">
      <div className="h-64 w-full relative overflow-hidden">
        <Image
          fill
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      <div className="p-4 sm:p-6">
        <a href={project.link} target="_blank">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {project.title}
          </h3>
        </a>

        <p className=" line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {project.overview}
        </p>

        {!project.link?.length && (
          <a
            href={project.link}
            target="_blank"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500"
          >
            More!
            <span className="block transition-all group-hover:ms-0.5">
              &rarr;
            </span>
          </a>
        )}
      </div>
    </article>
  );
};
