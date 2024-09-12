// "use client"

// import React from 'react';
// import { Button } from '@/components/ui/button'; 
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import avatar from '../../public/avatar.jpg';
// import { useRouter } from 'next/navigation';

// const ProfileSection: React.FC = () => {
//   const router = useRouter();

//   const handleContactRedirect = () => {
//     router.push('/contact');
//   };

//   return (
//     <div className="flex flex-col m-28 justify-center p-4 md:p-8 md:ml-6 lg:ml-20 border border-slate-400">
//       <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mb-6 z-[-1]">
//         <h1 className="text-4xl font-bold text-gray-50 mb-4 md:mb-0">Pranav Gandesree</h1>
//         <Avatar className="w-20 h-20 md:w-16 md:h-16 lg:w-14 lg:h-14">
//           <AvatarImage src={avatar.src} className="rounded-full" />
//           <AvatarFallback>PG</AvatarFallback>
//         </Avatar>
//       </div>
//       <p className="text-lg mb-6 text-gray-400 max-w-5xl">
//         Passionate about crafting seamless and interactive web applications, I thrive on solving complex problems and creating efficient solutions. 
//         With a deep interest in full stack development, I constantly explore new technologies to stay ahead in this ever-evolving field. 
//         Let&apos;s build something amazing together!
//       </p>

//       <div className="flex flex-row md:flex-row md:space-y-0 md:space-x-2">
//         <a href="/pranavResume.pdf" download>
//           <Button className="bg-slate-700 hover:bg-slate-500 w-auto md:w-auto md:px-4 md:py-2 lg:w-auto lg:px-6 lg:py-3">
//             Download Resume
//           </Button>
//         </a>

//         <Button onClick={handleContactRedirect} className="bg-slate-700 hover:bg-slate-500 w-auto md:w-auto md:px-4 md:py-2 lg:w-auto lg:px-6 lg:py-3">
//           Contact Me
//         </Button>
//     </div>

//     </div>
//   );
// };

// export default ProfileSection;




























'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatar from '../../public/avatar.jpg'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ProfileSection() {
  const router = useRouter()

  const handleContactRedirect = () => {
    router.push('/contact')
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      // className="flex flex-col justify-center p-8 md:p-12 lg:p-16 m-4 md:m-8 lg:m-12 border border-slate-400 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl
      //   rounded-2xl "
      className="flex flex-col justify-center p-8 md:p-12 lg:p-16 m-4 md:m-8 lg:m-12 border border-slate-400 bg-transparent shadow-2xl
        rounded-2xl "
      // className="flex flex-col justify-center p-8 md:p-12 lg:p-16 m-4 md:m-8 lg:m-12 border border-slate-400 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl
      // rounded-[30%_70%_70%_30%/_43%_37%_63%_57%]"
    >
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mb-8"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mb-6 md:mb-0">Pranav Gandesree</h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Avatar className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-blue-500 shadow-lg">
            <AvatarImage src={avatar.src} alt="Pranav Gandesree" className="rounded-full" />
            <AvatarFallback>PG</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>
      
      <motion.p 
        className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-5xl leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Passionate about crafting seamless and interactive web applications, I thrive on solving complex problems and creating efficient solutions. 
        With a deep interest in full stack development, I constantly explore new technologies to stay ahead in this ever-evolving field. 
        Let&apos;s build something amazing together!
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.a 
          href="/pranavResume.pdf" 
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Download Resume
          </Button>
        </motion.a>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={handleContactRedirect} 
            className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}