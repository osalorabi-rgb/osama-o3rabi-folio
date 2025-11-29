import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Osama, I'd like to connect with you.");
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-6 fade-in">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="h-2 w-full bg-gradient-accent rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8 fade-in-delay-1">
            <div className="p-8 bg-card border-2 border-border rounded-3xl hover:border-purple/50 transition-all hover-lift">
              <h3 className="text-3xl font-bold mb-6 font-heading gradient-text">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12 bg-background border-2 border-border focus:border-purple transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 bg-background border-2 border-border focus:border-purple transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="min-h-[180px] bg-background border-2 border-border focus:border-purple transition-colors resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-purple hover:bg-purple-dark text-primary-foreground font-bold text-lg hover-lift pulse-glow group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Contact & Social */}
          <div className="space-y-8 fade-in-delay-2">
            {/* Quick Contact */}
            <div className="p-8 bg-card border-2 border-border rounded-3xl hover:border-cyan/50 transition-all hover-lift">
              <h3 className="text-3xl font-bold mb-6 font-heading gradient-text">Quick Contact</h3>
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full justify-start text-lg h-16 border-2 border-green-500/50 hover:bg-green-500 hover:text-white transition-all hover-lift group"
                >
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </Button>
                <a href="mailto:contact@o3rabi.com" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-lg h-16 border-2 border-cyan/50 hover:bg-cyan hover:text-secondary-foreground transition-all hover-lift group"
                  >
                    <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    contact@o3rabi.com
                  </Button>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-8 bg-card border-2 border-border rounded-3xl hover:border-orange/50 transition-all hover-lift">
              <h3 className="text-3xl font-bold mb-6 font-heading gradient-text">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-16 flex items-center justify-center bg-gradient-to-br from-purple/20 to-pink/20 border-2 border-purple/30 rounded-2xl hover:scale-110 hover:border-purple transition-all group"
                >
                  <Instagram className="h-7 w-7 text-purple group-hover:scale-125 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-16 flex items-center justify-center bg-gradient-to-br from-cyan/20 to-purple/20 border-2 border-cyan/30 rounded-2xl hover:scale-110 hover:border-cyan transition-all group"
                >
                  <Linkedin className="h-7 w-7 text-cyan group-hover:scale-125 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-16 flex items-center justify-center bg-gradient-to-br from-orange/20 to-cyan/20 border-2 border-orange/30 rounded-2xl hover:scale-110 hover:border-orange transition-all group"
                >
                  <Twitter className="h-7 w-7 text-orange group-hover:scale-125 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
