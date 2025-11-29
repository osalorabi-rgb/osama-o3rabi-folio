import { Card, CardContent } from "@/components/ui/card";
import clothingBrand from "@/assets/ajjad-running.jpg";
import musicLabel from "@/assets/princestory-logo.jpg";
import commercialVideo from "@/assets/commercial-video.mp4";
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
    title: "Commercial Appearances",
    description: "Professional modeling and commercial appearances for brands and creative projects.",
    video: commercialVideo,
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
    <section id="work" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">My Work</h2>
          <div className="h-0.5 w-24 bg-foreground mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects and ventures across fashion, music, media, and digital content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border border-border hover:border-foreground transition-all duration-300 hover-lift fade-in-delay-1"
            >
              <div className="relative h-80 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
              </div>

              <CardContent className="p-8 space-y-4">
                <h3 className="text-3xl font-display font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-md"
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
