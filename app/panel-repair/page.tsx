"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldCheck, ArrowRight } from "lucide-react"

export default function PanelRepairPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            <section className="relative h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0" style={{ backgroundImage: "url(/pool-screen.jpg)" }}>
                    <div className="absolute inset-0 bg-secondary/80" />
                </div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <div className="w-20 h-1 bg-primary mb-6"></div>
                    <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold tracking-tight text-white drop-shadow-lg">
                        Individual Panel Repair
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        Don't let a few torn panels ruin your view. We can fix them quickly and affordably.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Fast Fixes for Storm Damage & Accidents.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Have a few panels blown out by a storm? Or maybe a pet clawed through the bottom screen? You don't always need a full rescreen. We offer individual panel replacement to match your existing enclosure perfectly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gray-50 p-8 border border-gray-100 text-center group hover:shadow-lg transition-all">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-secondary">Roof Panels</h3>
                            <p className="text-muted-foreground">We have the equipment to safely reach and replace high roof panels.</p>
                        </div>
                        <div className="bg-gray-50 p-8 border border-gray-100 text-center group hover:shadow-lg transition-all">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-secondary">Wall Panels</h3>
                            <p className="text-muted-foreground">Quick replacement for damaged lower wall panels and chair rails.</p>
                        </div>
                        <div className="bg-gray-50 p-8 border border-gray-100 text-center group hover:shadow-lg transition-all">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-secondary">Color Matching</h3>
                            <p className="text-muted-foreground">We match the charcoal or black color of your existing screen for a seamless look.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/contact">
                            <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none">
                                Request Repair
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
