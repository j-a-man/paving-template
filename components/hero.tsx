"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=800&width=1600&query=asphalt-paving-roller-construction)",
        }}
      >
        {/* Dark Overlay to match the reference image's contrast */}
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-left">
        {/* Content wrapper shifted slightly right with margins */}
        <div className="max-w-2xl md:ml-12 lg:ml-24">
          {/* Main Headline - Scaled down font sizes */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Nuclearnick Construction
          </h1>

          {/* Subheadline - Smaller text */}
          <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed max-w-xl drop-shadow-md">
            We have more than 14 years of experience providing quality paving service for both Residential and Commercial Areas.
          </p>

          {/* CTA Button - Smaller text and padding */}
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
  )
}