"use client" 

import React from 'react';
import { Button } from '@/components/ui/button'; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const ProfileSection: React.FC = () => {
  const handleResumeDownload = () => {
   
  };

  const handleContactRedirect = () => {
    
  };

  return (
    <div className="flex flex-col text-left p-8  ">
     <div className='flex align-end'>
      <h1 className="text-3xl font-bold mb-4 text-gray-50">Pranav Gandesree</h1>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
     </div>

      <p className="text-lg mb-6 text-gray-400">
        Passionate about crafting seamless and interactive web applications, I thrive on solving complex problems and creating efficient solutions. 
        With a deep interest in full stack development, I constantly explore new technologies to stay ahead in this ever-evolving field. 
        Let's build something amazing together!
      </p>
      <div className="flex space-x-4">
        <Button onClick={handleResumeDownload} className="bg-blue-500 hover:bg-blue-700">
          Download Resume
        </Button>
        <Button onClick={handleContactRedirect} className="bg-green-500 hover:bg-green-700">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
