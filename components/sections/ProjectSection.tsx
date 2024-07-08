import React from "react";
import { projects } from '../constant/constant'
import { Card } from '@/components/ui/card';


const ProjectSection: React.FC = () => {
    return (
        <>
         <h1 className='text-3xl font-bold mb-4 text-gray-50'>Projects</h1>
         <p className="text-xl text-gray-300"> List of projects that I involved or have made in the past.</p>
            <div className="flex flex-wrap justify-center space-x-4 p-8">
                {projects.map((project) => (
                    <Card key={project.title} className="m-4 p-4 w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap space-x-2">
                        {project.techStack.map((tech) => (
                        <span key={tech} className="text-sm bg-gray-200 text-gray-800 rounded-full px-3 py-1">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                </Card>
                ))}
            </div>
        </>
    );
  };

  export default ProjectSection;
