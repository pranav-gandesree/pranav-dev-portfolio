import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ title, description, technologies, link }: { title: string; description: string; technologies: string[]; link: string }) => (
  <Card className="bg-gray-900">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary">{tech}</Badge>
        ))}
      </div>
      <Button asChild>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </Button>
    </CardContent>
  </Card>
);

export default ProjectCard;
