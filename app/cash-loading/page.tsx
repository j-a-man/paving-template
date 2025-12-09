"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldCheck, ArrowRight } from "lucide-react"

export default function CashLoadingPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            <section className="relative h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0" style={{ backgroundImage: "url(/electric_image.jpg)" }}>
                    <div className="absolute inset-0 bg-secondary/70" />
                </div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <div className="w-20 h-1 bg-primary mb-6"></div>
                    <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold tracking-tight text-white drop-shadow-lg">
                        Cash Loading Services
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        Never let your ATM run dry. Our reliable cash replenishment service keeps your business moving.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Secure, Reliable, and Insured.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Managing ATM cash can be a security risk and a logistical burden. Let Five Star ATM handle it for you. We provide professional vault cash management, ensuring your machine is always stocked and ready for customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gray-50 p-8 border border-gray-100 text-center group hover:shadow-lg transition-all">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-secondary">Fully Insured</h3>
                            <p className="text-muted-foreground">Our cash is fully insured from the moment it leaves the vault until it's dispensed to your customer.</p>
                        </div>
                        <div className="bg-gray-50 p-8 border border-gray-100 text-center group hover:shadow-lg transition-all">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-secondary">Real-Time Monitoring</h3>
                            <p className="text-muted-foreground">We monitor cash levels 24/7 and dispatch refill teams before the machine runs empty.</p>
                        </div>
                        <div className="bg-gray-50 p-8 border border-gray-100 text-center group hover:shadow-lg transition-all">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-secondary">Professional Handling</h3>
                            <p className="text-muted-foreground">Our trained professionals handle all cash loading discreetly and securely.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/contact">
                            <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none">
                                Request Cash Service
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
