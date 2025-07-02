
import { Users, TrendingUp, Network, Award } from "lucide-react";

export function About() {
  const stats = [
    { icon: TrendingUp, label: "Data Projects", value: "25+" },
    { icon: Network, label: "Networks Designed", value: "15+" },
    { icon: Users, label: "Teams Supported", value: "8+" },
    { icon: Award, label: "Certifications", value: "3+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a dedicated data analyst with expertise in Microsoft Excel and network design. 
                My journey combines analytical thinking with technical skills to transform raw data 
                into actionable insights and design efficient network infrastructures.
              </p>
              <p>
                With a strong foundation in data analytics and hands-on experience as a Project 
                Support Officer, I excel at creating complex Excel models and visualizations. My 
                background in procurement and logistics has strengthened my attention to detail 
                and process optimization skills.
              </p>
              <p>
                I'm passionate about leveraging Cisco Packet Tracer for network simulation and 
                design, while using advanced Excel functions to drive data-driven decision making.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg border">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
