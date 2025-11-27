import Link from "next/link"
import {
  Truck,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react"

export default function Footer() {
  // Matching the container class from page.tsx
  const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

  return (
    <footer className="bg-secondary text-white pt-16 md:pt-24">
      <div className={containerClass}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-wider">Woolfolk Paving Co.</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Serving the Richmond area with top-tier paving services for over a decade. Quality workmanship guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
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
            <h3 className="font-serif text-2xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-white/70">837 Murray Hill Rd, Vestal, NY 13850</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-white/70">(607) 770-7134</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-white/70">krispatel9301@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-6 border-t border-white/10">
        <div className={`${containerClass} text-left text-white/50 text-sm`}>
          <p>&copy; {new Date().getFullYear()} Pave Pro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}