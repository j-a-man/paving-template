"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

export default function ProjectsPage() {
    // Increased padding for consistency
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"


    const projects = [
        {
            title: "Kitchen Remodel",
            location: "Gary, IN",
            date: "October 2024",
            image: "/project-1.png",
            description: "Complete kitchen overhaul including new cabinets, backsplash installation, and modern lighting fixtures."
        },
        {
            title: "Master Bathroom Renovation",
            location: "Merillville, IN",
            date: "September 2024",
            image: "/project-2.png",
            description: "Updated a master bath with a new vanity, tiled shower, and energy-efficient fixtures."
        },
        {
            title: "Custom Deck Build",
            location: "Hammond, IN",
            date: "August 2024",
            image: "/project-3.png",
            description: "Designed and built a custom wooden deck for outdoor entertaining, complete with railings and stairs."
        }
    ]

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[400px] flex items-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                    style={{
                        backgroundImage: "url(/kitchen1.jpg)",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left`}>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                        Our Projects
                    </h1>
                    <p className="text-lg text-white/90 max-w-xl font-light">
                        See how Handy Randy helps homeowners improve their living spaces across Indiana.
                    </p>
                </div>
            </section>

            {/* ================= PROJECTS GRID ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full rounded-none">
                                <div className="relative h-64 w-full bg-gray-100 overflow-hidden group">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                </div>
                                <div className="p-8 flex flex-col grow bg-white">
                                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3 text-primary" />
                                            {project.location}
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-primary" />
                                            {project.date}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/kitchen2.jpg)' }}>
                <div className="absolute inset-0 bg-secondary/80"></div>
                <div className={`${containerClass} relative z-10 text-center`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        Start Your Renovation Today
                    </h2>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none">
                            Get Your Free Quote
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}