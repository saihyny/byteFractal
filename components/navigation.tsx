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
            <Link
              href="/"
              className="text-2xl font-bold"
              style={{ fontFamily: "'Sarpanch', sans-serif" }}
            >
              <span style={{ color: "#867ADF" }}>Byte</span>
              <span
              style={{
                color: isScrolled || isMobileMenuOpen ? "#FFFFFF" : "#FFFFFF",
                transition: "color 0.3s",
              }}
              >
              Fractal
              </span>
            </Link>
            <link
              href="https://fonts.googleapis.com/css?family=Sarpanch:700&display=swap"
              rel="stylesheet"
            />

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
              className="md:hidden z-50 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 space-y-2">
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ml-auto ${
                    isMobileMenuOpen
                      ? "w-full rotate-45 translate-y-2.5"
                      : "w-[40%]"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-white transition-opacity duration-300 ml-auto ${
                    isMobileMenuOpen ? "opacity-0" : "w-[70%]"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ml-auto ${
                    isMobileMenuOpen
                      ? "w-full -rotate-45 -translate-y-2.5"
                      : "w-full"
                  }`}
                ></span>
              </div>
            </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#c9d2e7] transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.targetId!)}
              className="text-black text-4xl font-bold my-4"
              style={{
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: isMobileMenuOpen ? "translateY(0) rotate(0)" : "translateY(30px) rotate(2deg)",
                opacity: isMobileMenuOpen ? 1 : 0,
                transitionDelay: `${index * 75}ms`,
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
