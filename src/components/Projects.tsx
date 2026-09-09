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
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";
import ajjadImage from "@/assets/asom.jpg";
import wahibImage from "@/assets/wahib.png";
import profileImage from "@/assets/profile.jpg";
import musicLabel from "@/assets/princestory-logo.jpg";
import onCamera from "@/assets/on-camera.jpg";
import contentCreation from "@/assets/content-creation.jpg";
import wahibGraduation from "@/assets/wahib-gallery/wahib-graduation.png";
import wahibProduct from "@/assets/wahib-gallery/wahib-product.png";
import wahibApps from "@/assets/wahib-gallery/wahib-apps.jpg";
import wahibPress from "@/assets/wahib-gallery/wahib-press.png";
import ajjadProduct from "@/assets/ajjad-gallery/ajjad-product.jpg";
import ajjadPackaging from "@/assets/ajjad-gallery/ajjad-packaging.jpg";
import ajjadFounders from "@/assets/ajjad-gallery/ajjad-founders.jpg";
import ajjadRetail from "@/assets/ajjad-gallery/ajjad-retail.jpg";
import ajjadActivation from "@/assets/ajjad-gallery/ajjad-activation.jpg";
import ajjadBag from "@/assets/ajjad-gallery/ajjad-bag.jpg";

const ventures = [
  {
    title: "Wahib",
    description: "Social Gifting Platform",
    image: wahibImage,
    imageClassName: "object-contain bg-neutral-950 p-10 md:p-14",
    link: "https://getwahib.com/",
    category: "Social Gifting Platform",
    overview: "A social gifting platform built around a simple problem: people want to give better gifts without guessing.",
    role: "Wahib lets people share what they genuinely want or need, while friends and family can coordinate gifts privately.",
    note: "Currently being developed for the GCC market.",
    highlights: ["Top 36 High-Potential Team - Create Apps Championship + Accelerator"],
    gallery: [wahibGraduation, wahibProduct, wahibApps, wahibPress],
  },
  {
    title: "Ajjad",
    description: "E-commerce Fashion Brand",
    image: ajjadImage,
    imageClassName: "object-cover",
    link: "https://ajjad.com/",
    category: "E-commerce Fashion Brand",
    overview: "One of my first real business playgrounds.",
    role: "I built Ajjad through product, branding, marketing, content, customer experience, and day-to-day operations.",
    note: "More than a fashion brand, it became where I learned what business actually looks like outside PowerPoint slides.",
    highlights: [],
    gallery: [ajjadRetail, ajjadProduct, ajjadPackaging, ajjadFounders, ajjadActivation, ajjadBag],
  },
];

const creativeWork = [
  {
    title: "Personal Brand",
    description: "Content on business, entrepreneurship, branding, and marketing.",
    image: null,
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
  const [selectedGallery, setSelectedGallery] = useState<(typeof ventures)[number] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (venture: (typeof ventures)[number]) => {
    setSelectedVenture(null);
    setGalleryIndex(0);
    setSelectedGallery(venture);
  };

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
                    {item.image && (
                      <div className="h-44 overflow-hidden">
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
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

      <div className="-mx-6 mt-24 bg-foreground px-6 py-16 text-background md:mt-32 md:py-20">
        <div className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="max-w-3xl font-inter text-3xl font-bold leading-tight md:text-5xl">
            Strong businesses sometimes look weaker than they really are.
          </p>
          <Button
            asChild
            variant="outline"
            className="h-12 shrink-0 border-background/70 bg-transparent px-5 text-background hover:bg-background hover:text-foreground"
          >
            <Link to="/business-representation">
              Explore Business Representation
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
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
                  <DialogDescription className="pt-1 font-sans text-base font-semibold leading-relaxed text-foreground">
                    {selectedVenture.category}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-4 font-sans leading-relaxed text-foreground">
                  <p>{selectedVenture.overview}</p>
                  <p>{selectedVenture.role}</p>
                  <p className="text-muted-foreground">{selectedVenture.note}</p>
                </div>

                {selectedVenture.highlights.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedVenture.highlights.map((highlight) => (
                      <div key={highlight} className="border border-border px-3 py-2 font-sans text-sm font-semibold">
                        {highlight}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="h-11 bg-foreground px-5 text-background hover:bg-foreground/90">
                    <a href={selectedVenture.link} target="_blank" rel="noopener noreferrer">
                      Explore {selectedVenture.title}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  {selectedVenture.gallery && (
                    <Button
                      type="button"
                      variant="outline"
                      className="h-11 px-5"
                      onClick={() => openGallery(selectedVenture)}
                    >
                      View Gallery
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={selectedGallery !== null} onOpenChange={(open) => !open && setSelectedGallery(null)}>
        <DialogContent className="max-w-5xl overflow-hidden bg-neutral-950 p-0 text-white sm:rounded-xl">
          {selectedGallery?.gallery && (
            <div>
              <div className="flex h-[54vh] min-h-[320px] items-center justify-center bg-neutral-950 p-4 sm:h-[66vh]">
                <img
                  src={selectedGallery.gallery[galleryIndex]}
                  alt={`${selectedGallery.title} gallery image ${galleryIndex + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between border-t border-white/15 px-5 py-4 sm:px-7">
                <p className="font-sans text-sm text-white/70">
                  {galleryIndex + 1} / {selectedGallery.gallery.length}
                </p>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="border-white/30 bg-transparent text-white hover:bg-white hover:text-neutral-950"
                    aria-label="Previous gallery image"
                    onClick={() => setGalleryIndex((index) => (index - 1 + selectedGallery.gallery.length) % selectedGallery.gallery.length)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="border-white/30 bg-transparent text-white hover:bg-white hover:text-neutral-950"
                    aria-label="Next gallery image"
                    onClick={() => setGalleryIndex((index) => (index + 1) % selectedGallery.gallery.length)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
