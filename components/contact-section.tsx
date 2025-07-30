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
    <section id="contact" className="relative py-32 px-6 min-h-screen flex items-center bg-black">
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-white/3 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-6xl md:text-7xl font-bold mb-8 text-white">Let's Build Together</h2>
          <p className="section-content text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into powerful digital solutions? Get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column - Contact Cards */}
          <div className="space-y-6">
            {contactCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <Card
                  key={index}
                  className="animate-card parallax bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{card.title}</h3>
                        <p className="text-lg text-gray-300 font-medium">{card.content}</p>
                        <p className="text-sm text-gray-400">{card.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Quick Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 py-4">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="animate-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Send us a message</CardTitle>
              <p className="text-gray-400">We'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white text-lg">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 h-12 text-lg focus:border-white/40"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white text-lg">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 h-12 text-lg focus:border-white/40"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white text-lg">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-32 text-lg focus:border-white/40"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 font-semibold py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
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
