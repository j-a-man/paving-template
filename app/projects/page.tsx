"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    const projects = [
        {
            title: "Commercial Parking Lot",
            image: "/placeholder.svg?height=600&width=800&query=paved-parking-lot", // Replace with real image path like /paving1.jpg
            category: "Commercial",
            location: "Richmond, VA"
        },
        {
            title: "Residential Driveway",
            image: "/placeholder.svg?height=600&width=800&query=residential-driveway-paving",
            category: "Residential",
            location: "Glen Allen, VA"
        },
        {
            title: "Road Resurfacing",
            image: "/placeholder.svg?height=600&width=800&query=road-resurfacing",
            category: "Municipal",
            location: "Chesterfield, VA"
        },
        {
            title: "Tar & Chip Driveway",
            image: "/placeholder.svg?height=600&width=800&query=tar-and-chip-driveway",
            category: "Residential",
            location: "Ashland, VA"
        },
        {
            title: "Industrial Complex",
            image: "/placeholder.svg?height=600&width=800&query=industrial-paving",
            category: "Commercial",
            location: "Henrico, VA"
        },
        {
            title: "Private Estate Road",
            image: "/placeholder.svg?height=600&width=800&query=estate-road-paving",
            category: "Residential",
            location: "Midlothian, VA"
        }
    ]

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[500px] flex items-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                    style={{
                        backgroundImage: "url(/paving.avif)",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left py-20`}>
                    <div className="max-w-3xl">
                        <div className="w-20 h-1 bg-primary mb-6"></div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                            Our Projects
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            A showcase of precision, durability, and craftsmanship across residential and commercial landscapes.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= PROJECTS GALLERY ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                            <p className="text-muted-foreground text-lg font-light max-w-xl">
                                Explore our portfolio of completed projects, demonstrating our commitment to quality in every layer.
                            </p>
                        </div>
                        {/* Optional Filter Buttons could go here */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative overflow-hidden bg-gray-100 cursor-pointer">
                                {/* Image Container */}
                                <div className="relative h-[400px] w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                                                {project.category}
                                            </p>
                                            <h3 className="text-2xl font-serif font-normal mb-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/70 text-sm font-light">
                                                {project.location}
                                            </p>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                            <div className="w-12 h-12 bg-primary flex items-center justify-center text-white">
                                                <ArrowUpRight className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=1600&query=asphalt-paver-machine)' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        LIKE WHAT YOU SEE?
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