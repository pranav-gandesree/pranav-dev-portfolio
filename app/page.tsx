

import React from 'react';
import ProfileSection from '../components/sections/ProfileSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ProjectSection from '@/components/sections/ProjectSection';
import { Separator } from '@/components/ui/separator';

const HomePage: React.FC = () => {
  return (
    <div className='w-[83%] flex justify-center flex-col'>
      <ProfileSection />

      <TechStackSection/>

      <ProjectSection/>
    </div>
  );
};

export default HomePage;
