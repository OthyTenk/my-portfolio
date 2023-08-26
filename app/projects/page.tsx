import { groq } from 'next-sanity';
import { PageHeader, ProjectCard } from '../components';
import { ProjectType } from '../types';
import { client } from '../utils/sanity.client';

const  getProjects = async ():Promise<ProjectType[]> => {
    return client.fetch(
      groq`*[_type == "project" ]{
        title,
          overview,
          _id,
          link,
          "imageUrl":image.asset->url
      }`
    );
}
export const revalidate = 60;

const page = async () => {
    const projects = await getProjects()
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader title="All Projects" />

      <div className="grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default page
