import ScrollAnimation from "./ScrollAnimation";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background scroll-animate">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-6xl font-inter font-bold mb-12 text-foreground">
              INTRO
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Osama Orabi is an entrepreneur and multidisciplinary creative who turns ideas into practical, high-impact projects.
              </p>
              <p>
                He works across e-commerce and startup building and operations, with experience in brand development, social media, and marketing strategy, while actively creating content and leading media production.
              </p>
              <p>
                This mix gives him a balanced blend of creative vision and technical understanding.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
