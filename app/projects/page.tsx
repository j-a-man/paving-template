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
            title: "Convenience Store ATM Placement",
            location: "Gary, IN",
            date: "October 2024",
            image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80", // Placeholder for ATM
            description: "Installed a new Genmega ATM for a high-traffic convenience store. The owner saw a 15% increase in in-store cash sales within the first month."
        },
        {
            title: "Festival Mobile ATM Fleet",
            location: "Merillville, IN",
            date: "September 2024",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", // Concert crowd
            description: "Deployed 4 mobile ATM units for a weekend music festival. Ensured 99.9% uptime with on-site technician support throughout the event."
        },
        {
            title: "Bar & Lounge Installation",
            location: "Hammond, IN",
            date: "August 2024",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80", // Bar interior
            description: "Replaced an outdated machine with a modern Hyosung Halo II. Custom screen graphics were added to promote the venue's drink specials."
        },
        {
            title: "Hotel Lobby ATM Upgrade",
            location: "Valparaiso, IN",
            date: "July 2024",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", // Hotel lobby
            description: "Upgraded the hotel's lobby ATM to a new EMV-compliant model. Provide ongoing cash loading and maintenance services."
        },
        {
            title: "Gas Station Fleet Mangement",
            location: "Michigan City, IN",
            date: "June 2024",
            image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=800&q=80", // Gas station
            description: "Took over management of a 3-location gas station chain's ATMs. Improved cash availability and reduced downtime by 40%."
        },
        {
            title: "Shopping Plaza Outdoor Kiosk",
            location: "Portage, IN",
            date: "May 2024",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80", // Shopping center
            description: "Installed a secure, weather-resistant outdoor ATM kiosk for a busy shopping plaza, providing 24/7 access to cash for shoppers."
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
                        backgroundImage: "url(/electric_image.jpg)",
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
                        See how Five Star ATM helps businesses succeed across Indiana.
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
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/electric_image.jpg)' }}>
                <div className="absolute inset-0 bg-secondary/80"></div>
                <div className={`${containerClass} relative z-10 text-center`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        Start Generating Revenue Today
                    </h2>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none">
                            Get Your Free ATM
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}