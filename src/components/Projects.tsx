import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import clothingBrand from "@/assets/ajjad-running.jpg";
import musicLabel from "@/assets/princestory-logo.jpg";
import onCamera from "@/assets/on-camera.jpg";
import contentCreation from "@/assets/content-creation.jpg";

const projects = [
  {
    title: "Ajjad Clothing Brand",
    description: "Producing fashion material with modern, sophisticated designs with a focus on quality and style.",
    image: clothingBrand,
    tags: ["Fashion", "E-commerce", "Brand"],
    link: "https://ajjad.com/",
  },
  {
    title: "PrinceStory Music Label",
    description: "Digital distribution and artist services platform helping musicians reach global audiences.",
    image: musicLabel,
    tags: ["Music", "Distribution", "Services"],
    link: "https://www.youtube.com/@Princestory",
  },
  {
    title: "Commercial Appearances",
    description: "Professional modeling and commercial appearances for brands and creative projects.",
    image: onCamera,
    tags: ["Modeling", "Commercial", "Media"],
    link: "https://www.youtube.com/watch?v=PqdTSsAR6o8",
  },
  {
    title: "Content Creation",
    description: "Strategic content development and collaborations building impactful digital narratives.",
    image: contentCreation,
    tags: ["Digital", "Strategy", "Collaboration"],
    link: "https://www.instagram.com/ajjad.brand/",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-16 px-6 bg-background scroll-animate">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation>
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">PROJECTS</h2>
            <div className="h-0.5 w-24 bg-foreground mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects and ventures across fashion, music, media, and digital content.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-500 hover-lift h-full">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-semibold bg-secondary text-secondary-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              </Card>
            </a>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
