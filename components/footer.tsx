"use client"

import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight, Droplets } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-primary/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-primary">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white uppercase leading-none">Victor</span>
                <span className="text-xs font-bold tracking-widest text-primary leading-none uppercase">Pool Screen Repair</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed text-sm">
              Professional pool enclosure rescreening and repair. We use high-quality materials to keep your pool area bug-free and looking new.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white border-b-2 border-primary/30 inline-block pb-1">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-white/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white border-b-2 border-primary/30 inline-block pb-1">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Full Rescreening", path: "/rescreening" },
                { name: "Panel Repair", path: "/panel-repair" },
                { name: "Door Hardware", path: "/hardware" },
                { name: "Pet Screens", path: "/specialty-screens" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-white/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white border-b-2 border-primary/30 inline-block pb-1">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 mt-1">
                  <MapPin className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block font-bold text-white text-xs uppercase tracking-wider mb-1">Service Area</span>
                  <span className="text-white/70 text-sm leading-relaxed">
                    Sarasota, Bradenton,<br /> Venice & Surrounding Areas
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 mt-1">
                  <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block font-bold text-white text-xs uppercase tracking-wider mb-1">Phone</span>
                  <a href="tel:9415652667" className="text-white/70 hover:text-primary transition-colors text-sm">
                    (941) 565-2667
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 mt-4">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Victor Pool Screen Repair. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-primary text-xs transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
