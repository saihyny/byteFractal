"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@bytefractal.com",
      description: "Send us a message",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      description: "Call us anytime",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Mumbai, India",
      description: "Visit our office",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Fri: 9AM - 6PM",
      description: "We're here to help",
    },
  ]

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 md:px-6 min-h-screen flex items-center bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8 text-white">Let's Build Together</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into powerful digital solutions? Get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            {contactCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <Card
                  key={index}
                  className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{card.title}</h3>
                        <p className="text-base md:text-lg text-gray-300 font-medium">{card.content}</p>
                        <p className="text-sm text-gray-400">{card.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 py-3">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>

          <Card className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-white">Send us a message</CardTitle>
              <p className="text-gray-400 text-sm md:text-base">We'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white text-base">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 h-12 text-base focus:border-white/40"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 h-12 text-base focus:border-white/40"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-28 text-base focus:border-white/40"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 font-semibold py-3 text-base rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
