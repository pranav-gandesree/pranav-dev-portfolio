// 'use client'

// import { StaticImageData } from 'next/image'
// import { Card } from '@/components/ui/card'
// import { FaGithub } from "react-icons/fa"
// import { MdOutlineRemoveRedEye } from "react-icons/md"
// import Link from 'next/link'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// interface ProjectCardProps {
//   title: string
//   description: string
//   techStack: string[]
//   image: string | StaticImageData
//   githubLink?: string
//   websiteLink?: string
// }

// export default function ProjectCard({ title, description, techStack, image, githubLink, websiteLink }: ProjectCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="overflow-hidden m-4 max-w-4xl w-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
//         <div className="flex flex-col md:flex-row">
//           <motion.div
//             className="relative w-full md:w-2/5 h-60 md:h-auto overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Image
//               src={typeof image === 'string' ? image : image.src}
//               alt={title}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
//             />
//           </motion.div>
//           <div className="p-6 md:w-3/5 flex flex-col justify-between bg-gradient-to-br from-gray-900 to-gray-800">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-100 mb-3">{title}</h2>
//               <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {techStack.map((tech) => (
//                   <motion.span
//                     key={tech}
//                     className="text-sm bg-slate-900 text-white rounded-full px-3 py-1"
//                     whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//             <div className="flex space-x-4 pt-4">
//               {githubLink && (
//                 <Link href={githubLink} passHref>
//                   <motion.div
//                     whileHover={{ scale: 1.2, color: "#3b82f6" }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <FaGithub size={28} className="cursor-pointer text-gray-300 hover:text-blue-500 transition-colors duration-300" />
//                   </motion.div>
//                 </Link>
//               )}
//               {websiteLink && (
//                 <Link href={websiteLink} passHref>
//                   <motion.div
//                     whileHover={{ scale: 1.2, color: "#3b82f6" }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <MdOutlineRemoveRedEye size={28} className="cursor-pointer text-gray-300 hover:text-blue-500 transition-colors duration-300" />
//                   </motion.div>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   )
// }
































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
      <Card className="overflow-hidden m-4 max-w-4xl w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={typeof image === 'string' ? image : image.src}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl md:rounded-l-xl md:rounded-t-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">View Project</p>
            </div>
          </motion.div>
          <div className="p-6 md:w-3/5 flex flex-col justify-between">
            <div>
              <motion.h2 
                className="text-3xl font-bold text-gray-100 mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {title}
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {description}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="text-sm bg-gray-700 text-gray-200 rounded-full px-3 py-1 border border-gray-600"
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", borderColor: "#60a5fa" }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <motion.div 
              className="flex space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {githubLink && (
                <Link href={githubLink} passHref>
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <FaGithub size={28} className="cursor-pointer text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="sr-only">View on GitHub</span>
                  </motion.div>
                </Link>
              )}
              {websiteLink && (
                <Link href={websiteLink} passHref>
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <MdOutlineRemoveRedEye size={28} className="cursor-pointer text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="sr-only">View Website</span>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}