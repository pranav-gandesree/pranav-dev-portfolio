// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// // import SkillCard from "./SkillCard";

// const SkillCard = ({ title }: { title: string }) => (
//     <Card className="bg-gray-900">
//       <CardContent className="p-4">
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </CardContent>
//     </Card>
//   );

// const Skills = () => (
//   <section className="mb-16">
//     <h2 className="text-2xl font-bold mb-8">Skills</h2>
//     <Tabs defaultValue="software" className="w-full">
//       <TabsList className="grid w-full grid-cols-3 mb-8">
//         <TabsTrigger value="software">Software</TabsTrigger>
//         <TabsTrigger value="expertise">Expertise</TabsTrigger>
//         <TabsTrigger value="language">Language</TabsTrigger>
//       </TabsList>
//       <TabsContent value="software" className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         <SkillCard title="React" />
//         <SkillCard title="Next.js" />
//         <SkillCard title="Node.js" />
//         <SkillCard title="Express.js" />
//         <SkillCard title="MongoDB" />
//         <SkillCard title="PostgreSQL" />
//       </TabsContent>
//       <TabsContent value="expertise" className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         <SkillCard title="IoT Development" />
//         <SkillCard title="Web Development" />
//         <SkillCard title="Database Management" />
//         <SkillCard title="RESTful APIs" />
//         <SkillCard title="Version Control (Git)" />
//         <SkillCard title="Agile Methodologies" />
//       </TabsContent>
//       <TabsContent value="language" className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         <SkillCard title="JavaScript" />
//         <SkillCard title="Python" />
//         <SkillCard title="Java" />
//         <SkillCard title="C" />
//         <SkillCard title="SQL" />
//         <SkillCard title="HTML/CSS" />
//       </TabsContent>
//     </Tabs>
//   </section>
// );

// export default Skills;






import React from "react";

// Define skills as an array
const skills = [
  "JavaScript", 
  "TypeScript",
  "NextJS",
  "React", 
  "Node.js", 
  "MongoDB", 
  "PostgreSQL", 
  "Supabase", 
  "Recoil",  
  "Tailwind CSS",
  "Git/Github",
  "Python"
];

const Skills = () => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-gray-700 text-white rounded-md">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
