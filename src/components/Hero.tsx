
import { ArrowRight, Cpu, Code, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Dave C. Rodriguez
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold">
              Electronics & Communications Engineering Student
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto">
              Motivated and goal-oriented Electronics Engineering student seeking an entry-level position 
              to apply academic knowledge in a real-world setting, enhance technical competencies, 
              and gain hands-on experience in industry-standard tools, systems, and engineering practices.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Cpu className="h-4 w-4 text-primary" />
              <span>Electronics Engineering</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Code className="h-4 w-4 text-primary" />
              <span>Programming</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Wrench className="h-4 w-4 text-primary" />
              <span>Hardware Systems</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center space-x-2">
              <span>View My Work</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
