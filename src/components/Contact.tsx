
import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Input validation constants (matching server-side)
const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Apply character limits
    const maxLength = MAX_LENGTHS[name as keyof typeof MAX_LENGTHS];
    const truncatedValue = maxLength ? value.slice(0, maxLength) : value;
    
    setFormData({
      ...formData,
      [name]: truncatedValue
    });
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.subject.trim()) return "Subject is required";
    if (!formData.message.trim()) return "Message is required";
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address";
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      toast({
        title: "Validation Error",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Sending email with data:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        messageLength: formData.message.length
      });
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        }
      });

      console.log('Response:', { data, error });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Error",
          description: error.message || "Failed to send message. Please try again or contact me directly at davecabrerarodriguez22@gmail.com",
          variant: "destructive",
        });
      } else {
        console.log('Email sent successfully:', data);
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly at davecabrerarodriguez22@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <li>• Data Analysis & Microsoft Excel</li>
                <li>• Network Configuration & Cisco Packet Tracer</li>
                <li>• Automation & Control Systems</li>
                <li>• Project Collaboration</li>
                <li>• Internship & Entry-level Opportunities</li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      maxLength={MAX_LENGTHS.name}
                      required
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      {formData.name.length}/{MAX_LENGTHS.name}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      maxLength={MAX_LENGTHS.email}
                      required
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      {formData.email.length}/{MAX_LENGTHS.email}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project collaboration or opportunity"
                    maxLength={MAX_LENGTHS.subject}
                    required
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    {formData.subject.length}/{MAX_LENGTHS.subject}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..." 
                    rows={5}
                    maxLength={MAX_LENGTHS.message}
                    required
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/{MAX_LENGTHS.message}
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
