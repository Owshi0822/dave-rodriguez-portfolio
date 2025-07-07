
import { Users, TrendingUp, Award, MapPin, Phone, Mail } from "lucide-react";

export function About() {
  const stats = [
    { icon: Award, label: "Dean's Lister", value: "2021-2023" },
    { icon: Users, label: "Competitions", value: "Quiz & Robotics" },
    { icon: TrendingUp, label: "Projects", value: "IoT & Automation" },
    { icon: Award, label: "Certifications", value: "Multiple" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "davecabrerarodriguez22@gmail.com" },
    { icon: Phone, label: "Phone", value: "0994-919-5797" },
    { icon: MapPin, label: "Location", value: "Alabang, Muntinlupa City, Philippines" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Dave</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a dedicated Electronics and Communications Engineering student at the 
                Technological University of the Philippines – Taguig Campus. My passion lies 
                in bridging the gap between theoretical knowledge and practical applications 
                in engineering systems.
              </p>
              <p>
                With hands-on experience as a Project Support Officer Intern at CMR Philippines Inc., 
                I've developed strong skills in procurement coordination, documentation support, 
                and engineering collaboration. My academic achievements include being a Dean's 
                Lister from 2021-2023 and active participation in quiz shows and robotics competitions.
              </p>
              <p>
                I'm passionate about IoT systems, automation, and leveraging technology to solve 
                real-world problems. My technical skills span from programming languages like 
                Python and C++ to hardware platforms like Arduino and Raspberry Pi.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <info.icon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{info.label}:</span>
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg border">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
