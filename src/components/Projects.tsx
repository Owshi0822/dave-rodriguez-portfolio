
import { ExternalLink, Github, Cpu, BarChart3, Zap, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "PICS DIMIX",
      description: "IoT + Neural Network Paint Dispenser System that combines hardware automation with machine learning for precise color mixing and dispensing.",
      icon: Cpu,
      technologies: ["IoT", "Neural Networks", "Arduino", "Python", "Machine Learning"],
      category: "IoT & AI",
      status: "Completed",
      year: "2025",
      githubUrl: "https://github.com/davecabrerarodriguez/pics-dimix",
      demoUrl: "https://pics-dimix-demo.netlify.app"
    },
    {
      title: "Procurement Dashboard",
      description: "Automated Purchase Order system utilizing Vibe Coding and Gmail automation to streamline procurement processes and documentation.",
      icon: BarChart3,
      technologies: ["Vibe Coding", "Gmail API", "Automation", "Dashboard", "VBA"],
      category: "Business Automation",
      status: "Completed",
      year: "2024",
      githubUrl: "https://github.com/davecabrerarodriguez/procurement-dashboard",
      demoUrl: "https://procurement-dashboard-demo.netlify.app"
    },
    {
      title: "Electronics Circuit Design",
      description: "Comprehensive circuit design and analysis projects using industry-standard tools for various electronics applications.",
      icon: Zap,
      technologies: ["DipTrace", "MATLAB", "Circuit Analysis", "PCB Design"],
      category: "Electronics Design",
      status: "Ongoing",
      year: "2024",
      githubUrl: "https://github.com/davecabrerarodriguez/electronics-circuit-design",
      demoUrl: "https://circuit-design-portfolio.netlify.app"
    },
    {
      title: "Rural Ordering System",
      description: "Complete ordering system design and simulation for rural communities using modern web technologies and database management.",
      icon: ShoppingCart,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Integration"],
      category: "Web Development",
      status: "Completed",
      year: "2024",
      githubUrl: "https://github.com/davecabrerarodriguez/rural-ordering-system",
      demoUrl: "https://rural-ordering-system.netlify.app"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
  };

  const handleViewDetails = (demoUrl: string) => {
    window.open(demoUrl, '_blank');
  };

  const handleSourceCode = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative engineering projects combining IoT, automation, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <project.icon className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">
                          {project.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleViewDetails(project.demoUrl)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleSourceCode(project.githubUrl)}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
