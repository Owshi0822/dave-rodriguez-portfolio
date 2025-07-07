
import { Code, Cpu, Wrench, Users } from "lucide-react";

export function Skills() {
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
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in programming, hardware, and engineering tools
          </p>
        </div>

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
      </div>
    </section>
  );
}
