"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ExitIntentPopup from "@/components/exit-intent-popup"
import ReviewSection from "@/components/review-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  CheckCircle2,
  Truck,
  Orbit,
  Layers,
  ArrowRight
} from "lucide-react"

export default function Home() {
  // Increased horizontal padding for more "breathing room"
  const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[600px] flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: "url(/electric_image.jpg)",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-secondary/60" />
        </div>

        <div className={`${containerClass} relative z-10 py-20 text-left`}>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
              Energy you can trust.<br />Service you Deserve.
            </h1>
            <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed max-w-xl drop-shadow-md">
              At Tallahassee Energy Solutions, we bring reliable electrical solutions to your home and business. Safe, powered, and reliable.
            </p>
            <div>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white bg-transparent hover:bg-white hover:text-black rounded-none px-6 py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
                >
                  Get A Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME SECTION (MATCHING IMAGE LAYOUT) ================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className={containerClass}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE: Text Content */}
            <div className="max-w-xl">
              {/* Exact Headline Style from Image */}
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-6 text-foreground tracking-tight">
                Tallahassee <br />
                Energy <br />
                <span className="text-primary">Solutions.</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                From rewiring to panel upgrades, our team is here to keep your property safe, powered, and up to date. With us, you get honest work, timely service, and the care you deserve.
              </p>

              {/* Exact Button Style from Image */}
              <Link href="/about">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white text-sm font-bold uppercase tracking-widest px-10 py-7 rounded-none shadow-sm transition-all hover:shadow-md"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* RIGHT SIDE: Image Collage */}
            <div className="relative h-[500px] w-full hidden lg:block">
              {/* Main Tall Image (Right) */}
              <div className="absolute right-0 top-8 w-[52%] h-[90%] z-20 shadow-xl overflow-hidden border-[6px] border-white">
                <Image
                  src="/electric1.jpg"
                  alt="Construction Portrait"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Top Left Small Image */}
              <div className="absolute left-0 top-0 w-[55%] h-[42%] z-10 shadow-lg overflow-hidden border-[6px] border-white">
                <Image
                  src="/electric2.jpg"
                  alt="Construction Site"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Left Medium Image */}
              <div className="absolute left-8 bottom-0 w-[48%] h-[60%] z-30 shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden border-[6px] border-white">
                <Image
                  src="/electric3.jpeg"
                  alt="Planning Construction"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className={`${containerClass} mb-12`}>
          <h2 className="text-4xl md:text-5xl font-normal mb-4 text-left">
            Our Services
          </h2>
          <p className="text-white/80 max-w-2xl text-left text-lg">
            We provide safe and reliable electrical solutions for your home or business.
          </p>
        </div>

        <div className={containerClass}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <Layers className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-normal mb-4 font-serif">Breaker Box</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We install, repair, and upgrade panels to ensure reliable, modern electrical service.
              </p>
              <Link href="/breaker-box" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Card 2 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <Orbit className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-normal mb-4 font-serif">Ground Setup</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We install proper grounding systems to protect homes and electrical equipment from power surges.
              </p>
              <Link href="/ground-setup" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Card 3 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <Truck className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-normal mb-4 font-serif">Electric Meter Box</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We install and replace electric meter boxes to keep your power connection safe and up to code.
              </p>
              <Link href="/electric-meter-box" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECENT PROJECTS ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className={`${containerClass} mb-12`}>
          <h2 className="text-4xl md:text-5xl font-normal text-secondary text-left">
            Recent Projects
          </h2>
        </div>

        <div className={containerClass}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {/* Projects ... */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-none overflow-hidden relative h-[400px] group">
                    <Image src="/commercial-lighting.png" alt="Commercial Lighting Upgrade" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                      <h3 className="text-white font-normal text-lg uppercase tracking-wider text-center">Commercial Lighting Upgrade</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-none overflow-hidden relative h-[400px] group">
                    <Image src="/home-panel.png" alt="Home Panel Upgrade" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                      <h3 className="text-white font-normal text-lg uppercase tracking-wider text-center">Home Panel Upgrade</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-none overflow-hidden relative h-[400px] group">
                    <Image src="/generator-install.png" alt="Generator Installation" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                      <h3 className="text-white font-normal text-lg uppercase tracking-wider text-center">Generator Installation</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-none overflow-hidden relative h-[400px] group">
                    <Image src="/smart-home.png" alt="Smart Home Wiring" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                      <h3 className="text-white font-normal text-lg uppercase tracking-wider text-center">Smart Home Wiring</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="hidden md:flex -right-4 bg-secondary text-white hover:bg-primary border-none rounded-none h-12 w-12" />
          </Carousel>




        </div>
      </section>

      {/* ================= REVIEW SECTION ================= */}
      <ReviewSection />

      <div className="mt-12 text-center pb-15">
        <Link href="/review">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none transition-colors">
            Leave a Review
          </Button>
        </Link>
      </div>

      {/* ================= CTA BANNER ================= */}
      <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/electric_image.jpg)' }}>
        <div className="absolute inset-0 bg-secondary/70"></div>
        <div className={`${containerClass} relative z-10 text-left`}>
          <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
            GET A FREE ESTIMATE FOR YOUR<br /> RESIDENTIAL OR COMMERCIAL PROJECT
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                Get A Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white border-2 border-white bg-transparent hover:bg-white hover:text-secondary uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}