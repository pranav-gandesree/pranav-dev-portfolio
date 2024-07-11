// "use client" 

// import React from 'react';
// import { Button } from '@/components/ui/button'; 
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import avatar from '../../public/avatar.jpg'
// import { useRouter } from 'next/navigation';


// const ProfileSection: React.FC = () => {
//   const router = useRouter();

//   const handleResumeDownload = () => {
   
//   };

//   const handleContactRedirect = () => {
//       router.push('/contact');
//   };

//   return (

//   <div className="flex flex-col p-8 ml-20">
//       <div className="flex justify-between items-center w-full max-w-4xl mb-6 z-[-1]">
//         <h1 className="text-3xl font-bold text-gray-50">Pranav Gandesree</h1>
//         <Avatar>
//           <AvatarImage src={avatar.src} className="rounded-full" />
//           <AvatarFallback>PG</AvatarFallback>
//         </Avatar>
//       </div>
//       <p className="text-lg mb-6 text-gray-400 max-w-5xl">
//         Passionate about crafting seamless and interactive web applications, I thrive on solving complex problems and creating efficient solutions. 
//         With a deep interest in full stack development, I constantly explore new technologies to stay ahead in this ever-evolving field. 
//         Let's build something amazing together!
//       </p>
//       <div className="flex space-x-4">
//         <Button onClick={handleResumeDownload} className="bg-slate-700 hover:bg-slate-500">
//           Download Resume
//         </Button>
    
//           <Button  onClick={handleContactRedirect} className="bg-slate-700 hover:bg-slate-500">
//             Contact Me
//           </Button>
        
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;


"use client"

import React from 'react';
import { Button } from '@/components/ui/button'; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from '../../public/avatar.jpg';
import { useRouter } from 'next/navigation';

const ProfileSection: React.FC = () => {
  const router = useRouter();

  const handleContactRedirect = () => {
    router.push('/contact');
  };

  return (
    <div className="flex flex-col p-4 md:p-8 md:ml-6 lg:ml-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mb-6 z-[-1]">
        <h1 className="text-4xl font-bold text-gray-50 mb-4 md:mb-0">Pranav Gandesree</h1>
        <Avatar className="w-20 h-20 md:w-16 md:h-16 lg:w-14 lg:h-14">
          <AvatarImage src={avatar.src} className="rounded-full" />
          <AvatarFallback>PG</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-lg mb-6 text-gray-400 max-w-5xl">
        Passionate about crafting seamless and interactive web applications, I thrive on solving complex problems and creating efficient solutions. 
        With a deep interest in full stack development, I constantly explore new technologies to stay ahead in this ever-evolving field. 
        Let's build something amazing together!
      </p>

      {/* <div className="flex flex-row md:flex-row  md:space-y-0 md:space-x-4">
      <a href="/pranavResume.pdf" download>
          <Button className="bg-slate-700 hover:bg-slate-500 w-auto md:w-auto md:px-4 md:py-2 lg:w-auto lg:px-6 lg:py-3 mr-6">
            Download Resume
          </Button>
        </a>
  
        <Button onClick={handleContactRedirect} className="bg-slate-700 hover:bg-slate-500 w-auto md:w-auto md:px-4 md:py-2 lg:w-auto lg:px-6 lg:py-3">
          Contact Me
        </Button>

      </div> */}
      <div className="flex flex-row md:flex-row md:space-y-0 md:space-x-2">
  <a href="/pranavResume.pdf" download>
    <Button className="bg-slate-700 hover:bg-slate-500 w-auto md:w-auto md:px-4 md:py-2 lg:w-auto lg:px-6 lg:py-3">
      Download Resume
    </Button>
  </a>

  <Button onClick={handleContactRedirect} className="bg-slate-700 hover:bg-slate-500 w-auto md:w-auto md:px-4 md:py-2 lg:w-auto lg:px-6 lg:py-3">
    Contact Me
  </Button>
</div>

    </div>
  );
};

export default ProfileSection;

