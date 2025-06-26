
import { ExternalLink, Github, Shield, BarChart3, Database, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Threat Intelligence Dashboard",
      description: "Interactive dashboard for visualizing security threats and attack patterns using real-time data feeds.",
      icon: Shield,
      technologies: ["Python", "React", "D3.js", "API Integration"],
      category: "Cybersecurity",
      status: "In Progress"
    },
    {
      title: "Supply Chain Risk Analysis",
      description: "Data analytics project analyzing procurement patterns and identifying potential supply chain vulnerabilities.",
      icon: BarChart3,
      technologies: ["Python", "Pandas", "Tableau", "SQL"],
      category: "Data Analytics",
      status: "Completed"
    },
    {
      title: "Security Incident Correlation",
      description: "Machine learning model to correlate security incidents and predict potential threat escalation.",
      icon: Search,
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Jupyter"],
      category: "Machine Learning",
      status: "In Progress"
    },
    {
      title: "Operational Efficiency Analysis",
      description: "Comprehensive analysis of operational processes with recommendations for efficiency improvements.",
      icon: Database,
      technologies: ["Excel", "Power BI", "SQL", "Statistical Analysis"],
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
            A showcase of my work in cybersecurity analysis and data-driven insights
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
