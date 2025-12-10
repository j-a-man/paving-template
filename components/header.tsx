"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Clock, MapPin } from "lucide-react"

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
  const mobileNavLinkClass = "text-2xl font-serif font-bold text-secondary hover:text-primary transition-colors"
  const buttonColor = "bg-primary hover:bg-primary/90 text-white"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-1 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Handy Randy Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-black tracking-tighter text-secondary leading-none">
                HANDY
              </span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary leading-none">
                RANDY
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={navLinkClass}>Home</Link>
            <Link href="/about" className={navLinkClass}>About</Link>
            <Link href="/services" className={navLinkClass}>Services</Link>
            <Link href="/projects" className={navLinkClass}>Projects</Link>
            <Link href="/contact" className={navLinkClass}>Contact</Link>
          </nav>

          {/* RIGHT SIDE (Phone & CTA) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end text-sm">
              <a href="tel:+13128410885" className="font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1">
                <Phone className="w-4 h-4" />
                (312) 841-0885
              </a>
              <span className="text-muted-foreground text-xs">Mon-Fri: 9am-5pm</span>
            </div>
            <Link href="/contact">
              <Button className={`${buttonColor} uppercase tracking-widest font-bold px-6 rounded-none`}>
                Get Started
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-secondary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 lg:hidden animate-in slide-in-from-top-10 duration-300">
          {/* Close button handled by toggle above, but logic requires z-index management or layout shift. 
                 Actually the header stays on top, so the close button is visible. 
                 We just need enough padding top or correct z-index.
             */}

          <nav className="flex flex-col items-center gap-8 text-center">
            <Link href="/" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/projects" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>

          <div className="flex flex-col items-center gap-4 mt-8">
            <a href="tel:+13128410885" className="flex items-center gap-2 text-xl font-bold text-secondary">
              <Phone className="w-5 h-5 text-primary" />
              (312) 841-0885
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>Mon-Fri: 9am-5pm</span>
            </div>

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="bg-primary text-white uppercase tracking-widest font-bold px-8 py-4 text-lg rounded-none mt-4">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}