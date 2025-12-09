"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function ATMPlacementPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            {/* Hero */}
            <section className="relative h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0" style={{ backgroundImage: "url(/electric_image.jpg)" }}>
                    <div className="absolute inset-0 bg-secondary/70" />
                </div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <div className="w-20 h-1 bg-primary mb-6"></div>
                    <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold tracking-tight text-white drop-shadow-lg">
                        Free ATM Placement
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        We provide the machine, the cash, and the service. You provide the space and collect the commission.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
                                Turn Spare Floor Space into Revenue.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Our Free ATM Placement program is the hands-off solution for business owners who want the benefits of an ATM without the cost or headache of managing one.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Five Star ATM handles everything: purchasing the machine, installing it, loading it with cash, and processing transactions. You simply provide a power outlet and a small footprint of floor space.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="text-secondary font-medium">No Cost to You</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="text-secondary font-medium">We Load the Cash</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="text-secondary font-medium">24/7 Monitoring & Maintenance</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="text-secondary font-medium">Earn Direct Deposit Commissions</span>
                                </li>
                            </ul>

                            <Link href="/contact">
                                <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                    Get Started Today
                                </Button>
                            </Link>
                        </div>

                        <div className="relative h-[600px] w-full bg-gray-100 border-[10px] border-white shadow-2xl">
                            {/* Placeholder for actual ATM image */}
                            <Image
                                src="/placeholder.svg?height=800&width=600&query=atm-machine"
                                alt="Modern ATM Machine"
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
