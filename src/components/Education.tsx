
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Education() {
  const education = {
    degree: "B.S. in Electronics and Communications Engineering",
    school: "Technological University of the Philippines – Taguig",
    location: "Taguig City, Philippines",
    period: "2021 - Present",
    awards: [
      "Dean's Lister (2021–2023)",
      "Quiz Show Competitions Participant (2024–2025)",
      "Robotics Competitions Participant (2024–2025)"
    ]
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and achievements in Electronics and Communications Engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-primary mt-1" />
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{education.degree}</CardTitle>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{education.school}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Awards & Recognition
                  </h4>
                  <ul className="space-y-2">
                    {education.awards.map((award, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-2">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
