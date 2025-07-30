"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Brain, Server } from "lucide-react"
import Link from "next/link"
import { useServicePageAnimations } from "@/app/animations/useServicePageAnimations"

export default function Services() {
  useServicePageAnimations();
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications built with modern frameworks and best practices.",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development"],
      link: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      link: "/services/mobile-apps"
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Intelligent solutions powered by machine learning and artificial intelligence.",
      features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Systems"],
      link: "/services/ai-ml"
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Scalable infrastructure and deployment solutions for modern applications.",
      features: ["Cloud Architecture", "CI/CD Pipelines", "Monitoring", "Security"],
      link: "/services/devops"
    },
  ]

  return (
    <div className="py-16 md:py-20 px-4 md:px-6 bg-black min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack development, AI integration, and scalable solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="service-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} passHref>
                    <Button className="w-full mt-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 text-sm">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-16">
          <Link href="/" passHref>
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 text-sm">
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
