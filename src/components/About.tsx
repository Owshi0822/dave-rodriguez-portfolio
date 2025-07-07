
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background and career objectives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Career Objective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Motivated and goal-oriented Electronics Engineering student seeking an entry-level position 
                    to apply academic knowledge in a real-world setting, enhance technical competencies, and gain 
                    hands-on experience in industry-standard tools, systems, and engineering practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><span className="font-medium">Name:</span> Dave C. Rodriguez</p>
                      <p><span className="font-medium">Location:</span> Alabang, Muntinlupa City, Philippines</p>
                    </div>
                    <div>
                      <p><span className="font-medium">Email:</span> davecabrerarodriguez22@gmail.com</p>
                      <p><span className="font-medium">Phone:</span> 0994-919-5797</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Background</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a dedicated Electronics and Communications Engineering student at the Technological 
                    University of the Philippines – Taguig Campus. My academic journey has been marked by 
                    consistent performance as a Dean's Lister from 2021-2023, and active participation in 
                    quiz shows and robotics competitions during 2024-2025.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My expertise spans data analysis using Microsoft Excel, network configuration with Cisco 
                    Packet Tracer, and various programming languages including Python, C++, and MATLAB. I'm 
                    passionate about applying engineering principles to solve real-world problems through 
                    automation and data-driven solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
