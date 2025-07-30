"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Developer",
      techStack: ["React", "Node.js", "Python", "AWS"],
      image: "/placeholder.svg?height=300&width=300&text=Alex+Chen",
      description: "Full-stack architect with 8+ years building scalable applications",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      techStack: ["React", "TypeScript", "Next.js", "GSAP"],
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
      description: "UI/UX specialist creating beautiful, performant user experiences",
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Engineer",
      techStack: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"],
      image: "/placeholder.svg?height=300&width=300&text=Mike+Rodriguez",
      description: "Infrastructure expert building robust, scalable backend systems",
    },
    {
      name: "Emily Davis",
      role: "AI/ML Engineer",
      techStack: ["Python", "TensorFlow", "PyTorch", "FastAPI"],
      image: "/placeholder.svg?height=300&width=300&text=Emily+Davis",
      description: "Machine learning specialist developing intelligent solutions",
    },
  ]

  return (
    <section id="team" className="relative py-32 px-6 min-h-screen flex items-center bg-black">
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-white/3 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-6xl md:text-7xl font-bold mb-8 text-white">Meet the Builders</h2>
          <p className="section-content text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our talented team of developers, designers, and engineers who bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="animate-card parallax bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs border border-white/10"
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
