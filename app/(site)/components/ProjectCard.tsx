import Image from 'next/image';
import { FC } from 'react';
import { ProjectType } from '../../types';

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: FC<ProjectCardProps> = ({project}) => {
  return (
    <article className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-orange-100">
      <div className="h-56 w-full relative">
        <Image
          fill
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
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
