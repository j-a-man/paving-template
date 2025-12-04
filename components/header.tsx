"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClass = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-md py-2"
    : "bg-white py-4"

  const navLinkClass = "text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors text-foreground"
  const mobileNavLinkClass = "text-2xl font-serif font-bold text-white hover:text-primary transition-colors"
  const buttonColor = scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-primary hover:bg-primary/90 text-white"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">

          {/* Logo Area */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-sm">
                <Image
                  src="/nick.png"
                  alt="Nuclearnick Construction Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tighter text-black group-hover:text-primary transition-colors">
                  NUCLEARNICK
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/60 font-medium">
                  Construction
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={navLinkClass}>Home</Link>
            <Link href="/about" className={navLinkClass}>About</Link>
            <Link href="/services" className={navLinkClass}>Services</Link>
            <Link href="/projects" className={navLinkClass}>Projects</Link>
            <Link href="/contact" className={navLinkClass}>Contact</Link>
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end mr-4">
              <a href="tel:+12193588794" className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> (219) 358-8794
              </a>
              <span className="text-xs text-muted-foreground">24/7 Service (Closed Sun)</span>
            </div>
            <Link href="/contact">
              <Button className={`hidden md:flex uppercase tracking-widest font-bold px-6 rounded-none ${buttonColor}`}>
                Get Quote
              </Button>
            </Link>
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-secondary/95 flex flex-col items-center justify-center lg:hidden">
          <nav className="flex flex-col items-center gap-8 text-center">
            <Link href="/" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/projects" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Contact</Link>

            <div className="mt-8 w-full max-w-xs space-y-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full py-6 text-lg font-bold uppercase bg-primary text-white rounded-none">
                  Free Estimate
                </Button>
              </Link>
              <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-4 text-white/60">
                <a href="tel:+12193588794" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> (219) 358-8794
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Indiana
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 24/7 (Closed Sun)
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}