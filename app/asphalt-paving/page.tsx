"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    CheckCircle2,
    Clock,
    DollarSign,
    Car
} from "lucide-react"

export default function AsphaltPavingPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

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
                            Asphalt Paving Services
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            Nuclearnick Construction delivers superior asphalt paving solutions for residential and commercial properties in Indiana.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= OVERVIEW SECTION ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                The Standard for <span className="text-primary">Quality Surfaces</span>
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                                <p>
                                    At Nuclearnick Construction, we specialize in high-quality asphalt paving for both residential and commercial properties. Whether you need a new driveway, a parking lot resurfaced, or a private road paved, our team has the expertise and equipment to get the job done right.
                                </p>
                                <p>
                                    We use only industrial-grade bituminous mixtures to ensure a smooth, durable finish. Our rigorous process—from sub-base grading to the final roll—guarantees longevity and curb appeal that adds real value to your property.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="font-medium text-sm uppercase tracking-wide">Hot Mix Asphalt</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="font-medium text-sm uppercase tracking-wide">Proper Drainage</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-[500px] w-full group">
                            <div className="absolute inset-0 border-8 border-secondary z-10 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                            <div className="absolute inset-0 z-20 shadow-2xl overflow-hidden">
                                <Image
                                    src="/paving1.jpg"
                                    alt="Freshly Paved Asphalt"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BENEFITS GRID ================= */}
            <section className="py-20 bg-secondary text-white">
                <div className={containerClass}>
                    <div className="text-left mb-16">
                        <h2 className="text-3xl md:text-4xl font-normal mb-4">Why Choose Asphalt?</h2>
                        <p className="text-white/70 max-w-2xl font-light">
                            Asphalt remains the most popular paving material for good reason.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                    <DollarSign className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Cost-Effective</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Significantly lower installation costs compared to concrete, with easier and cheaper maintenance over its lifespan.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Quick Installation</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Asphalt projects can often be completed in 1-2 days, and the surface cures quickly, allowing for use much sooner than concrete.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                    <Car className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Smooth & Quiet</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Provides a smoother drive with reduced noise pollution, and its dark color reduces glare for safer driving.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Easy Maintenance</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Cracks and holes can be easily filled and sealed, extending the life of the pavement without full replacement.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=1600&query=asphalt-paver-machine)' }}>
                <div className="absolute inset-0 bg-secondary/70"></div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        READY TO PAVE YOUR WAY?
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