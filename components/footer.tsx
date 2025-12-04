"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight, Truck, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-24 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-sm">
                <Image
                  src="/nick.png"
                  alt="Nuclearnick Construction Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-wider text-white group-hover:text-primary transition-colors">Nuclearnick Construction</span>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Serving Indiana with top-tier paving and construction services. Quality workmanship guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link href="/asphalt-paving" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Asphalt Paving</Link></li>
              <li><Link href="/sealcoating" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Sealcoating</Link></li>
              <li><Link href="/tar-and-chip" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Tar & Chip</Link></li>
              <li><Link href="/commercial-paving" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Commercial Paving</Link></li>
              <li><Link href="/driveway-repair" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Driveway Repair</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Services</Link></li>
              <li><Link href="/projects" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Projects</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-white/70">Indiana</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-white/70">(219) 358-8794</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-white/70">risticnicholas@yahoo.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-white/70">24/7 Service (Closed Sunday)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Nuclearnick Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}