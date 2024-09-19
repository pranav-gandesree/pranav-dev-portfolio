// import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white p-8 md:p-16 lg:p-24">
//       <div className="max-w-4xl mx-auto">
//         <header className="mb-16">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             Hello, I'm Pranav Gandesree.
//           </h1>
//           <p className="text-lg md:text-xl text-gray-400 mb-8">
//             I'm an IoT developer and web enthusiast, helping create innovative solutions and bringing ideas to life.
//           </p>
//           <div className="flex space-x-4">
//             <Button size="lg" className="text-lg">
//               Book a call
//             </Button>
//             <Button size="lg" variant="outline" className="text-lg">
//               View Projects
//             </Button>
//           </div>
//         </header>

//         <section className="mb-16">
//           <h2 className="text-2xl font-bold mb-4">About Me</h2>
//           <p className="text-gray-400 mb-4">
//             I'm a Computer Science and Engineering student specializing in IoT. With a passion for web development and a knack for problem-solving, I create user-friendly applications that make a difference.
//           </p>
//           <p className="text-gray-400">
//             My experience ranges from IoT development to creating responsive web applications. I'm always eager to learn and apply new technologies to solve real-world problems.
//           </p>
//         </section>

//         <section className="mb-16">
//           <h2 className="text-2xl font-bold mb-8">Skills</h2>
//           <Tabs defaultValue="software" className="w-full">
//             <TabsList className="grid w-full grid-cols-3 mb-8">
//               <TabsTrigger value="software">Software</TabsTrigger>
//               <TabsTrigger value="expertise">Expertise</TabsTrigger>
//               <TabsTrigger value="language">Language</TabsTrigger>
//             </TabsList>
//             <TabsContent value="software" className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               <SkillCard title="React" />
//               <SkillCard title="Next.js" />
//               <SkillCard title="Node.js" />
//               <SkillCard title="Express.js" />
//               <SkillCard title="MongoDB" />
//               <SkillCard title="PostgreSQL" />
//             </TabsContent>
//             <TabsContent value="expertise" className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               <SkillCard title="IoT Development" />
//               <SkillCard title="Web Development" />
//               <SkillCard title="Database Management" />
//               <SkillCard title="RESTful APIs" />
//               <SkillCard title="Version Control (Git)" />
//               <SkillCard title="Agile Methodologies" />
//             </TabsContent>
//             <TabsContent value="language" className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               <SkillCard title="JavaScript" />
//               <SkillCard title="Python" />
//               <SkillCard title="Java" />
//               <SkillCard title="C" />
//               <SkillCard title="SQL" />
//               <SkillCard title="HTML/CSS" />
//             </TabsContent>
//           </Tabs>
//         </section>

//         <section className="mb-16">
//           <h2 className="text-2xl font-bold mb-8">Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <ProjectCard
//               title="True Colors Photography"
//               description="A landing page for a photography business, helping to attract more clients."
//               technologies={["JavaScript", "React", "Firebase"]}
//               link="https://truecolors-photography.com"
//             />
//             <ProjectCard
//               title="projektHub"
//               description="A platform for users to share profiles and projects, fostering collaboration and inspiration."
//               technologies={["Next.js", "PostgreSQL", "Prisma", "NextAuth"]}
//               link="#"
//             />
//             <ProjectCard
//               title="Document Your Journey"
//               description="A website enabling users to track personal progress and explore others' journeys."
//               technologies={["Next.js", "Prisma", "PostgreSQL", "NextAuth"]}
//               link="#"
//             />
//           </div>
//         </section>

//         <footer className="text-center text-gray-400">
//           <p>© 2024 Pranav Gandesree. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   )
// }

// function SkillCard({ title }: { title: string }) {
//   return (
//     <Card className="bg-gray-900">
//       <CardContent className="p-4">
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </CardContent>
//     </Card>
//   )
// }

// function ProjectCard({ title, description, technologies, link }: { title: string; description: string; technologies: string[]; link: string }) {
//   return (
//     <Card className="bg-gray-900">
//       <CardContent className="p-6">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-400 mb-4">{description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {technologies.map((tech) => (
//             <Badge key={tech} variant="secondary">{tech}</Badge>
//           ))}
//         </div>
//         <Button asChild>
//           <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }


















import AboutMe from '@/components/sections/AboutMe'
import Header from '@/components/canvas/Header'
import Projects from '@/components/sections/ProjectSection'
import React from 'react'

const page = () => {
  return (
    <div className= "">
      <Header/>
      <AboutMe/>
      <Projects/>
    </div>
  )
}

export default page
