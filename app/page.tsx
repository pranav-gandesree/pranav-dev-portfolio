
import Projects from '@/components/sections/ProjectSection'
import React from 'react'
import Skills from '@/components/sections/TechStackSection'
import Footer from '@/components/sections/Footer'
import Header from '@/components/canvas/Header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Pranav',
  description: 'Pranav Gandesree portfolio',
  openGraph: {
    title: 'Pranav - Home',
    description: 'Pranav Gandesree portfolio',
    url: 'https://pranavgandesree.vercel.app/',
    siteName: 'Pranav Gandesree',
    locale: 'en_US',
    type: 'website',
  },
};


const page = () => {
  return (
    <div className= "">
      <Header/>
      <Skills/>
      <div>
      <Projects limit={3} />

        <Link href="/projects" className="flex justify-center mt-8 mb-8">
          <Button>Show more projects  </Button>
      </Link>
 
      </div>
      <Footer/>
    </div>
  )
}

export default page
