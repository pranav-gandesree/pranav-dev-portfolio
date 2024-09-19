import ProjectCard from "@/components/canvas/ProjectCard";

const Projects = () => (
  <section className="mb-16 mt-24">
    <h1 className="text-3xl font-bold mb-8 text-slate-400">Some cool stuff I have worked on</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        title="True Colors Photography"
        description="A landing page for a photography business, helping to attract more clients."
        technologies={["JavaScript", "React", "Firebase"]}
        livelink= "https://truecolors-photography.com"
        githublink= "https://github.com/pranav-gandesree/truecolors"
      />
      <ProjectCard
        title="projektHub"
        description="A platform for users to share profiles and projects, fostering collaboration and inspiration."
        technologies={["Next.js", "PostgreSQL", "Prisma", "NextAuth"]}
        // livelink="#"
        githublink="https://github.com/pranav-gandesree/projekthub"
      />

      <ProjectCard
        title="Document Your Journey"
        description="A website enabling users to track personal progress and explore others' journeys."
        technologies={["Next.js", "Prisma", "PostgreSQL", "NextAuth"]}
        // livelink=""
        githublink="https://github.com/pranav-gandesree/documentyourjourney"
        />

      <ProjectCard
        title="Document Your Journey"
        description="A website enabling users to track personal progress and explore others' journeys."
        technologies={["Next.js", "Prisma", "PostgreSQL", "NextAuth"]}
        livelink="https://postman-clone-steel.vercel.app"
        githublink="https://github.com/pranav-gandesree/"
        />
      
    </div>
  </section>
);

export default Projects;






