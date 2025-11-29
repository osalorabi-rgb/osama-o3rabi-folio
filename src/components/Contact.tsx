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
    
    // For now, just show a toast. In production, this would send to contact@o3rabi.com
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
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full justify-start text-lg h-14 border-2 hover:bg-green-50 hover:border-green-500 transition-all"
                >
                  <MessageCircle className="mr-3 h-5 w-5 text-green-600" />
                  WhatsApp
                </Button>
                <a href="mailto:contact@o3rabi.com" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-lg h-14 border-2 hover:bg-blue-50 hover:border-blue-500 transition-all"
                  >
                    <Mail className="mr-3 h-5 w-5 text-blue-600" />
                    contact@o3rabi.com
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-gold hover:text-primary-foreground transition-all hover-lift"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-gold hover:text-primary-foreground transition-all hover-lift"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-gold hover:text-primary-foreground transition-all hover-lift"
                >
                  <Twitter className="h-6 w-6" />
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
