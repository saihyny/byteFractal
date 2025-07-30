"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI-powered recommendations and real-time analytics.",
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Application",
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with telemedicine capabilities.",
      image: "/placeholder.svg?height=300&width=400&text=Healthcare+System",
      tech: ["React", "Python", "MongoDB", "WebRTC"],
      category: "Enterprise Software",
    },
    {
      title: "AI Content Generator",
      description: "Machine learning platform for automated content creation and optimization.",
      image: "/placeholder.svg?height=300&width=400&text=AI+Content+Generator",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      category: "AI/ML Platform",
    },
    {
      title: "Real Estate Portal",
      description: "Property management platform with virtual tours and advanced search capabilities.",
      image: "/placeholder.svg?height=300&width=400&text=Real+Estate+Portal",
      tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      category: "Web Platform",
    },
  ]

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 px-4 md:px-6 min-h-screen flex items-center"
      style={{ backgroundColor: "#0f1419" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8 text-white">Our Work</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing our latest projects and the innovative solutions we've built for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <Github className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
