
import { BookOpen, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Trainings() {
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
    <section id="trainings" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Trainings & Seminars</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
}
