"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin, Image as ImageIcon } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Custom color for the red accents
  const accentColor = "text-[#7f1d1d]"
  const buttonColor = "bg-[#7f1d1d] hover:bg-[#991b1b]"

  // Consistent container alignment with extra padding
  const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

  return (
    <header className="w-full shadow-sm font-sans">
      {/* --- TOP BAR (Logo & Contact Info) --- */}
      <div className="bg-white py-4 md:py-6">
        <div className={containerClass}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Logo Area */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-16 h-16 bg-gray-100 border border-gray-200 flex items-center justify-center rounded-sm">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                </div>
              </Link>
            </div>

            {/* Contact Details Grid */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <div className="flex items-start gap-3 group">
                <MapPin className={`w-6 h-6 mt-1 ${accentColor}`} />
                <div>
                  <h4 className="font-bold text-foreground text-base leading-none mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground leading-tight">
                    837 Murray Hill Rd, Vestal<br />
                    NY 13850
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Mail className={`w-6 h-6 mt-1 ${accentColor}`} />
                <div>
                  <h4 className="font-bold text-foreground text-base leading-none mb-1">Email</h4>
                  <a href="mailto:krispatel9301@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    krispatel9301@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Phone className={`w-6 h-6 mt-1 ${accentColor}`} />
                <div>
                  <h4 className="font-bold text-foreground text-base leading-none mb-1">Call or Text</h4>
                  <a href="tel:+16077707134" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    (607) 770-7134
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden absolute top-6 right-6 p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR (Navigation & CTA) --- */}
      <div className="bg-black text-white sticky top-0 z-50">
        <div className={containerClass}>
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
              <Link href="/" className="hover:text-primary transition-colors py-2">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors py-2">About Us</Link>
              <Link href="/services" className="hover:text-primary transition-colors py-2">Services</Link>
              <Link href="/projects" className="hover:text-primary transition-colors py-2">Projects</Link>
              <Link href="/contact" className="hover:text-primary transition-colors py-2">Contact Us</Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block h-full">
              <Button
                className={`h-full rounded-none px-8 text-sm font-bold uppercase tracking-widest ${buttonColor} border-none`}
              >
                Free Estimate
              </Button>
            </div>

            {/* Mobile Logo */}
            <div className="md:hidden font-bold text-lg tracking-wider">
              PAVE PRO
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        {isOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <nav className="flex flex-col p-6 space-y-4 text-center">
              <Link href="/" className="text-white hover:text-primary text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="text-white hover:text-primary text-lg font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/services" className="text-white hover:text-primary text-lg font-medium" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/projects" className="text-white hover:text-primary text-lg font-medium" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="/contact" className="text-white hover:text-primary text-lg font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>

              <div className="pt-4 space-y-4">
                <Button className={`w-full py-6 text-lg font-bold uppercase ${buttonColor}`}>
                  Free Estimate
                </Button>
                <div className="pt-6 border-t border-zinc-800 flex flex-col items-center gap-4 text-zinc-400">
                  <a href="tel:+16077707134" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> (607) 770-7134
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Vestal, NY 13850
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}