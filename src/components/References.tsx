
import { User, Mail, Phone, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function References() {
  const references = [
    {
      name: "Available upon request",
      position: "Professional References",
      company: "Academic & Industry Contacts",
      description: "References from academic supervisors, internship mentors, and project collaborators are available upon request for verification of academic performance and professional experience."
    }
  ];

  return (
    <section id="references" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">References</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional and academic references available upon request
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {references.map((ref, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <User className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{ref.name}</CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{ref.position}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{ref.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{ref.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
