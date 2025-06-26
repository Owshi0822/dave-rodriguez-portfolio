
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Certifications() {
  const certifications = [
    {
      title: "Data Analytics Certificate",
      issuer: "Professional Certification Body",
      date: "2023",
      description: "Comprehensive certification covering statistical analysis, data visualization, and business intelligence tools.",
      skills: ["Statistical Analysis", "Data Visualization", "Business Intelligence", "Python/R"],
      verified: true
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Security Institute",
      date: "2023",
      description: "Foundation certification in cybersecurity principles and threat analysis.",
      skills: ["Threat Analysis", "Security Frameworks", "Risk Assessment"],
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cybersecurity and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  {cert.verified && (
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Verified
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed {cert.date}</span>
                </div>
                
                <p className="text-muted-foreground">{cert.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
