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
            title: "Lakefront Cage Restoration",
            location: "Sarasota, FL",
            date: "November 2024",
            image: "https://images.unsplash.com/photo-1572331165267-854da2b00dc1?w=800&q=80", // Pool layout
            description: "Complete rescreening of a large lakefront pool cage. Used 20/20 No-See-Um mesh to prevent midges while maintaining the view."
        },
        {
            title: "Storm Damage Repair",
            location: "Bradenton, FL",
            date: "October 2024",
            image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=800&q=80", // Storm/Modern pool
            description: "Replaced 12 roof panels torn by high winds. Inspected and replaced rusted tapcons to ensure structural integrity for the next storm."
        },
        {
            title: "Pet Screen Installation",
            location: "Venice, FL",
            date: "September 2024",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", // Patio with dog usually but just patio
            description: "Installed Phifer Pet Screen on the lower walls of a lanai to prevent damage from the homeowner's two large dogs."
        },
        {
            title: "Pool Enclosure Painting & Rescreen",
            location: "North Port, FL",
            date: "August 2024",
            image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80", // Luxury pool
            description: "Combined service: Painted existing bronze cage to white and installed new standard 18/14 screen for a complete makeover."
        },
        {
            title: "Condo Complex Maintenance",
            location: "Osprey, FL",
            date: "July 2024",
            image: "https://images.unsplash.com/photo-1596263576753-2bd9d9c2235c?w=800&q=80", // Condo pool
            description: "Ongoing maintenance contract for a condo association. Replacing door kits and repairing panels as needed for residents."
        },
        {
            title: "Florida Glass Privacy Wall",
            location: "Lakewood Ranch, FL",
            date: "June 2024",
            image: "https://images.unsplash.com/photo-1532415747656-74dbb8637731?w=800&q=80", // Privacy
            description: "Installed Florida Glass (laminated screen) on the side wall of a pool cage to provide privacy from the neighboring property."
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
                        backgroundImage: "url(/pool-screen.jpg)",
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
                        See the difference Victor Pool Screen Repair makes for homes in our community.
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
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/pool-screen.jpg)' }}>
                <div className="absolute inset-0 bg-secondary/80"></div>
                <div className={`${containerClass} relative z-10 text-center`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        Start Your Project Today
                    </h2>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none">
                            Get A Quote
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}