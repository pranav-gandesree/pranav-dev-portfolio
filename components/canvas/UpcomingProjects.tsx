import ProjectCard from "@/components/canvas/ProjectCard"

const UpcomingProjects = () => {
  return (
    <section className="mb-16">
    <h2 className="text-2xl font-bold mb-8">Upcoming Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        title="QuickDev"
        description="A platform for users to find a developer for a quick call and with instant payments using blockchian (solana)"
        technologies={["Next.js", "PostgreSQL", "Prisma", "NextAuth"]}
        // livelink="#"
        githublink="https://github.com/pranav-gandesree/quickdev-booking"
      />
      <ProjectCard
        title="YouvAN"
        description="Home Theatre booking platform for a client"
        technologies={ ["Next.js", "Typescript", "PostgreSQL", "Prisma"]}
        // livelink="https://truecolors-photography.com"
        githublink="https://github.com/pranav-gandesree/theatre-booking"
      />
      {/* <ProjectCard
        title="Document Your Journey"
        description="A website enabling users to track personal progress and explore others' journeys."
        technologies={["Next.js", "Prisma", "PostgreSQL", "NextAuth"]}
        livelink="#"
        githublink=""
      /> */}
    </div>
  </section>
  )
}

export default UpcomingProjects
