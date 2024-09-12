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
//     <Card className="m-4 p-4 max-w-4xl w-full rounded-lg shadow-md flex flex-col md:flex-row hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 border-slate-500">
//       {/* Ensure to handle both string and StaticImageData types appropriately */}
//       {typeof image === 'string' ? (
//         <Image src={image} alt={title} width={500} height={500} className="w-full h-40 md:h-auto md:w-1/3 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
//       ) : (
//         <Image src={image.src} alt={title} width={400} height={500} className="w-full h-40 md:h-auto md:w-1/3 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
//       )}
//       <div className="p-4 flex flex-col justify-between">
//         <div>
//           <h2 className="text-2xl font-bold text-slate-50 mb-2">{title}</h2>
//           <p className="text-slate-300 mb-4">{description}</p>
//           <div className="flex flex-wrap gap-2 cursor-pointer">
//             {techStack.map((tech) => (
//               <span key={tech} className="text-sm bg-gray-400 text-gray-800 rounded-lg px-3 py-1">
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="flex space-x-4 pt-4">
//           {githubLink && (
//             <Link href={githubLink} passHref>
//               <FaGithub size={25} className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />
//             </Link>
//           )}
//           {websiteLink && (
//             <Link href={websiteLink} passHref>
//               <MdOutlineRemoveRedEye size={25} className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />
//             </Link>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default ProjectCard;











'use client'

import { StaticImageData } from 'next/image'
import { Card } from '@/components/ui/card'
import { FaGithub } from "react-icons/fa"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  image: string | StaticImageData
  githubLink?: string
  websiteLink?: string
}

export default function ProjectCard({ title, description, techStack, image, githubLink, websiteLink }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden m-4 max-w-4xl w-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="relative w-full md:w-2/5 h-60 md:h-auto overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={typeof image === 'string' ? image : image.src}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </motion.div>
          <div className="p-6 md:w-3/5 flex flex-col justify-between bg-gradient-to-br from-gray-900 to-gray-800">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-3">{title}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="text-sm bg-blue-500 text-white rounded-full px-3 py-1"
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              {githubLink && (
                <Link href={githubLink} passHref>
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaGithub size={28} className="cursor-pointer text-gray-300 hover:text-blue-500 transition-colors duration-300" />
                  </motion.div>
                </Link>
              )}
              {websiteLink && (
                <Link href={websiteLink} passHref>
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    <MdOutlineRemoveRedEye size={28} className="cursor-pointer text-gray-300 hover:text-blue-500 transition-colors duration-300" />
                  </motion.div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}