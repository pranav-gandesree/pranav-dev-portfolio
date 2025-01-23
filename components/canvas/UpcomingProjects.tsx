import ProjectCard from "@/components/canvas/ProjectCard"

const UpcomingProjects = () => {
  return (
    <section className="mb-16">
    <h2 className="text-2xl font-bold mb-8">Upcoming Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        title="QuickDev"
        description="A platform for users to find a developer for a quick call and with instant payments using blockchian"
        technologies={["Next.js", "PostgreSQL", "Prisma", "NextAuth"]}
        // livelink="#"
        githublink="https://github.com/pranav-gandesree/quickdev-booking"
      />
      <ProjectCard
        title="Bounty Manager"
        description="Bounty Manager is a platform where verified users can create bounties and any interested user can solve and claim their bounties. Looking forward to integrate a decentralized bounty dispenser feature."
        technologies={ ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Turborepo", "ExpressJS" ]}
        // livelink="https://truecolors-photography.com"
        githublink="https://github.com/pranav-gandesree/bountymanager"
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
