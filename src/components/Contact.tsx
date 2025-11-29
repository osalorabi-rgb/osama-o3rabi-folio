import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Instagram, Linkedin, Twitter } from "lucide-react";
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
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="h-0.5 w-24 bg-foreground mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6 fade-in-delay-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12 bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12 bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[160px] bg-background border-border resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold transition-all hover-lift"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 fade-in-delay-2">
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Osama Orabi is an entrepreneur and creative mind who builds simple ideas into real projects. He works across content creation, digital identity, and creative ventures, with experience in brand building, media projects, and commercial appearances.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold">Quick Contact</h3>
              <div className="space-y-3">
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full justify-start h-12 border-border hover:bg-accent transition-all"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </Button>
                <a href="mailto:contact@o3rabi.com" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 border-border hover:bg-accent transition-all"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    contact@o3rabi.com
                  </Button>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-12 flex items-center justify-center bg-card border border-border rounded-md hover:bg-accent transition-all hover-lift"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-12 flex items-center justify-center bg-card border border-border rounded-md hover:bg-accent transition-all hover-lift"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-12 flex items-center justify-center bg-card border border-border rounded-md hover:bg-accent transition-all hover-lift"
                >
                  <Twitter className="h-5 w-5" />
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
