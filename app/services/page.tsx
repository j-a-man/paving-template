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
            title: "Free ATM Placement",
            description: "We place a brand new, state-of-the-art ATM in your business at no cost to you. You provide the space and power, we handle the rest.",
            link: "/contact"
        },
        {
            icon: <DollarSign className="w-12 h-12 text-primary mb-6" />,
            title: "Cash Loading Services",
            description: "Eliminate the hassle of filling your ATM. Our cash loading service ensures your machine is always stocked and ready for customers.",
            link: "/contact"
        },
        {
            icon: <Orbit className="w-12 h-12 text-primary mb-6" />,
            title: "ATM Maintenance",
            description: "We provide comprehensive maintenance and repairs. If your machine goes down, our technicians are there to fix it fast.",
            link: "/contact"
        },
        {
            icon: <Truck className="w-12 h-12 text-primary mb-6" />,
            title: "Mobile ATM Events",
            description: "Hosting an event? We bring mobile ATMs to festivals, concerts, and fairs to keep cash flowing for your vendors.",
            link: "/contact"
        },
        {
            icon: <CreditCard className="w-12 h-12 text-primary mb-6" />,
            title: "Transaction Processing",
            description: "Secure and fast transaction processing services. We ensure every transaction is handled safely and efficiently.",
            link: "/contact"
        },
        {
            icon: <CheckCircle2 className="w-12 h-12 text-primary mb-6" />,
            title: "Compliance Upgrades",
            description: "We keep your ATM up to date with the latest ADA and EMV compliance standards so you never have to worry.",
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
                        backgroundImage: "url(/electric_image.jpg)",
                    }}
                >
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left`}>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                        Our Services
                    </h1>
                    <p className="text-lg text-white/90 max-w-xl font-light">
                        Comprehensive ATM solutions provided by Five Star ATM.
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
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/electric_image.jpg)' }}>
                <div className="absolute inset-0 bg-secondary/80"></div>
                <div className={`${containerClass} relative z-10 text-center`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-6 leading-tight">
                        Ready to Boost Your Revenue?
                    </h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Contact Five Star ATM today to get a free ATM placement for your business.
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