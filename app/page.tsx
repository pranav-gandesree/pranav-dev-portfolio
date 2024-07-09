

import React from 'react';
import ProfileSection from '../components/sections/ProfileSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ProjectSection from '@/components/sections/ProjectSection';
import { Separator } from '@/components/ui/separator';

const HomePage: React.FC = () => {
  return (
    <div>
      <ProfileSection />
    <Separator/>
      <TechStackSection/>
      <Separator/>
      <ProjectSection/>
    </div>
  );
};

export default HomePage;
