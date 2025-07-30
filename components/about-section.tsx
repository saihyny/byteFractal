"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Rocket, Shield, Brain } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Expertise",
      description: "Deep technical knowledge across modern frameworks and technologies",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge solutions that push the boundaries of what's possible",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security practices built into every solution",
    },
    {
      icon: Brain,
      title: "Reliability",
      description: "Robust, scalable systems designed for long-term success",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#0f1419" }}>
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">About ByteFractal</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Engineering the future of digital innovation with precision and creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="relative">
            <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-md border border-white/10 overflow-hidden">
              <Image
                src="/about.png"
                alt="ByteFractal Office"
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Building Tomorrow's Digital Infrastructure</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              At ByteFractal, we combine cutting-edge technology with meticulous craftsmanship to deliver software
              solutions that scale with your ambitions. Our team of expert developers, designers, and strategists work
              together to transform complex challenges into elegant, powerful applications.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              From AI-powered platforms to enterprise-grade web applications, we engineer solutions that don't just meet
              today's requirements—they anticipate tomorrow's opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
