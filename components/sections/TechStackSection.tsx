import React from 'react';
import { Card } from '@/components/ui/card';
import {
    SiKotlin,
    SiFirebase,
    SiFastlane,
    SiMongodb,
    SiPostgresql,
    SiGmail,
    SiTailwindcss,
    SiTypescript,
    SiJavascript
  } from "react-icons/si";
  import {
    FaReact,
    FaJs,
    FaGitAlt,
    FaJava,
    FaLinkedin,
    FaStackOverflow,
    FaMedium,
    FaGithub,
    FaSass,
    FaAws,
  } from "react-icons/fa";
  import { DiNodejs } from "react-icons/di";
  import { TbBrandNextjs } from "react-icons/tb";

  //add tabs for tech stack later

  const techs = [
      { name: 'Tailwind CSS', icon: <SiTailwindcss/> },
    { name: 'JavaScript', icon: <SiJavascript size={20} /> },
    { name: 'TypeScript', icon: <SiTypescript size={20} /> },
    { name: 'React', icon: <FaReact size={20} /> },
    { name: 'NextJS', icon: <TbBrandNextjs size={20} /> },
    { name: 'Node.js', icon: <DiNodejs size={40} /> },
    { name: 'Firebase', icon: <SiFirebase size={20}/> },
    { name: 'Postgresql ', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb/> },
    { name: 'Github', icon: <FaGitAlt/> },
    // Add more technologies as needed
  ];
  

const TechStackSection: React.FC = () => {
  return (
    <>
        <h1 className='text-3xl font-bold mb-4 text-gray-50'>TechStack</h1>
        <div className="flex flex-wrap justify-center space-x-4 p-8">
      {techs.map((tech) => (
        <Card key={tech.name} className="m-4 p-4 w-48 h-16 text-center flex align-middle justify-center bg-customBlueGray rounded-lg shadow-md border border-slate-500 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
          <div className="text-3xl mb-2">{tech.icon}</div>
          <h2 className="text-xl  text-slate-200 p-1">{tech.name}</h2>
        </Card>
      ))}
    </div>
     </>
  );
};

export default TechStackSection;
