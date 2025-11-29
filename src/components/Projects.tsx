import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import clothingBrand from "@/assets/asom.jpg";
import musicLabel from "@/assets/princestory-logo.jpg";
import onCamera from "@/assets/on-camera.jpg";
import contentCreation from "@/assets/content-creation.jpg";

const projects = [
  {
    title: "Founder of Ajjad",
    description: "Producing modern, refined fashion pieces with a focus on quality, culture, and clean design. A growing e-commerce brand built on strong identity and thoughtful craftsmanship.",
    image: clothingBrand,
    tags: ["Fashion", "E-commerce", "Brand"],
    link: "https://ajjad.com/",
  },
  {
    title: "Founder of PrinceStory",
    description: "A digital music label supporting artists through global distribution, platform optimization, and creative services that amplify reach and impact.",
    image: musicLabel,
    tags: ["Music", "Distribution", "Services"],
    link: "https://www.youtube.com/@Princestory",
  },
  {
    title: "Content & Film Projects",
    description: "End-to-end content and film projects: from concept and scripting to directing, shooting, and editing. Includes client work, personal films, and creative experiments.",
    image: contentCreation,
    tags: ["Digital", "Strategy", "Collaboration"],
    link: "https://drive.google.com/drive/folders/1mH1_XQwJDR3F-fKLB_Yqzm9fKjw9L4KW",
  },
  {
    title: "Commercial Appearances",
    description: "Professional modeling and on-camera presence for brands and commercial productions, delivering expressive performance and clean visual impact.",
    image: onCamera,
    tags: ["Modeling", "Commercial", "Media"],
    link: "https://www.youtube.com/watch?v=PqdTSsAR6o8",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-16 px-6 bg-background scroll-animate">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-inter font-bold mb-4">PROJECTS</h2>
            <div className="h-0.5 w-24 bg-foreground mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              A collection of projects and ventures across fashion, music, media, and digital content.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
              <Card className="overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-500 hover-lift h-full flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <CardContent className="p-6 space-y-3 flex-grow flex flex-col">
                <h3 className="text-2xl font-inter font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base font-sans flex-grow">
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
                <Button 
                  className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  View More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
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
