"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-full bg-[#1e1e2f] text-white">
      {/* Navigation */}
      <header className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Agency Logo" width={150} height={40} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="#services" className="hover:text-gray-300">
              Services
            </Link>
            <Link href="#pricing" className="hover:text-gray-300">
              Pricing
            </Link>
            <Link href="#blog" className="hover:text-gray-300">
              Blog
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#1e1e2f] transition-colors">
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-[#1e1e2f] border-t border-gray-700 mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="hover:text-gray-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#services" className="hover:text-gray-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#pricing" className="hover:text-gray-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#blog" className="hover:text-gray-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <button className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#1e1e2f] transition-colors w-full mt-2">
                CONTACT
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-[#ff6b5b] uppercase tracking-wider">MODERN STUDIO</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              We're Help
              <br />
              To Build Your
              <br />
              Dream Project
            </h1>
            <p className="text-gray-300 max-w-md">
              Agency provides a full service range including technical skills, design, business understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#ff6b5b] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
                HOW WE WORK
              </button>
              <button className="text-white px-8 py-3 hover:underline">Contact Us</button>
            </div>
            <div className="flex items-center gap-4 mt-16">
              <div className="bg-[#ff6b5b] rounded-full w-12 h-12 flex items-center justify-center overflow-hidden">
                <Image
                  src="/profile.avif?height=40&width=40"
                  alt="Testimonial avatar"
                  width={70}
                  height={70}
                  className="rounded-full object-cover w-12 h-12"
                />
              </div>
              <div>
                <p className="text-sm text-gray-300">"Put themselves in the merchant's shoes"</p>
                <p className="font-medium">Meta Inc.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image src="/pic.png" alt="Hero Illustration" fill className="object-contain" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
