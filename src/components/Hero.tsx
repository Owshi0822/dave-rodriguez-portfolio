
import { ArrowRight, Shield, BarChart3, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Cybersecurity Analyst &
              <br />
              <span className="text-primary">Data Intelligence Expert</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about threat intelligence analysis and data-driven insights. 
              Bridging the gap between cybersecurity and analytics to protect organizations 
              and drive informed decision-making.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-primary" />
              <span>Threat Intelligence</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span>Data Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Search className="h-4 w-4 text-primary" />
              <span>Security Research</span>
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
