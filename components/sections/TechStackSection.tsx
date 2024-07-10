// import React from 'react';
// import { Card } from '@/components/ui/card';
// import {
//     SiKotlin,
//     SiFirebase,
//     SiFastlane,
//     SiMongodb,
//     SiPostgresql,
//     SiGmail,
//     SiTailwindcss,
//     SiTypescript,
//     SiJavascript
//   } from "react-icons/si";
//   import {
//     FaReact,
//     FaGitAlt,
//   } from "react-icons/fa";
//   import { DiNodejs } from "react-icons/di";
//   import { TbBrandNextjs } from "react-icons/tb";

//   //add tabs for tech stack later

//   const techs = [
//       { name: 'Tailwind CSS', icon: <SiTailwindcss/> },
//     { name: 'JavaScript', icon: <SiJavascript size={20} /> },
//     { name: 'TypeScript', icon: <SiTypescript size={20} /> },
//     { name: 'React', icon: <FaReact size={20} /> },
//     { name: 'NextJS', icon: <TbBrandNextjs size={20} /> },
//     { name: 'Node.js', icon: <DiNodejs size={40} /> },
//     { name: 'Firebase', icon: <SiFirebase size={20}/> },
//     { name: 'Postgresql ', icon: <SiPostgresql /> },
//     { name: 'MongoDB', icon: <SiMongodb/> },
//     { name: 'Github', icon: <FaGitAlt/> },
//     // Add more technologies as needed
//   ];
  

// const TechStackSection: React.FC = () => {
//   return (
//     <>
//         <h1 className='text-3xl flex ml-28 font-bold mb-4 text-gray-50'>TechStack</h1>
//         <div className="flex flex-wrap justify-center space-x-4 p-8">
//   {techs.map((tech) => (
//     <Card key={tech.name} className="m-4 p-4 w-48 h-16 text-center flex items-center justify-center bg-customBlueGray rounded-lg shadow-md border border-slate-500 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
//       <div className="text-3xl mr-2">{tech.icon}</div>
//       <h2 className="text-xl text-slate-200">{tech.name}</h2>
//     </Card>
//   ))}
// </div>  
//      </>
//   );
// };

// export default TechStackSection;

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
    FaGitAlt,
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

// Add tabs for tech stack later

const techs = [
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'JavaScript', icon: <SiJavascript size={20} /> },
    { name: 'TypeScript', icon: <SiTypescript size={20} /> },
    { name: 'React', icon: <FaReact size={20} /> },
    { name: 'NextJS', icon: <TbBrandNextjs size={20} /> },
    { name: 'Node.js', icon: <DiNodejs size={40} /> },
    { name: 'Firebase', icon: <SiFirebase size={20} /> },
    { name: 'Postgresql', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Github', icon: <FaGitAlt /> },
    // Add more technologies as needed
];

const TechStackSection: React.FC = () => {
    return (
        <>
            <h1 className='text-4xl font-bold mb-4 text-gray-50 text-center md:text-left ml-4 md:ml-14 lg:ml-28'>My Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6 p-4 md:p-8 md:m-6 lg:px-24">
                {techs.map((tech) => (
                    <Card key={tech.name} className="flex items-center justify-center p-4 bg-customBlueGray rounded-lg shadow-md border border-slate-500 hover:border-blue-500 hover:-translate-y-2 transition-all duration-400 h-16 cursor-pointer">
                        <div className="text-3xl mr-2 hover:text-blue-400">{tech.icon}</div>
                        <h2 className="text-lg text-slate-200 hover:text-blue-400">{tech.name}</h2>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default TechStackSection;
