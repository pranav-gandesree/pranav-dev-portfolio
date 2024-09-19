import Socials from '@/components/canvas/Socials'
// import UpcomingProjects from '@/components/canvas/UpcomingProjects'
import Projects from '@/components/sections/ProjectSection'
import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Pranav',
  description: 'Pranav Gandesree portfolio',
};

const page = () => {
  return (
    <>
      <Projects/>

      {/* <UpcomingProjects/> */}
      <div className="flex justify-center mt-14">
         <Socials/>
    </div>
    </>
  )
}

export default page
