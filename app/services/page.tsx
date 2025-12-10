"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Truck,
    Layers,
    Orbit,
    CreditCard,
    DollarSign
} from "lucide-react"

export default function ServicesPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    const services = [
        {
            icon: <Layers className="w-12 h-12 text-primary mb-6" />,
            title: "General Maintenance",
            description: "From fixing squeaky doors to patching drywall, we handle the small repairs so they don't become big problems.",
            link: "/contact"
        },
        {
            icon: <DollarSign className="w-12 h-12 text-primary mb-6" />,
            title: "Kitchen Upgrades",
            description: "Modernize your kitchen with new backsplashes, cabinet hardware, or faucet installations. Small changes, big impact.",
            link: "/contact"
        },
        {
            icon: <Orbit className="w-12 h-12 text-primary mb-6" />,
            title: "Bathroom Repairs",
            description: "Leaky faucets, running toilets, or recaulking showers. We ensure your bathroom is functional and watertight.",
            link: "/contact"
        },
        {
            icon: <Truck className="w-12 h-12 text-primary mb-6" />,
            title: "Furniture Assembly",
            description: "Bought new furniture? Save yourself the frustration. We assemble desks, beds, and shelving units quickly and correctly.",
            link: "/contact"
        },
        {
            icon: <CreditCard className="w-12 h-12 text-primary mb-6" />,
            title: "Fixture Installation",
            description: "We install ceiling fans, light fixtures, and smart home devices to upgrade your home's comfort and style.",
            link: "/contact"
        },
        {
            icon: <CheckCircle2 className="w-12 h-12 text-primary mb-6" />,
            title: "Deck & Patio Repair",
            description: "Get ready for outdoor living. We repair loose boards, clean, and stain decks to keep them safe and beautiful.",
            link: "/contact"
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
                        backgroundImage: "url(/kitchen2.jpg)",
                    }}
                >
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left`}>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                        Our Services
                    </h1>
                    <p className="text-lg text-white/90 max-w-xl font-light">
                        Comprehensive home improvement solutions provided by Handy Randy.
                    </p>
                </div>
            </section>

            {/* ================= SERVICES GRID ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-10 border border-gray-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                                <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4 text-secondary group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <Link href={service.link} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                                    Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CALL TO ACTION ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/kitchen1.jpg)' }}>
                <div className="absolute inset-0 bg-secondary/80"></div>
                <div className={`${containerClass} relative z-10 text-center`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-6 leading-tight">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Contact Handy Randy today to get a free estimate for your home repairs.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}