"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[600px] flex items-center text-white overflow-hidden">
        <div
          // Added 'bg-fixed' to create the parallax scrolling effect
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: "url(/paving.avif)",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className={`${containerClass} relative z-10 py-20 text-left`}>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg">
              Woolfolk Paving Co
            </h1>
            <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed max-w-xl drop-shadow-md">
              We have more than 14 years of experience providing quality paving service for both Residential and Commercial Areas.
            </p>
            <div>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white bg-transparent hover:bg-white hover:text-black rounded-none px-6 py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
              >
                Get A Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className={containerClass}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Side */}
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <Image
                src="/paving.avif"
                alt="Woolfolk Paving Crew"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content Side */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Welcome to Woolfolk Paving
              </h2>
              <h3 className="text-xl font-bold mb-4 text-secondary">
                Richmond's Best Commercial & Residential Paving Company
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We have more than 14 years of experience providing quality paving service for both Residential and Commercial Areas. Our commitment to quality and customer satisfaction makes us the preferred choice in the region.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">Quality Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">Affordable Price</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">Professional Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">Best Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                  Our Services
                </Button>
                <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className={`${containerClass} mb-12`}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-left">
            Our Paving Services
          </h2>
          <p className="text-white/80 max-w-2xl text-left text-lg">
            High-quality, reliable paving solutions tailored to your specific needs.
          </p>
        </div>

        <div className={containerClass}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <Truck className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Asphalt Paving</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We provide expert asphalt paving for driveways, parking lots, and roads using top-grade materials for long-lasting results.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Card 2 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <Layers className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Sealcoating</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Protect your investment with our professional sealcoating services, designed to extend the life of your pavement.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Card 3 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <Orbit className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Tar and Chip</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                A cost-effective and durable alternative to traditional asphalt, providing a rustic look with excellent traction.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECENT PROJECTS ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className={`${containerClass} mb-12`}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary text-left">
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
                    <Image src="/placeholder.svg?height=500&width=400&query=paved-parking-lot" alt="Project 1" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                      <h3 className="text-white font-bold text-lg uppercase tracking-wider text-center">Commercial Parking Lot</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-none overflow-hidden relative h-[400px] group">
                    <Image src="/placeholder.svg?height=500&width=400&query=residential-driveway-paving" alt="Project 2" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                      <h3 className="text-white font-bold text-lg uppercase tracking-wider text-center">Residential Driveway</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-none overflow-hidden relative h-[400px] group">
                    <Image src="/placeholder.svg?height=500&width=400&query=road-resurfacing" alt="Project 3" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                      <h3 className="text-white font-bold text-lg uppercase tracking-wider text-center">Road Resurfacing</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-none overflow-hidden relative h-[400px] group">
                    <Image src="/placeholder.svg?height=500&width=400&query=tar-and-chip-driveway" alt="Project 4" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 p-4">
                      <h3 className="text-white font-bold text-lg uppercase tracking-wider text-center">Tar & Chip Project</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-secondary text-white hover:bg-primary border-none rounded-none h-12 w-12" />
            <CarouselNext className="hidden md:flex -right-4 bg-secondary text-white hover:bg-primary border-none rounded-none h-12 w-12" />
          </Carousel>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=1600&query=asphalt-paver-machine)' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className={`${containerClass} relative z-10 text-left`}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
            GET A FREE ESTIMATE FOR YOUR<br /> RESIDENTIAL OR COMMERCIAL PROJECT
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
              Get A Quote
            </Button>
            <Button variant="outline" className="text-white border-2 border-white bg-transparent hover:bg-white hover:text-secondary uppercase tracking-widest font-bold px-8 py-6 rounded-none">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}