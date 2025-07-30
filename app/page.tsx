"use client"

import { usePageAnimations } from "@/app/animations/useAnimations"
import ScrollProvider from "@/components/scroll-provider"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import dynamic from "next/dynamic"

const AboutSection = dynamic(() => import("@/components/about-section"))
const ServicesSection = dynamic(() => import("@/components/services-section"))
import PackagesSection from "@/components/packages-section"
const TeamSection = dynamic(() => import("@/components/team-section"))
const ProjectsSection = dynamic(() => import("@/components/projects-section"))
const ContactSection = dynamic(() => import("@/components/contact-section"))
const Footer = dynamic(() => import("@/components/footer"))

export default function Home() {
  usePageAnimations()

  return (
    <ScrollProvider>
      <main className="relative bg-black text-white">
        <Navigation />
        <section className="hero-sticky w-full h-screen overflow-hidden" style={{ position: "sticky", top: "0" }}>
          <Hero />
        </section>

        {/* Content sections */}
        <div className="content-sections relative z-10">
          <section id="about">
            <AboutSection />
          </section>
          <section id="services">
            <ServicesSection />
          </section>
          <section id="packages">
            <PackagesSection />
          </section>
          <section id="team">
            <TeamSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
          <Footer />
        </div>
      </main>
    </ScrollProvider>
  )
}
