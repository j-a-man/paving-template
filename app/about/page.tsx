"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    Shield,
    Clock,
    CheckCircle2
} from "lucide-react"

export default function AboutPage() {
    // Consistent deep padding for that "editorial" look
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[500px] flex items-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                    style={{
                        backgroundImage: "url(/electric_image.jpg)",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left py-20`}>
                    <div className="max-w-3xl">
                        <div className="w-20 h-1 bg-primary mb-6"></div> {/* Decorative line */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                            About Five Star ATM
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            Serving Indiana and surrounding communities with reliable, full-service ATM solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= STORY SECTION ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Text Content */}
                        <div>
                            <div className="inline-block border-b-4 border-primary pb-2 mb-8">
                                <span className="text-sm font-bold uppercase tracking-widest text-secondary">Our Story</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-secondary leading-tight">
                                Built on Trust, Reliability, and Service.
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                                <p>
                                    Five Star ATM was founded with a simple mission: to provide businesses with hassle-free ATM solutions that drive revenue and customer satisfaction. We understand that cash access is critical for many businesses, and we make it our job to ensure your customers always have access to their funds.
                                </p>
                                <p>
                                    Under the leadership of owner Phil, we have grown into a trusted partner for businesses across Indiana. We pride ourselves on our responsiveness—when you call, we answer. We don't just place machines; we build partnerships.
                                </p>
                                <p>
                                    Whether you need a single ATM for your convenience store or mobile ATMs for a large festival, Five Star ATM has the expertise and equipment to deliver.
                                </p>
                            </div>

                            <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-primary">
                                <blockquote className="text-xl font-serif italic text-secondary mb-6">
                                    "Our goal is to make ATM ownership completely hands-off for our clients. We handle the cash, the maintenance, and the paper—you just cash the checks."
                                </blockquote>
                                <cite className="text-sm font-bold uppercase tracking-widest text-secondary not-italic">
                                    - Phil, Owner
                                </cite>
                            </div>
                        </div>

                        {/* Image/Stats */}
                        <div className="relative">
                            <div className="relative h-[600px] w-full bg-secondary overflow-hidden shadow-2xl">
                                <Image
                                    src="/electric_image.jpg" // Using existing image for now
                                    alt="ATM Service"
                                    fill
                                    className="object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                            </div>

                            {/* Floating Stat Card */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-xs">
                                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-secondary">
                                    Locations Served
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VALUES SECTION ================= */}
            <section className="py-20 bg-secondary text-white">
                <div className={containerClass}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Us?</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Reliability</h3>
                            <p className="text-white/70 leading-relaxed">
                                Our machines are monitored 24/7. We know before you do if there's an issue, and we fix it fast.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Fast Service</h3>
                            <p className="text-white/70 leading-relaxed">
                                We pride ourselves on our quick response times for refills and maintenance.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Transparency</h3>
                            <p className="text-white/70 leading-relaxed">
                                Clear contracts, no hidden fees, and transparent reporting on your ATM's performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/electric_image.jpg)' }}>
                <div className="absolute inset-0 bg-secondary/80"></div>
                <div className={`${containerClass} relative z-10 text-center`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        Partner with Indiana's Trusted ATM Provider
                    </h2>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none">
                            Contact Phil Today
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}