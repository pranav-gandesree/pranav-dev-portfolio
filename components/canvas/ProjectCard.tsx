

'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, technologies, githublink, livelink }: { title: string; description: string; technologies: string[]; livelink?: string; githublink: string }) => {
  return (
    <motion.div
      whileHover={{ rotate: 3 }} // Rotate clockwise by 5 degrees on hover
      transition={{ duration: 0.3 }} // Smooth transition over 0.3 seconds
      className="w-full"
    >
      <Card className="bg-gray-900">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>

          <div className="flex flex-row gap-2">
            {livelink && (
              <Button asChild className="bg-slate-800 text-white">
                <Link href={livelink} target="_blank" rel="noopener noreferrer">View Project</Link>
              </Button>
            )}
            <Button>
              <Link href={githublink} target="_blank" rel="noopener noreferrer">View Github</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;







