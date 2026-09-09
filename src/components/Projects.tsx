import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import ajjadImage from "@/assets/asom.jpg";
import wahibImage from "@/assets/wahib.png";
import profileImage from "@/assets/profile.jpg";
import musicLabel from "@/assets/princestory-logo.jpg";
import onCamera from "@/assets/on-camera.jpg";
import contentCreation from "@/assets/content-creation.jpg";

const ventures = [
  {
    title: "Wahib",
    description: "Product development and MVP launch.",
    image: wahibImage,
    imageClassName: "object-contain bg-neutral-950 p-10 md:p-14",
    link: "https://getwahib.com/",
    overview: "A social gifting platform that helps people share what they want and need, making it easier for others to choose the right gift.",
    role: "Market research, product planning, MVP leadership, pitch development, and accelerator participation.",
    highlights: ["MVP built in 45 days", "Top 35 team", "Create Apps Accelerator graduate"],
  },
  {
    title: "Ajjad",
    description: "Brand launch, growth and activation.",
    image: ajjadImage,
    imageClassName: "object-cover",
    link: "https://ajjad.com/",
    overview: "A fashion brand built and launched from the ground up, connecting positioning, digital presence, campaigns, and retail activation.",
    role: "Brand strategy, launch planning, campaign direction, content systems, and execution oversight.",
    highlights: ["36K+ reach", "65K+ impressions", "Organic market spread"],
  },
];

const creativeWork = [
  {
    title: "Personal Brand",
    description: "Content on business, entrepreneurship, branding, and marketing.",
    image: profileImage,
    action: "View Content",
    link: "https://www.instagram.com/o3rabi/",
  },
  {
    title: "PrinceStory",
    description: "Music distribution and creative support for independent artists.",
    image: musicLabel,
    action: "View Channel",
    link: "https://www.youtube.com/@Princestory",
  },
  {
    title: "Film Projects",
    description: "Selected film, production, and visual storytelling work.",
    image: contentCreation,
    action: "View Projects",
    link: "https://drive.proton.me/urls/A8X4DDBHA4#Cpk40zTUb0h8",
  },
  {
    title: "Commercial Appearances",
    description: "Selected on-camera and commercial work.",
    image: onCamera,
    action: "View Work",
    link: "https://www.youtube.com/watch?v=PqdTSsAR6o8",
  },
];

const Projects = () => {
  const [selectedVenture, setSelectedVenture] = useState<(typeof ventures)[number] | null>(null);

  return (
    <section id="work" className="scroll-mt-24 bg-background px-6 py-16">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation>
          <div className="mb-14 text-center md:mb-20">
            <h2 className="mb-4 font-inter text-5xl font-bold md:text-6xl">VENTURES</h2>
            <div className="mx-auto mb-6 h-0.5 w-24 bg-foreground" />
            <p className="mx-auto max-w-2xl font-sans text-xl text-muted-foreground">
              Businesses and products built from idea through execution.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2">
          {ventures.map((venture, index) => (
            <ScrollAnimation key={venture.title} delay={index * 0.12} direction={index === 0 ? "left" : "right"}>
              <button
                type="button"
                onClick={() => setSelectedVenture(venture)}
                className="group block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                aria-label={`View ${venture.title} project details`}
              >
                <Card className="flex h-full flex-col overflow-hidden border-2 border-border bg-card transition-all duration-500 hover:border-primary hover-lift">
                  <div className="h-72 overflow-hidden md:h-96">
                    <img
                      src={venture.image}
                      alt={`${venture.title} venture`}
                      loading="lazy"
                      className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${venture.imageClassName}`}
                    />
                  </div>
                  <CardContent className="flex flex-grow items-end justify-between gap-6 p-6 md:p-8">
                    <div>
                      <h3 className="font-inter text-3xl font-bold md:text-4xl">{venture.title}</h3>
                      <p className="mt-2 font-sans text-base text-muted-foreground md:text-lg">
                        {venture.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </button>
            </ScrollAnimation>
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <ScrollAnimation direction="left">
            <div className="mb-12 max-w-2xl">
              <h2 className="mb-4 font-inter text-4xl font-bold md:text-5xl">CREATIVE WORK</h2>
              <div className="mb-6 h-0.5 w-24 bg-foreground" />
              <p className="font-sans text-lg text-muted-foreground">
                Selected content, media, and creative work.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {creativeWork.map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 0.08}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                  aria-label={`${item.action}: ${item.title}`}
                >
                  <Card className="flex h-full flex-col overflow-hidden border border-border bg-card transition-colors hover:border-foreground/50">
                    <div className="h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col p-5">
                      <h3 className="font-inter text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 flex-grow font-sans text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <span className="mt-5 inline-flex items-center font-sans text-sm font-semibold">
                        {item.action}
                        <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedVenture !== null} onOpenChange={(open) => !open && setSelectedVenture(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0 sm:rounded-xl">
          {selectedVenture && (
            <div className="sm:grid sm:grid-cols-[0.85fr_1.15fr]">
              <div className="h-44 overflow-hidden sm:h-auto sm:min-h-[420px]">
                <img
                  src={selectedVenture.image}
                  alt={`${selectedVenture.title} project`}
                  className={`h-full w-full ${selectedVenture.imageClassName}`}
                />
              </div>
              <div className="p-5 sm:p-6">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-inter text-3xl font-bold sm:text-4xl">
                    {selectedVenture.title}
                  </DialogTitle>
                  <DialogDescription className="pt-1 font-sans text-base leading-relaxed">
                    {selectedVenture.overview}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedVenture.highlights.map((highlight) => (
                    <div key={highlight} className="border border-border px-3 py-2 font-sans text-sm font-semibold">
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-l-2 border-foreground pl-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    My role
                  </p>
                  <p className="mt-2 font-sans leading-relaxed text-foreground">
                    {selectedVenture.role}
                  </p>
                </div>

                <Button asChild className="mt-6 h-11 bg-foreground px-5 text-background hover:bg-foreground/90">
                  <a href={selectedVenture.link} target="_blank" rel="noopener noreferrer">
                    Visit Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
