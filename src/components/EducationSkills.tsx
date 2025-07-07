
import { GraduationCap, Award, Calendar, MapPin, Code, Cpu, Wrench, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function EducationSkills() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "VBA", "MATLAB", "TypeScript"]
    },
    {
      title: "Hardware Platforms",
      icon: Cpu,
      skills: ["Arduino", "Raspberry Pi", "ESP32", "Omron PLC", "Multimeter"]
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["AutoCAD", "Cisco Packet Tracer", "TensorFlow", "DipTrace", "Power BI"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Teamwork", "Communication", "Initiative", "Time Management", "Problem Solving"]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Education & Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and comprehensive skill set in electronics engineering
          </p>
        </div>

        <Tabs defaultValue="education" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="space-y-6">
            <Card>
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
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
