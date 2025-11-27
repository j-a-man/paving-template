"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    ShieldCheck,
    Droplets,
    Sun,
    TrendingUp,
    ArrowRight
} from "lucide-react"

export default function SealcoatingPage() {
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
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left py-20`}>
                    <div className="max-w-3xl">
                        <div className="w-20 h-1 bg-primary mb-6"></div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                            Sealcoating
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            Protect your investment. Our industrial-grade sealants extend pavement life by preventing oxidation and water damage.
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
                                Restoration & <span className="text-primary">Protection</span>
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                                <p>
                                    Asphalt is an investment, and sealcoating is the most effective way to protect it. Over time, UV rays, water penetration, and chemicals break down the asphalt binder, leading to brittleness and cracking.
                                </p>
                                <p>
                                    Our professional sealcoating service applies a tough, protective layer that seals out moisture, blocks UV oxidation, and resists oil spills. Not only does it extend the lifespan of your pavement, but it also restores that rich, deep black finish for instant curb appeal.
                                </p>
                            </div>

                            <div className="mt-8">
                                <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                    Request A Free Quote
                                </Button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-[500px] w-full group">
                            <div className="absolute inset-0 border-[8px] border-secondary z-10 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                            <div className="absolute inset-0 z-20 shadow-2xl overflow-hidden">
                                {/* Ideally use a 'before/after' style image here */}
                                <Image
                                    src="/paving2.jpg"
                                    alt="Sealcoating Application"
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
                        <h2 className="text-3xl md:text-4xl font-normal mb-4">Why Sealcoat?</h2>
                        <p className="text-white/70 max-w-2xl font-light">
                            Routine maintenance saves thousands in replacement costs down the road.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Weatherproofing</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Seals the porous surface of asphalt, preventing water from seeping in and causing freeze-thaw damage and cracks.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                    <Sun className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">UV Protection</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Blocks harmful sun rays that oxidize the asphalt binder, preventing the pavement from becoming brittle and gray.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                    <Droplets className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Oil Resistance</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Creates a barrier against gas, oil, and chemical spills that can dissolve asphalt and leave unsightly stains.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Curb Appeal</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Restores the slate-black color of new asphalt, dramatically improving the look of your property for a fraction of the cost.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ================= PROCESS STEPS ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="text-left mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Process</h2>
                        <div className="w-20 h-1 bg-primary"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="relative pl-8 border-l-2 border-gray-200">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></span>
                            <h3 className="text-xl font-bold mb-2">1. Cleaning & Prep</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                We vigorously clean the surface using power blowers and wire brooms to remove all dirt, debris, and vegetation.
                            </p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-gray-200">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></span>
                            <h3 className="text-xl font-bold mb-2">2. Crack Filling</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Major cracks are treated with a hot-pour rubberized sealant to prevent water penetration and future growth.
                            </p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-gray-200">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></span>
                            <h3 className="text-xl font-bold mb-2">3. Application</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                We apply two coats of commercial-grade sealer for maximum coverage, durability, and a uniform finish.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=1600&query=asphalt-paver-machine)' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        RESTORE YOUR PAVEMENT TODAY
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