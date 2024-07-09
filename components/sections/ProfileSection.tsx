"use client" 

import React from 'react';
import { Button } from '@/components/ui/button'; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatar from '../../public/avatar.jpg'
import { useRouter } from 'next/navigation';


const ProfileSection: React.FC = () => {
  const router = useRouter();

  const handleResumeDownload = () => {
   
  };

  const handleContactRedirect = () => {
      router.push('/contact');
  };

  return (

  <div className="flex flex-col p-8 ml-20">
      <div className="flex justify-between items-center w-full max-w-4xl mb-6">
        <h1 className="text-3xl font-bold text-gray-50">Pranav Gandesree</h1>
        <Avatar>
          <AvatarImage src={avatar.src} className="rounded-full" />
          <AvatarFallback>PG</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-lg mb-6 text-gray-400 max-w-5xl">
        Passionate about crafting seamless and interactive web applications, I thrive on solving complex problems and creating efficient solutions. 
        With a deep interest in full stack development, I constantly explore new technologies to stay ahead in this ever-evolving field. 
        Let's build something amazing together!
      </p>
      <div className="flex space-x-4">
        <Button onClick={handleResumeDownload} className="bg-slate-700 hover:bg-slate-500">
          Download Resume
        </Button>
    
          <Button  onClick={handleContactRedirect} className="bg-slate-700 hover:bg-slate-500">
            Contact Me
          </Button>
        
      </div>
    </div>
  );
};

export default ProfileSection;
