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
  Scan,
  ShieldCheck,
  Wrench,
  ArrowRight,
  MapPin
} from "lucide-react"

export default function Home() {
  // Increased horizontal padding for more "breathing room"
  const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

  const recentProjects = [
    {
      title: "Lakefront Rescreening",
      location: "Sarasota, FL",
      image: "https://images.unsplash.com/photo-1572331165267-854da2b00dc1?w=800&q=80",
    },
    {
      title: "Storm Panel Repair",
      location: "Bradenton, FL",
      image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=800&q=80",
    },
    {
      title: "Pet Screen Upgrade",
      location: "Venice, FL",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    }
  ]

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
            backgroundImage: "url(/pool-screen.jpg)", // Will rely on fallback or need to find an asset
          }}
        >
          {/* Fallback to blue gradient if no image */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-secondary/50" />
        </div>

        <div className={`${containerClass} relative z-10 py-20 text-left`}>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
              Keep The Bugs Out.<br />Enjoy The View.
            </h1>
            <p className="text-base md:text-xl mb-8 text-white/90 leading-relaxed max-w-xl drop-shadow-md">
              Victor Pool Screen Repair specializes in pool enclosure rescreening and restoration. Professional, affordable, and reliable service.
            </p>
            <div>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white bg-transparent hover:bg-white hover:text-black rounded-none px-6 py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
                >
                  Get A Free Quote
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
                Quality <br />
                Screen <br />
                <span className="text-primary">Repair.</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                Your pool cage protects your outdoor oasis, but it takes a beating from the Florida sun and storms. Whether you need a few panels replaced or a full rescreen, we use only the highest quality materials to ensure your enclosure looks great and lasts for years.
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
            <div className="relative h-[600px] w-full">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-gray-200 shadow-xl overflow-hidden z-20">
                <Image
                  src="/placeholder.svg?height=800&width=600&query=pool-cage-florida"
                  alt="Pool Screen Rescreening"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/20 -z-10 translate-x-[-20px] translate-y-[20px]"></div>
              <div className="absolute bottom-10 left-10 w-3/5 h-2/5 bg-white border border-gray-100 shadow-lg p-6 z-30 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <span className="font-bold text-lg text-secondary">Phifer Screen</span>
                </div>
                <p className="text-sm text-muted-foreground">We use industry-standard Phifer insect screen for maximum durability.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES SNIPPETS ================= */}
      <section className="py-20 bg-secondary text-white">
        <div className={containerClass}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Our Services</span>
              <h2 className="text-4xl font-serif">What We Do</h2>
            </div>
            <Link href="/services" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors mt-4 md:mt-0">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <Scan className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-normal mb-4 font-serif">Full Rescreening</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Complete replacement of all screen, spline, and door hardware. Bring your cage back to life.
              </p>
              <Link href="/rescreening" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Card 2 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <ShieldCheck className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-normal mb-4 font-serif">Panel Repair</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Storm damage? Rips or tears? We replace individual panels quickly and affordably.
              </p>
              <Link href="/panel-repair" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Card 3 */}
            <div className="bg-secondary-foreground/5 p-8 text-left border border-white/10 hover:border-primary/50 transition-colors group">
              <Wrench className="w-12 h-12 text-white mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-normal mb-4 font-serif">Hardware</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Door kit replacements, cable installation, and rusted tapcon removal to ensure safety.
              </p>
              <Link href="/hardware" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
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
              {recentProjects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative h-96 overflow-hidden border border-gray-100 hover:border-primary/50 transition-all cursor-pointer">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="text-primary w-4 h-4" />
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{project.location}</span>
                      </div>
                      <h3 className="text-white text-2xl font-serif font-normal group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-[-50px]" />
            <CarouselNext className="hidden md:flex right-[-50px]" />
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
      <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/pool-screen.jpg)' }}>
        <div className="absolute inset-0 bg-secondary/80"></div>
        <div className={`${containerClass} relative z-10 text-left`}>
          <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
            GET A FREE ESTIMATE<br /> FOR YOUR POOL CAGE
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                Call Now
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