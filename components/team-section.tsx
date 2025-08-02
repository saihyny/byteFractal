"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "samuel",
      role: "Founder & Lead Developer",
      techStack: ["React", "Node.js", "Python", "Next.js"],
      image: "/placeholder.svg?height=300&width=300&text=Alex+Chen",
      description: "Full-stack architect with 3+ years building scalable applications",
    },
      {
      name: "Stains Gipson Paul",
      role: "AI/ML Engineer",
      techStack: ["Python", "TensorFlow", "PyTorch", "FastAPI"],
      image: "/placeholder.svg?height=300&width=300&text=Emily+Davis",
      description: "Machine learning specialist developing intelligent solutions",
    },
    {
      name: "Chaitanya",
      role: "Frontend Developer & product designer",
      techStack: ["React", "TypeScript", "Next.js", "GSAP"],
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
      description: "Creative frontend developer crafting beautiful, interactive user experiences",
    },
    {
      name: "Charan",
      role: "Backend Engineer",
      techStack: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"],
      image: "/placeholder.svg?height=300&width=300&text=Mike+Rodriguez",
      description: "Infrastructure expert building robust, scalable backend systems",
    },
  
    {
      name: "Rebecca",
      role: "Marketing Strategist",
      techStack: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      image: "/placeholder.svg?height=300&width=300&text=John+Smith",
      description: "Marketing strategist driving brand awareness and engagement",
    },
    {
      name: "augustine paul",
      role: "Data Scientist",
      techStack: ["Python", "R", "SQL", "Tableau"],
      image: "/placeholder.svg?height=300&width=300&text=Augustine+Paul",
      description: "Data scientist specializing in predictive modeling and data visualization",
    }
  ]

  return (
    <section id="team" className="relative py-16 md:py-24 px-4 md:px-6 min-h-screen flex items-center bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8 text-white">Meet the Builders</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our talented team of developers, designers, and engineers who bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{member.name}</h3>
                <p className="text-sm text-gray-300 font-semibold mb-3 md:mb-4">{member.role}</p>
                <p className="text-xs md:text-sm text-gray-400 mb-4 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
