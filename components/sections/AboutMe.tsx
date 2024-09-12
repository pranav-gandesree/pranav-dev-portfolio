import React from 'react';
import Education from '../Education';
import MovieCard from '../MovieCard';
import QandA from '../QandA';


const AboutMe: React.FC = () => {

  // const sampleMovie = {
  //   id: 1,
  //   title: "Inception",
  //   poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  //   rating: 8.8,
  // };

  return (
    <>
      <div className='leading-7 px-4  sm:px-8 lg:px-20 xl:px-28'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-50 mb-4 sm:mb-6'>About Me</h1>
        <div className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 w-full">
        I&apos;m Gandesree Pranav, a passionate graduate in B.Tech CSE/IoT with a strong affinity for computer science. With proficiency in languages like C, Python, and Java, and databases including MongoDB, MySQL, and Firebase, I delve deep into the world of technology. My expertise spans the MERN stack and Next.js, crafting robust web applications with seamless user experiences. Beyond coding, I indulge in my love for movies, series and music. You can explore my projects and contributions on GitHub, where I showcase my dedication to innovation and problem-solving in software development.

        <QandA/>
      </div>

        <Education/>
      {/* <MovieCard movie={sampleMovie} /> */}
   
      
      </div>
    </>
  );
};

export default AboutMe;
