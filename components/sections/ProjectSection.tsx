import ProjectCard from "@/components/canvas/ProjectCard";

const Projects = ({ limit }: { limit?: number }) => {
  // All project data
  const allProjects = [
    {
      title: "True Colors Photography",
      description: "A landing page for a photography business, helping to attract more clients.",
      technologies: ["JavaScript", "React", "Firebase"],
      livelink: "https://truecolors-photography.com",
      githublink: "https://github.com/pranav-gandesree/truecolors",
    },
    {
      title: "projektHub",
      description: "A platform for users to share profiles and projects, fostering collaboration and inspiration.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      // livelink: "#",
      githublink: "https://github.com/pranav-gandesree/projekthub",
    },
    {
      title: "Document Your Journey",
      description: "A website enabling users to track personal progress and explore others' journeys.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      // livelink: "",
      githublink: "https://github.com/pranav-gandesree/documentyourjourney",
    },
    {
      title: "Postman Clone",
      description: "A postman clone to manage API requests and responses.",
      technologies: ["React", "TailwindCSS"],
      livelink: "https://postman-clone-steel.vercel.app",
      githublink: "https://github.com/pranav-gandesree/",
    },
    {
      title: "holdIt_",
      description: "Platform for temporarily storing text and images, allowing users to protect their data with passwords and retrieve it via unique URLs. ",
      technologies: ["React", "TailwindCSS", "MUI"],
      // livelink: "https://holdit-pranavs-projects-53178da9.vercel.app",
      githublink: "https://github.com/pranav-gandesree/holdIt_",
    },
  ];

  // If limit is provided, slice the projects array
  const projectsToShow = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section className="mb-16">
      <h1 className="text-4xl font-bold mb-8 text-slate-400">Some cool stuff I have worked on</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsToShow.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            livelink={project.livelink}
            githublink={project.githublink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
