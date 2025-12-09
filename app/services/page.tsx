"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scan, ShieldCheck, Wrench, Dog } from "lucide-react"

export default function ServicesPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    const services = [
        {
            title: "Full Rescreening",
            description: "Complete replacement of all screen panels and spline. Best for cages over 10 years old.",
            icon: Scan,
            link: "/rescreening"
        },
        {
            title: "Panel Repair",
            description: "Targeted replacement of damaged or torn panels due to storms or accidents.",
            icon: ShieldCheck,
            link: "/panel-repair"
        },
        {
            title: "Hardware & Tapcons",
            description: "Replacement of rusted screws, cables, and door kits for safety and structural integrity.",
            icon: Wrench,
            link: "/hardware"
        },
        {
            title: "Specialty Screens",
            description: "Upgrade to Pet Screen, Privacy Screen (Florida Glass), or No-See-Um mesh.",
            icon: Dog,
            link: "/specialty-screens"
        }
    ]

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            {/* Hero */}
            <section className="relative h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0" style={{ backgroundImage: "url(/pool-screen.jpg)" }}>
                    <div className="absolute inset-0 bg-secondary/80" />
                </div>
                <div className={`${containerClass} relative z-10 text-center`}>
                    <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold tracking-tight text-white drop-shadow-lg">
                        Our Services
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        Comprehensive pool enclosure repair and restoration services for Sarasota homeowners.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex gap-6 group">
                                <div className="shrink-0">
                                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                        <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-secondary">{service.title}</h3>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link href={service.link}>
                                        <Button variant="link" className="p-0 text-primary font-bold uppercase tracking-widest hover:no-underline hover:text-secondary transition-colors">
                                            Learn More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-secondary text-white py-20 text-center">
                <div className={containerClass}>
                    <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        We also offer pressure washing, gutter cleaning, and frame painting services upon request.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-6 rounded-none">
                            Contact Us Today
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}