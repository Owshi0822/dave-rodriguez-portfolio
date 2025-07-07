
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "davecabrerarodriguez22@gmail.com",
      href: "mailto:davecabrerarodriguez22@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0994-919-5797",
      href: "tel:0994-919-5797"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "dave-rodriguez-0b2034256",
      href: "https://linkedin.com/in/dave-rodriguez-0b2034256"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Owshi0822",
      href: "https://github.com/Owshi0822"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Alabang, Muntinlupa City, Philippines",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities in electronics engineering and technology projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <info.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Electronics & Communications Engineering</li>
                <li>• IoT System Development</li>
                <li>• Automation & Control Systems</li>
                <li>• Circuit Design & Analysis</li>
                <li>• Project Collaboration</li>
                <li>• Internship & Entry-level Opportunities</li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Project collaboration or opportunity" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell me about your project or opportunity..." rows={5} />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
