// // components/ProjectCard.tsx

// import { StaticImageData } from 'next/image';
// import { Card } from '@/components/ui/card';
// import { FaGithub } from "react-icons/fa";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import Link from 'next/link';
// import Image from 'next/image';

// // Define the props interface for ProjectCard component
// interface ProjectCardProps {
//   title: string;
//   description: string;
//   techStack: string[];
//   image: string | StaticImageData;
//   githubLink?: string; // Optional prop
//   websiteLink?: string; // Optional prop
// }

// // Define your functional component
// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, image, githubLink, websiteLink }) => {
//   return (
//     <Card className="m-4 p-4 w-2/3 rounded-lg shadow-md flex hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 border-slate-500">
//       {/* Ensure to handle both string and StaticImageData types appropriately */}
//       {typeof image === 'string' ? (
//         <Image src={image} alt={title} width={400} height={500} className="w-full h-40 object-cover rounded-t-lg" />
//       ) : (
//         <Image src={image.src} alt={title} width={400} height={500} className="w-full h-40 object-cover rounded-t-lg" />
//       )}
//       <div className="p-4">
//         <h2 className="text-2xl font-bold text-slate-50 mb-2">{title}</h2>
//         <p className="text-slate-300 mb-4">{description}</p>
//         <div className="flex space-x-2">
//           {techStack.map((tech) => (
//             <span key={tech} className="text-sm bg-gray-400 text-gray-800 rounded-lg px-3 py-1">
//               {tech}
//             </span>
//           ))}
//         </div>

//         <div className="flex space-x-4 pt-4">
//           {githubLink && (
//             <Link href={githubLink} passHref>
//               <FaGithub size={25} className="cursor-pointer" />
//             </Link>
//           )}
//           {websiteLink && (
//             <Link href={websiteLink} passHref>
//               <MdOutlineRemoveRedEye size={25} className="cursor-pointer" />
//             </Link>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default ProjectCard;



// components/ProjectCard.tsx

import { StaticImageData } from 'next/image';
import { Card } from '@/components/ui/card';
import { FaGithub } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';

// Define the props interface for ProjectCard component
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string | StaticImageData;
  githubLink?: string; // Optional prop
  websiteLink?: string; // Optional prop
}

// Define your functional component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, image, githubLink, websiteLink }) => {
  return (
    <Card className="m-4 p-4 max-w-4xl w-full rounded-lg shadow-md flex flex-col md:flex-row hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 border-slate-500">
      {/* Ensure to handle both string and StaticImageData types appropriately */}
      {typeof image === 'string' ? (
        <Image src={image} alt={title} width={500} height={500} className="w-full h-40 md:h-auto md:w-1/3 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
      ) : (
        <Image src={image.src} alt={title} width={400} height={500} className="w-full h-40 md:h-auto md:w-1/3 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
      )}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-50 mb-2">{title}</h2>
          <p className="text-slate-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 cursor-pointer">
            {techStack.map((tech) => (
              <span key={tech} className="text-sm bg-gray-400 text-gray-800 rounded-lg px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 pt-4">
          {githubLink && (
            <Link href={githubLink} passHref>
              <FaGithub size={25} className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />
            </Link>
          )}
          {websiteLink && (
            <Link href={websiteLink} passHref>
              <MdOutlineRemoveRedEye size={25} className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
