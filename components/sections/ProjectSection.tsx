import ProjectCard from "../ProjectCard";

const Projects = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        title="True Colors Photography"
        description="A landing page for a photography business, helping to attract more clients."
        technologies={["JavaScript", "React", "Firebase"]}
        link="https://truecolors-photography.com"
      />
      <ProjectCard
        title="projektHub"
        description="A platform for users to share profiles and projects, fostering collaboration and inspiration."
        technologies={["Next.js", "PostgreSQL", "Prisma", "NextAuth"]}
        link="#"
      />
      <ProjectCard
        title="Document Your Journey"
        description="A website enabling users to track personal progress and explore others' journeys."
        technologies={["Next.js", "Prisma", "PostgreSQL", "NextAuth"]}
        link="#"
      />
    </div>
  </section>
);

export default Projects;
