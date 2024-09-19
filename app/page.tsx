
import Projects from '@/components/sections/ProjectSection'
import React from 'react'
import Skills from '@/components/sections/TechStackSection'
import Footer from '@/components/sections/Footer'
import Header from '@/components/canvas/Header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
