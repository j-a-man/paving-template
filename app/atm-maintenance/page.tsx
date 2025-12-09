"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, Clock, Settings } from "lucide-react"

export default function MaintenancePage() {
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
                        ATM Maintenance & Repair
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        Expert technicians to keep your ATM running 24/7.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-secondary">Minimize Downtime, Maximize Profits.</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                An ATM that is out of order is a liability. It frustrates customers and loses you revenue. At Five Star ATM, we prioritize uptime.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8">
                                Our certified technicians are trained to service all major ATM brands including Genmega, Hyosung, and Triton. Whether it's a card reader error, a dispenser jam, or a software update, we fix it fast.
                            </p>

                            <Link href="/contact">
                                <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                    Schedule Repair
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-gray-50 p-10 border border-gray-100">
                            <h3 className="text-xl font-bold mb-6 text-secondary border-b pb-4">Our Maintenance Services</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <Wrench className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-secondary">Hardware Repairs</h4>
                                        <p className="text-sm text-muted-foreground">Replacement of belts, gears, screens, and keypads.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Settings className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-secondary">Software Updates</h4>
                                        <p className="text-sm text-muted-foreground">Compliance upgrades, security patches, and screen graphics.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-secondary">Emergency Response</h4>
                                        <p className="text-sm text-muted-foreground">Urgent dispatch for high-traffic locations.</p>
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
