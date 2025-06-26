
import { Users, TrendingUp, Shield, Award } from "lucide-react";

export function About() {
  const stats = [
    { icon: Shield, label: "Security Projects", value: "15+" },
    { icon: TrendingUp, label: "Data Analyses", value: "50+" },
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
                I'm a dedicated cybersecurity professional with a passion for threat intelligence 
                and data analytics. My journey combines technical expertise with analytical thinking 
                to identify, assess, and mitigate security threats.
              </p>
              <p>
                With a strong foundation in data analytics and hands-on experience as a Project 
                Support Officer, I bring a unique perspective to cybersecurity challenges. My 
                background in procurement and logistics has strengthened my attention to detail 
                and process optimization skills.
              </p>
              <p>
                I'm committed to continuous learning and staying ahead of emerging threats while 
                leveraging data-driven insights to build robust security frameworks.
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
