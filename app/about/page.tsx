import AboutMe from "@/components/sections/AboutMe";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Pranav',
  description: 'Pranav Gandesree portfolio',
};

export default function AboutPage() {
   return (
     <div className="container mx-auto p-4">
       <AboutMe/>
     </div>
   );
 }
 