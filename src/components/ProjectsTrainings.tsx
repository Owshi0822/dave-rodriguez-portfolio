
import { ExternalLink, Github, Cpu, BarChart3, Zap, Database, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectsTrainings() {
  const projects = [
    {
      title: "PICS DIMIX",
      description: "IoT + Neural Network Paint Dispenser System that combines hardware automation with machine learning for precise color mixing and dispensing.",
      icon: Cpu,
      technologies: ["IoT", "Neural Networks", "Arduino", "Python", "Machine Learning"],
      category: "IoT & AI",
      status: "Completed",
      year: "2025"
    },
    {
      title: "Procurement Dashboard",
      description: "Automated Purchase Order system utilizing Vibe Coding and Gmail automation to streamline procurement processes and documentation.",
      icon: BarChart3,
      technologies: ["Vibe Coding", "Gmail API", "Automation", "Dashboard", "VBA"],
      category: "Business Automation",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Electronics Circuit Design",
      description: "Comprehensive circuit design and analysis projects using industry-standard tools for various electronics applications.",
      icon: Zap,
      technologies: ["DipTrace", "MATLAB", "Circuit Analysis", "PCB Design"],
      category: "Electronics Design",
      status: "Ongoing",
      year: "2024"
    },
    {
      title: "Network Infrastructure Design",
      description: "Complete network design and simulation projects using Cisco Packet Tracer for various organizational requirements.",
      icon: Database,
      technologies: ["Cisco Packet Tracer", "Network Design", "Routing", "Switching"],
      category: "Network Engineering",
      status: "Completed",
      year: "2024"
    }
  ];

  const trainings = [
    {
      title: "MATLAB Onramp",
      provider: "MathWorks",
      category: "Programming",
      description: "Comprehensive introduction to MATLAB programming and computational tools"
    },
    {
      title: "Excel Data Analysis",
      provider: "Microsoft",
      category: "Data Analysis",
      description: "Advanced Excel techniques for data analysis and visualization"
    },
    {
      title: "Robotics Training",
      provider: "University Workshop",
      category: "Robotics",
      description: "Hands-on training in robotics systems and automation"
    },
    {
      title: "Project Management",
      provider: "Professional Development",
      category: "Management",
      description: "Essential project management methodologies and best practices"
    },
    {
      title: "IoT Systems Development",
      provider: "Technical Workshop",
      category: "IoT",
      description: "Internet of Things system design and implementation"
    },
    {
      title: "Circuit Design & Analysis",
      provider: "Engineering Seminar",
      category: "Electronics",
      description: "Advanced circuit design principles and analysis techniques"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Programming": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Data Analysis": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Robotics": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Management": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "IoT": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
      "Electronics": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Projects & Trainings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative projects and continuous learning in engineering and technology
          </p>
        </div>

        <Tabs defaultValue="projects" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="trainings">Trainings</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
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
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trainings" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainings.map((training, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{training.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{training.provider}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(training.category)}`}>
                        {training.category}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{training.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
