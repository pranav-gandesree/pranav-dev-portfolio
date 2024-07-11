import React from 'react';
import Education from '../Education';


const AboutMe: React.FC = () => {
  return (
    <>
      <div className='leading-7 px-4  sm:px-8 lg:px-20 xl:px-28'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-50 mb-4 sm:mb-6'>About Me</h1>
        <div className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
        I&apos;m Gandesree Pranav, a passionate graduate in B.Tech CSE/IoT with a strong affinity for computer science. With proficiency in languages like C, Python, and Java, and databases including MongoDB, MySQL, and Firebase, I delve deep into the world of technology. My expertise spans the MERN stack and Next.js, crafting robust web applications with seamless user experiences. Beyond coding, I indulge in my love for movies, series and music. You can explore my projects and contributions on GitHub, where I showcase my dedication to innovation and problem-solving in software development.
      </div>

        <Education/>

        
      
      </div>
    </>
  );
};

export default AboutMe;
