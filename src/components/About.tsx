import ScrollAnimation from "./ScrollAnimation";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-16 bg-background scroll-animate">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation direction="left">
            <h2 className="text-5xl md:text-6xl font-inter font-bold mb-12 text-foreground">
              INTRO
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2} direction="right">
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
              <p>
                Osama Orabi, also known as Osama Alorabi, is a Yemeni entrepreneur, founder of Wahib, business builder, and business content creator working at the intersection of entrepreneurship and creativity.
              </p>
              <p>
                He works across e-commerce, startup building, and operations, with experience in brand development, social media, and marketing, while actively creating content and leading media production. More recently, his work has expanded further into product development, turning ideas into practical products and market-ready concepts.
              </p>
              <p>
                This mix allows him to build ventures, develop brands, and help businesses align their market presence with the strength of their actual operations through Business Representation.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
