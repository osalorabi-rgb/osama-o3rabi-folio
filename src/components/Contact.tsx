import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "./ScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mvgjevnz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-background px-6 py-16">
      <div className="container mx-auto max-w-3xl">
        <ScrollAnimation direction="down">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-5 font-inter text-4xl font-bold md:text-5xl">CONTACT</h2>
            <p className="mx-auto max-w-xl font-sans text-lg text-muted-foreground">
              For business reviews, collaborations, or a direct conversation.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <div className="space-y-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="sr-only">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="h-12 bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="h-12 bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="sr-only">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
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
              className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold"
            >
              Send Message
            </Button>
          </form>

          {/* Social Media */}
          <div className="pt-8 border-t border-border">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/o3rabi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@o3rabi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/o3rabi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/osama-alorabi-b32479271/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@o3rabi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://x.com/o3rabii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
