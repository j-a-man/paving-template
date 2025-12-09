"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dog, Eye, Shield } from "lucide-react"

export default function SpecialtyScreensPage() {
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
                        Specialty Screens
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        Pet screen, privacy screen, and no-see-um mesh for your specific needs.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="border p-8 text-center hover:border-primary transition-colors group">
                            <Dog className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Pet Screen</h3>
                            <p className="text-muted-foreground">
                                7x stronger than standard screen. Perfect for homeowners with dogs or cats that scratch the screen.
                            </p>
                        </div>
                        <div className="border p-8 text-center hover:border-primary transition-colors group">
                            <Eye className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Privacy Screen</h3>
                            <p className="text-muted-foreground">
                                Florida Glass (laminated screen) for the bottom row to keep dirt out and provide privacy from neighbors.
                            </p>
                        </div>
                        <div className="border p-8 text-center hover:border-primary transition-colors group">
                            <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">No-See-Um Screen</h3>
                            <p className="text-muted-foreground">
                                Tighter mesh (20/20) to keep out even the smallest gnats and bugs while maintaining airflow.
                            </p>
                        </div>
                    </div>

                    <div className="bg-secondary text-white p-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Not Sure What You Need?</h3>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            We can bring samples to your home so you can see the difference in visibility and strength.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                Request Samples
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
