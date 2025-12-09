"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    ArrowRight,
    Truck,
    Building2,
    Home,
    Droplets,
    Hammer,
    Tractor,
    Zap,
    Shield
} from "lucide-react"

export default function ServicesPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    const services = [
        {
            title: "Breaker Box",
            description: "We install, repair, and upgrade panels to ensure reliable, modern electrical service.",
            icon: Building2,
            link: "/breaker-box",
            image: "/placeholder.svg?height=600&width=800&query=circuit-breaker-panel"
        },
        {
            title: "Ground Setup",
            description: "We install proper grounding systems to protect homes and electrical equipment from power surges.",
            icon: Zap,
            link: "/ground-setup",
            image: "/placeholder.svg?height=600&width=800&query=electrical-grounding"
        },
        {
            title: "Electric Meter Box",
            description: "We install and replace electric meter boxes to keep your power connection safe and up to code.",
            icon: Zap,
            link: "/electric-meter-box",
            image: "/placeholder.svg?height=600&width=800&query=electric-meter"
        },
        {
            title: "Commercial Electrical",
            description: "Reliable electrical solutions for your business. From rewiring to panel upgrades.",
            icon: Building2,
            link: "/commercial-electrical",
            image: "/placeholder.svg?height=600&width=800&query=commercial-electrician"
        },
        {
            title: "Real Estate Inspections",
            description: "We offer real estate inspections to make sure your property is ready and secure.",
            icon: Home,
            link: "/inspections",
            image: "/placeholder.svg?height=600&width=800&query=home-inspection"
        },
        {
            title: "Safe Rewiring",
            description: "We handle complete rewiring projects safely and professionally for older homes and renovations.",
            icon: Shield,
            link: "/breaker-box", // Fallback or separate page
            image: "/placeholder.svg?height=600&width=800&query=electrical-wiring"
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
                        backgroundImage: "url(/electric_image.jpg)",
                    }}
                >
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left py-20`}>
                    <div className="max-w-3xl">
                        <div className="w-20 h-1 bg-primary mb-6"></div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                            Our Services
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            Comprehensive electrical solutions tailored to your needs. Quality you can trust, from Tallahassee Energy Solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES GRID ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link href={service.link} key={index} className="group block h-full">
                                <Card className="h-full rounded-none border-0 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-300" />
                                        <div className="absolute bottom-4 left-4 bg-white p-3 shadow-md">
                                            <service.icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <CardContent className="p-8 bg-white">
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors flex items-center justify-between">
                                            {service.title}
                                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/electric_image.jpg)' }}>
                <div className="absolute inset-0 bg-secondary/70"></div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        NEED A CUSTOM SOLUTION?
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