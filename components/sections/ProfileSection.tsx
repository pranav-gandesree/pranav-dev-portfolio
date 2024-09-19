import Image from 'next/image'
import { Button } from "@/components/ui/button"
import avatar from '@/public/avatar.jpg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectSection from './ProjectSection'

export default function ProfileSection() {
  return (
    <>
    <div className="min-h-screen flex border border-white bg-black text-white p-8 md:p-8 lg:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-2/3 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm Pranav Gandesree.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              I'm a certified expert in IoT and Web Development, helping busy people like you be more organized and productive.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              I design and optimize solutions to be clutter-free, so you can focus on what's important and get things done. 
            </p>
            <Button size="lg" className="text-lg">
              Book a call
            </Button>
          </div>
          </div>

          </div>

    </>

  )

          {/* <div className="md:w-1/2 flex justify-center">
            <Image
              src={avatar}
              alt="Illustration of Pranav"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div> */}

        {/* <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <Tabs defaultValue="software" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
              <TabsTrigger value="language">Language</TabsTrigger>
            </TabsList>
            <TabsContent value="software" className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkillCard title="React" />
              <SkillCard title="Next.js" />
              <SkillCard title="Node.js" />
            </TabsContent>
            <TabsContent value="expertise" className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkillCard title="IoT Development" />
              <SkillCard title="Web Development" />
              <SkillCard title="UI/UX Design" />
            </TabsContent>
            <TabsContent value="language" className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkillCard title="JavaScript" />
              <SkillCard title="Python" />
              <SkillCard title="C++" />
            </TabsContent>
          </Tabs>
        </div> */}

  
}

// function SkillCard({ title }: { title: string }) {
//   return (
//     <div className="bg-gray-900 p-4 rounded-lg">
//       <h3 className="text-xl font-semibold">{title}</h3>
//     </div>
//   )
// }