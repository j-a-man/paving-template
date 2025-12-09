"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
    const containerClass = "container mx-auto px-6 md:px-24 lg:px-40"

    return (
        <main className="min-h-screen bg-background font-sans text-foreground">
            <Header />

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[400px] flex items-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                    style={{
                        backgroundImage: "url(/pool-screen.jpg)",
                    }}
                >
                    <div className="absolute inset-0 bg-secondary/80" />
                </div>

                <div className={`${containerClass} relative z-10 text-center`}>
                    <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold tracking-tight text-white drop-shadow-lg">
                        Get A Free Quote
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        Call us or fill out the form below. We'll get back to you with a competitive estimate.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT CONTENT ================= */}
            <section className="py-20 bg-white">
                <div className={containerClass}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT: Contact Info */}
                        <div>
                            <div className="inline-block border-b-4 border-primary pb-2 mb-8">
                                <span className="text-sm font-bold uppercase tracking-widest text-secondary">Contact Information</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-secondary leading-tight">
                                We're Here to Help.
                            </h2>
                            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                                Don't let a torn screen or broken door ruin your day. Reach out to Victor Pool Screen Repair for prompt, professional service in Sarasota and surrounding areas.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-1">Phone Number</h3>
                                        <p className="text-muted-foreground mb-1">Call or Text anytime</p>
                                        <a href="tel:9415652667" className="text-xl font-bold text-primary hover:underline">(941) 565-2667</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-1">Service Area</h3>
                                        <p className="text-muted-foreground">Sarasota, Bradenton, Venice, Osprey, Nokomis, North Port</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-1">Business Hours</h3>
                                        <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 6:00 PM</p>
                                        <p className="text-muted-foreground">Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Form */}
                        <div className="bg-gray-50 p-10 border border-gray-100 shadow-lg">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-secondary">Send Us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                                        <Input id="firstName" placeholder="John" className="bg-white border-gray-200" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                                        <Input id="lastName" placeholder="Doe" className="bg-white border-gray-200" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white border-gray-200" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                                    <Input id="phone" type="tel" placeholder="(555) 123-4567" className="bg-white border-gray-200" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Service Needed</label>
                                    <select id="service" className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="">Select a service...</option>
                                        <option value="rescreening">Full Rescreening</option>
                                        <option value="repair">Panel Repair</option>
                                        <option value="hardware">Hardware/Doors</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                    <Textarea id="message" placeholder="Tell us about your project..." className="bg-white border-gray-200 min-h-[120px]" />
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold py-6 rounded-none">
                                    Submit Request
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}