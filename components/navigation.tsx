"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.9)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "#", targetId: "hero" },
    { name: "About", href: "#about", targetId: "about" },
    { name: "Services", href: "#services", targetId: "services" },
    { name: "Packages", href: "#packages", targetId: "packages" },
    { name: "Team", href: "#team", targetId: "team" },
    { name: "Projects", href: "#projects", targetId: "projects" },
    { name: "Contact", href: "#contact", targetId: "contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled && !isMobileMenuOpen ? "bg-black bg-opacity-50" : ""
        } ${isMobileMenuOpen ? "bg-transparent" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold" style={{ color: "#00b8b0" }}>
              ByteFractal
            </Link>

            <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide uppercase">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.targetId!)}
                  className={`transition-colors duration-200 hover:underline ${
                  isScrolled ? "text-white" : "text-black"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden z-50 text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-2">
                <span
                  className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#c9d2e7] transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.targetId!)}
              className="text-black text-4xl font-bold my-4 transition-all duration-300 ease-in-out"
              style={{
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
