"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function RescreeningPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            {/* Hero */}
            <section className="relative h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0" style={{ backgroundImage: "url(/pool-screen.jpg)" }}>
                    {/* Fallback color if image not found */}
                    <div className="absolute inset-0 bg-secondary/80" />
                </div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <div className="w-20 h-1 bg-primary mb-6"></div>
                    <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold tracking-tight text-white drop-shadow-lg">
                        Full Cage Rescreening
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        Restore your pool enclosure to like-new condition with high-quality Phifer screen.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
                                Is Your Screen Looking Worn, Torn, or Faded?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Over time, Florida's harsh sun and weather can degrade your pool screen, making it brittle and unsightly. A full rescreen is the most cost-effective way to revitalize your outdoor living space.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                At Victor Pool Screen Repair, we strip down the old screen and spline, check the cage structure for safety, and install premium Phifer 18/14 screen that provides excellent visibility and durability.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="text-secondary font-medium">10-Year Manufacturer Warranty</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="text-secondary font-medium">Included Door Hardware Check</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="text-secondary font-medium">Proper Tightening & Splining</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="text-secondary font-medium">Debris Removal & Cleanup</span>
                                </li>
                            </ul>

                            <Link href="/contact">
                                <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                    Get A Free Estimate
                                </Button>
                            </Link>
                        </div>

                        <div className="relative h-[600px] w-full bg-gray-100 border-[10px] border-white shadow-2xl">
                            <Image
                                src="/placeholder.svg?height=800&width=600&query=pool-cage-rescreen"
                                alt="Pool Cage Rescreening"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
