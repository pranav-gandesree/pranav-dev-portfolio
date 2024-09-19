
import React from "react";


const skills = [
  "JavaScript", 
  "TypeScript",
  "NextJS",
  "React", 
  "Node.js", 
  "MongoDB", 
  "PostgreSQL", 
  "Supabase", 
  "Recoil",  
  "Tailwind CSS",
  "Git/Github",
  "Python"
];

const Skills = () => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-gray-700 text-white rounded-md">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
