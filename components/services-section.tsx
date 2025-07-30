"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Brain, Server } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications built with modern frameworks and best practices.",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Intelligent solutions powered by machine learning and artificial intelligence.",
      features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Systems"],
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Scalable infrastructure and deployment solutions for modern applications.",
      features: ["Cloud Architecture", "CI/CD Pipelines", "Monitoring", "Security"],
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack development, AI integration, and scalable solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="animate-card parallax bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 text-sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
