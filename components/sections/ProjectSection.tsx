
// import React from "react";
// import { projects } from '../../constant/constant';
// import { Card } from '@/components/ui/card';
// import { FaGithub } from "react-icons/fa";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import Image from 'next/image'
// import Link from 'next/link'; 

// interface ProjectSectionProps {
//   showImages?: boolean;
// }

// const ProjectSection: React.FC<ProjectSectionProps> = ({ showImages = false }) => {
//   // Slice the projects array to include only the first two projects
//   const displayedProjects = projects.slice(0, 2);

//   return (
//     <>
//     <div className="ml-28">
//       <h1 className='text-3xl font-bold mb-4  text-gray-50'>Projects</h1>
//       <p className="text-xl text-gray-300">List of projects that I involved or have made in the past.</p>
//     </div>
//       <div className="flex flex-wrap justify-center space-x-4 p-8">
//         {displayedProjects.map((project) => (
//           <Card key={project.title} className="m-4 p-4 w-2/3 rounded-lg shadow-md flex hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 border-slate-500">
//             {showImages && (
//               <Image src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
//             )}
//             <div className="p-4">
//               <h2 className="text-2xl font-bold text-slate-50 mb-2">{project.title}</h2>
//               <p className="text-slate-300 mb-4">{project.description}</p>
//               <div className="flex space-x-2">
//                 {project.techStack.map((tech) => (
//                   <span key={tech} className="text-sm bg-gray-400 text-gray-800 rounded-lg px-3 py-1">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4 pt-4">
//                 <Link href={project.githubLink} passHref>
//                   <FaGithub size={25} className="cursor-pointer" />
//                 </Link>
//                 <Link href={project.websiteLink} passHref>
//                   <MdOutlineRemoveRedEye size={25} className="cursor-pointer" />
//                 </Link>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProjectSection;



import { projects } from '../../constant/constant'; // Adjust path as necessary
import ProjectCard from '@/components/ProjectCard'; // Adjust path as necessary



const ProjectSection: React.FC = () => {
  const displayedProjects = projects.slice(0, 2);

  return (
    <>
    <div className='ml-28'>
      <h1 className='text-3xl font-bold mb-4 text-gray-50'>Projects</h1>
      <p className="text-xl text-gray-300">List of projects that I involved or have made in the past.</p>
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
