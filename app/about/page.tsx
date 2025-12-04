"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    ShieldCheck,
    Clock,
    Award,
    FileCheck,
    ArrowRight
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
                        backgroundImage: "url(/paving.avif)",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left py-20`}>
                    <div className="max-w-3xl">
                        <div className="w-20 h-1 bg-primary mb-6"></div> {/* Decorative line */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white drop-shadow-lg font-normal">
                            About Nuclearnick Construction
                        </h1>
                        <p className="text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
                            Building trust, quality pavement, and lasting relationships in Indiana since 2010.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= OUR STORY SECTION ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-8 text-foreground">
                                A Legacy of <br />
                                <span className="text-primary">Excellence.</span>
                            </h2>

                            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                                <p>
                                    Hi, I'm Nicholas Ristic. I've been working in construction since I was 14 years old—that's nearly 14 years of hands-on experience. My expertise covers everything from plumbing, electrical, and drywall to flooring, carpentry, and roofing.
                                </p>
                                <p>
                                    I also specialize in landscaping and deck building—you name it, I can do it. After years of honing my craft, I've launched my own fully licensed business, Nuclearnick Construction, and I'm excited to bring my dedication and quality workmanship to your next project.
                                </p>
                                <p>
                                    I just got my business completely legit and I'm trying to get my name out there by providing the best possible service to my community.
                                </p>
                            </div>

                            <div className="mt-10">
                                <div className="font-serif text-xl italic text-foreground">
                                    - Nicholas Ristic, Founder
                                </div>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative h-[600px] w-full">
                            {/* Main Image */}
                            <div className="absolute inset-0 z-10 shadow-2xl border-12 border-white">
                                <Image
                                    src="/paving2.jpeg" // Using your uploaded image
                                    alt="Our Team Working"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Background Element */}
                            <div className="absolute -right-6 -bottom-6 w-full h-full border-2 border-primary z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CORE VALUES GRID ================= */}
            <section className="py-20 bg-secondary text-white">
                <div className={containerClass}>
                    <div className="text-left mb-16">
                        <h2 className="text-3xl md:text-4xl font-normal mb-4">Why Choose Us?</h2>
                        <p className="text-white/70 max-w-2xl font-light">
                            We don't just pave roads; we pave the way for a better customer experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Value 1 */}
                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <ShieldCheck className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-3">Licensed & Insured</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Fully credentialed for your peace of mind. We adhere to all local regulations and safety standards.
                            </p>
                        </Card>

                        {/* Value 2 */}
                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <Clock className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-3">14+ Years Exp.</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                A decade and a half of hands-on experience means we've seen it all and know how to solve it.
                            </p>
                        </Card>

                        {/* Value 3 */}
                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <Award className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-3">Quality Materials</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                We never cut corners. We use only industrial-grade asphalt and sealants for longevity.
                            </p>
                        </Card>

                        {/* Value 4 */}
                        <Card className="bg-white/5 border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors group">
                            <FileCheck className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-3">Free Estimates</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Transparent pricing with no hidden fees. Get a detailed quote before we start any work.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ================= REVIEW CTA ================= */}
            <section className="py-20 bg-white">
                <div className={containerClass} style={{ textAlign: 'center' }}>
                    <h2 className="text-3xl font-bold mb-6 text-secondary">Have You Worked With Us?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        We value your feedback. Let us know about your experience to help us serve you better.
                    </p>
                    <Link href="/review">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                            Leave a Review
                        </Button>
                    </Link>
                </div>
            </section>

            {/* ================= CTA BANNER ================= */}
            <section className="relative py-24 bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url(/placeholder.svg?height=400&width=1600&query=asphalt-paver-machine)' }}>
                <div className="absolute inset-0 bg-secondary/70"></div>
                <div className={`${containerClass} relative z-10 text-left`}>
                    <h2 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
                        READY TO TRANSFORM YOUR PROPERTY?
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                Get A Quote
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="text-white border-2 border-white bg-transparent hover:bg-white hover:text-secondary uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}