import { Card, CardContent } from "@/components/ui/card";
import clothingBrand from "@/assets/ajjad-running.jpg";
import musicLabel from "@/assets/princestory-logo.jpg";
import onCamera from "@/assets/on-camera.jpg";
import contentCreation from "@/assets/content-creation.jpg";

const projects = [
  {
    title: "Ajjad Clothing Brand",
    description: "Premium fashion label delivering modern, sophisticated designs with a focus on quality and style.",
    image: clothingBrand,
    tags: ["Fashion", "E-commerce", "Brand"],
  },
  {
    title: "PrinceStory Music Label",
    description: "Digital distribution and artist services platform helping musicians reach global audiences.",
    image: musicLabel,
    tags: ["Music", "Distribution", "Services"],
  },
  {
    title: "On-Camera Work",
    description: "Professional modeling and commercial appearances for brands and creative projects.",
    image: onCamera,
    tags: ["Modeling", "Commercial", "Media"],
  },
  {
    title: "Content Creation",
    description: "Strategic content development and collaborations building impactful digital narratives.",
    image: contentCreation,
    tags: ["Digital", "Strategy", "Collaboration"],
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">My Work</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects and ventures across fashion, music, media, and digital content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover-lift bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium bg-gold/10 text-gold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
