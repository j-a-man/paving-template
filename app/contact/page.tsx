"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    // Unified style for all input fields to ensure consistency
    const inputStyles = "rounded-none border-gray-200 bg-gray-50/50 px-4 py-6 text-base shadow-sm transition-all duration-300 placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-primary/20"

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[400px] flex items-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                    style={{
                        backgroundImage: "url(/paving.avif)",
                    }}
                >
                    <div className="absolute inset-0 bg-secondary/60" />
                </div>

                <div className={`${containerClass} relative z-10 text-left`}>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight text-white drop-shadow-lg font-normal">
                        Contact Us
                    </h1>
                    <p className="text-lg text-white/90 max-w-xl font-light">
                        Get in touch for a free, detailed estimate or consultation.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT FORM & INFO ================= */}
            <section className="py-20 md:py-32 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 shadow-2xl">

                        {/* LEFT: Contact Form */}
                        <div className="p-10 md:p-14 bg-white">
                            <h2 className="text-3xl font-bold mb-2 text-secondary">Send Us A Message</h2>
                            <p className="text-muted-foreground mb-10 text-sm">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className={inputStyles}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className={inputStyles}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        className={inputStyles}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Service Needed</label>
                                    <Select>
                                        <SelectTrigger className={inputStyles}>
                                            <SelectValue placeholder="Select a Service" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-none border-gray-200">
                                            <SelectItem value="driveway">Residential Driveway</SelectItem>
                                            <SelectItem value="commercial">Commercial Paving</SelectItem>
                                            <SelectItem value="sealcoating">Sealcoating</SelectItem>
                                            <SelectItem value="repair">Driveway Repair</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project..."
                                        className={`${inputStyles} min-h-[150px] resize-none pt-4`}
                                    />
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold px-10 py-7 rounded-none shadow-md hover:shadow-lg transition-all mt-4">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* RIGHT: Contact Info Panel */}
                        <div className="bg-secondary text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                            {/* Background Pattern/Texture */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                            <div>
                                <h3 className="text-2xl font-serif font-normal mb-10 border-b border-white/10 pb-6">Contact Information</h3>
                                <div className="space-y-10">
                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase tracking-wider mb-2 text-xs text-white/50">Address</h4>
                                            <p className="text-white font-light text-lg leading-relaxed">
                                                Indiana
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase tracking-wider mb-2 text-xs text-white/50">Phone</h4>
                                            <p className="text-white font-light text-lg leading-relaxed">
                                                (219) 358-8794
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase tracking-wider mb-2 text-xs text-white/50">Email</h4>
                                            <p className="text-white font-light text-lg leading-relaxed">
                                                risticnicholas@yahoo.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                            <Clock className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase tracking-wider mb-2 text-xs text-white/50">Business Hours</h4>
                                            <div className="text-white font-light text-sm leading-relaxed space-y-2">
                                                <div className="flex justify-between w-56 border-b border-white/10 pb-1">
                                                    <span>Mon - Sat:</span>
                                                    <span>24 Hours</span>
                                                </div>
                                                <div className="flex justify-between w-56 text-white/50 pt-1">
                                                    <span>Sunday:</span>
                                                    <span>Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom CTA in Panel */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-white/60 text-sm mb-4">
                                    Need immediate assistance? Call our emergency line 24/7.
                                </p>
                                <a href="tel:+12193588794" className="text-xl font-bold text-white hover:text-primary transition-colors flex items-center gap-2">
                                    Call Now <span className="text-primary text-2xl">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= REVIEW CTA ================= */}
            <section className="py-16 bg-secondary/5 border-t border-secondary/10">
                <div className={`${containerClass} text-center`}>
                    <h2 className="text-2xl font-bold mb-4 text-secondary">Already a Customer?</h2>
                    <p className="text-muted-foreground mb-6">
                        We'd love to hear about your experience with Nuclearnick Construction.
                    </p>
                    <Link href="/review">
                        <Button variant="outline" className="bg-white border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest font-bold px-8 py-6 rounded-none">
                            Leave a Review
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}