"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tent, Music, Beer, ArrowRight } from "lucide-react"

export default function MobilePage() {
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
                        Mobile ATM Solutions
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        Portable, wireless ATMs for festivals, fairs, concerts, and outdoor events.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-secondary">Cash is King at Events.</h2>
                        <p className="text-lg text-muted-foreground">
                            Don't let vendors lose sales because attendees ran out of cash. Our mobile ATM fleet ensures your guests have convenient access to their money, increasing overall spending at your event.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="border p-8 text-center hover:border-primary transition-colors">
                            <Tent className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Fairs & Festivals</h3>
                        </div>
                        <div className="border p-8 text-center hover:border-primary transition-colors">
                            <Music className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Concerts</h3>
                        </div>
                        <div className="border p-8 text-center hover:border-primary transition-colors">
                            <Beer className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Beer Gardens</h3>
                        </div>
                    </div>

                    <div className="bg-secondary text-white p-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Planning an Event?</h3>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            We handle everything: delivery, setup, wireless connectivity, cash loading, and removal.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                Reserve Mobile ATMs
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
