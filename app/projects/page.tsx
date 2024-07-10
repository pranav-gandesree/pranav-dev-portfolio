import { projects } from '../../constant/constant';
import ProjectCard from '@/components/ProjectCard';

const  ProjectsPage : React.FC = () => {
    return (
     <>
     <div className="mt-4">
    <div className='ml-28'>
        <h1 className='text-3xl font-bold mb-4 text-gray-50'>Projects</h1>
          <p className="text-xl text-gray-300">List of projects that I involved or have made in the past.</p>
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