"use client"

import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Careers", href: "#" },
  ]

  return (
    <footer className="relative py-16 px-6 bg-black border-t border-white/10">
      <div className="container mx-auto">
        <div className="text-center">
          {/* Logo */}
          <Link href="/" className="inline-block text-4xl font-bold text-white mb-8">
            ByteFractal
          </Link>

          {/* Links */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400">© {new Date().getFullYear()} ByteFractal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
