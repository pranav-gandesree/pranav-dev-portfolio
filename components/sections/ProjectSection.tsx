
import { projects } from '../../constant/constant'; 
import ProjectCard from '@/components/ProjectCard'; 

const ProjectSection: React.FC = () => {
  const displayedProjects = projects.slice(0, 2);

  return (
    <>
    {/* <div className='ml-28'>
      <h1 className='text-3xl font-bold mb-4 text-gray-50'>Projects</h1>
      <p className="text-xl text-gray-300">List of projects that I involved or have made in the past.</p>
    </div> */}
    <div className='ml-4 md:ml-14 lg:ml-20 xl:ml-28'>
  <h1 className='text-4xl sm:text-3xl font-bold mb-2 sm:mb-4 text-gray-50 '>Projects</h1>
  {/* <p className="text-lg sm:text-xl text-gray-300"> 
    List of projects that I have been involved in or have created in the past.
  </p>*/}
</div>

      <div className="flex flex-wrap justify-center space-x-4 p-8">
         {displayedProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            image={ project.image} 
            githubLink = {project.githubLink}
            websiteLink = {project.websiteLink}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;

