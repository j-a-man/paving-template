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
                        backgroundImage: "url(/pool-screen.jpg)",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left py-20`}>
                    <div className="max-w-3xl">
                        <div className="w-20 h-1 bg-primary mb-6"></div> {/* Decorative line */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                            About Victor Pool Screen Repair
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            Serving Sarasota, Bradenton, and Venice with quality craftsmanship and honest pricing.
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
                                Dedication to Detail.
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                                <p>
                                    Victor Pool Screen Repair started with a commitment to providing homeowners with a reliable, high-quality solution for their aging pool enclosures. We noticed that many screens in the area were deteriorating, letting in bugs and debris, and ruining the enjoyment of the outdoor lifestyle Florida is famous for.
                                </p>
                                <p>
                                    Owned and operated by Victor, we take personal pride in every job. We don't cut corners. We use Phifer screen mesh, stainless steel hardware, and we ensure every panel is tight and secure.
                                </p>
                                <p>
                                    We treat your home like our own. Our team shows up on time, works efficiently, and cleans up thoroughly when the job is done.
                                </p>
                            </div>

                            <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-primary">
                                <blockquote className="text-xl font-serif italic text-secondary mb-6">
                                    "A secure pool screen means a clean pool and a bug-free evening. That's peace of mind we're proud to provide."
                                </blockquote>
                                <cite className="text-sm font-bold uppercase tracking-widest text-secondary not-italic">
                                    - Victor, Owner
                                </cite>
                            </div>
                        </div>

                        {/* Image/Stats */}
                        <div className="relative">
                            <div className="relative h-[600px] w-full bg-secondary overflow-hidden shadow-2xl">
                                <Image
                                    src="/placeholder.svg?height=800&width=600&query=pool-cage-florida"
                                    alt="Pool Screen Repair"
                                    fill
                                    className="object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                            </div>

                            {/* Floating Stat Card */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-xs">
                                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-secondary">
                                    Cages Repaired
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
                            <h3 className="text-xl font-bold mb-4">Quality Materials</h3>
                            <p className="text-white/70 leading-relaxed">
                                We exclusively use Phifer insect screen and 18/14 mesh for durability and clarity.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Prompt Service</h3>
                            <p className="text-white/70 leading-relaxed">
                                We respect your time. We schedule appointments and stick to them.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Warranty</h3>
                            <p className="text-white/70 leading-relaxed">
                                We stand behind our work with a workmanship warranty on all rescreening projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/pool-screen.jpg)' }}>
                <div className="absolute inset-0 bg-secondary/80"></div>
                <div className={`${containerClass} relative z-10 text-center`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        Ready to Enjoy Your Patio Again?
                    </h2>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none">
                            Call Victor Today
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}