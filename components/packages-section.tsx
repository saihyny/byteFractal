"use client"

import { useState, useEffect, useRef } from "react"
import confetti from "canvas-confetti"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import GetStartedModal from "./ui/get-started-modal"

export default function PackagesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; price: string | number } | null>(null)
  const [promoCode, setPromoCode] = useState("")
  const [discountApplied, setDiscountApplied] = useState(false)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60)

  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const promoRef = useRef(null)

  const initialPrices = {
    basic: 10000,
    pro: 30000,
  }

  const packages = [
    {
      name: "Basic",
      price: discountApplied ? initialPrices.basic * 0.6 : initialPrices.basic,
      description: "Perfect for startups and small businesses",
      features: [
        "Responsive Web Application",
        "Modern UI/UX Design",
        "Basic SEO Optimization",
        "3 Months Support",
        "Mobile Optimization",
        "Contact Form Integration",
      ],
    },
    {
      name: "Pro",
      price: discountApplied ? initialPrices.pro * 0.6 : initialPrices.pro,
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
    },
    {
      name: "E‑Commerce",
      price: "Custom Pricing",
      description: "For scalable e-commerce solutions",
      features: [
        "Enterprise-Grade Architecture",
        "E-Commerce Web App with Admin",
        "Inventory and Payment Integration",
        "Microservices / Scalable Backend",
        "AI-Powered Recommendations",
        "12 Months Support",
        "Security Audit & Optimization",
      ],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          // Reset timer for another 24 hours
          return 24 * 60 * 60
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (promoCode.length === 8) {
      setDiscountApplied(true)
      const duration = 3 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      }, 250)
    } else {
      setDiscountApplied(false)
    }
  }, [promoCode])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          )
        }
      })

      gsap.fromTo(
        promoRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: promoRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0")
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
    const s = String(seconds % 60).padStart(2, "0")
    return `${h}:${m}:${s}`
  }

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 md:px-6"
      style={{ backgroundColor: "#0a0e12" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e12] via-[#0a0e12]/80 to-[#0a0e12] opacity-70"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Find Your Perfect Plan
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Clean, modern, and minimal packages designed for businesses of all sizes.
          </p>
        </div>

        <div ref={promoRef} className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Limited Time Offer – <span className="text-green-400">40% OFF</span>
          </h3>
          <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-6">
            <p className="text-gray-300">Offer ends in:</p>
            <div className="bg-gray-800/50 border border-gray-700/60 rounded-lg px-4 py-2 text-2xl md:text-3xl font-mono font-bold text-white tracking-widest">
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={e => setPromoCode(e.target.value)}
              maxLength={8}
              className="w-full max-w-md mx-auto bg-gray-900/60 border border-gray-700/50 rounded-lg px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/80 focus:border-green-400 transition-all duration-300 shadow-inner"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              ref={el => {
                cardsRef.current[index] = el
              }}
            >
              <Card
                className={cn(
                  "bg-gray-900/40 border border-gray-700/50 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-gray-500/60 hover:-translate-y-2 flex flex-col h-full"
                )}
              >
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-semibold text-white mb-3">{pkg.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={cn(
                        "text-4xl font-bold text-white transition-all duration-300",
                        discountApplied && (pkg.name === "Basic" || pkg.name === "Pro")
                          ? "text-green-400"
                          : ""
                      )}
                    >
                      {typeof pkg.price === "number"
                        ? `₹${pkg.price.toLocaleString("en-IN")}`
                        : pkg.price}
                    </span>
                    {discountApplied &&
                      (pkg.name === "Basic" || pkg.name === "Pro") && (
                        <span className="text-xl font-medium text-gray-400 line-through">
                          ₹
                          {initialPrices[
                            pkg.name.toLowerCase() as keyof typeof initialPrices
                          ].toLocaleString("en-IN")}
                        </span>
                      )}
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <ul className="space-y-3 text-gray-300">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 mt-auto">
                  <Button
                    onClick={() => {
                      setSelectedPackage({ name: pkg.name, price: pkg.price })
                      setIsModalOpen(true)
                    }}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-lg transition-all duration-300 group"
                  >
                    Get Started{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackage?.name}
        packagePrice={selectedPackage?.price}
      />
    </section>
  )
}
