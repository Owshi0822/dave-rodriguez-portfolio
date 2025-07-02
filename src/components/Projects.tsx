
import { ExternalLink, Github, Network, BarChart3, Database, FileSpreadsheet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Advanced Excel dashboard with pivot tables, dynamic charts, and VBA macros for real-time sales analysis.",
      icon: FileSpreadsheet,
      technologies: ["Microsoft Excel", "VBA", "Pivot Tables", "Power Query"],
      category: "Data Analytics",
      status: "Completed"
    },
    {
      title: "Corporate Network Design",
      description: "Complete network infrastructure design for a medium-sized company using Cisco Packet Tracer.",
      icon: Network,
      technologies: ["Cisco Packet Tracer", "VLAN Configuration", "Routing Protocols", "Network Security"],
      category: "Network Design",
      status: "Completed"
    },
    {
      title: "Financial Forecasting Model",
      description: "Excel-based predictive model using regression analysis and statistical functions for budget planning.",
      icon: BarChart3,
      technologies: ["Excel", "Statistical Analysis", "Data Modeling", "Financial Functions"],
      category: "Financial Analysis",
      status: "In Progress"
    },
    {
      title: "Supply Chain Database",
      description: "Comprehensive database design with Excel integration for tracking procurement and logistics operations.",
      icon: Database,
      technologies: ["Excel", "Access", "SQL", "Data Validation"],
      category: "Business Intelligence",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in data analysis and network design projects
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
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
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
                    View Project
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
      </div>
    </section>
  );
}
