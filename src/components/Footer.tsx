import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t-2 border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground text-lg">
              © {new Date().getFullYear()} <span className="font-bold gradient-text">Osama Orabi</span>
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground text-lg">
            <span>Built with</span>
            <Heart className="w-5 h-5 text-pink fill-pink animate-pulse" />
            <span>& passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
