"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    const projects = [
        {
            title: "Commercial Shopping Center",
            category: "Commercial Paving",
            location: "Indiana",
            description: "Complete resurfacing of a 50,000 sq ft parking lot including striping and ADA compliance.",
            image: "/placeholder.svg?height=600&width=800&query=commercial-parking-lot"
        },
        {
            title: "Luxury Estate Driveway",
            category: "Residential Paving",
            location: "Indiana",
            description: "Installation of a winding asphalt driveway with Belgian block curbing for a private estate.",
            image: "/placeholder.svg?height=600&width=800&query=luxury-driveway"
        },
        {
            title: "Industrial Warehouse Complex",
            category: "Industrial Paving",
            location: "Indiana",
            description: "Heavy-duty paving for a logistics center designed to withstand constant semi-truck traffic.",
            image: "/placeholder.svg?height=600&width=800&query=industrial-paving"
        },
        {
            title: "Farm Lane Restoration",
            category: "Tar & Chip",
            location: "Indiana",
            description: "Restored a mile-long farm lane using tar and chip for a durable, rustic finish.",
            image: "/placeholder.svg?height=600&width=800&query=tar-and-chip-road"
        },
        {
            title: "HOA Roadway Maintenance",
            category: "Sealcoating",
            location: "Indiana",
            description: "Sealcoating and crack filling for a residential community to extend pavement life.",
            image: "/placeholder.svg?height=600&width=800&query=sealcoating-road"
        },
        {
            title: "Municipal Parking Lot",
            category: "Commercial Paving",
            location: "Indiana",
            description: "New construction of a public parking area with proper drainage and lighting integration.",
            image: "/placeholder.svg?height=600&width=800&query=public-parking"
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
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left py-20`}>
                    <div className="max-w-3xl">
                        <div className="w-20 h-1 bg-primary mb-6"></div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                            Our Projects
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            See the quality and craftsmanship we bring to every job. From driveways to highways, Nuclearnick Construction delivers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= PROJECTS GRID ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="group rounded-none border-0 shadow-lg overflow-hidden">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black rounded-none">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                                <CardContent className="p-8 bg-white relative">
                                    <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 mt-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                        {project.location}
                                    </p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=1600&query=asphalt-paver-machine)' }}>
                <div className="absolute inset-0 bg-secondary/70"></div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        START YOUR PROJECT TODAY
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