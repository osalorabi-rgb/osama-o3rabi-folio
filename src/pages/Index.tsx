import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import { HOME_SEO, HOME_STRUCTURED_DATA } from "@/lib/seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageSeo {...HOME_SEO} structuredData={HOME_STRUCTURED_DATA} />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
