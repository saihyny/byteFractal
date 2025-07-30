"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown } from "lucide-react"

export default function PackagesSection() {
  const packages = [
    {
      icon: Star,
      name: "Basic",
      price: "₹25,000",
      period: "per project",
      description: "Perfect for startups and small businesses",
      features: [
        "Responsive Web Application",
        "Modern UI/UX Design",
        "Basic SEO Optimization",
        "3 Months Support",
        "Mobile Optimization",
        "Contact Form Integration",
      ],
      popular: false,
    },
    {
      icon: Zap,
      name: "Pro",
      price: "₹75,000",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Full-Stack Web Application",
        "Custom Backend Development",
        "Database Integration",
        "6 Months Support",
        "Advanced SEO",
        "Analytics Integration",
        "Payment Gateway",
        "Admin Dashboard",
      ],
      popular: true,
    },
    {
      icon: Crown,
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large-scale applications",
      features: [
        "Enterprise-Grade Architecture",
        "Microservices Design",
        "AI/ML Integration",
        "12 Months Support",
        "DevOps & Deployment",
        "Security Audit",
        "Performance Optimization",
        "24/7 Monitoring",
      ],
      popular: false,
    },
  ]

  return (
    <section
      id="packages"
      className="relative py-32 px-6 min-h-screen flex items-center"
      style={{ backgroundColor: "#0f1419" }}
    >
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-6xl md:text-7xl font-bold mb-8 text-white">Transparent Packages</h2>
          <p className="section-content text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your project needs with transparent pricing and comprehensive features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <Card
                key={index}
                className={`animate-card parallax bg-white/5 backdrop-blur-md border transition-all duration-500 group overflow-hidden relative ${
                  pkg.popular
                    ? "border-white/30 hover:border-white/40 scale-105"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-8 pt-12 relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white mb-4">{pkg.name}</CardTitle>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">{pkg.price}</div>
                    <p className="text-gray-400">{pkg.period}</p>
                    <p className="text-gray-300 mt-4">{pkg.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="h-5 w-5 text-white mr-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 font-semibold py-4 text-lg rounded-xl transition-all duration-300 transform group-hover:scale-105">
                    Get Started
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
