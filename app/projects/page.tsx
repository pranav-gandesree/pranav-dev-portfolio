import { projects } from '../../constant/constant';
import ProjectCard from '@/components/ProjectCard';

const  ProjectsPage : React.FC = () => {
    return (
     <>
     <div className="mt-4">

      <div className='ml-12 md:ml-14 lg:ml-20 xl:ml-28'>
  <h1 className='text-4xl sm:text-3xl font-bold mb-2 sm:mb-4 text-gray-50'>Projects</h1>

</div>
      <div className="flex flex-wrap justify-center space-x-4 p-8">
         {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            image={ project.image} 
            githubLink= {project.githubLink}
            websiteLink= {project.websiteLink}
          />
        ))}
      </div>
     </div>
     </>
    );
  }
  
export default ProjectsPage;