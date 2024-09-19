import { Badge } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { badgeVariants } from "./ui/badge";

export default function ProjectCard({ title, description, technologies, link }: { title: string; description: string; technologies: string[]; link: string }) {
  return (
    <Card className="bg-gray-900">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} className={badgeVariants({ variant: "secondary" })}>{tech}</Badge>
          ))}
        </div>
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </Button>
      </CardContent>
    </Card>
  )
}