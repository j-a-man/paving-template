"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings, Wrench, Lock } from "lucide-react"

export default function HardwarePage() {
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
                        Hardware & Structure
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        Doors, cables, kickplates, and tapcons. We ensure your cage is solid and secure.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-secondary">More Than Just Screen.</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                A pool cage is a structural extension of your home. It needs to be properly anchored and functional. We inspect and replace rusted hardware to ensure safety and longevity.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8">
                                Is your door not closing properly? Are your cables rusted out? We replace all components with stainless steel or high-grade aluminum parts designed for the Florida climate.
                            </p>

                            <Link href="/contact">
                                <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                    Order Repairs
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-gray-50 p-10 border border-gray-100">
                            <h3 className="text-xl font-bold mb-6 text-secondary border-b pb-4">Hardware Services</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <Wrench className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-secondary">Door Kits</h4>
                                        <p className="text-sm text-muted-foreground">New hinges, bugsweeps, handles, and closers.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Settings className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-secondary">Tapcon Replacement</h4>
                                        <p className="text-sm text-muted-foreground">Replacing rusted screws with Nylotech or stainless steel.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Lock className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-secondary">Hurricane Cables</h4>
                                        <p className="text-sm text-muted-foreground">Installing new tie-down cables for structural integrity during storms.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
