const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display mb-12 text-foreground">
            About Me
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I'm an entrepreneur and content creator passionate about building brands 
              and creating compelling stories. My work spans across multiple industries, 
              from fashion to music, always focusing on authentic storytelling and 
              creative excellence.
            </p>
            <p>
              With a background in content creation and brand development, I've helped 
              launch and grow several ventures, including clothing brands, music labels, 
              and digital media projects. I believe in the power of visual storytelling 
              and its ability to connect with audiences on a deeper level.
            </p>
            <p>
              When I'm not working on my latest project, you can find me exploring new 
              creative ideas, collaborating with talented individuals, and pushing the 
              boundaries of what's possible in the digital space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
