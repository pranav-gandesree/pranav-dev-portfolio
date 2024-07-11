
// import { projects } from '../../constant/constant'; 
// import ProjectCard from '@/components/ProjectCard'; 

// const ProjectSection: React.FC = () => {
//   const displayedProjects = projects.slice(0, 2);

//   return (
//     <>

//     <div className='ml-4 md:ml-14 lg:ml-20 xl:ml-28'>
//   <h1 className='text-5xl sm:text-3xl font-bold mb-2 sm:mb-4 text-gray-50 '>Projects</h1>

// </div>

//       <div className="flex  flex-wrap justify-center space-x-4 p-8">
//          {displayedProjects.map((project) => (
//           <ProjectCard
//             key={project.title}
//             title={project.title}
//             description={project.description}
//             techStack={project.techStack}
//             image={ project.image} 
//             githubLink = {project.githubLink}
//             websiteLink = {project.websiteLink}
//           />
//         ))}
//       <button>View More Projects</button>
//       </div>
//     </>
//   );
// };

// export default ProjectSection;

'use client'

import { projects } from '../../constant/constant'; 
import ProjectCard from '@/components/ProjectCard' 
import { useRouter } from 'next/navigation';

const ProjectList: React.FC = () => {
  const displayedProjects = projects.slice(0, 2);

  const router = useRouter();

  const goToProjectsPage = () => {
    router.push('/projects');
  };

  return (
    <>
       <div className='ml-4 md:ml-14 lg:ml-20 xl:ml-28'>
       <h1 className="text-[4rem] sm:text-3xl font-bold mb-2 sm:mb-4 text-gray-50">Projects</h1>


</div>
   <div className="flex flex-col items-center space-y-8 p-8">
      <div className="flex flex-wrap justify-center w-full space-y-8">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            image={project.image}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
    
      <button onClick={goToProjectsPage} className="bg-slate-600 hover:bg-customBlueGray text-white py-2 px-4 rounded-md shadow-md">
        View More Projects
      </button>
     
    </div>
            </>
  );
};

export default ProjectList;

