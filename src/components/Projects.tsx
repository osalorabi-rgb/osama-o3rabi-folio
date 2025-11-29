import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
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
    color: "purple",
  },
  {
    title: "PrinceStory Music Label",
    description: "Digital distribution and artist services platform helping musicians reach global audiences.",
    image: musicLabel,
    tags: ["Music", "Distribution", "Services"],
    color: "cyan",
  },
  {
    title: "On-Camera Work",
    description: "Professional modeling and commercial appearances for brands and creative projects.",
    image: onCamera,
    tags: ["Modeling", "Commercial", "Media"],
    color: "orange",
  },
  {
    title: "Content Creation",
    description: "Strategic content development and collaborations building impactful digital narratives.",
    image: contentCreation,
    tags: ["Digital", "Strategy", "Collaboration"],
    color: "pink",
  },
];

const colorClasses = {
  purple: "from-purple/20 to-transparent hover:border-purple/50",
  cyan: "from-cyan/20 to-transparent hover:border-cyan/50",
  orange: "from-orange/20 to-transparent hover:border-orange/50",
  pink: "from-pink/20 to-transparent hover:border-pink/50",
};

const tagColorClasses = {
  purple: "bg-purple/20 text-purple-light border-purple/30",
  cyan: "bg-cyan/20 text-cyan-light border-cyan/30",
  orange: "bg-orange/20 text-orange-light border-orange/30",
  pink: "bg-pink/20 text-pink-light border-pink/30",
};

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-6 fade-in">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">
              My <span className="gradient-text">Work</span>
            </h2>
            <div className="h-2 w-full bg-gradient-accent rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects and ventures across fashion, music, media, and digital content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-2 border-border bg-gradient-to-br ${colorClasses[project.color as keyof typeof colorClasses]} hover-lift transition-all duration-500 fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/90 backdrop-blur-sm p-4 rounded-full">
                    <ExternalLink className="w-8 h-8 text-foreground" />
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-4 relative">
                <h3 className="text-3xl font-bold font-heading group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-4 py-2 text-sm font-semibold rounded-full border ${tagColorClasses[project.color as keyof typeof tagColorClasses]} backdrop-blur-sm transition-transform hover:scale-110`}
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
