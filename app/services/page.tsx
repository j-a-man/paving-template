"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    Truck,
    Layers,
    Orbit,
    ArrowRight,
    Building2,
    Hammer,
    Ruler,
    FileCheck,
    HardHat
} from "lucide-react"

export default function ServicesPage() {
    // Consistent deep padding
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    const services = [
        {
            title: "Asphalt Paving",
            description: "Expert asphalt paving for driveways, parking lots, and roads. We use industrial-grade bituminous mixtures to ensure a smooth, durable finish that withstands heavy traffic and weather.",
            icon: Truck,
            link: "/asphalt-paving"
        },
        {
            title: "Sealcoating",
            description: "Extend the lifespan of your pavement by up to 300%. Our premium sealcoating application protects against oxidation, oil spills, and UV damage while restoring that rich, black finish.",
            icon: Layers,
            link: "/sealcoating"
        },
        {
            title: "Tar and Chip",
            description: "A rustic, cost-effective alternative to asphalt. We combine hot liquid asphalt with stone chips to create a textured, high-traction surface perfect for long driveways and rural roads.",
            icon: Orbit,
            link: "/tar-and-chip"
        },
        {
            title: "Commercial Paving",
            description: "Heavy-duty paving solutions for shopping centers, office parks, and industrial facilities. We manage large-scale projects with minimal disruption to your business operations.",
            icon: Building2,
            link: "/commercial-paving"
        },
        {
            title: "Driveway Repair",
            description: "Don't let small cracks become massive potholes. We provide precision patching, crack filling, and drainage correction to restore safety and curb appeal.",
            icon: Hammer,
            link: "/driveway-repair"
        },
        {
            title: "Line Striping",
            description: "Maximize parking capacity and ensure ADA compliance. Our crisp, durable line striping organizes traffic flow and improves the safety of your lot.",
            icon: Ruler, // Using Ruler as a placeholder for Line Striping if PaintBucket isn't desired
            link: "/line-striping"
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
                            Our Services
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            From residential driveways to industrial complexes, we deliver precision paving solutions built to last generations.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES GRID ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="text-left mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Solutions</h2>
                        <p className="text-muted-foreground text-lg font-light max-w-2xl">
                            We bring the same level of rigorous quality control to every project, no matter the size.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-10 text-left border-r border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 group relative overflow-hidden"
                            >
                                {/* Hover Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                                <div className="w-14 h-14 bg-gray-100 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 font-serif text-secondary group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                                    {service.description}
                                </p>

                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors border-b-2 border-transparent group-hover:border-primary pb-1"
                                >
                                    View Details <ArrowRight className="ml-2 w-3 h-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROCESS STRIP ================= */}
            <section className="py-20 bg-secondary text-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 text-2xl font-bold font-serif">1</div>
                            <h3 className="text-xl font-bold mb-3">Consultation</h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">We visit your site, assess the terrain, and provide a detailed, transparent estimate.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6 text-2xl font-bold font-serif text-primary">2</div>
                            <h3 className="text-xl font-bold mb-3 text-primary">Execution</h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">Our crew arrives on time with state-of-the-art equipment to complete the job efficiently.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 text-2xl font-bold font-serif">3</div>
                            <h3 className="text-xl font-bold mb-3">Completion</h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">We perform a final walkthrough with you to ensure every detail meets your standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=1600&query=asphalt-paver-machine)' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        NEED A CUSTOM SOLUTION?
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